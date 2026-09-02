/** Node 腳本用測驗設定（與 exam-config.js 同步） */
export const EXAM_LEVELS = {
  junior: {
    bankPath: 'junior',
    subjects: ['chinese', 'english', 'math', 'science', 'social']
  },
  gsat: {
    bankPath: 'gsat',
    subjects: ['chinese', 'english', 'mathA', 'mathB', 'science', 'social']
  },
  ast: {
    bankPath: 'ast',
    subjects: ['mathA', 'mathB', 'physics', 'chemistry', 'biology', 'history', 'geography', 'civics']
  }
};

export const TARGET = 200;
