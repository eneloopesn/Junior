/**
 * 題庫工具函式
 */
import fs from 'fs';
import path from 'path';

export const SUBJECTS = ['chinese', 'english', 'math', 'science', 'social'];
export const TARGET = 200;

export function loadBankArray(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const code = fs.readFileSync(filePath, 'utf8');
  const w = { QuestionBanks: {}, QuestionBanksSupplement: {}, QuestionBanksGenerated: {} };
  new Function('window', code)(w);
  const subject = SUBJECTS.find(s => code.includes(`.${s}`));
  if (!subject) return [];
  return w.QuestionBanks[subject] || w.QuestionBanksSupplement[subject] || w.QuestionBanksGenerated[subject] || [];
}

export function countQuestions(units) {
  let n = 0;
  (units || []).forEach(u => {
    if (u.type === 'group') n += u.questions.length;
    else n += 1;
  });
  return n;
}

export function dedupeKey(q) {
  if (q.type === 'group') return 'g:' + (q.passage || '').slice(0, 80);
  return 's:' + (q.text || '').slice(0, 100);
}

export function mergeBanks(...arrays) {
  const seen = new Set();
  const out = [];
  for (const arr of arrays) {
    for (const q of arr || []) {
      const k = dedupeKey(q);
      if (!seen.has(k)) {
        seen.add(k);
        out.push(q);
      }
    }
  }
  return out;
}

export function seededShuffle(arr, seed) {
  const a = [...arr];
  let s = seed;
  const rand = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function selectQuestions(units, target, seed) {
  const shuffled = seededShuffle(units, seed);
  const selected = [];
  let count = 0;

  for (const unit of shuffled) {
    if (count >= target) break;
    const size = unit.type === 'group' ? unit.questions.length : 1;
    if (count + size <= target) {
      selected.push(unit);
      count += size;
    }
  }

  if (count < target) {
    for (const unit of shuffled) {
      if (selected.includes(unit)) continue;
      if (count >= target) break;
      if (unit.type === 'single' || unit.type === 'non-choice') {
        selected.push(unit);
        count += 1;
      }
    }
  }

  return selected.slice(0, target + 5).filter((_, i, arr) => {
    let c = 0;
    for (let j = 0; j <= i; j++) {
      c += arr[j].type === 'group' ? arr[j].questions.length : 1;
    }
    return c <= target || i === 0;
  }).reduce((acc, u) => {
    const sz = u.type === 'group' ? u.questions.length : 1;
    const cur = countQuestions(acc);
    if (cur + sz <= target) acc.push(u);
    else if (u.type === 'single' && cur < target) acc.push(u);
    return acc;
  }, []);
}

export function trimToTarget(units, target) {
  const trimmed = [];
  let c = 0;
  for (const u of units) {
    const sz = u.type === 'group' ? u.questions.length : 1;
    if (c + sz <= target) {
      trimmed.push(u);
      c += sz;
    } else if ((u.type === 'single' || u.type === 'non-choice') && c < target) {
      trimmed.push(u);
      c += 1;
    }
    if (c >= target) break;
  }
  return trimmed;
}

export function serializeQuestion(q, indent = '  ') {
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

export function writeBank(filePath, subject, units, varName = 'QuestionBanks') {
  const lines = units.map(u => serializeQuestion(u)).join(',\n\n');
  const content = `window.${varName} = window.${varName} || {};\nwindow.${varName}.${subject} = [\n${lines}\n];\n`;
  fs.writeFileSync(filePath, content, 'utf8');
}

export function getMonthSeed(date = new Date()) {
  return date.getFullYear() * 100 + (date.getMonth() + 1);
}

export function getNextUpdateDate(date = new Date()) {
  const y = date.getFullYear();
  const m = date.getMonth() + 2; // 下一個月
  const next = new Date(y, m - 1, 1);
  const yy = next.getFullYear();
  const mm = String(next.getMonth() + 1).padStart(2, '0');
  const dd = String(next.getDate()).padStart(2, '0');
  return `${yy}-${mm}-${dd}`;
}
