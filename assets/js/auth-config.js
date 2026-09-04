/**
 * 進入測驗區密碼設定（可自行修改）
 * 注意：前端密碼僅為簡易防護，無法防止有心者查看原始碼。
 */
const AuthConfig = {
  junior: {
    password: '0717',
    label: '國中測驗',
    storageKey: 'exam_auth_junior'
  },
  senior: {
    password: '0717',
    label: '高中測驗',
    storageKey: 'exam_auth_senior'
  }
};

window.AuthConfig = AuthConfig;
