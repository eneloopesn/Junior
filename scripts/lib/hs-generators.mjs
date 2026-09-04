/**
 * 高中學測（GSAT）/ 分科測驗（AST）題庫生成器
 */
import { questionKey, unitQuestionKeys } from './bank-utils.mjs';

export function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s;
  };
}

function randInt(r, min, max) {
  return min + (r() % (max - min + 1));
}

function pick(r, arr) {
  return arr[r() % arr.length];
}

function shuffle(r, arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = r() % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function redistributeOptions(qiSeed, options, answerIdx) {
  const len = options.length;
  const newAnswerIdx = (qiSeed >>> 0) % len;
  const correct = options[answerIdx];
  const others = options.filter((_, i) => i !== answerIdx);
  const r = rng((qiSeed * 2654435761 + 1013904223) >>> 0);
  const shuffledOthers = shuffle(r, others);
  const newOptions = [];
  let oi = 0;
  for (let i = 0; i < len; i++) {
    newOptions.push(i === newAnswerIdx ? correct : shuffledOthers[oi++]);
  }
  return { options: newOptions, answer: newAnswerIdx };
}

function makeOptions(r, seed, correct, distractors) {
  const correctStr = String(correct);
  const wrong = distractors.slice(0, 3).map(String);
  const qiSeed = (seed + r()) >>> 0;
  return redistributeOptions(qiSeed, [correctStr, ...wrong], 0);
}

function balanceAnswerDistribution(units, baseSeed) {
  let qi = 0;
  return units.map(unit => {
    if (unit.type === 'group') {
      return {
        ...unit,
        questions: unit.questions.map(q => {
          const qiSeed = (baseSeed + qi++ * 7919) >>> 0;
          if (!Array.isArray(q.options) || q.answer == null || q.answer < 0) return q;
          const { options, answer } = redistributeOptions(qiSeed, q.options, q.answer);
          return { ...q, options, answer };
        }),
      };
    }
    if (unit.type === 'single' && Array.isArray(unit.options) && unit.answer != null && unit.answer >= 0) {
      const qiSeed = (baseSeed + qi++ * 7919) >>> 0;
      const { options, answer } = redistributeOptions(qiSeed, unit.options, unit.answer);
      return { ...unit, options, answer };
    }
    qi += 1;
    return unit;
  });
}

function countUnits(units) {
  let n = 0;
  for (const u of units) n += u.type === 'group' ? u.questions.length : 1;
  return n;
}

function levelSubjectSeed(level, subject, baseSeed) {
  let h = baseSeed >>> 0;
  for (const ch of `${level}:${subject}`) h = (h * 31 + ch.charCodeAt(0)) & 0x7fffffff;
  return h;
}

function fillToCount(units, count, makeSingle) {
  let total = countUnits(units);
  let idx = units.length;
  while (total < count) {
    units.push(makeSingle(idx++));
    total += 1;
  }
  return units;
}

// ── GSAT 國文 ──────────────────────────────────────────────
const GSAT_CHINESE_SECTIONS = ['字音字形', '成語', '修辭', '文言文', '白話文', '語文素養'];
const GSAT_CHINESE_TEMPLATES = [
  ['字音字形', '下列「　」中的字，何者讀音正確？', ['狹隘（ㄧˋ）', '參差（ㄘㄢ）', '妥協（ㄒㄧㄝˋ）', '機會（ㄏㄨㄟˋ）'], 0],
  ['成語', '「曲高和寡」比喻什麼？', ['作品高深，能欣賞者少', '音樂動聽', '道路狹窄', '人數眾多'], 0],
  ['修辭', '「時間就是金錢」運用何種修辭？', ['譬喻', '誇飾', '設問', '借代'], 0],
  ['文言文', '「學而時習之，不亦說乎？」的「說」通何字？', ['悅', '脫', '銳', '閱'], 0],
  ['白話文', '「閱讀是與作者對話的過程」強調閱讀的何種特質？', ['互動性與思考', '速度', '背誦', '娛樂'], 0],
  ['語文素養', '下列何者為形聲字？', ['河', '日', '上', '刃'], 0],
  ['字音字形', '「一曝十寒」的「曝」讀音為何？', ['ㄆㄨˋ', 'ㄅㄠˋ', 'ㄆㄡˋ', 'ㄅㄨˋ'], 0],
  ['成語', '「破釜沉舟」表現什麼？', ['背水一戰的決心', '烹飪技術', '節約用水', '優柔寡斷'], 0],
  ['修辭', '「風兒輕撫臉龐」運用何種修辭？', ['轉化', '譬喻', '誇飾', '對偶'], 0],
  ['文言文', '「溫故而知新」的「故」指什麼？', ['舊知識', '故意', '所以', '故鄉'], 0],
];

const GSAT_CHINESE_PASSAGES = [
  {
    section: '閱讀理解',
    passage: '<p>蘇軾〈水調歌頭〉：「明月幾時有？把酒問青天。不知天上宮闕，今夕是何年。我欲乘風歸去，又恐瓊樓玉宇，高處不勝寒。起舞弄清影，何似在人間。」</p><p>下闕：「人有悲歡離合，月有陰晴圓缺，此事古難全。但願人長久，千里共嬋娟。」</p>',
    qs: [
      ['「高處不勝寒」表現詞人什麼心理？', ['想上天又怕冷，內心矛盾', '非常想飛', '完全不想回人間', '對月無興趣'], 0],
      ['「但願人長久，千里共嬋娟」表達什麼？', ['對遠方親人的祝福', '對月的讚美', '對離別的怨恨', '對人生的失望'], 0],
      ['「此事古難全」的「此事」指什麼？', ['人的離合與月的圓缺', '上天與人間', '飲酒與作詩', '風與雨'], 0],
      ['全詞的風格為何？', ['豁達中有深情', '完全悲觀', '純粹諷刺', '只寫自然'], 0],
    ],
  },
  {
    section: '閱讀理解',
    passage: '<p>臺灣傳統建築中，閩南式建築講究裝飾，屋脊剪黏、交趾陶色彩繽紛；客家建築則注重防禦，土樓厚實堅固，展現團結互助精神。</p><p>近年文資保存意識興起，老屋再生讓傳統建築在現代生活中找到新定位。</p>',
    qs: [
      ['閩南式與客家建築的主要差異？', ['閩南重裝飾，客家重防禦', '閩南在北部', '客家用石材', '兩者相同'], 0],
      ['「剪黏」屬於哪種建築特色？', ['閩南式', '客家', '原住民', '日式'], 0],
      ['「老屋再生」的意義？', ['讓傳統建築在現代找到新用途', '全部拆除', '只供觀光', '禁止進入'], 0],
    ],
  },
];

function generateGsatChinese(count, seed) {
  const r = rng(seed);
  const units = [];
  let total = 0;

  for (let g = 0; g < GSAT_CHINESE_PASSAGES.length && total + GSAT_CHINESE_PASSAGES[g].qs.length <= count - 10; g++) {
    const p = GSAT_CHINESE_PASSAGES[g];
    const vi = (seed + g * 17) % 100;
    units.push({
      type: 'group', section: p.section,
      passage: p.passage.replace('臺灣', `臺灣（題組${vi}）`),
      questions: p.qs.map(([text, options, answer], qi) => ({
        text: `${text}（#${seed}-${g}-${qi}）`,
        options, answer,
        explanation: `依據題幹與文意判斷，答案為選項 ${answer + 1}。`,
      })),
    });
    total += p.qs.length;
  }

  const makeSingle = (idx) => {
    const t = GSAT_CHINESE_TEMPLATES[idx % GSAT_CHINESE_TEMPLATES.length];
    const vi = seed + idx * 13;
    return {
      type: 'single', section: t[0],
      text: `[題號 ${vi}] ${t[1]}`,
      options: t[2], answer: t[3],
      explanation: `本題考查 ${t[0]}，依語文素養判斷正解。`,
    };
  };

  fillToCount(units, count, makeSingle);
  return units.slice(0, count + 20).reduce((acc, u) => {
    const sz = u.type === 'group' ? u.questions.length : 1;
    if (countUnits(acc) + sz <= count) acc.push(u);
    return acc;
  }, []);
}

// ── GSAT 英文 ──────────────────────────────────────────────
const GSAT_ENGLISH_TEMPLATES = [
  ['文法', 'Not until he arrived _____ that he had forgotten his wallet.', ['did he realize', 'he realized', 'he realizes', 'has he realized'], 0],
  ['文法', 'The research paper, _____ was published last month, has received widespread attention.', ['which', 'who', 'whom', 'whose'], 0],
  ['字彙', 'The government implemented new policies to _____ economic growth.', ['stimulate', 'eliminate', 'postpone', 'withdraw'], 0],
  ['字彙', 'Her _____ to detail made her an excellent editor.', ['attention', 'attend', 'attentive', 'attending'], 0],
  ['閱讀', 'What does "sustainable" mean in environmental context?', ['Able to be maintained long-term', 'Very expensive', 'Temporarily useful', 'Completely new'], 0],
  ['文法', 'Had I known about the deadline, I _____ the application earlier.', ['would have submitted', 'will submit', 'submit', 'submitted'], 0],
  ['字彙', 'The lecture was so _____ that many students fell asleep.', ['monotonous', 'exciting', 'brief', 'informative'], 0],
  ['文法', 'It is essential that every student _____ on time.', ['be', 'is', 'was', 'being'], 0],
];

const GSAT_ENGLISH_PASSAGES = [
  {
    section: '閱讀理解',
    passage: '<p>Climate change is one of the most pressing issues of our time. Rising global temperatures have led to melting ice caps, rising sea levels, and more frequent extreme weather events. Scientists agree that human activities, particularly the burning of fossil fuels, are the primary drivers of this change.</p><p>Many countries have committed to reducing carbon emissions through international agreements. Individuals can also contribute by using public transportation, reducing waste, and supporting renewable energy sources.</p>',
    qs: [
      ['What is the main cause of climate change according to the passage?', ['Human activities', 'Natural cycles only', 'Solar radiation', 'Ocean currents'], 0],
      ['What can individuals do to help?', ['Use public transportation', 'Burn more fossil fuels', 'Ignore the problem', 'Increase waste'], 0],
      ['What have rising temperatures caused?', ['Melting ice caps', 'Colder winters everywhere', 'More forests', 'Less rain always'], 0],
    ],
  },
];

function generateGsatEnglish(count, seed) {
  const units = [];
  let total = 0;

  for (const p of GSAT_ENGLISH_PASSAGES) {
    if (total + p.qs.length > count - 10) break;
    units.push({
      type: 'group', section: p.section,
      passage: p.passage,
      questions: p.qs.map(([text, options, answer], qi) => ({
        text: `${text} (Q${seed}-${qi})`,
        options, answer,
        explanation: `Refer to the passage. Answer: option ${answer + 1}.`,
      })),
    });
    total += p.qs.length;
  }

  const makeSingle = (idx) => {
    const t = GSAT_ENGLISH_TEMPLATES[idx % GSAT_ENGLISH_TEMPLATES.length];
    return {
      type: 'single', section: t[0],
      text: `[Item ${seed + idx}] ${t[1]}`,
      options: t[2], answer: t[3],
      explanation: `GSAT English ${t[0]} — refer to grammar/vocabulary rules.`,
    };
  };

  fillToCount(units, count, makeSingle);
  return units.reduce((acc, u) => {
    const sz = u.type === 'group' ? u.questions.length : 1;
    if (countUnits(acc) + sz <= count) acc.push(u);
    return acc;
  }, []);
}

// ── 學測數學 A / B（高中程度）──────────────────────────────────
function fmtNum(n) {
  if (Number.isInteger(n)) return String(n);
  return String(Math.round(n * 100) / 100);
}

function generateGsatMathASingle(r, seed, idx) {
  const kind = (seed + idx * 17) % 14;
  const tag = `#${seed}-${idx}`;

  if (kind === 0) {
    const base = pick(r, [2, 3, 5]);
    const ans = randInt(r, 1, 5);
    const exp = 2 * ans - 1;
    const rhs = base ** exp;
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + 1, ans - 1, ans + 2]);
    return {
      type: 'single', section: '指數與對數',
      text: `若 ${base}^(2x-1) = ${rhs}，則 x = ? ${tag}`,
      options, answer,
      explanation: `${base}^(2x-1)=${base}^${exp}，故 2x-1=${exp}，x=${ans}。`,
    };
  }
  if (kind === 1) {
    const base = pick(r, [2, 3, 10]);
    const exp = randInt(r, 2, 4);
    const val = base ** exp;
    const { options, answer } = makeOptions(r, seed + idx, exp, [exp + 1, exp - 1, exp * 2]);
    return {
      type: 'single', section: '指數與對數',
      text: `log_${base} ${val} = ? ${tag}`,
      options: options.map(String), answer,
      explanation: `因 ${base}^${exp}=${val}，故 log_${base}${val}=${exp}。`,
    };
  }
  if (kind === 2) {
    const a1 = randInt(r, 1, 8);
    const d = randInt(r, 2, 6);
    const n = randInt(r, 5, 12);
    const ans = a1 + (n - 1) * d;
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + d, ans - d, a1 + n * d]);
    return {
      type: 'single', section: '數列',
      text: `等差數列首項 ${a1}，公差 ${d}，第 ${n} 項為何？ ${tag}`,
      options, answer,
      explanation: `a_${n} = ${a1} + (${n}-1)×${d} = ${ans}。`,
    };
  }
  if (kind === 3) {
    const a1 = randInt(r, 1, 4);
    const qv = randInt(r, 2, 3);
    const n = randInt(r, 3, 6);
    const ans = a1 * (qv ** (n - 1));
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + a1, ans / qv, a1 * n * qv]);
    return {
      type: 'single', section: '數列',
      text: `等比數列首項 ${a1}，公比 ${qv}，第 ${n} 項為何？ ${tag}`,
      options, answer,
      explanation: `a_${n} = ${a1}×${qv}^${n - 1} = ${ans}。`,
    };
  }
  if (kind === 4) {
    const triples = [[3, 4, 5], [5, 12, 13], [8, 15, 17]];
    const [p, q, h] = pick(r, triples);
    const ans = `${q}/${h}`;
    const { options, answer } = makeOptions(r, seed + idx, ans, [`${p}/${h}`, `${h}/${q}`, `${p}/${q}`]);
    return {
      type: 'single', section: '三角',
      text: `已知 sin θ = ${p}/${h}，且 θ 為第一象限角，則 cos θ = ? ${tag}`,
      options, answer,
      explanation: `cos θ = √(1-sin²θ) = ${q}/${h}。`,
    };
  }
  if (kind === 5) {
    const ans = 30;
    const { options, answer } = makeOptions(r, seed + idx, ans, [60, 45, 90]);
    return {
      type: 'single', section: '三角',
      text: `若 cos x = √3/2 且 0° < x < 90°，則 x = ?（度） ${tag}`,
      options: options.map(String), answer,
      explanation: `cos 30° = √3/2，故 x = 30°。`,
    };
  }
  if (kind === 6) {
    const h = randInt(r, 2, 6);
    const k = randInt(r, -3, 5);
    const ans = k;
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + 1, k + h, h * h + k]);
    return {
      type: 'single', section: '二次函數',
      text: `f(x) = x² - ${2 * h}x + ${h * h + k} 的最小值為何？ ${tag}`,
      options, answer,
      explanation: `配方得 f(x)=(x-${h})²+${k}，最小值為 ${k}。`,
    };
  }
  if (kind === 7) {
    const rad = randInt(r, 2, 7);
    const ans = rad;
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans * 2, ans + 1, ans * ans]);
    return {
      type: 'single', section: '圓',
      text: `圓 x² + y² = ${rad * rad} 的半徑為何？ ${tag}`,
      options, answer,
      explanation: `x²+y²=r²，半徑 r=${rad}。`,
    };
  }
  if (kind === 8) {
    const x = randInt(r, 1, 6);
    const y = randInt(r, 1, 8);
    const ans = Math.round(Math.sqrt(x * x + y * y));
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + 1, x + y, Math.abs(x - y)]);
    return {
      type: 'single', section: '向量',
      text: `向量 a = (${x}, ${y})，則 |a| = ? ${tag}`,
      options, answer,
      explanation: `|a| = √(${x}²+${y}²) = ${ans}。`,
    };
  }
  if (kind === 9) {
    const n = randInt(r, 4, 7);
    let fact = 1;
    for (let i = 2; i <= n; i++) fact *= i;
    const { options, answer } = makeOptions(r, seed + idx, fact, [fact + n, fact - n, n * (n - 1)]);
    return {
      type: 'single', section: '排列組合',
      text: `${n} 個不同物品排成一列，共有幾種排法？ ${tag}`,
      options, answer,
      explanation: `${n}! = ${fact}。`,
    };
  }
  if (kind === 10) {
    const n = randInt(r, 6, 10);
    const ans = (n * (n - 1)) / 2;
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + n, n * 2, n + 2]);
    return {
      type: 'single', section: '排列組合',
      text: `從 ${n} 人中選 2 人組成隊伍，有幾種選法？ ${tag}`,
      options, answer,
      explanation: `C(${n},2) = ${ans}。`,
    };
  }
  if (kind === 11) {
    const red = randInt(r, 2, 5);
    const white = randInt(r, 2, 4);
    const total = red + white;
    const ans = `${red}/${total}`;
    const { options, answer } = makeOptions(r, seed + idx, ans, [`${white}/${total}`, `${red}/${white}`, `1/${total}`]);
    return {
      type: 'single', section: '機率',
      text: `袋中有紅球 ${red} 顆、白球 ${white} 顆，隨機取 1 顆，取到紅球的機率為何？ ${tag}`,
      options, answer,
      explanation: `P(紅) = ${red}/(${red}+${white}) = ${ans}。`,
    };
  }
  if (kind === 12) {
    const vals = [randInt(r, 2, 8), randInt(r, 4, 10), randInt(r, 6, 12), randInt(r, 8, 14)];
    const mean = Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
    const { options, answer } = makeOptions(r, seed + idx, mean, [mean + 2, mean - 2, mean + 1]);
    return {
      type: 'single', section: '統計',
      text: `資料 ${vals.join('、')} 的平均數為何？ ${tag}`,
      options, answer,
      explanation: `平均 = (${vals.join('+')})/4 = ${mean}。`,
    };
  }
  const a = randInt(r, 2, 5);
  const b = randInt(r, 1, 4);
  const ans = a ** b;
  const { options, answer } = makeOptions(r, seed + idx, ans, [ans + a, a * b, ans - b]);
  return {
    type: 'single', section: '指數與對數',
    text: `化簡 ${a}^${b} = ? ${tag}`,
    options, answer,
    explanation: `${a}^${b} = ${ans}。`,
  };
}

