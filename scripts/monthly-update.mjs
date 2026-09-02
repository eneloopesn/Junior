/**
 * 每月自動更新全部級別題庫（各科 200 題）
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  TARGET, loadBankArray, countQuestions, mergeBanks,
  seededShuffle, trimToTarget, writeBank, getMonthSeed, getNextUpdateDate
} from './lib/bank-utils.mjs';
import { generateMonthlyQuestions } from './lib/generators.mjs';
import { generateBank } from './lib/hs-generators.mjs';
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

function loadGeneratedPool(level, subject) {
  const dir = path.join(BANKS, level, 'generated', subject);
  if (!fs.existsSync(dir)) return [];
  const all = [];
  fs.readdirSync(dir).filter(f => f.endsWith('.js')).forEach(f => {
    all.push(...loadBankArray(path.join(dir, f)));
  });
  return all;
}

function saveGeneratedBatch(level, subject, seed, questions) {
  const dir = path.join(BANKS, level, 'generated', subject);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${seed}.js`);
  writeBank(file, subject, questions, 'QuestionBanksGenerated', level);
  log(`  新增生成題 ${questions.length} 題`);
}

function buildPool(level, subject) {
  const basePath = path.join(BANKS, level, `${subject}.js`);
  const main = loadBankArray(basePath);
  const supplement = loadBankArray(path.join(BANKS, level, 'supplement', `${subject}.js`));
  const generated = loadGeneratedPool(level, subject);
  return mergeBanks(supplement, generated, main);
}

function selectForMonth(pool, subject, seed, nonChoiceCount = 0) {
  const nonChoice = pool.filter(u => u.type === 'non-choice');
  const choice = pool.filter(u => u.type !== 'non-choice');
  const choiceTarget = TARGET - nonChoiceCount;

  const shuffled = seededShuffle(choice, seed + subject.charCodeAt(0));
  let selected = [];
  let count = 0;

  for (const unit of shuffled) {
    if (count >= choiceTarget) break;
    const size = unit.type === 'group' ? unit.questions.length : 1;
    if (count + size <= choiceTarget) {
      selected.push(unit);
      count += size;
    }
  }

  for (const unit of shuffled) {
    if (selected.includes(unit) || count >= choiceTarget) continue;
    if (unit.type === 'single') {
      selected.push(unit);
      count += 1;
    }
  }

  selected = trimToTarget(selected, choiceTarget);

  if (nonChoiceCount > 0 && nonChoice.length > 0) {
    selected = [...selected, ...seededShuffle(nonChoice, seed + 99).slice(0, nonChoiceCount)];
  }

  return trimToTarget(selected, TARGET);
}

function getNonChoiceCount(level, subject) {
  if (level === 'junior' && subject === 'math') return 2;
  if (level === 'gsat' && subject === 'mathA') return 2;
  if (level === 'ast' && (subject === 'mathA' || subject === 'mathB')) return 3;
  if (level === 'ast' && ['physics', 'chemistry', 'biology'].includes(subject)) return 2;
  return 0;
}

async function main() {
  const seed = getMonthSeed();
  log(`=== 每月題庫更新 版本 ${seed} ===`);

  const meta = {
    lastUpdated: new Date().toISOString(),
    lastUpdatedLocal: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
    nextUpdate: getNextUpdateDate(),
    version: seed,
    targetPerSubject: TARGET,
    levels: {}
  };

  for (const [level, cfg] of Object.entries(EXAM_LEVELS)) {
    log(`--- ${level} ---`);
    meta.levels[level] = { subjects: {} };

    for (const subject of cfg.subjects) {
      log(`${level}/${subject}:`);

      let newGenerated = [];
      if (level === 'junior') {
        newGenerated = generateMonthlyQuestions(subject, seed) || [];
      } else {
        newGenerated = generateBank(level, subject, 25, seed * 1000 + subject.charCodeAt(0));
      }
      if (newGenerated.length > 0) {
        saveGeneratedBatch(level, subject, seed, newGenerated);
      }

      let pool = buildPool(level, subject);
      log(`  題池 ${countQuestions(pool)} 題`);

      if (countQuestions(pool) < TARGET) {
        const extra = level === 'junior'
          ? generateMonthlyQuestions(subject, seed + 999)
          : generateBank(level, subject, TARGET - countQuestions(pool) + 10, seed + 5000);
        pool = mergeBanks(pool, extra);
      }

      const nc = getNonChoiceCount(level, subject);
      let selected = selectForMonth(pool, subject, seed, nc);
      let count = countQuestions(selected);

      if (count < TARGET) {
        selected = trimToTarget(mergeBanks(selected, pool), TARGET);
        count = countQuestions(selected);
      }

      writeBank(path.join(BANKS, level, `${subject}.js`), subject, selected, 'QuestionBanks', level);
      log(`  ✓ 輸出 ${count} 題`);
      meta.levels[level].subjects[subject] = { count, poolSize: countQuestions(pool) };
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
