/**
 * 重構 exam-engine 支援 junior / gsat / ast
 */
const ExamEngine = (() => {
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function flattenUnits(units) {
    const result = [];
    units.forEach((unit, unitIdx) => {
      if (unit.type === 'group') {
        unit.questions.forEach((q, qIdx) => {
          result.push({
            ...q,
            unitId: unitIdx,
            passage: qIdx === 0 ? unit.passage : null,
            section: unit.section || q.section,
            isNonChoice: false
          });
        });
      } else if (unit.type === 'non-choice') {
        result.push({ ...unit, unitId: unitIdx, isNonChoice: true });
      } else {
        result.push({ ...unit, unitId: unitIdx, isNonChoice: false });
      }
    });
    return result;
  }

  function questionKey(q) {
    return (q.text || '')
      .replace(/\s*（#[^）]+）/g, '')
      .replace(/\s*\(Q\d+-\d+\)/g, '')
      .replace(/\s*\[題號 \d+\]/g, '')
      .replace(/\s*（\d+）\s*$/g, '')
      .trim();
  }

  function unitQuestionKeys(unit) {
    if (unit.type === 'group') return unit.questions.map(questionKey);
    return [questionKey(unit)];
  }

  function hasDuplicateKeys(unit, seen) {
    return unitQuestionKeys(unit).some(k => !k || seen.has(k));
  }

  function markUnitKeys(unit, seen) {
    unitQuestionKeys(unit).forEach(k => { if (k) seen.add(k); });
  }

  function unitSize(unit) {
    return unit.type === 'group' ? unit.questions.length : 1;
  }

  function selectUniqueUnits(units, targetCount) {
    const shuffled = shuffle(units);
    const selected = [];
    const seen = new Set();
    let count = 0;

    for (const unit of shuffled) {
      if (count >= targetCount) break;
      if (hasDuplicateKeys(unit, seen)) continue;
      const size = unitSize(unit);
      if (unit.type === 'group' && count + size > targetCount) continue;
      if (count + size <= targetCount) {
        markUnitKeys(unit, seen);
        selected.push(unit);
        count += size;
      }
    }

    if (count < targetCount) {
      for (const unit of shuffled) {
        if (count >= targetCount) break;
        if (selected.includes(unit) || hasDuplicateKeys(unit, seen)) continue;
        if (unit.type === 'single') {
          markUnitKeys(unit, seen);
          selected.push(unit);
          count += 1;
        }
      }
    }

    return { selected, count };
  }

  function isUsableUnit(unit) {
    if (unit.type === 'group') {
      return Array.isArray(unit.questions) && unit.questions.every(q =>
        (q.text || '').trim().length >= 8 &&
        Array.isArray(q.options) && q.options.length >= 2 &&
        !/補充題/.test(q.text || '')
      );
    }
    const text = (unit.text || '').trim();
    if (text.length < 8 || /補充題/.test(text)) return false;
    if (unit.type === 'non-choice') return true;
    return Array.isArray(unit.options) && unit.options.length >= 2 &&
      !unit.options.every(o => /^[A-D]$/.test(String(o).trim()));
  }

  function generateExam(level, subject, difficulty) {
    const config = ExamConfig.getSubject(level, subject);
    const diff = ExamConfig.normalizeDifficulty(difficulty);
    const bank = BankManager.getBank(level, subject, diff).filter(isUsableUnit);
    if (!config || !bank || bank.length === 0) return null;

    const choiceUnits = bank.filter(u => u.type !== 'non-choice');
    const nonChoiceUnits = bank.filter(u => u.type === 'non-choice');
    const { selected: selectedUnits } = selectUniqueUnits(choiceUnits, config.choiceCount);

    let selectedNonChoice = [];
    if (config.nonChoiceCount > 0 && nonChoiceUnits.length > 0) {
      const seen = new Set();
      selectedUnits.forEach(u => markUnitKeys(u, seen));
      const shuffledNc = shuffle(nonChoiceUnits);
      for (const unit of shuffledNc) {
        if (selectedNonChoice.length >= config.nonChoiceCount) break;
        if (hasDuplicateKeys(unit, seen)) continue;
        markUnitKeys(unit, seen);
        selectedNonChoice.push(unit);
      }
    }

    const questions = [
      ...flattenUnits(selectedUnits).slice(0, config.choiceCount),
      ...flattenUnits(selectedNonChoice)
    ];

    const exam = {
      level, subject, difficulty: diff,
      generatedAt: new Date().toISOString(),
      examId: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      questions: questions.map((q, i) => ({ ...q, number: i + 1 }))
    };

    sessionStorage.setItem(ExamConfig.storageKey(level, subject, diff), JSON.stringify(exam));
    return exam;
  }

  function getExam(level, subject, difficulty) {
    const raw = sessionStorage.getItem(ExamConfig.storageKey(level, subject, difficulty));
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }

  function formatChoiceAnswer(q, labels = ['A', 'B', 'C', 'D']) {
    const idx = q.answer;
    if (idx == null || idx < 0 || !q.options?.[idx]) {
      return q.explanation ? `請參考解析：${q.explanation}` : '（答案資料異常，請重新抽題）';
    }
    return `(${labels[idx]}) ${q.options[idx]}`;
  }

  function renderOptions(options, labels = ['A', 'B', 'C', 'D']) {
    return `<ul class="options">${options.map((opt, i) =>
      `<li class="option-item" data-index="${i}" role="button" tabindex="0" aria-label="選項 ${labels[i]}">
        <span class="option-label">(${labels[i]})</span> ${opt}
      </li>`
    ).join('')}</ul>
    <div class="answer-feedback" aria-live="polite"></div>`;
  }

  function renderExam(exam, container) {
    const config = ExamConfig.getSubject(exam.level, exam.subject);
    const levelInfo = ExamConfig.getLevel(exam.level);
    let html = '';
    let lastSection = '';
    let lastPassage = '';
    const choiceCount = exam.questions.filter(q => !q.isNonChoice).length;

    html += `<div class="exam-score-bar no-print" id="exam-score-bar">
      <span>選擇題作答：<strong id="score-answered">0</strong> / ${choiceCount}</span>
      <span>答對：<strong id="score-correct" class="score-correct">0</strong></span>
      <span>答錯：<strong id="score-wrong" class="score-wrong">0</strong></span>
    </div>`;

    exam.questions.forEach(q => {
      if (q.section && q.section !== lastSection) {
        lastSection = q.section;
        html += `<h2 class="section-title">${q.section}</h2>`;
      }
      if (q.passage && q.passage !== lastPassage) {
        lastPassage = q.passage;
        html += `<div class="passage">${q.passage}</div>`;
      }

      if (q.isNonChoice) {
        html += `<div class="non-choice">
          <div class="question-number">${q.number}.</div>
          <div class="question-text">${q.text}</div>
          ${q.diagram ? `<div class="diagram">${q.diagram}</div>` : ''}
          <div class="answer-space"></div>
        </div>`;
      } else {
        html += `<div class="question choice-question" data-q-num="${q.number}" data-answer="${q.answer}">
          <div class="question-number">${q.number}.</div>
          <div class="question-text">${q.text}</div>
          ${q.table ? q.table : ''}
          ${q.diagram ? `<div class="diagram">${q.diagram}</div>` : ''}
          ${renderOptions(q.options)}
        </div>`;
      }
    });

    container.innerHTML = html;
    document.title = `${levelInfo.shortName}模擬試題｜${config.name}`;
    bindExamInteractions(exam, container);
  }

  function bindExamInteractions(exam, container) {
    const labels = ['A', 'B', 'C', 'D'];
    const answeredEl = container.querySelector('#score-answered');
    const correctEl = container.querySelector('#score-correct');
    const wrongEl = container.querySelector('#score-wrong');
    let answered = 0, correct = 0, wrong = 0;

    function updateScore() {
      if (answeredEl) answeredEl.textContent = answered;
      if (correctEl) correctEl.textContent = correct;
      if (wrongEl) wrongEl.textContent = wrong;
    }

    container.querySelectorAll('.choice-question').forEach(questionEl => {
      const qNum = parseInt(questionEl.dataset.qNum, 10);
      const q = exam.questions.find(item => item.number === qNum);
      if (!q || q.isNonChoice) return;

      const feedbackEl = questionEl.querySelector('.answer-feedback');
      const options = questionEl.querySelectorAll('.option-item');

      function handleSelect(optionEl) {
        if (questionEl.classList.contains('answered')) return;
        const selected = parseInt(optionEl.dataset.index, 10);
        const isCorrect = selected === q.answer;
        questionEl.classList.add('answered');
        optionEl.classList.add('selected');
        answered += 1;
        if (isCorrect) {
          correct += 1;
          questionEl.classList.add('result-correct');
          optionEl.classList.add('correct');
          feedbackEl.className = 'answer-feedback feedback-correct';
          feedbackEl.innerHTML = `<strong>✓ 答對了！</strong>${q.explanation ? `<p class="feedback-explanation">${q.explanation}</p>` : ''}`;
        } else {
          wrong += 1;
          questionEl.classList.add('result-wrong');
          optionEl.classList.add('wrong');
          options[q.answer]?.classList.add('correct');
          feedbackEl.className = 'answer-feedback feedback-wrong';
          feedbackEl.innerHTML = `<strong>✗ 答錯了</strong>
            <p class="feedback-correct-answer">正確答案：${formatChoiceAnswer(q, labels)}</p>
            ${q.explanation ? `<p class="feedback-explanation">${q.explanation}</p>` : ''}`;
        }
        updateScore();
      }

      options.forEach(optionEl => {
        optionEl.addEventListener('click', () => handleSelect(optionEl));
        optionEl.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSelect(optionEl); }
        });
      });
    });
  }

  function renderAnswers(exam, container) {
    const config = ExamConfig.getSubject(exam.level, exam.subject);
    const labels = ['A', 'B', 'C', 'D'];
    let summaryRows = '';
    const choiceQs = exam.questions.filter(q => !q.isNonChoice);

    for (let i = 0; i < choiceQs.length; i += 10) {
      const chunk = choiceQs.slice(i, i + 10);
      summaryRows += '<tr><th>題號</th>';
      chunk.forEach(q => { summaryRows += `<td>${q.number}</td>`; });
      summaryRows += '</tr><tr><th>答案</th>';
      chunk.forEach(q => {
        const idx = q.answer;
        summaryRows += `<td>${idx != null && idx >= 0 && labels[idx] ? labels[idx] : '—'}</td>`;
      });
      summaryRows += '</tr>';
    }

    let detailHtml = '';
    exam.questions.forEach(q => {
      if (q.isNonChoice) {
        detailHtml += `<div class="question"><div class="question-number">${q.number}.</div>
          <p class="correct-answer">參考解答：</p>
          <div class="explanation">${q.answerText || q.explanation}</div></div>`;
      } else {
        detailHtml += `<div class="question"><div class="question-number">${q.number}.</div>
          <p class="correct-answer">答案：${formatChoiceAnswer(q, labels)}</p>
          <div class="explanation">${q.explanation || ''}</div></div>`;
      }
    });

    container.innerHTML = `
      <div class="answer-summary">
        <h3>${config.name}｜答案速查表</h3>
        <p class="exam-session-info">測驗編號：${exam.examId}｜產生時間：${new Date(exam.generatedAt).toLocaleString('zh-TW')}</p>
        <table>${summaryRows}</table>
      </div>
      <h2 class="section-title">詳細解析</h2>${detailHtml}`;
  }

  return { generateExam, getExam, renderExam, renderAnswers, shuffle };
})();

window.ExamEngine = ExamEngine;
