/**
 * 合併基本 + 擴充 + 補充題庫，輸出各科 200 題至 assets/js/banks/{subject}.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const BANKS = path.join(ROOT, 'assets/js/banks');
const TARGET = 200;

function loadBankArray(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const code = fs.readFileSync(filePath, 'utf8');
  const w = { QuestionBanks: {}, QuestionBanksExt: {}, QuestionBanksSupplement: {} };
  const fn = new Function('window', code);
  fn(w);
  const subject = ['chinese', 'english', 'math', 'science', 'social'].find(s => code.includes(`.${s}`));
  if (!subject) return [];
  return w.QuestionBanks[subject] || w.QuestionBanksExt[subject] || w.QuestionBanksSupplement[subject] || [];
}

function countQuestions(units) {
  let n = 0;
  (units || []).forEach(u => {
    if (u.type === 'group') n += u.questions.length;
    else n += 1;
  });
  return n;
}

function dedupeKey(q) {
  if (q.type === 'group') return 'g:' + (q.passage || '').slice(0, 80);
  return 's:' + (q.text || '').slice(0, 100);
}

function mergeBanks(...arrays) {
  const seen = new Set();
  const out = [];
  for (const arr of arrays) {
    for (const q of arr) {
      const k = dedupeKey(q);
      if (!seen.has(k)) {
        seen.add(k);
        out.push(q);
      }
    }
  }
  return out;
}

function serializeQuestion(q, indent = '  ') {
  if (q.type === 'group') {
    const qs = q.questions.map(sq =>
      `{ text: ${JSON.stringify(sq.text)}, options: ${JSON.stringify(sq.options)}, answer: ${sq.answer}, explanation: ${JSON.stringify(sq.explanation)} }`
    ).join(',\n      ');
    return `${indent}{\n${indent}  type: 'group', section: ${JSON.stringify(q.section)},\n${indent}  passage: ${JSON.stringify(q.passage)},\n${indent}  questions: [\n      ${qs}\n${indent}  ]\n${indent}}`;
  }
  if (q.type === 'non-choice') {
    return `${indent}{ type: 'non-choice', section: ${JSON.stringify(q.section)}, text: ${JSON.stringify(q.text)}, answerText: ${JSON.stringify(q.answerText)}, explanation: ${JSON.stringify(q.explanation)} }`;
  }
  return `${indent}{ type: 'single', section: ${JSON.stringify(q.section)}, text: ${JSON.stringify(q.text)}, options: ${JSON.stringify(q.options)}, answer: ${q.answer}, explanation: ${JSON.stringify(q.explanation)} }`;
}

function writeBank(subject, units) {
  const lines = units.map(u => serializeQuestion(u)).join(',\n\n');
  const content = `window.QuestionBanks = window.QuestionBanks || {};\nwindow.QuestionBanks.${subject} = [\n${lines}\n];\n`;
  fs.writeFileSync(path.join(BANKS, `${subject}.js`), content, 'utf8');
}

function trimToTarget(units, target) {
  const trimmed = [];
  let c = 0;
  for (const u of units) {
    const sz = u.type === 'group' ? u.questions.length : 1;
    if (c + sz <= target) {
      trimmed.push(u);
      c += sz;
    } else if (u.type === 'single' && c < target) {
      trimmed.push(u);
      c += 1;
    }
    if (c >= target) break;
  }
  return trimmed;
}

const subjects = ['chinese', 'english', 'math', 'science', 'social'];

for (const subject of subjects) {
  const base = loadBankArray(path.join(BANKS, `${subject}.js`));
  const ext = loadBankArray(path.join(BANKS, 'ext', `${subject}-ext.js`));
  const supplement = loadBankArray(path.join(BANKS, 'supplement', `${subject}.js`));

  let merged = mergeBanks(base, ext, supplement);
  let count = countQuestions(merged);

  console.log(`${subject}: ${count} 題 (基本 ${countQuestions(base)} + 擴充 ${countQuestions(ext)} + 補充 ${countQuestions(supplement)})`);

  if (count > TARGET) {
    merged = trimToTarget(merged, TARGET);
    count = countQuestions(merged);
    console.log(`  → 裁切至 ${count} 題`);
  } else if (count < TARGET) {
    console.warn(`  ⚠ 未達 ${TARGET} 題`);
  }

  writeBank(subject, merged);
}

console.log('\n合併完成，擴充題庫已併入各科主題庫。');
