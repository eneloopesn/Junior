const fs = require('fs');
const path = require('path');

const ROOT = path.join('D:', 'Junior-main', 'assets', 'js', 'banks');
const SPECS = [
  { exam: 'junior', subjects: ['chinese','science','social'] },
  { exam: 'gsat', subjects: ['chinese','science','social'] },
  { exam: 'ast', subjects: ['physics','chemistry','biology','history','geography','civics'] },
];
const LEVELS = ['easy','normal','hard'];

function loadBank(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const window = {};
  const fn = new Function('window', code + '; return window;');
  return fn(window);
}

function getQuestions(win) {
  const qs = [];
  const visit = (v) => {
    if (Array.isArray(v)) {
      for (const item of v) {
        if (item && typeof item === 'object' && (item.text != null || item.question != null)) qs.push(item);
      }
    } else if (v && typeof v === 'object') {
      for (const k of Object.keys(v)) visit(v[k]);
    }
  };
  for (const k of Object.keys(win)) visit(win[k]);
  return qs;
}

function getText(q) {
  return String(q.text ?? q.question ?? '');
}

const tagPatterns = [
  { name: 'starts_【', test: t => t.startsWith('【') },
  { name: 'starts_Basic/Practice/Advanced', test: t => /^(Basic|Practice|Advanced)\b/.test(t) },
  { name: 'classroom_tags', test: t => /課堂提問：|段考練習：|會考練習：|素養情境：|跨科整合：|學測取向：|語文素養：|史料|題組 |辨字組|班會提案|年代推算|選舉試算/.test(t) },
  { name: 'exam_paren', test: t => /（會考）|（學測）/.test(t) },
  { name: 'ends_digits_or_202609', test: t => /（\d+）$|（202609-N）$/.test(t) },
  { name: 'en_tags', test: t => /reading set|academic context|daily school|\(verb:/i.test(t) },
];

function isTagged(t) {
  return tagPatterns.filter(p => p.test(t)).map(p => p.name);
}

const findings = [];
const sectionsBySubject = {};
const taggedSamples = [];
let totalQ = 0;
let totalTagged = 0;
const taggedByFile = [];
const patternTotals = {};

for (const spec of SPECS) {
  for (const subject of spec.subjects) {
    const key = spec.exam + '/' + subject;
    if (!sectionsBySubject[key]) sectionsBySubject[key] = new Set();
    for (const level of LEVELS) {
      const filePath = path.join(ROOT, spec.exam, subject, level + '.js');
      const rel = spec.exam + '/' + subject + '/' + level + '.js';
      if (!fs.existsSync(filePath)) {
        findings.push({ file: rel, error: 'MISSING' });
        continue;
      }
      let win;
      try {
        win = loadBank(filePath);
      } catch (e) {
        findings.push({ file: rel, error: String(e.message || e) });
        continue;
      }
      const qs = getQuestions(win);
      let fileTagged = 0;
      const patternCounts = {};
      for (const q of qs) {
        totalQ++;
        const t = getText(q);
        if (q.section != null) sectionsBySubject[key].add(String(q.section));
        const hits = isTagged(t);
        if (hits.length) {
          totalTagged++;
          fileTagged++;
          for (const h of hits) {
            patternCounts[h] = (patternCounts[h] || 0) + 1;
            patternTotals[h] = (patternTotals[h] || 0) + 1;
          }
          if (taggedSamples.length < 5) {
            taggedSamples.push({ file: rel, hits, text: t.slice(0, 220) });
          }
        }
      }
      taggedByFile.push({
        file: rel,
        questions: qs.length,
        tagged: fileTagged,
        patternCounts,
        windowKeys: Object.keys(win),
      });
    }
  }
}

function sampleTexts(exam, subject, n) {
  const all = [];
  for (const level of LEVELS) {
    const filePath = path.join(ROOT, exam, subject, level + '.js');
    if (!fs.existsSync(filePath)) continue;
    try {
      const qs = getQuestions(loadBank(filePath));
      for (const q of qs) all.push({ level, text: getText(q).slice(0, 180), section: q.section });
    } catch (e) {}
  }
  let seed = 20260906;
  const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 0x100000000; };
  const idx = [...all.keys()];
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return { total: all.length, samples: idx.slice(0, n).map(i => all[i]) };
}

const sectionsOut = {};
for (const [k, set] of Object.entries(sectionsBySubject)) {
  sectionsOut[k] = [...set].sort();
}

const out = {
  summary: {
    totalQuestions: totalQ,
    totalTagged: totalTagged,
    filesScanned: taggedByFile.length,
    patternTotals,
    missingOrError: findings,
  },
  filesWithTagged: taggedByFile.filter(f => f.tagged > 0),
  allFileStats: taggedByFile,
  taggedSamples: taggedSamples.length ? taggedSamples : 'ZERO tagged texts',
  sectionsBySubject: sectionsOut,
  randomSamples: {
    junior_chinese: sampleTexts('junior', 'chinese', 3),
    ast_physics: sampleTexts('ast', 'physics', 3),
  },
};

console.log(JSON.stringify(out, null, 2));
