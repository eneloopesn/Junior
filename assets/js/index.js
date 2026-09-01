/**
 * 首頁：顯示各科題庫數量
 */
(async function () {
  const EXAM_META = {
    chinese: '每次抽 30 題｜70 分鐘',
    english: '每次抽 30 題｜60 分鐘',
    math: '每次抽 20 選擇 + 2 非選擇｜80 分鐘',
    science: '每次抽 30 題｜70 分鐘',
    social: '每次抽 30 題｜70 分鐘'
  };

  const statusText = document.getElementById('bank-status-text');
  const statsList = document.getElementById('bank-stats-list');

  function updateUI() {
    const stats = BankManager.getBankStats();
    statusText.innerHTML = `五科題庫共 <strong>${stats.total}</strong> 題，每科 <strong>200</strong> 題，每次測驗隨機抽題`;
    statsList.innerHTML = BankManager.SUBJECTS.map(s => {
      const sub = stats.subjects[s];
      return `<li><strong>${sub.name}</strong>：${sub.count} 題</li>`;
    }).join('');

    document.querySelectorAll('[data-subject]').forEach(el => {
      const s = el.dataset.subject;
      const sub = stats.subjects[s];
      if (sub) el.textContent = `題庫 ${sub.count} 題｜${EXAM_META[s]}`;
    });
  }

  try {
    await BankManager.loadAllBanks();
    updateUI();
  } catch {
    statusText.textContent = '題庫載入失敗，請重新整理頁面。';
  }
})();
