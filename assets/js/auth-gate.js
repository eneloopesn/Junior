/**
 * 密碼閘門：進入國中／高中測驗區前需驗證
 */
const AuthGate = (() => {
  function resolveZone(hint) {
    if (hint === 'junior' || hint === 'senior') return hint;
    const params = new URLSearchParams(location.search);
    const level = params.get('level');
    if (level === 'junior') return 'junior';
    if (level === 'gsat' || level === 'ast') return 'senior';

    const path = location.pathname.replace(/\\/g, '/').toLowerCase();
    if (path.includes('/junior/')) return 'junior';
    if (path.includes('/senior/') || path.includes('/gsat/') || path.includes('/ast/')) return 'senior';
    return null;
  }

  function isAuthed(zone) {
    const cfg = AuthConfig[zone];
    if (!cfg) return false;
    return sessionStorage.getItem(cfg.storageKey) === '1';
  }

  function setAuthed(zone) {
    const cfg = AuthConfig[zone];
    if (cfg) sessionStorage.setItem(cfg.storageKey, '1');
  }

  function clearAuth(zone) {
    if (zone) {
      const cfg = AuthConfig[zone];
      if (cfg) sessionStorage.removeItem(cfg.storageKey);
      return;
    }
    Object.values(AuthConfig).forEach(cfg => sessionStorage.removeItem(cfg.storageKey));
  }

  function ensureStyles() {
    if (document.getElementById('auth-gate-styles')) return;
    const style = document.createElement('style');
    style.id = 'auth-gate-styles';
    style.textContent = `
      .auth-overlay {
        position: fixed; inset: 0; z-index: 9999;
        background: rgba(20, 28, 40, 0.72);
        display: flex; align-items: center; justify-content: center;
        padding: 20px;
      }
      .auth-modal {
        width: min(420px, 100%);
        background: #fff;
        border-radius: 14px;
        padding: 28px 24px 22px;
        box-shadow: 0 18px 50px rgba(0,0,0,.28);
        font-family: inherit;
      }
      .auth-modal h2 {
        margin: 0 0 8px;
        font-size: 1.35rem;
        color: #1f2a37;
      }
      .auth-modal p {
        margin: 0 0 16px;
        color: #5b6775;
        font-size: 0.95rem;
        line-height: 1.5;
      }
      .auth-modal label {
        display: block;
        margin-bottom: 6px;
        font-weight: 600;
        color: #334155;
        font-size: 0.9rem;
      }
      .auth-modal input[type="password"] {
        width: 100%;
        box-sizing: border-box;
        padding: 12px 14px;
        border: 1px solid #cbd5e1;
        border-radius: 8px;
        font-size: 1rem;
        margin-bottom: 10px;
      }
      .auth-modal input[type="password"]:focus {
        outline: 2px solid #3b82f6;
        border-color: #3b82f6;
      }
      .auth-error {
        min-height: 1.2em;
        color: #c0392b;
        font-size: 0.88rem;
        margin-bottom: 12px;
      }
      .auth-actions {
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        flex-wrap: wrap;
      }
      .auth-actions button {
        border: 0;
        border-radius: 8px;
        padding: 10px 16px;
        font-weight: 600;
        cursor: pointer;
        font-size: 0.95rem;
      }
      .auth-btn-cancel { background: #e5e7eb; color: #334155; }
      .auth-btn-submit { background: #2563eb; color: #fff; }
      .auth-btn-submit:hover { background: #1d4ed8; }
    `;
    document.head.appendChild(style);
  }

  function showPrompt(zone, options = {}) {
    ensureStyles();
    const cfg = AuthConfig[zone];
    if (!cfg) return Promise.reject(new Error('未知區域'));

    return new Promise(resolve => {
      const existing = document.getElementById('auth-overlay');
      if (existing) existing.remove();

      const overlay = document.createElement('div');
      overlay.id = 'auth-overlay';
      overlay.className = 'auth-overlay';
      overlay.innerHTML = `
        <div class="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title">
          <h2 id="auth-title">請輸入密碼</h2>
          <p>進入「${cfg.label}」前需要驗證密碼。</p>
          <label for="auth-password">密碼</label>
          <input id="auth-password" type="password" autocomplete="current-password" placeholder="請輸入密碼">
          <div class="auth-error" id="auth-error"></div>
          <div class="auth-actions">
            <button type="button" class="auth-btn-cancel" id="auth-cancel">取消</button>
            <button type="button" class="auth-btn-submit" id="auth-submit">確認進入</button>
          </div>
        </div>`;
      document.body.appendChild(overlay);

      const input = overlay.querySelector('#auth-password');
      const error = overlay.querySelector('#auth-error');
      const finish = (ok) => {
        overlay.remove();
        resolve(ok);
      };

      const trySubmit = () => {
        const value = input.value.trim();
        if (value === cfg.password) {
          setAuthed(zone);
          finish(true);
        } else {
          error.textContent = '密碼錯誤，請再試一次。';
          input.select();
        }
      };

      overlay.querySelector('#auth-submit').addEventListener('click', trySubmit);
      overlay.querySelector('#auth-cancel').addEventListener('click', () => finish(false));
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') trySubmit();
        if (e.key === 'Escape') finish(false);
      });
      input.focus();

      if (options.allowBackdropCancel !== false) {
        overlay.addEventListener('click', e => {
          if (e.target === overlay) finish(false);
        });
      }
    });
  }

  async function requireAuth(zone, redirectUrl) {
    if (!zone) return true;
    if (isAuthed(zone)) return true;
    const ok = await showPrompt(zone, { allowBackdropCancel: !!redirectUrl });
    if (!ok && redirectUrl) {
      location.href = redirectUrl;
      return false;
    }
    return ok;
  }

  function bindHomeLinks() {
    document.querySelectorAll('[data-auth-zone]').forEach(link => {
      link.addEventListener('click', async e => {
        const zone = link.getAttribute('data-auth-zone');
        const href = link.getAttribute('href');
        if (!zone || !href) return;
        if (isAuthed(zone)) return;
        e.preventDefault();
        const ok = await showPrompt(zone);
        if (ok) location.href = href;
      });
    });
  }

  async function guardPage(options = {}) {
    const zone = resolveZone(options.zone);
    if (!zone) return true;
    const home = options.homeUrl || '../index.html';
    return requireAuth(zone, home);
  }

  return { resolveZone, isAuthed, setAuthed, clearAuth, showPrompt, requireAuth, bindHomeLinks, guardPage };
})();

window.AuthGate = AuthGate;
