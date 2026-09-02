/**
 * 題庫管理（支援 junior / gsat / ast）
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

  function getBank(level, subject) {
    if (window.QuestionBanks[level]?.[subject]) {
      return window.QuestionBanks[level][subject];
    }
    if (level === 'junior' && window.QuestionBanks[subject]) {
      return window.QuestionBanks[subject];
    }
    return [];
  }

  function getBankStats(level) {
    const levelInfo = ExamConfig.getLevel(level);
    const stats = { total: 0, subjects: {} };
    ExamConfig.getSubjectIds(level).forEach(s => {
      const count = countUnits(getBank(level, s));
      stats.subjects[s] = { count, name: levelInfo.subjects[s].name };
      stats.total += count;
    });
    return stats;
  }

  function loadAllBanks(level) {
    return Promise.all(
      ExamConfig.getSubjectIds(level).map(s => loadScript(ExamConfig.bankScriptPath(level, s)))
    );
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

  function initForExam(level, subject) {
    return loadScript(ExamConfig.bankScriptPath(level, subject));
  }

  return { setBase, countUnits, getBank, getBankStats, loadAllBanks, initForExam };
})();

window.BankManager = BankManager;
