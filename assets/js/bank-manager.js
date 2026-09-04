/**
 * 題庫管理（支援 junior / gsat / ast × easy / normal / hard）
 */
const BankManager = (() => {
  window.QuestionBanks = window.QuestionBanks || {};
  let scriptBase = '';

  function setBase(base) {
    scriptBase = base || '';
  }

  function countUnits(units) {
    let n = 0;
    (units || []).forEach(u => { n += u.type === 'group' ? u.questions.length : 1; });
    return n;
  }

  function getBank(level, subject, difficulty) {
    const d = ExamConfig.normalizeDifficulty(difficulty);
    const nested = window.QuestionBanks[level]?.[subject];
    if (nested && !Array.isArray(nested) && Array.isArray(nested[d])) {
      return nested[d];
    }
    if (Array.isArray(nested)) return nested;
    if (level === 'junior' && Array.isArray(window.QuestionBanks[subject])) {
      return window.QuestionBanks[subject];
    }
    return [];
  }

  function getBankStats(level, difficulty) {
    const levelInfo = ExamConfig.getLevel(level);
    const stats = { total: 0, subjects: {}, byDifficulty: {} };

    ExamConfig.getDifficultyIds().forEach(d => {
      stats.byDifficulty[d] = { total: 0, subjects: {} };
    });

    ExamConfig.getSubjectIds(level).forEach(s => {
      const perDiff = {};
      let subjectTotal = 0;
      ExamConfig.getDifficultyIds().forEach(d => {
        const count = countUnits(getBank(level, s, d));
        perDiff[d] = count;
        subjectTotal += count;
        stats.byDifficulty[d].subjects[s] = count;
        stats.byDifficulty[d].total += count;
      });
      const focus = difficulty ? ExamConfig.normalizeDifficulty(difficulty) : null;
      const count = focus ? perDiff[focus] : subjectTotal;
      stats.subjects[s] = {
        count,
        perDiff,
        name: levelInfo.subjects[s].name
      };
      stats.total += count;
    });
    return stats;
  }

  function loadScript(src) {
    const url = src.startsWith('http') || src.startsWith('/') ? src : `${scriptBase}${src}`;
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${url}"]`)) { resolve(); return; }
      const s = document.createElement('script');
      s.src = url;
      s.onload = resolve;
      s.onerror = () => reject(new Error(`無法載入 ${url}`));
      document.body.appendChild(s);
    });
  }

  function loadAllBanks(level) {
    const tasks = [];
    ExamConfig.getSubjectIds(level).forEach(s => {
      ExamConfig.getDifficultyIds().forEach(d => {
        tasks.push(loadScript(ExamConfig.bankScriptPath(level, s, d)));
      });
    });
    return Promise.all(tasks);
  }

  function initForExam(level, subject, difficulty) {
    return loadScript(ExamConfig.bankScriptPath(level, subject, difficulty));
  }

  return { setBase, countUnits, getBank, getBankStats, loadAllBanks, initForExam };
})();

window.BankManager = BankManager;