function generateGsatMathBSingle(r, seed, idx) {
  const kind = (seed + idx * 19) % 12;
  const tag = `#${seed}-${idx}`;

  if (kind === 0) {
    const a1 = randInt(r, 2, 10);
    const d = randInt(r, 1, 5);
    const n = randInt(r, 4, 10);
    const ans = a1 + (n - 1) * d;
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + d, a1 + n, ans - d]);
    return {
      type: 'single', section: '數列',
      text: `等差數列 3, ${3 + d}, ${3 + 2 * d}, … 的第 ${n} 項為何？（首項 ${a1}，公差 ${d}） ${tag}`,
      options, answer,
      explanation: `a_${n} = ${a1} + (${n}-1)×${d} = ${ans}。`,
    };
  }
  if (kind === 1) {
    const a1 = randInt(r, 2, 4);
    const qv = 2;
    const n = randInt(r, 3, 5);
    const ans = a1 * (2 ** (n - 1));
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + a1, ans * 2, a1 * n]);
    return {
      type: 'single', section: '數列',
      text: `等比數列首項 ${a1}、公比 2，前 ${n} 項的第 ${n} 項為何？ ${tag}`,
      options, answer,
      explanation: `a_${n} = ${a1}×2^${n - 1} = ${ans}。`,
    };
  }
  if (kind === 2) {
    const vals = [randInt(r, 3, 9), randInt(r, 5, 11), randInt(r, 7, 13), randInt(r, 9, 15)].sort((a, b) => a - b);
    const median = (vals[1] + vals[2]) / 2;
    const { options, answer } = makeOptions(r, seed + idx, fmtNum(median), [fmtNum(vals[0]), fmtNum(vals[3]), fmtNum(vals[1])]);
    return {
      type: 'single', section: '統計',
      text: `資料 ${vals.join('、')} 的中位數為何？ ${tag}`,
      options, answer,
      explanation: `排序後中位數 = (${vals[1]}+${vals[2]})/2 = ${fmtNum(median)}。`,
    };
  }
  if (kind === 3) {
    const vals = [randInt(r, 2, 6), randInt(r, 4, 8), randInt(r, 6, 10), randInt(r, 8, 12)];
    const mean = Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
    const { options, answer } = makeOptions(r, seed + idx, mean, [mean + 3, mean - 1, vals[0]]);
    return {
      type: 'single', section: '統計',
      text: `某班 4 位同學成績為 ${vals.join('、')}，平均數為何？ ${tag}`,
      options, answer,
      explanation: `平均 = ${mean}。`,
    };
  }
  if (kind === 4) {
    const total = randInt(r, 4, 8);
    const fav = randInt(r, 1, total - 1);
    const ans = `${fav}/${total}`;
    const { options, answer } = makeOptions(r, seed + idx, ans, [`1/${total}`, `${total - fav}/${total}`, `${fav}/${total - fav}`]);
    return {
      type: 'single', section: '機率',
      text: `擲一枚公正骰子 ${total} 面（1~${total}），出現 1~${fav} 的機率為何？ ${tag}`,
      options, answer,
      explanation: `有利結果 ${fav} 種，機率 = ${ans}。`,
    };
  }
  if (kind === 5) {
    const r0 = randInt(r, 3, 8);
    const deg = randInt(r, 60, 120);
    const ans = Math.round(2 * Math.PI * r0 * deg / 360 * 100) / 100;
    const { options, answer } = makeOptions(r, seed + idx, fmtNum(ans), [fmtNum(ans + r0), fmtNum(2 * r0), fmtNum(Math.PI * r0)]);
    return {
      type: 'single', section: '幾何',
      text: `半徑 ${r0} 的圓，圓心角 ${deg}° 所對弧長為何？（π 取 3.14） ${tag}`,
      options, answer,
      explanation: `弧長 = 2πr × (${deg}/360) ≈ ${fmtNum(ans)}。`,
    };
  }
  if (kind === 6) {
    const base = pick(r, [2, 3, 5]);
    const exp = randInt(r, 2, 4);
    const val = base ** exp;
    const { options, answer } = makeOptions(r, seed + idx, val, [val + base, val - 1, base * exp]);
    return {
      type: 'single', section: '指數',
      text: `${base}^${exp} = ? ${tag}`,
      options, answer,
      explanation: `${base}^${exp} = ${val}。`,
    };
  }
  if (kind === 7) {
    const x1 = randInt(r, 1, 4);
    const y1 = randInt(r, 1, 4);
    const x2 = x1 + randInt(r, 2, 5);
    const y2 = y1 + randInt(r, 1, 3);
    const ans = fmtNum((y2 - y1) / (x2 - x1));
    const { options, answer } = makeOptions(r, seed + idx, ans, [fmtNum(Number(ans) + 1), fmtNum(x2 - x1), fmtNum(y2 - y1)]);
    return {
      type: 'single', section: '一次函數',
      text: `過點 (${x1},${y1}) 與 (${x2},${y2}) 的直線斜率為何？ ${tag}`,
      options, answer,
      explanation: `斜率 = (${y2}-${y1})/(${x2}-${x1}) = ${ans}。`,
    };
  }
  if (kind === 8) {
    const a = randInt(r, 2, 5);
    const b = randInt(r, 1, 8);
    const root = fmtNum(-b / a);
    const ans = `x > ${root}`;
    const { options, answer } = makeOptions(r, seed + idx, ans, [`x < ${root}`, `x = ${root}`, '無解']);
    return {
      type: 'single', section: '不等式',
      text: `解不等式 ${a}x + ${b} > 0。 ${tag}`,
      options, answer,
      explanation: `${a}x > ${-b}，兩邊同除以正數 ${a}，得 ${ans}。`,
    };
  }
  if (kind === 9) {
    const n = randInt(r, 1, 5);
    const sum = (n * (n + 1)) / 2;
    const { options, answer } = makeOptions(r, seed + idx, sum, [sum + n, n * n, sum - 1]);
    return {
      type: 'single', section: '數列',
      text: `求 1 + 2 + … + ${n} 的和。 ${tag}`,
      options, answer,
      explanation: `和 = ${n}(${n}+1)/2 = ${sum}。`,
    };
  }
  if (kind === 10) {
    const len = randInt(r, 5, 12);
    const wid = randInt(r, 3, 8);
    const ans = len * wid;
    const { options, answer } = makeOptions(r, seed + idx, ans, [2 * (len + wid), len + wid, ans + len]);
    return {
      type: 'single', section: '幾何',
      text: `長 ${len}、寬 ${wid} 的長方形面積為何？ ${tag}`,
      options, answer,
      explanation: `面積 = ${len}×${wid} = ${ans}。`,
    };
  }
  const p = randInt(r, 2, 4);
  const q = randInt(r, 5, 7);
  const ans = `${p}/${q}`;
  const { options, answer } = makeOptions(r, seed + idx, ans, [`${q}/${p}`, `${p + 1}/${q}`, `${p}/${q + 1}`]);
  return {
    type: 'single', section: '機率',
    text: `某班 ${q} 人中選 ${p} 人當幹部（不重複），若只看是否被選中，任一人被選機率為何？ ${tag}`,
    options, answer,
    explanation: `任一人被選機率 = ${p}/${q}。`,
  };
}

