/**
 * 每月自動更新全部級別 × 科目 × 難度題庫（各 200 題）
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  TARGET, countQuestions, writeBank, getMonthSeed, getNextUpdateDate
} from './lib/bank-utils.mjs';
import { generateSubjectBank, validateBank, DIFFICULTIES } from './lib/difficulty-generators.mjs';
import { EXAM_LEVELS } from './lib/exam-levels.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const BANKS = path.join(ROOT, 'assets/js/banks');
const META = path.join(ROOT, 'assets/data/bank-meta.json');
const LOG = path.join(ROOT, 'logs/monthly-update.log');

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  fs.mkdirSync(path.dirname(LOG), { recursive: true });
  fs.appendFileSync(LOG, line + '\n');
}

async function main() {
  const seed = getMonthSeed();
  log(`=== 每月題庫更新 版本 ${seed}（含難度三級）===`);

  const meta = {
    lastUpdated: new Date().toISOString(),
    lastUpdatedLocal: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
    nextUpdate: getNextUpdateDate(),
    version: seed,
    targetPerSubject: TARGET,
    difficulties: DIFFICULTIES,
    levels: {}
  };

  for (const [level, cfg] of Object.entries(EXAM_LEVELS)) {
    log(`--- ${level} ---`);
    meta.levels[level] = { subjects: {} };

    for (const subject of cfg.subjects) {
      meta.levels[level].subjects[subject] = { difficulties: {} };

      for (const difficulty of DIFFICULTIES) {
        log(`${level}/${subject}/${difficulty}:`);
        const units = generateSubjectBank(level, subject, difficulty, TARGET, seed);
        const count = countQuestions(units);
        const errors = validateBank(units, TARGET);
        const hasBad = units.some(u => /補充題/.test(u.text || ''));

        if (errors.length || hasBad || count !== TARGET) {
          log(`  ✗ 驗證失敗：${errors.join('; ') || (hasBad ? '含補充題' : `題數=${count}`)}`);
        }

        const filePath = path.join(BANKS, level, subject, `${difficulty}.js`);
        writeBank(filePath, subject, units, 'QuestionBanks', level, difficulty);
        log(`  ✓ 輸出 ${count} 題 → ${filePath}`);
        meta.levels[level].subjects[subject].difficulties[difficulty] = { count };
      }
    }

    meta.levels[level].lastUpdatedLocal = meta.lastUpdatedLocal;
    meta.levels[level].version = seed;
    meta.levels[level].nextUpdate = meta.nextUpdate;
  }

  fs.mkdirSync(path.dirname(META), { recursive: true });
  fs.writeFileSync(META, JSON.stringify(meta, null, 2));
  log(`完成。下次更新：${meta.nextUpdate}\n`);
}

main().catch(err => {
  log(`錯誤：${err.message}`);
  process.exit(1);
});
