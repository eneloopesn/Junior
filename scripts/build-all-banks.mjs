/**
 * 建置全部 level × subject × difficulty 題庫（各 200 題）
 */
import path from 'path';
import { fileURLToPath } from 'url';
import { generateSubjectBank, validateBank, DIFFICULTIES } from './lib/difficulty-generators.mjs';
import { writeBank, countQuestions } from './lib/bank-utils.mjs';
import { EXAM_LEVELS } from './lib/exam-levels.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const BANKS = path.join(ROOT, 'assets/js/banks');
const TARGET = 200;
const BASE_SEED = 202609;

let ok = 0;
let fail = 0;
const failures = [];

console.log('開始建置全部題庫（level × subject × difficulty）…\n');

for (const [level, cfg] of Object.entries(EXAM_LEVELS)) {
  for (const subject of cfg.subjects) {
    for (const difficulty of DIFFICULTIES) {
      const units = generateSubjectBank(level, subject, difficulty, TARGET, BASE_SEED);
      const count = countQuestions(units);
      const filePath = path.join(BANKS, level, subject, `${difficulty}.js`);
      writeBank(filePath, subject, units, 'QuestionBanks', level, difficulty);

      const errors = validateBank(units, TARGET);
      const hasSupplement = units.some(u => /補充題/.test(u.text || ''));
      const status = errors.length === 0 && !hasSupplement && count === TARGET ? '✓' : '✗';

      console.log(`${status} ${level}/${subject}/${difficulty}: ${count} 題 → ${filePath}`);

      if (status === '✓') {
        ok += 1;
      } else {
        fail += 1;
        const msg = errors.join('; ') || (hasSupplement ? '含補充題' : `題數=${count}`);
        failures.push(`${level}/${subject}/${difficulty}: ${msg}`);
        console.error(`  ERROR: ${msg}`);
      }
    }
  }
}

console.log(`\n完成：成功 ${ok}、失敗 ${fail}（共 ${ok + fail} 檔，目標各 ${TARGET} 題）`);
if (failures.length) {
  console.error('\n失敗清單：');
  failures.forEach(f => console.error(' -', f));
  process.exitCode = 1;
}