function generateGsatMathNonChoice(r, seed, idx, subject) {
  const kind = (seed + idx) % 3;
  const tag = `#${seed}-nc${idx}`;

  if (kind === 0) {
    const speed = randInt(r, 50, 80);
    const time = randInt(r, 2, 4);
    const dist = speed * time;
    return {
      type: 'non-choice', section: '非選擇題',
      text: `某車以時速 ${speed} 公里由 A 地出發，${time} 小時後到達 B 地。求 A、B 兩地距離，並寫出完整算式。 ${tag}`,
      answerText: `<p><strong>解：</strong></p><p>距離 = 速度 × 時間 = ${speed} × ${time} = ${dist}（公里）</p>`,
      explanation: '距離 = 速度 × 時間。',
    };
  }
  if (kind === 1) {
    const h = randInt(r, 2, 5);
    const k = randInt(r, -2, 4);
    const c = h * h + k;
    return {
      type: 'non-choice', section: '非選擇題',
      text: `已知 f(x) = x² - ${2 * h}x + ${c}，(1) 將 f(x) 配方；(2) 求最小值及發生時的 x 值。 ${tag}`,
      answerText: `<p><strong>解：</strong></p><p>f(x) = (x-${h})² + ${k}</p><p>最小值 ${k}，在 x = ${h} 時發生。</p>`,
      explanation: '二次函數配方後可讀出頂點坐標。',
    };
  }
  const a1 = randInt(r, 2, 5);
  const d = randInt(r, 2, 4);
  const n = randInt(r, 5, 8);
  const an = a1 + (n - 1) * d;
  const sum = (n * (a1 + an)) / 2;
  return {
    type: 'non-choice', section: '非選擇題',
    text: `等差數列首項 ${a1}、公差 ${d}，(1) 求第 ${n} 項；(2) 求前 ${n} 項和。 ${tag}`,
    answerText: `<p><strong>解：</strong></p><p>第 ${n} 項 = ${an}</p><p>前 ${n} 項和 = ${n}(${a1}+${an})/2 = ${sum}</p>`,
    explanation: '等差數列一般項與求和公式。',
  };
}

