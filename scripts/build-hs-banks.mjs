/**
 * 建置高中學測 / 分科測驗題庫
 */
import path from 'path';
import { fileURLToPath } from 'url';
import { generateBank } from './lib/hs-generators.mjs';
import { writeBank, countQuestions } from './lib/bank-utils.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const BANKS = path.join(ROOT, 'assets/js/banks');
const TARGET = 200;
const BASE_SEED = 202609;

const CONFIG = {
  gsat: ['chinese', 'english', 'mathA', 'mathB', 'science', 'social'],
  ast: ['mathA', 'mathB', 'physics', 'chemistry', 'biology', 'history', 'geography', 'civics'],
};

for (const [level, subjects] of Object.entries(CONFIG)) {
  for (const subject of subjects) {
    const questions = generateBank(level, subject, TARGET, BASE_SEED);
    const count = countQuestions(questions);
    const filePath = path.join(BANKS, level, `${subject}.js`);
    writeBank(filePath, subject, questions, 'QuestionBanks', level);
    console.log(`✓ ${level}/${subject}: ${count} 題 → ${filePath}`);
    if (count !== TARGET) {
      console.warn(`  ⚠ 預期 ${TARGET} 題，實際 ${count} 題`);
    }
  }
}

console.log('\n高中題庫建置完成。');
