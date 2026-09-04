/**
 * 全級別測驗設定（含難度：簡單 / 普通 / 困難）
 */
const ExamConfig = (() => {
  const DIFFICULTIES = {
    easy: { id: 'easy', name: '簡單', color: '#27ae60' },
    normal: { id: 'normal', name: '普通', color: '#2980b9' },
    hard: { id: 'hard', name: '困難', color: '#c0392b' }
  };

  const DIFFICULTY_IDS = ['easy', 'normal', 'hard'];

  const LEVELS = {
    junior: {
      id: 'junior',
      name: '國中教育會考',
      shortName: '國中會考',
      bankPath: 'junior',
      subjects: {
        chinese: { name: '國文科', color: '#c0392b', choiceCount: 30, time: 70, nonChoiceCount: 0 },
        english: { name: '英語科', color: '#27ae60', choiceCount: 30, time: 60, nonChoiceCount: 0 },
        math: { name: '數學科', color: '#2980b9', choiceCount: 20, time: 80, nonChoiceCount: 2 },
        science: { name: '自然科', color: '#8e44ad', choiceCount: 30, time: 70, nonChoiceCount: 0 },
        social: { name: '社會科', color: '#d35400', choiceCount: 30, time: 70, nonChoiceCount: 0 }
      }
    },
    gsat: {
      id: 'gsat',
      name: '學科能力測驗',
      shortName: '高中學測',
      bankPath: 'gsat',
      subjects: {
        chinese: { name: '國語文', color: '#c0392b', choiceCount: 30, time: 100, nonChoiceCount: 0 },
        english: { name: '英語', color: '#27ae60', choiceCount: 30, time: 100, nonChoiceCount: 0 },
        mathA: { name: '數學A', color: '#2980b9', choiceCount: 20, time: 100, nonChoiceCount: 2 },
        mathB: { name: '數學B', color: '#1abc9c', choiceCount: 20, time: 100, nonChoiceCount: 0 },
        science: { name: '自然', color: '#8e44ad', choiceCount: 28, time: 50, nonChoiceCount: 0 },
        social: { name: '社會', color: '#d35400', choiceCount: 28, time: 50, nonChoiceCount: 0 }
      }
    },
    ast: {
      id: 'ast',
      name: '分科測驗',
      shortName: '高中分科',
      bankPath: 'ast',
      subjects: {
        mathA: { name: '數學甲', color: '#2980b9', choiceCount: 13, time: 80, nonChoiceCount: 3 },
        mathB: { name: '數學乙', color: '#1abc9c', choiceCount: 13, time: 80, nonChoiceCount: 3 },
        physics: { name: '物理', color: '#3498db', choiceCount: 18, time: 80, nonChoiceCount: 2 },
        chemistry: { name: '化學', color: '#9b59b6', choiceCount: 18, time: 80, nonChoiceCount: 2 },
        biology: { name: '生物', color: '#27ae60', choiceCount: 18, time: 80, nonChoiceCount: 2 },
        history: { name: '歷史', color: '#e67e22', choiceCount: 22, time: 60, nonChoiceCount: 0 },
        geography: { name: '地理', color: '#16a085', choiceCount: 22, time: 60, nonChoiceCount: 0 },
        civics: { name: '公民與社會', color: '#d35400', choiceCount: 22, time: 60, nonChoiceCount: 0 }
      }
    }
  };

  function getLevel(levelId) {
    return LEVELS[levelId] || null;
  }

  function getSubject(levelId, subjectId) {
    return LEVELS[levelId]?.subjects[subjectId] || null;
  }

  function getSubjectIds(levelId) {
    return Object.keys(LEVELS[levelId]?.subjects || {});
  }

  function getAllLevels() {
    return Object.values(LEVELS);
  }

  function getDifficulty(diffId) {
    return DIFFICULTIES[diffId] || DIFFICULTIES.normal;
  }

  function getDifficultyIds() {
    return DIFFICULTY_IDS.slice();
  }

  function normalizeDifficulty(diffId) {
    return DIFFICULTIES[diffId] ? diffId : 'normal';
  }

  function storageKey(levelId, subjectId, difficulty) {
    const d = normalizeDifficulty(difficulty);
    return `exam_${levelId}_${subjectId}_${d}`;
  }

  function bankScriptPath(levelId, subjectId, difficulty) {
    const level = LEVELS[levelId];
    const d = normalizeDifficulty(difficulty);
    return `assets/js/banks/${level.bankPath}/${subjectId}/${d}.js`;
  }

  return {
    LEVELS, DIFFICULTIES, DIFFICULTY_IDS,
    getLevel, getSubject, getSubjectIds, getAllLevels,
    getDifficulty, getDifficultyIds, normalizeDifficulty,
    storageKey, bankScriptPath
  };
})();

window.ExamConfig = ExamConfig;
