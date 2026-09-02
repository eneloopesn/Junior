/**
 * 首頁：顯示各科題庫數量與更新時間
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
  const updateInfo = document.getElementById('bank-update-info');

  async function loadMeta() {
    try {
      const res = await fetch('assets/data/bank-meta.json?' + Date.now());
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  }

  function updateUI(meta) {
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

    if (meta && meta.lastUpdatedLocal && meta.lastUpdatedLocal !== '尚未更新') {
      updateInfo.innerHTML = `🔄 題庫版本 <strong>${meta.version || '-'}</strong>｜上次更新：<strong>${meta.lastUpdatedLocal}</strong>｜下次自動更新：<strong>${meta.nextUpdate || '-'}</strong>`;
    } else {
      updateInfo.innerHTML = '💡 題庫尚未執行每月更新，可雙擊 <code>update-monthly.bat</code> 手動更新';
    }
  }

  try {
    const [meta] = await Promise.all([loadMeta(), BankManager.loadAllBanks()]);
    updateUI(meta);
  } catch {
    statusText.textContent = '題庫載入失敗，請重新整理頁面。';
  }
})();