function generateGsatMathBank(count, seed, subject) {
  const r = rng(seed);
  const units = [];
  const nonChoiceCount = subject === 'mathA' ? 2 : 0;
  let total = 0;

  for (let i = 0; i < nonChoiceCount && total < count; i++) {
    units.push(generateGsatMathNonChoice(r, seed, i, subject));
    total += 1;
  }

  const makeSingle = subject === 'mathB'
    ? (idx) => generateGsatMathBSingle(r, seed, idx)
    : (idx) => generateGsatMathASingle(r, seed, idx);

  let idx = 0;
  while (total < count) {
    units.push(makeSingle(idx++));
    total += 1;
  }
  return units;
}

// ── 舊版簡易數學（保留供參考，分科測驗不使用）────────────────
function generateMathSingle(r, seed, idx, level) {
  const kind = (seed + idx) % 6;
  const sections = level === 'mathB'
    ? ['代數', '統計', '機率', '幾何']
    : ['代數', '幾何', '三角', '指數對數', '統計'];
  const section = sections[idx % sections.length];

  if (kind === 0) {
    const a = randInt(r, 2, 30);
    const b = randInt(r, 2, 20);
    const ans = a + b;
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + 1, ans - 1, a * b]);
    return { type: 'single', section, text: `計算 ${a} + ${b} = ?（#${seed}-${idx}）`, options, answer, explanation: `${a} + ${b} = ${ans}。` };
  }
  if (kind === 1) {
    const a = randInt(r, 2, 15);
    const b = randInt(r, 2, 12);
    const ans = a * b;
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + a, ans - b, a + b]);
    return { type: 'single', section, text: `計算 ${a} × ${b} = ?（#${seed}-${idx}）`, options, answer, explanation: `${a} × ${b} = ${ans}。` };
  }
  if (kind === 2) {
    const base = randInt(r, 3, 15);
    const h = randInt(r, 3, 12);
    const ans = (base * h) / 2;
    const { options, answer } = makeOptions(r, seed + idx, ans, [base * h, base + h, ans + 2]);
    return { type: 'single', section, text: `底 ${base}、高 ${h} 的三角形面積？（#${seed}-${idx}）`, options, answer, explanation: `面積 = ${base}×${h}÷2 = ${ans}。` };
  }
  if (kind === 3) {
    const x = randInt(r, 1, 10);
    const c = randInt(r, 1, 20);
    const ans = c - 2 * x;
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + 2, ans - 2, c + x]);
    return { type: 'single', section, text: `若 2x + y = ${c}，x = ${x}，則 y = ?（#${seed}-${idx}）`, options, answer, explanation: `y = ${c} - 2×${x} = ${ans}。` };
  }
  if (kind === 4) {
    const n = randInt(r, 5, 20);
    const total = randInt(r, 40, 100);
    const ans = Math.round(total * n / 100);
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + 1, ans - 1, total - ans]);
    return { type: 'single', section, text: `${total} 人中 ${n}% 參加社團，有多少人？（#${seed}-${idx}）`, options, answer, explanation: `${total}×${n}% = ${ans} 人。` };
  }
  const a = randInt(r, 2, 9);
  const ans = a * a;
  const { options, answer } = makeOptions(r, seed + idx, ans, [ans + a, ans - a, a + 1]);
  return { type: 'single', section, text: `計算 ${a}² = ?（#${seed}-${idx}）`, options, answer, explanation: `${a}² = ${ans}。` };
}

