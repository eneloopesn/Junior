/**
 * 各級別科目首頁共用邏輯（含難度選擇）
 */
(async function () {
  const body = document.body;
  const level = body.dataset.level;
  const base = body.dataset.base || '';
  const levelInfo = ExamConfig.getLevel(level);
  if (!levelInfo) return;

  BankManager.setBase(base);

  const statusText = document.getElementById('bank-status-text');
  const statsList = document.getElementById('bank-stats-list');
  const updateInfo = document.getElementById('bank-update-info');
  const grid = document.getElementById('subject-grid');

  const SUBJECT_DESC = {
    junior: {
      chinese: '字音字形、成語修辭、文言文、白話文',
      english: '字彙文法、克漏字、閱讀理解',
      math: '代數、幾何、統計、生活應用',
      science: '物理、化學、生物、地球科學',
      social: '歷史、地理、公民、圖表判讀'
    },
    gsat: {
      chinese: '國語文綜合、閱讀、寫作素養',
      english: '字彙、文法、閱讀、翻譯',
      mathA: '指數對數、數列、三角、排列組合',
      mathB: '數列、統計、機率、一次函數',
      science: '物理、化學、生物、地科',
      social: '歷史、地理、公民'
    },
    ast: {
      mathA: '微積分、三角、向量、機率',
      mathB: '統計、排列組合、機率',
      physics: '力學、電磁、波動',
      chemistry: '物質、反應、有機',
      biology: '細胞、遺傳、生態',
      history: '臺灣史、世界史',
      geography: '自然、人文地理',
      civics: '公民、法律、經濟'
    }
  };

  const CARD_CLASS = {
    chinese: 'chinese', english: 'english', math: 'math', mathA: 'math', mathB: 'math',
    science: 'science', social: 'social', physics: 'science', chemistry: 'science',
    biology: 'science', history: 'social', geography: 'social', civics: 'social'
  };

  async function loadMeta() {
    try {
      const res = await fetch(`${base}assets/data/bank-meta.json?${Date.now()}`);
      return res.ok ? await res.json() : null;
    } catch { return null; }
  }

  function difficultyButtons(subject) {
    return ExamConfig.getDifficultyIds().map(d => {
      const info = ExamConfig.getDifficulty(d);
      return `<a href="${base}exam.html?level=${level}&subject=${subject}&difficulty=${d}" class="btn btn-diff btn-diff-${d}">${info.name}</a>`;
    }).join('');
  }

  function answerButtons(subject) {
    return ExamConfig.getDifficultyIds().map(d => {
      const info = ExamConfig.getDifficulty(d);
      return `<a href="${base}answers.html?level=${level}&subject=${subject}&difficulty=${d}" class="btn btn-outline btn-diff-sm">${info.name}解答</a>`;
    }).join('');
  }

  function renderGrid(stats) {
    grid.innerHTML = ExamConfig.getSubjectIds(level).map(s => {
      const sub = levelInfo.subjects[s];
      const per = stats.subjects[s]?.perDiff || {};
      const cardClass = CARD_CLASS[s] || 'math';
      const meta = sub.nonChoiceCount > 0
        ? `每次抽 ${sub.choiceCount} 選擇 + ${sub.nonChoiceCount} 非選擇｜${sub.time} 分鐘`
        : `每次抽 ${sub.choiceCount} 題｜${sub.time} 分鐘`;
      const counts = ExamConfig.getDifficultyIds().map(d => {
        const name = ExamConfig.getDifficulty(d).name;
        return `${name} ${per[d] || 0}`;
      }).join('｜');
      return `
        <div class="subject-card ${cardClass}">
          <h3>${sub.name}</h3>
          <p class="meta">${counts}<br>${meta}</p>
          <p>${SUBJECT_DESC[level]?.[s] || ''}</p>
          <p class="diff-label">選擇難度開始測驗</p>
          <div class="btn-group btn-group-diff">${difficultyButtons(s)}</div>
          <div class="btn-group btn-group-answers">${answerButtons(s)}</div>
        </div>`;
    }).join('');
  }

  function updateStats(stats, meta) {
    const subjectN = ExamConfig.getSubjectIds(level).length;
    statusText.innerHTML =
      `${levelInfo.name}：共 <strong>${subjectN}</strong> 科 × 三難度，每難度 <strong>200</strong> 題` +
      `（合計 <strong>${stats.total}</strong> 題）`;

    statsList.innerHTML = ExamConfig.getSubjectIds(level).map(s => {
      const per = stats.subjects[s]?.perDiff || {};
      const parts = ExamConfig.getDifficultyIds()
        .map(d => `${ExamConfig.getDifficulty(d).name} ${per[d] || 0}`)
        .join('／');
      return `<li><strong>${levelInfo.subjects[s].name}</strong>：${parts}</li>`;
    }).join('');

    const levelMeta = meta?.levels?.[level];
    if (levelMeta?.lastUpdatedLocal) {
      updateInfo.innerHTML = `🔄 版本 <strong>${levelMeta.version}</strong>｜上次更新：<strong>${levelMeta.lastUpdatedLocal}</strong>｜下次：<strong>${levelMeta.nextUpdate}</strong>`;
    } else if (meta?.lastUpdatedLocal) {
      updateInfo.innerHTML = `🔄 上次更新：<strong>${meta.lastUpdatedLocal}</strong>`;
    } else {
      updateInfo.textContent = '💡 可執行 update-monthly.bat 更新題庫';
    }
  }

  try {
    const meta = await loadMeta();
    await BankManager.loadAllBanks(level);
    const stats = BankManager.getBankStats(level);
    renderGrid(stats);
    updateStats(stats, meta);
  } catch (err) {
    console.error(err);
    statusText.textContent = '題庫載入失敗';
  }
})();
