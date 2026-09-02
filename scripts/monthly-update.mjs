/**
 * 每月自動更新各科題庫（各 200 題）
 * 用法：node scripts/monthly-update.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  SUBJECTS, TARGET, loadBankArray, countQuestions, mergeBanks,
  seededShuffle, trimToTarget, writeBank, getMonthSeed, getNextUpdateDate
} from './lib/bank-utils.mjs';
import { generateMonthlyQuestions } from './lib/generators.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const BANKS = path.join(ROOT, 'assets/js/banks');
const SUPPLEMENT = path.join(BANKS, 'supplement');
const GENERATED = path.join(BANKS, 'generated');
const META = path.join(ROOT, 'assets/data/bank-meta.json');
const LOG = path.join(ROOT, 'logs/monthly-update.log');

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  fs.mkdirSync(path.dirname(LOG), { recursive: true });
  fs.appendFileSync(LOG, line + '\n');
}

function loadGeneratedPool(subject) {
  const dir = path.join(GENERATED, subject);
  if (!fs.existsSync(dir)) return [];
  const all = [];
  fs.readdirSync(dir).filter(f => f.endsWith('.js')).forEach(f => {
    all.push(...loadBankArray(path.join(dir, f)));
  });
  return all;
}

function saveGeneratedBatch(subject, seed, questions) {
  const dir = path.join(GENERATED, subject);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${seed}.js`);
  writeBank(file, subject, questions, 'QuestionBanksGenerated');
  log(`  新增生成題 ${questions.length} 題 → ${path.relative(ROOT, file)}`);
}

function buildPool(subject) {
  const main = loadBankArray(path.join(BANKS, `${subject}.js`));
  const supplement = loadBankArray(path.join(SUPPLEMENT, `${subject}.js`));
  const generated = loadGeneratedPool(subject);
  return mergeBanks(supplement, generated, main);
}

function selectForMonth(pool, subject, seed) {
  const nonChoice = pool.filter(u => u.type === 'non-choice');
  const choice = pool.filter(u => u.type !== 'non-choice');

  const shuffled = seededShuffle(choice, seed + subject.charCodeAt(0));
  let selected = [];
  let count = 0;
  const choiceTarget = subject === 'math' ? TARGET - 2 : TARGET;

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

  if (subject === 'math' && nonChoice.length > 0) {
    const nc = seededShuffle(nonChoice, seed + 99).slice(0, 2);
    selected = [...selected, ...nc];
  }

  return trimToTarget(selected, TARGET);
}

function writeMeta(results) {
  const now = new Date();
  const meta = {
    lastUpdated: now.toISOString(),
    lastUpdatedLocal: now.toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
    nextUpdate: getNextUpdateDate(now),
    version: getMonthSeed(now),
    targetPerSubject: TARGET,
    subjects: results
  };
  fs.mkdirSync(path.dirname(META), { recursive: true });
  fs.writeFileSync(META, JSON.stringify(meta, null, 2), 'utf8');
  log(`題庫版本：${meta.version}，下次更新：${meta.nextUpdate}`);
}

async function main() {
  const seed = getMonthSeed();
  log(`=== 開始每月題庫更新（版本 ${seed}）===`);

  const results = {};

  for (const subject of SUBJECTS) {
    log(`處理 ${subject}...`);

    const newGenerated = generateMonthlyQuestions(subject, seed);
    if (newGenerated.length > 0) {
      saveGeneratedBatch(subject, seed, newGenerated);
    }

    const pool = buildPool(subject);
    log(`  題池共 ${countQuestions(pool)} 題`);

    let selected = selectForMonth(pool, subject, seed);
    let count = countQuestions(selected);

    if (count < TARGET) {
      const main = loadBankArray(path.join(BANKS, `${subject}.js`));
      selected = trimToTarget(mergeBanks(selected, main, pool), TARGET);
      count = countQuestions(selected);
    }

    if (count < TARGET) {
      log(`  ⚠ 題池僅 ${countQuestions(pool)} 題，輸出 ${count} 題（已盡可能補足）`);
    }

    writeBank(path.join(BANKS, `${subject}.js`), subject, selected);
    log(`  ✓ 輸出 ${count} 題`);
    results[subject] = { count, poolSize: countQuestions(pool) };
  }

  writeMeta(results);
  log('=== 更新完成 ===\n');
}

main().catch(err => {
  log(`錯誤：${err.message}`);
  process.exit(1);
});