function generateMathNonChoice(r, seed, idx, level) {
  const kind = (seed + idx) % 3;
  if (kind === 0) {
    const speed = randInt(r, 40, 90);
    const time = randInt(r, 2, 6);
    const dist = speed * time;
    return {
      type: 'non-choice', section: '非選擇題',
      text: `小明以每小時 ${speed} 公里速度騎車 ${time} 小時，共騎幾公里？請寫算式與答案。（#${seed}-nc${idx}）`,
      answerText: `<p><strong>解：</strong></p><p>距離 = 速度 × 時間 = ${speed} × ${time} = ${dist}（公里）</p><p>答：共騎 ${dist} 公里</p>`,
      explanation: '距離 = 速度 × 時間。',
    };
  }
  if (kind === 1) {
    const a = randInt(r, 2, 8);
    const b = randInt(r, -5, 5);
    const c = randInt(r, -10, 10);
    const x1 = randInt(r, 1, 5);
    const x2 = x1 + randInt(r, 1, 4);
    const sum = x1 + x2;
    const prod = x1 * x2;
    return {
      type: 'non-choice', section: '非選擇題',
      text: `解方程式 x² - ${sum}x + ${prod} = 0。（#${seed}-nc${idx}）`,
      answerText: `<p><strong>解：</strong></p><p>x² - ${sum}x + ${prod} = (x - ${x1})(x - ${x2}) = 0</p><p>∴ x = ${x1} 或 x = ${x2}</p>`,
      explanation: '因式分解法解二次方程式。',
    };
  }
  const len = randInt(r, 5, 15);
  const wid = randInt(r, 3, 10);
  const area = len * wid;
  const peri = 2 * (len + wid);
  return {
    type: 'non-choice', section: '非選擇題',
    text: `長 ${len}、寬 ${wid} 的長方形，求面積與周長。（#${seed}-nc${idx}）`,
    answerText: `<p><strong>解：</strong></p><p>面積 = ${len} × ${wid} = ${area}</p><p>周長 = 2×(${len}+${wid}) = ${peri}</p>`,
    explanation: '長方形面積 = 長×寬，周長 = 2×(長+寬)。',
  };
}

