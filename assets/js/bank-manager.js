/**
 * 題庫管理
 */
const BankManager = (() => {
  const SUBJECTS = ['chinese', 'english', 'math', 'science', 'social'];
  const SUBJECT_NAMES = {
    chinese: '國文', english: '英文', math: '數學', science: '自然', social: '社會'
  };

  function countUnits(units) {
    let n = 0;
    (units || []).forEach(u => {
      if (u.type === 'group') n += u.questions.length;
      else n += 1;
    });
    return n;
  }

  function getBank(subject) {
    return window.QuestionBanks?.[subject] || [];
  }

  function getBankStats() {
    const stats = { total: 0, subjects: {} };
    SUBJECTS.forEach(s => {
      const count = countUnits(window.QuestionBanks?.[s]);
      stats.subjects[s] = { count, name: SUBJECT_NAMES[s] };
      stats.total += count;
    });
    return stats;
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error(`無法載入 ${src}`));
      document.body.appendChild(s);
    });
  }

  function loadAllBanks() {
    return Promise.all(SUBJECTS.map(s => loadScript(`assets/js/banks/${s}.js`)));
  }

  function initForExam(subject) {
    return loadScript(`assets/js/banks/${subject}.js`);
  }

  return {
    SUBJECTS, SUBJECT_NAMES, getBank, getBankStats, loadAllBanks, initForExam, countUnits
  };
})();

window.BankManager = BankManager;
