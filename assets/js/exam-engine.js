/**
 * 會考模擬考 - 隨機抽題引擎
 */
const ExamEngine = (() => {
  const SUBJECTS = {
    chinese: { name: '國文科', color: '#c0392b', choiceCount: 30, time: 70, nonChoiceCount: 0 },
    english: { name: '英語科', color: '#27ae60', choiceCount: 30, time: 60, nonChoiceCount: 0 },
    math: { name: '數學科', color: '#2980b9', choiceCount: 20, time: 80, nonChoiceCount: 2 },
    science: { name: '自然科', color: '#8e44ad', choiceCount: 30, time: 70, nonChoiceCount: 0 },
    social: { name: '社會科', color: '#d35400', choiceCount: 30, time: 70, nonChoiceCount: 0 }
  };

  const STORAGE_PREFIX = 'cap_exam_';

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
        result.push({
          ...unit,
          unitId: unitIdx,
          isNonChoice: true
        });
      } else {
        result.push({
          ...unit,
          unitId: unitIdx,
          isNonChoice: false
        });
      }
    });
    return result;
  }

  function countQuestions(units) {
    let n = 0;
    units.forEach(u => {
      if (u.type === 'group') n += u.questions.length;
      else n += 1;
    });
    return n;
  }

  function generateExam(subject) {
    const config = SUBJECTS[subject];
    const bank = window.QuestionBanks?.[subject];
    if (!config || !bank || bank.length === 0) return null;

    const choiceUnits = bank.filter(u => u.type !== 'non-choice');
    const nonChoiceUnits = bank.filter(u => u.type === 'non-choice');

    const shuffled = shuffle(choiceUnits);
    const selectedUnits = [];
    let questionCount = 0;

    for (const unit of shuffled) {
      if (questionCount >= config.choiceCount) break;
      const size = unit.type === 'group' ? unit.questions.length : 1;
      if (questionCount + size <= config.choiceCount) {
        selectedUnits.push(unit);
        questionCount += size;
      }
    }

    if (questionCount < config.choiceCount) {
      for (const unit of shuffled) {
        if (selectedUnits.includes(unit)) continue;
        if (questionCount >= config.choiceCount) break;
        if (unit.type === 'single') {
          selectedUnits.push(unit);
          questionCount += 1;
        }
      }
    }

    let selectedNonChoice = [];
    if (config.nonChoiceCount > 0 && nonChoiceUnits.length > 0) {
      selectedNonChoice = shuffle(nonChoiceUnits).slice(0, config.nonChoiceCount);
    }

    const choiceQuestions = flattenUnits(selectedUnits).slice(0, config.choiceCount);
    const nonChoiceQuestions = flattenUnits(selectedNonChoice);
    const questions = [...choiceQuestions, ...nonChoiceQuestions];

    const exam = {
      subject,
      generatedAt: new Date().toISOString(),
      examId: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      questions: questions.map((q, i) => ({ ...q, number: i + 1 }))
    };

    sessionStorage.setItem(STORAGE_PREFIX + subject, JSON.stringify(exam));
    return exam;
  }

  function getExam(subject) {
    const raw = sessionStorage.getItem(STORAGE_PREFIX + subject);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
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
    const config = SUBJECTS[exam.subject];
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
    document.title = `會考模擬試題｜${config.name}`;
    bindExamInteractions(exam, container);
  }

  function bindExamInteractions(exam, container) {
    const labels = ['A', 'B', 'C', 'D'];
    const scoreBar = container.querySelector('#exam-score-bar');
    const answeredEl = scoreBar?.querySelector('#score-answered');
    const correctEl = scoreBar?.querySelector('#score-correct');
    const wrongEl = scoreBar?.querySelector('#score-wrong');

    let answered = 0;
    let correct = 0;
    let wrong = 0;

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
            <p class="feedback-correct-answer">正確答案：(${labels[q.answer]}) ${q.options[q.answer]}</p>
            ${q.explanation ? `<p class="feedback-explanation">${q.explanation}</p>` : ''}`;
        }
        updateScore();
      }

      options.forEach(optionEl => {
        optionEl.addEventListener('click', () => handleSelect(optionEl));
        optionEl.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleSelect(optionEl);
          }
        });
      });
    });
  }

  function renderAnswers(exam, container) {
    const labels = ['A', 'B', 'C', 'D'];
    let summaryRows = '';
    const choiceQs = exam.questions.filter(q => !q.isNonChoice);

    for (let i = 0; i < choiceQs.length; i += 10) {
      const chunk = choiceQs.slice(i, i + 10);
      summaryRows += '<tr><th>題號</th>';
      chunk.forEach(q => { summaryRows += `<td>${q.number}</td>`; });
      summaryRows += '</tr><tr><th>答案</th>';
      chunk.forEach(q => { summaryRows += `<td>${labels[q.answer]}</td>`; });
      summaryRows += '</tr>';
    }

    let detailHtml = '';
    exam.questions.forEach(q => {
      if (q.isNonChoice) {
        detailHtml += `<div class="question">
          <div class="question-number">${q.number}.</div>
          <p class="correct-answer">參考解答：</p>
          <div class="explanation">${q.answerText || q.explanation}</div>
        </div>`;
      } else {
        detailHtml += `<div class="question">
          <div class="question-number">${q.number}.</div>
          <p class="correct-answer">答案：(${labels[q.answer]}) ${q.options[q.answer]}</p>
          <div class="explanation">${q.explanation || ''}</div>
        </div>`;
      }
    });

    container.innerHTML = `
      <div class="answer-summary">
        <h3>答案速查表</h3>
        <p class="exam-session-info">測驗編號：${exam.examId}｜產生時間：${new Date(exam.generatedAt).toLocaleString('zh-TW')}</p>
        <table>${summaryRows}</table>
      </div>
      <h2 class="section-title">詳細解析</h2>
      ${detailHtml}
    `;
  }

  return { SUBJECTS, generateExam, getExam, renderExam, renderAnswers, shuffle };
})();

window.ExamEngine = ExamEngine;