function generateMathBank(count, seed, level) {
  return generateGsatMathBank(count, seed, level);
}

// ── GSAT 自然 ──────────────────────────────────────────────
const GSAT_SCIENCE_TOPICS = [
  { section: '物理', items: [
    ['下列何者為力的 SI 單位？', ['牛頓', '焦耳', '瓦特', '帕'], 0, '力的單位為牛頓（N）。'],
    ['光在真空中約每秒走多少公里？', ['30 萬', '3 萬', '3000', '300'], 0, '光速約 3×10⁸ m/s。'],
    ['電阻的單位為何？', ['歐姆', '伏特', '安培', '庫侖'], 0, '電阻單位為歐姆（Ω）。'],
  ]},
  { section: '化學', items: [
    ['下列何者為純物質？', ['蒸餾水', '空氣', '牛奶', '海水'], 0, '蒸餾水為純物質。'],
    ['莫耳的符號為何？', ['mol', 'g', 'L', 'M'], 0, '莫耳符號為 mol。'],
    ['下列何者為物理變化？', ['冰融化', '鐵生鏽', '燃燒', '發霉'], 0, '冰融化為物理變化。'],
  ]},
  { section: '生物', items: [
    ['光合作用主要在何處進行？', ['葉綠體', '粒線體', '細胞核', '液胞'], 0, '葉綠體進行光合作用。'],
    ['DNA 的全名為何？', ['去氧核糖核酸', '核糖核酸', '胺基酸', '蛋白質'], 0, 'DNA 為去氧核糖核酸。'],
    ['下列何者為消費者？', ['兔子', '草', '藻類', '真菌'], 0, '兔子為消費者。'],
  ]},
  { section: '地科', items: [
    ['地球由外而內第一層為何？', ['地殼', '地函', '地核', '大氣圈'], 0, '由外而內：地殼、地函、地核。'],
    ['颱風主要生成於？', ['熱帶海洋', '極地', '沙漠', '高海拔'], 0, '颱風生成於熱帶海洋。'],
    ['化石主要保存在？', ['沉積岩', '火成岩', '變質岩', '玄武岩'], 0, '化石多存於沉積岩。'],
  ]},
];

function generateGsatScience(count, seed) {
  const r = rng(seed);
  const makeSingle = (idx) => {
    const topic = GSAT_SCIENCE_TOPICS[idx % GSAT_SCIENCE_TOPICS.length];
    const item = topic.items[(idx + seed) % topic.items.length];
    return {
      type: 'single', section: topic.section,
      text: `[題號 ${seed + idx}] ${item[0]}`,
      options: item[1], answer: item[2],
      explanation: item[3],
    };
  };
  const units = [];
  fillToCount(units, count, makeSingle);
  return units;
}

// ── GSAT 社會 ──────────────────────────────────────────────
const GSAT_SOCIAL_TEMPLATES = [
  ['歷史', '二二八事件發生於哪一年？', ['1947', '1945', '1950', '1937'], 0, '1947 年發生二二八事件。'],
  ['地理', '臺灣最高的山脈為何？', ['玉山', '阿里山', '雪山', '合歡山'], 0, '玉山為臺灣最高峰。'],
  ['公民', '中華民國主權屬於誰？', ['國民全體', '總統', '立法院', '行政院'], 0, '主權屬於國民全體。'],
  ['歷史', '臺灣解嚴發生於哪一年？', ['1987', '1996', '2000', '1975'], 0, '1987 年解嚴。'],
  ['地理', '臺灣位於哪個大洋西岸？', ['太平洋', '大西洋', '印度洋', '北極洋'], 0, '臺灣位於太平洋西岸。'],
  ['公民', '下列何者屬於司法權？', ['法院', '總統府', '立法院', '行政院'], 0, '法院行使司法權。'],
  ['歷史', '科舉制度在哪個朝代確立？', ['隋朝', '漢朝', '唐朝', '宋朝'], 0, '隋朝確立科舉。'],
  ['地理', '全球暖化可能導致？', ['海平面上升', '海平面下降', '地震減少', '颱風消失'], 0, '暖化使海平面上升。'],
];

function generateGsatSocial(count, seed) {
  const makeSingle = (idx) => {
    const t = GSAT_SOCIAL_TEMPLATES[idx % GSAT_SOCIAL_TEMPLATES.length];
    return {
      type: 'single', section: t[0],
      text: `[題號 ${seed + idx}] ${t[1]}`,
      options: t[2], answer: t[3],
      explanation: t[4],
    };
  };
  const units = [];
  fillToCount(units, count, makeSingle);
  return units;
}

// ── AST 物理 ──────────────────────────────────────────────
const AST_PHYSICS_TEMPLATES = [
  ['力學', '牛頓第一運動定律又稱？', ['慣性定律', '加速度定律', '作用反作用', '萬有引力'], 0, '第一定律為慣性定律。'],
  ['力學', '動量守恆適用於？', ['孤立系統', '任何系統', '只有彈性碰撞', '只有非彈性'], 0, '孤立系統動量守恆。'],
  ['電磁', '庫侖定律描述？', ['靜電力', '磁場力', '重力', '浮力'], 0, '庫侖定律描述靜電力。'],
  ['波動', '聲波在空氣中屬於？', ['縱波', '橫波', '電磁波', '物質波'], 0, '聲波為縱波。'],
  ['近代物理', '光電效應支持？', ['光量子說', '波動說', '連續說', '熱說'], 0, '光電效應支持光量子說。'],
];

function generateAstPhysics(count, seed) {
  const makeSingle = (idx) => {
    const t = AST_PHYSICS_TEMPLATES[idx % AST_PHYSICS_TEMPLATES.length];
    return { type: 'single', section: t[0], text: `${t[1]}（${seed + idx}）`, options: t[2], answer: t[3], explanation: t[4] };
  };
  const units = [];
  fillToCount(units, count, makeSingle);
  return units;
}

