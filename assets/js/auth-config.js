/**
 * 進入測驗區密碼設定（可自行修改）
 * 注意：前端密碼僅為簡易防護，無法防止有心者查看原始碼。
 */
const AuthConfig = {
  junior: {
    password: 'Junior2026',
    label: '國中測驗',
    storageKey: 'exam_auth_junior'
  },
  senior: {
    password: 'Senior2026',
    label: '高中測驗',
    storageKey: 'exam_auth_senior'
  }
};

window.AuthConfig = AuthConfig;