// ── AST 化學 ──────────────────────────────────────────────
const AST_CHEMISTRY_TEMPLATES = [
  ['物質', '莫耳濃度 M 的定義？', ['莫耳數/公升', '公克/公升', '莫耳/公克', '公升/莫耳'], 0, 'M = mol/L。'],
  ['反應', '氧化還原反應中，被氧化者？', ['失去電子', '得到電子', '失去質子', '得到質子'], 0, '被氧化者失去電子。'],
  ['有機', '烷烴的通式？', ['CnH2n+2', 'CnH2n', 'CnH2n-2', 'CnHn'], 0, '烷烴通式 CnH2n+2。'],
  ['反應', '觸媒的作用是？', ['改變反應速率', '改變平衡常數', '增加產物量', '提供能量'], 0, '觸媒改變反應速率。'],
];

function generateAstChemistry(count, seed) {
  const makeSingle = (idx) => {
    const t = AST_CHEMISTRY_TEMPLATES[idx % AST_CHEMISTRY_TEMPLATES.length];
    return { type: 'single', section: t[0], text: `${t[1]}（${seed + idx}）`, options: t[2], answer: t[3], explanation: t[4] };
  };
  const units = [];
  fillToCount(units, count, makeSingle);
  return units;
}

// ── AST 生物 ──────────────────────────────────────────────
const AST_BIOLOGY_TEMPLATES = [
  ['細胞', '粒線體的主要功能？', ['呼吸作用', '光合作用', '蛋白質合成', 'DNA複製'], 0, '粒線體進行呼吸作用。'],
  ['遺傳', '孟德爾遺傳定律中，F1 表現？', ['顯性性狀', '隱性性狀', '中間型', '全隱性'], 0, 'F1 表現顯性。'],
  ['生態', '食物鏈中，分解者為？', ['細菌真菌', '草食動物', '肉食動物', '生產者'], 0, '細菌真菌為分解者。'],
  ['細胞', '有絲分裂最後期？', ['細胞質分裂', '染色體排列', '複製DNA', '配對'], 0, '最後為細胞質分裂。'],
];

function generateAstBiology(count, seed) {
  const makeSingle = (idx) => {
    const t = AST_BIOLOGY_TEMPLATES[idx % AST_BIOLOGY_TEMPLATES.length];
    return { type: 'single', section: t[0], text: `${t[1]}（${seed + idx}）`, options: t[2], answer: t[3], explanation: t[4] };
  };
  const units = [];
  fillToCount(units, count, makeSingle);
  return units;
}

// ── AST 歷史 ──────────────────────────────────────────────
const AST_HISTORY_TEMPLATES = [
  ['臺灣史', '荷蘭統治臺灣時期為？', ['1624-1662', '1683-1895', '1895-1945', '1945-1949'], 0, '1624-1662 荷治時期。'],
  ['中國史', '秦始皇統一六國後推行？', ['郡縣制', '分封制', '科舉制', '三省制'], 0, '秦推行郡縣制。'],
  ['世界史', '文藝復興起源於？', ['義大利', '英國', '法國', '德國'], 0, '文藝復興起源義大利。'],
  ['臺灣史', '《開羅宣言》要求日本歸還？', ['臺澎', '滿洲', '朝鮮', '琉球'], 0, '要求歸還臺澎。'],
];

function generateAstHistory(count, seed) {
  const makeSingle = (idx) => {
    const t = AST_HISTORY_TEMPLATES[idx % AST_HISTORY_TEMPLATES.length];
    return { type: 'single', section: t[0], text: `${t[1]}（${seed + idx}）`, options: t[2], answer: t[3], explanation: `${t[0]}相關考點。` };
  };
  const units = [];
  fillToCount(units, count, makeSingle);
  return units;
}

// ── AST 地理 ──────────────────────────────────────────────
const AST_GEOGRAPHY_TEMPLATES = [
  ['自然地理', '季風氣候的主要特徵？', ['夏吹海洋風、冬吹陸地風', '終年高溫', '終年乾燥', '四季分明'], 0, '季風夏海冬陸。'],
  ['人文地理', '都市化是指？', ['都市人口比例增加', '農村人口增加', '人口減少', '工業衰退'], 0, '都市人口比例上升。'],
  ['自然地理', '板塊交界處常發生？', ['地震', '無地震', '只有颱風', '只有乾旱'], 0, '板塊交界多地震。'],
  ['人文地理', '人口轉型第三階段特徵？', ['出生率下降、死亡率低', '高出生高死亡', '高出生低死亡', '低出生高死亡'], 0, '第三階段出生率降、死亡率低。'],
];

function generateAstGeography(count, seed) {
  const makeSingle = (idx) => {
    const t = AST_GEOGRAPHY_TEMPLATES[idx % AST_GEOGRAPHY_TEMPLATES.length];
    return { type: 'single', section: t[0], text: `${t[1]}（${seed + idx}）`, options: t[2], answer: t[3], explanation: `${t[0]}考點。` };
  };
  const units = [];
  fillToCount(units, count, makeSingle);
  return units;
}

// ── AST 公民 ──────────────────────────────────────────────
const AST_CIVICS_TEMPLATES = [
  ['憲法', '中華民國憲法規定國體為？', ['民主共和國', '君主立憲', '聯邦制', '單一制'], 0, '國體為民主共和國。'],
  ['政治', '五權分立的五權不包括？', ['外交權', '行政', '立法', '司法'], 0, '五權無外交權。'],
  ['法律', '民法與刑法的差異？', ['民法調整私權、刑法處罰犯罪', '完全相同', '民法處罰犯罪', '刑法調整契約'], 0, '民法私權、刑法犯罪。'],
  ['經濟', 'GDP 是指？', ['國內生產毛額', '國民所得', '出口總額', '政府支出'], 0, 'GDP 為國內生產毛額。'],
];

function generateAstCivics(count, seed) {
  const makeSingle = (idx) => {
    const t = AST_CIVICS_TEMPLATES[idx % AST_CIVICS_TEMPLATES.length];
    return { type: 'single', section: t[0], text: `${t[1]}（${seed + idx}）`, options: t[2], answer: t[3], explanation: `${t[0]}考點。` };
  };
  const units = [];
  fillToCount(units, count, makeSingle);
  return units;
}

// ── AST 數學甲/乙（進階） ──────────────────────────────────
function generateAstMathSingle(r, seed, idx, level) {
  const section = level === 'mathB' ? pick(r, ['統計', '排列組合', '幾何']) : pick(r, ['微積分', '向量', '機率統計']);
  const kind = (seed + idx) % 5;

  if (kind === 0) {
    const n = randInt(r, 3, 8);
    let fact = 1;
    for (let i = 2; i <= n; i++) fact *= i;
    const { options, answer } = makeOptions(r, seed + idx, fact, [fact + n, fact - 1, n * n]);
    return { type: 'single', section, text: `計算 ${n}! = ?（#${seed}-${idx}）`, options, answer, explanation: `${n}! = ${fact}。` };
  }
  if (kind === 1) {
    const a = randInt(r, 1, 5);
    const b = randInt(r, 1, 5);
    const ans = a * a + b * b;
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + 1, (a + b) * (a + b), a + b]);
    return { type: 'single', section, text: `若向量 |a|=${a}、|b|=${b} 且垂直，則 |a+b|² = ?（#${seed}-${idx}）`, options, answer, explanation: `|a+b|² = |a|²+|b|² = ${a*a}+${b*b} = ${ans}。` };
  }
  if (kind === 2) {
    const p = randInt(r, 2, 5);
    const ans = 1 / p;
    const { options, answer } = makeOptions(r, seed + idx, `1/${p}`, [`${p}`, `1/${p*p}`, `${p-1}/${p}`]);
    return { type: 'single', section, text: `∫₀¹ ${p}x^(${p-1}) dx = ?（#${seed}-${idx}）`, options, answer, explanation: `∫₀¹ ${p}x^(${p-1})dx = [x^${p}]₀¹ = 1。` };
  }
  if (kind === 3) {
    const n = randInt(r, 5, 10);
    const r2 = randInt(r, 2, 4);
    const ans = n * (n - 1) / 2;
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + n, n * r2, n + r2]);
    return { type: 'single', section, text: `${n} 人兩兩握手，共幾次？（#${seed}-${idx}）`, options, answer, explanation: `C(${n},2) = ${ans}。` };
  }
  const mean = randInt(r, 10, 30);
  const { options, answer } = makeOptions(r, seed + idx, mean, [mean + 2, mean - 2, mean * 2]);
  return { type: 'single', section, text: `資料 8,12,${mean},20 的平均數？（#${seed}-${idx}）`, options, answer, explanation: `平均 = (8+12+${mean}+20)/4 = ${mean}。` };
}

function generateAstMathBank(count, seed, level) {
  const r = rng(seed);
  const units = [];
  const nonChoiceCount = Math.min(10, Math.floor(count * 0.05));
  let total = 0;

  for (let i = 0; i < nonChoiceCount && total < count; i++) {
    units.push(generateMathNonChoice(r, seed, i + 100, level));
    total += 1;
  }

  let idx = 0;
  while (total < count) {
    units.push(generateAstMathSingle(r, seed, idx++, level));
    total += 1;
  }
  return units;
}

function dedupeUnits(units) {
  const seen = new Set();
  const out = [];
  for (const u of units) {
    const keys = unitQuestionKeys(u);
    if (keys.some(k => !k || seen.has(k))) continue;
    keys.forEach(k => seen.add(k));
    out.push(u);
  }
  return out;
}

function ensureUniqueUnits(units, count, makeUnit, baseIdx = 0) {
  let out = dedupeUnits(units);
  let idx = baseIdx;
  let guard = 0;
  const maxAttempts = count * 30;
  while (countUnits(out) < count && guard < maxAttempts) {
    const candidate = makeUnit(idx++);
    guard += 1;
    const keys = unitQuestionKeys(candidate);
    if (keys.some(k => !k)) continue;
    const seen = new Set();
    out.forEach(u => unitQuestionKeys(u).forEach(k => seen.add(k)));
    if (keys.some(k => seen.has(k))) continue;
    out.push(candidate);
  }
  return out;
}

// ── 主入口 ──────────────────────────────────────────────
const GENERATORS = {
  gsat: {
    chinese: generateGsatChinese,
    english: generateGsatEnglish,
    mathA: (c, s) => generateMathBank(c, s, 'mathA'),
    mathB: (c, s) => generateMathBank(c, s, 'mathB'),
    science: generateGsatScience,
    social: generateGsatSocial,
  },
  ast: {
    mathA: (c, s) => generateAstMathBank(c, s, 'mathA'),
    mathB: (c, s) => generateAstMathBank(c, s, 'mathB'),
    physics: generateAstPhysics,
    chemistry: generateAstChemistry,
    biology: generateAstBiology,
    history: generateAstHistory,
    geography: generateAstGeography,
    civics: generateAstCivics,
  },
};

export function generateBank(level, subject, count, baseSeed) {
  const gen = GENERATORS[level]?.[subject];
  if (!gen) return [];
  const seed = levelSubjectSeed(level, subject, baseSeed);
  let units = gen(count, seed);
  units = balanceAnswerDistribution(units, seed);

  if (level === 'gsat' && (subject === 'mathA' || subject === 'mathB')) {
    const makeUnit = subject === 'mathB'
      ? (idx) => generateGsatMathBSingle(rng(seed + idx), seed, idx)
      : (idx) => generateGsatMathASingle(rng(seed + idx), seed, idx);
    units = ensureUniqueUnits(units, count, makeUnit, units.length);
  } else if (level === 'gsat') {
    const makeUnit = (idx) => {
      const extra = gen(count + idx + 1, seed + idx * 997);
      return extra[extra.length - 1];
    };
    units = ensureUniqueUnits(units, count, makeUnit, 0);
  }

  units = dedupeUnits(units);
  const total = countUnits(units);
  if (total !== count) {
    const r = rng(seed + count);
    let fillIdx = count * 2;
    while (countUnits(units) < count && fillIdx < count * 40) {
      if (level === 'gsat' && subject === 'mathA') {
        units.push(generateGsatMathASingle(r, seed, fillIdx++));
      } else if (level === 'gsat' && subject === 'mathB') {
        units.push(generateGsatMathBSingle(r, seed, fillIdx++));
      } else {
        units.push({
          type: 'single', section: '補充',
          text: `[題號 ${seed + fillIdx}] 補充題 ${fillIdx}（seed ${seed}）`,
          options: ['A', 'B', 'C', 'D'], answer: r() % 4,
          explanation: '自動補充題。',
        });
        fillIdx += 1;
      }
    }
    units = dedupeUnits(units);
    while (countUnits(units) > count) units.pop();
  }
  if (countUnits(units) < count) {
    console.warn(`[${level}/${subject}] 唯一題目僅 ${countUnits(units)} 題，目標 ${count} 題`);
  }
  return units;
}
