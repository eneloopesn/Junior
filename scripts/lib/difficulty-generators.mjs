/**
 * 依 level × subject × difficulty 參數化生成完整題庫（每檔目標 200 獨特題）
 * 禁止「補充題」與 options:['A','B','C','D']
 */
import { questionKey, unitQuestionKeys } from './bank-utils.mjs';
import {
  JUNIOR_SCIENCE_FACTS,
  GSAT_SCIENCE_FACTS,
  JUNIOR_SOCIAL_FACTS,
  GSAT_SOCIAL_FACTS,
  JUNIOR_ENGLISH_VOCAB,
  GSAT_ENGLISH_VOCAB,
} from './level-fact-pools.mjs';

export const DIFFICULTIES = ['easy', 'normal', 'hard'];

// ── 共用工具 ──────────────────────────────────────────────
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

function fmtNum(n) {
  if (Number.isInteger(n)) return String(n);
  return String(Math.round(n * 100) / 100);
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
  const seen = new Set([correctStr]);
  const wrong = [];
  for (const d of distractors) {
    const s = String(d);
    if (!seen.has(s)) {
      seen.add(s);
      wrong.push(s);
    }
  }
  let k = 1;
  while (wrong.length < 3) {
    const s = String(correct) + '_alt' + k;
    // Prefer numeric near-misses when possible
    if (typeof correct === 'number' || /^-?\d+(\.\d+)?$/.test(correctStr)) {
      const n = Number(correctStr) + (k % 2 === 0 ? k : -k);
      const cand = String(n);
      if (!seen.has(cand)) {
        seen.add(cand);
        wrong.push(cand);
        k += 1;
        continue;
      }
    }
    if (!seen.has(s)) {
      seen.add(s);
      wrong.push(`選項變體${k}`);
    }
    k += 1;
  }
  const qiSeed = (seed + r()) >>> 0;
  return redistributeOptions(qiSeed, [correctStr, wrong[0], wrong[1], wrong[2]], 0);
}

function balanceAnswerDistribution(units, baseSeed) {
  let qi = 0;
  return units.map(unit => {
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

function levelSubjectSeed(level, subject, difficulty, baseSeed) {
  let h = baseSeed >>> 0;
  for (const ch of `${level}:${subject}:${difficulty}`) {
    h = (h * 31 + ch.charCodeAt(0)) & 0x7fffffff;
  }
  return h;
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

function ensureUnique(count, makeUnit, startIdx = 0) {
  const out = [];
  const seen = new Set();
  let idx = startIdx;
  let guard = 0;
  const maxAttempts = count * 200;
  while (out.length < count && guard < maxAttempts) {
    const candidate = makeUnit(idx++);
    guard += 1;
    if (!candidate || !candidate.text) continue;
    if (candidate.type === 'single') {
      if (!Array.isArray(candidate.options) || candidate.options.length !== 4) continue;
      if (candidate.options.every(o => /^[A-D]$/.test(String(o).trim()))) continue;
      if (/補充題/.test(candidate.text)) continue;
    }
    const keys = unitQuestionKeys(candidate);
    if (keys.some(k => !k || seen.has(k))) continue;
    if (keys.some(k => k.length < 8)) continue;
    keys.forEach(k => seen.add(k));
    out.push(candidate);
  }
  return out;
}

function diffScale(difficulty) {
  if (difficulty === 'easy') return { lo: 1, hi: 12, steps: 1, label: '基礎' };
  if (difficulty === 'hard') return { lo: 8, hi: 48, steps: 2, label: '綜合' };
  return { lo: 3, hi: 24, steps: 2, label: '應用' };
}

function withMeta(q, difficulty) {
  return { ...q, difficulty };
}

function nonChoiceQuota(level, subject) {
  const key = `${level}:${subject}`;
  const map = {
    'junior:math': 12,
    'gsat:mathA': 10,
    'ast:mathA': 12,
    'ast:mathB': 12,
    'ast:physics': 10,
    'ast:chemistry': 10,
    'ast:biology': 10,
  };
  return map[key] || 0;
}

// ── 人文題材池 ──────────────────────────────────────────────
const CHINESE_IDIOMS = [
  ['破釜沉舟', '背水一戰的決心', '烹飪技術', '節約用水', '優柔寡斷'],
  ['亡羊補牢', '及時補救還不算晚', '羊已經丟了', '不必修補', '等待機會'],
  ['一箭雙雕', '一舉兩得', '射箭比賽', '獵鷹很強', '浪費箭矢'],
  ['曲高和寡', '作品高深，能欣賞者少', '音樂動聽', '道路狹窄', '人數眾多'],
  ['鍥而不捨', '持續努力不間斷', '快速完成', '輕易放棄', '猶豫不決'],
  ['畫蛇添足', '多此一舉', '繪畫技巧', '喜歡蛇', '補充說明'],
  ['守株待兔', '妄想不勞而獲', '農忙季節', '打獵技術', '耐心等待'],
  ['掩耳盜鈴', '自欺欺人', '鈴鐺很響', '偷竊技巧', '保護聽力'],
  ['井底之蛙', '見識短淺', '喜歡青蛙', '住在井邊', '善於游泳'],
  ['狐假虎威', '仗勢欺人', '狐狸很聰明', '老虎很兇', '動物友誼'],
  ['刻舟求劍', '不知變通', '造船技術', '寶劍很貴', '河流很深'],
  ['朝三暮四', '反覆無常', '早餐豐盛', '計算錯誤', '猴子很多'],
  ['完璧歸趙', '原物歸還', '趙國很大', '璧玉很美', '外交失敗'],
  ['紙上談兵', '空談理論不切實際', '喜歡讀書', '軍事演習', '紙張品質'],
  ['臥薪嘗膽', '刻苦自勵、立志雪恥', '喜歡吃苦', '睡不好', '膽很大'],
  ['負荊請罪', '誠心認錯道歉', '荊棘很多', '請人治病', '背負重物'],
  ['四面楚歌', '陷入孤立無援', '唱歌好聽', '楚地風景', '戰爭勝利'],
  ['指鹿為馬', '顛倒黑白、混淆是非', '動物辨識', '騎馬技術', '養鹿專業'],
  ['投筆從戎', '棄文就武', '寫字很差', '喜歡軍隊', '丟掉筆'],
  ['杯弓蛇影', '疑神疑鬼、自己嚇自己', '喝酒過量', '弓很彎', '蛇很毒'],
  ['吹毛求疵', '故意挑剔小毛病', '頭髮很亂', '吹風很大', '求全責備正確'],
  ['對牛彈琴', '對不懂的人白費力氣', '音樂課', '養牛人家', '樂器練習'],
  ['囫圇吞棗', '不加細嚼、生吞活剝', '喜歡吃棗', '囫圇很大', '快速進食健康'],
  ['毛遂自薦', '自我推薦', '毛髮很多', '遂心如意', '推薦別人'],
  ['墨守成規', '固執守舊不知變通', '墨水很濃', '守規矩很好', '成規完善'],
  ['南轅北轍', '行動與目標相反', '南北方向', '馬車很快', '地圖錯誤'],
  ['拋磚引玉', '以淺見引出高見', '磚頭很重', '玉很貴', '拋棄廢物'],
  ['青出於藍', '學生勝過老師', '顏色很藍', '染料技術', '青草很多'],
  ['燃眉之急', '情勢非常緊急', '眉毛著火', '點燃蠟燭', '急救知識'],
  ['如魚得水', '處在適合自己的環境', '喜歡游泳', '水很清澈', '養魚專業'],
  ['塞翁失馬', '禍福相倚、壞事未必壞', '老人丟馬', '邊塞風景', '養馬技術'],
  ['三顧茅廬', '誠心誠意邀請', '茅屋很破', '拜訪三次剛好', '顧慮很多'],
  ['勢如破竹', '進展順利、節節勝利', '竹子很脆', '氣勢很大', '破竹技術'],
  ['水落石出', '真相大白', '水位下降', '石頭很大', '河床乾涸'],
  ['談虎色變', '一提到可怕事物就緊張', '老虎很兇', '臉色變黃', '談論動物'],
  ['提心吊膽', '極度擔心害怕', '心臟問題', '膽汁分泌', '提起重物'],
  ['同舟共濟', '同心協力共渡難關', '坐船旅行', '濟南城市', '同班同學'],
  ['望梅止渴', '用空想安慰自己', '梅子很酸', '口很渴', '望見梅花'],
  ['削足適履', '不合理遷就', '鞋子太小', '腳太大', '削減預算'],
  ['一丘之貉', '同類的壞人', '山丘風景', '貉很可愛', '一丘很大'],
];

const CHINESE_PHONETICS = [
  ['曝', '一曝十寒', 'ㄆㄨˋ', 'ㄅㄠˋ', 'ㄆㄡˋ', 'ㄅㄨˋ'],
  ['參', '參差不齊', 'ㄘㄣ', 'ㄘㄢ', 'ㄕㄣ', 'ㄙㄣ'],
  ['載', '載歌載舞', 'ㄗㄞˋ', 'ㄗㄞˇ', 'ㄗㄞ', 'ㄘㄞˊ'],
  ['塞', '閉塞', 'ㄙㄜˋ', 'ㄙㄞ', 'ㄙㄞˋ', 'ㄙㄜ'],
  ['行', '德行', 'ㄒㄧㄥˋ', 'ㄒㄧㄥˊ', 'ㄏㄤˊ', 'ㄏㄤˋ'],
  ['強', '勉強', 'ㄑㄧㄤˇ', 'ㄑㄧㄤˊ', 'ㄐㄧㄤˋ', 'ㄑㄧㄤˋ'],
  ['差', '出差', 'ㄔㄞ', 'ㄔㄚ', 'ㄘ', 'ㄔㄚˋ'],
  ['樂', '音樂', 'ㄩㄝˋ', 'ㄌㄜˋ', 'ㄧㄠˋ', 'ㄌㄨㄛˋ'],
  ['長', '生長', 'ㄓㄤˇ', 'ㄔㄤˊ', 'ㄓㄤˋ', 'ㄔㄤˇ'],
  ['朝', '朝代', 'ㄔㄠˊ', 'ㄓㄠ', 'ㄓㄠˋ', 'ㄔㄠ'],
  ['惡', '厭惡', 'ㄨˋ', 'ㄜˋ', 'ㄜˇ', 'ㄨˋˋ'],
  ['會', '會計', 'ㄎㄨㄞˋ', 'ㄏㄨㄟˋ', 'ㄏㄨㄟˇ', 'ㄍㄨㄟˋ'],
  ['薄', '薄弱', 'ㄅㄛˊ', 'ㄅㄠˊ', 'ㄅㄛˋ', 'ㄅㄠˋ'],
  ['度', '揣度', 'ㄉㄨㄛˊ', 'ㄉㄨˋ', 'ㄉㄨㄛˋ', 'ㄉㄨˊ'],
  ['奇', '奇數', 'ㄐㄧ', 'ㄑㄧˊ', 'ㄐㄧˊ', 'ㄑㄧ'],
  ['率', '效率', 'ㄌㄩˋ', 'ㄕㄨㄞˋ', 'ㄌㄨˋ', 'ㄕㄨㄞˇ'],
  ['給', '給與', 'ㄐㄧˇ', 'ㄍㄟˇ', 'ㄐㄧˋ', 'ㄍㄟˋ'],
  ['識', '博聞強識', 'ㄓˋ', 'ㄕˋ', 'ㄕˊ', 'ㄓˊ'],
  ['傳', '傳記', 'ㄓㄨㄢˋ', 'ㄔㄨㄢˊ', 'ㄓㄨㄢˇ', 'ㄔㄨㄢˋ'],
  ['處', '處理', 'ㄔㄨˇ', 'ㄔㄨˋ', 'ㄔㄨ', 'ㄓㄨˇ'],
  ['倒', '倒置', 'ㄉㄠˋ', 'ㄉㄠˇ', 'ㄉㄠ', 'ㄊㄠˋ'],
  ['空', '空白', 'ㄎㄨㄥˋ', 'ㄎㄨㄥ', 'ㄎㄨㄥˇ', 'ㄍㄨㄥ'],
  ['中', '中肯', 'ㄓㄨㄥˋ', 'ㄓㄨㄥ', 'ㄓㄨㄥˇ', 'ㄓㄨㄥˊ'],
  ['和', '唱和', 'ㄏㄜˋ', 'ㄏㄜˊ', 'ㄏㄨㄛˊ', 'ㄏㄨˊ'],
  ['著', '著名', 'ㄓㄨˋ', 'ㄓㄠˊ', 'ㄓㄜ˙', 'ㄓㄨㄛˊ'],
];

const RHETORIC = [
  ['時間就是金錢', '譬喻', '誇飾', '設問', '借代'],
  ['風兒輕撫臉龐', '轉化', '譬喻', '誇飾', '對偶'],
  ['飛流直下三千尺', '誇飾', '譬喻', '設問', '借代'],
  ['紅豆生南國', '借代（象徵）', '誇飾', '設問', '排比'],
  ['問君能有幾多愁？', '設問', '譬喻', '誇飾', '對偶'],
  ['兩個黃鸝鳴翠柳', '對偶', '誇飾', '設問', '借代'],
  ['感時花濺淚', '轉化', '誇飾', '排比', '設問'],
  ['白髮三千丈', '誇飾', '譬喻', '借代', '對偶'],
  ['床前明月光', '摹寫', '誇飾', '設問', '排比'],
  ['山河破碎風飄絮', '譬喻', '設問', '借代', '對偶'],
  ['天下興亡，匹夫有責', '映襯', '誇飾', '設問', '轉化'],
  ['落紅不是無情物', '轉化', '誇飾', '借代', '設問'],
  ['大珠小珠落玉盤', '摹寫／譬喻', '設問', '對偶', '借代'],
  ['千山鳥飛絕', '誇飾', '設問', '轉化', '借代'],
  ['春風又綠江南岸', '轉化', '誇飾', '設問', '排比'],
  ['月落烏啼霜滿天', '摹寫', '設問', '借代', '誇飾'],
  ['忽如一夜春風來', '譬喻', '設問', '對偶', '借代'],
  ['桃花潭水深千尺', '誇飾', '設問', '轉化', '借代'],
  ['孤帆遠影碧空盡', '摹寫', '誇飾', '設問', '排比'],
  ['烽火連三月', '誇飾', '設問', '借代', '轉化'],
];

const CLASSIC_LINES = [
  ['學而時習之，不亦說乎？', '說', '悅', '脫', '銳', '閱', '「說」通「悅」，喜悅。'],
  ['溫故而知新', '故', '舊知識', '故意', '所以', '故鄉', '「故」指舊有的知識。'],
  ['三人行，必有我師焉', '出處', '論語', '孟子', '老子', '史記', '出自《論語》。'],
  ['己所不欲，勿施於人', '意涵', '推己及人', '自私自利', '勉強他人', '獨善其身', '自己不想要的勿加諸別人。'],
  ['有朋自遠方來，不亦樂乎？', '強調', '交友之樂', '遠行辛苦', '學習壓力', '金錢往來', '遠方來的朋友令人快樂。'],
  ['知之者不如好之者', '比較', '愛好勝過僅知道', '知道最好', '練習最重要', '考試第一', '興趣比知道更進一步。'],
  ['敏而好學，不恥下問', '態度', '勤學謙虛', '驕傲自滿', '閉門造車', '只問老師', '勤勉好學且不恥下問。'],
  ['歲寒，然後知松柏之後凋', '比喻', '困境見節操', '天氣很冷', '松柏常綠', '秋天落葉', '艱難時才顯品格。'],
  ['君子坦蕩蕩，小人長戚戚', '對比', '君子心胸開闊', '君子很忙', '小人快樂', '兩者相同', '君子與小人心態不同。'],
  ['工欲善其事，必先利其器', '道理', '先備好工具', '先休息', '先找人', '先放棄', '要把事做好須先備工具。'],
  ['學而不思則罔', '結果', '迷惑無所得', '成績很好', '一定成功', '不必思考', '只學不思會迷惘。'],
  ['見賢思齊焉', '態度', '向賢者看齊', '嫉妒賢者', '疏遠賢者', '批評賢者', '看到賢者就想看齊。'],
  ['不患人之不己知', '重點', '不怕不被了解', '怕沒名聲', '怕考試', '怕朋友', '不擔心別人不知自己。'],
  ['言必信，行必果', '品格', '守信果決', '多言少行', '隨機應變', '只說不做', '說話守信、行動果決。'],
  ['貧而無諂，富而無驕', '修養', '貧不諂富不驕', '貧可諂', '富應驕', '無關修養', '貧富皆應有節操。'],
  ['志士仁人，無求生以害仁', '價值', '仁義重於生命', '求生第一', '金錢至上', '名利並重', '不因求生傷害仁德。'],
  ['欲速則不達', '警示', '急躁反難成功', '越快越好', '慢慢一定失敗', '速度無關', '一味求快反而不成。'],
  ['過猶不及', '中庸', '過分與不足皆不宜', '越多越好', '越少越好', '剛好就錯', '過與不及都不妥。'],
  ['名不正則言不順', '邏輯', '名分正當言辭才順', '名字很重要', '不必名分', '只重結果', '名分不正則說話不順。'],
  ['知恥近乎勇', '德行', '知恥接近勇敢', '不知恥最好', '勇氣無關', '恥辱可貴', '懂得羞恥接近勇敢。'],
];

const ENGLISH_VERBS = [
  ['go', 'goes', 'going', 'went', 'gone'],
  ['study', 'studies', 'studying', 'studied', 'studied'],
  ['play', 'plays', 'playing', 'played', 'played'],
  ['write', 'writes', 'writing', 'wrote', 'written'],
  ['read', 'reads', 'reading', 'read', 'read'],
  ['teach', 'teaches', 'teaching', 'taught', 'taught'],
  ['buy', 'buys', 'buying', 'bought', 'bought'],
  ['make', 'makes', 'making', 'made', 'made'],
  ['take', 'takes', 'taking', 'took', 'taken'],
  ['come', 'comes', 'coming', 'came', 'come'],
  ['begin', 'begins', 'beginning', 'began', 'begun'],
  ['choose', 'chooses', 'choosing', 'chose', 'chosen'],
  ['drive', 'drives', 'driving', 'drove', 'driven'],
  ['eat', 'eats', 'eating', 'ate', 'eaten'],
  ['find', 'finds', 'finding', 'found', 'found'],
  ['give', 'gives', 'giving', 'gave', 'given'],
  ['know', 'knows', 'knowing', 'knew', 'known'],
  ['leave', 'leaves', 'leaving', 'left', 'left'],
  ['speak', 'speaks', 'speaking', 'spoke', 'spoken'],
  ['think', 'thinks', 'thinking', 'thought', 'thought'],
];

const ENGLISH_VOCAB = [
  ['protect', 'protect the environment', 'destroy', 'ignore', 'forget'],
  ['deadline', 'the last day to finish', 'a line on paper', 'a type of fish', 'a school subject'],
  ['volunteer', 'someone who helps without pay', 'a paid worker', 'a tourist', 'a manager'],
  ['recycle', 'use again', 'throw away', 'buy new', 'break'],
  ['library', 'a place to borrow books', 'a restaurant', 'a stadium', 'a garage'],
  ['sustainable', 'able to be maintained long-term', 'very expensive', 'temporary', 'brand-new'],
  ['monotonous', 'boring and repetitive', 'exciting', 'brief', 'colorful'],
  ['stimulate', 'encourage growth or activity', 'eliminate', 'postpone', 'withdraw'],
  ['attention', 'careful notice', 'attend', 'attentive', 'attending'],
  ['essential', 'absolutely necessary', 'optional', 'harmful', 'rare'],
  ['evidence', 'proof that something is true', 'opinion', 'rumor', 'guess'],
  ['efficient', 'working well without waste', 'lazy', 'noisy', 'empty'],
  ['persuade', 'convince someone', 'ignore', 'confuse', 'forbid'],
  ['accurate', 'correct and exact', 'vague', 'late', 'loud'],
  ['benefit', 'an advantage or gain', 'a loss', 'a problem', 'a delay'],
  ['challenge', 'a difficult task', 'an easy job', 'a reward', 'a gift'],
  ['compare', 'examine similarities', 'hide', 'destroy', 'ignore'],
  ['contribute', 'give or add to something', 'remove', 'steal', 'refuse'],
  ['decrease', 'become smaller', 'increase', 'remain', 'explode'],
  ['improve', 'make better', 'worsen', 'stop', 'copy'],
  ['observe', 'watch carefully', 'ignore', 'guess', 'sleep'],
  ['predict', 'say what will happen', 'remember', 'forget', 'copy'],
  ['reduce', 'make less', 'enlarge', 'keep', 'double'],
  ['require', 'need something', 'refuse', 'dislike', 'avoid'],
  ['solution', 'an answer to a problem', 'a question', 'a mistake', 'a delay'],
];

const AST_HISTORY = [
  ['春秋戰國時期「百家爭鳴」反映什麼現象？', '思想文化多元發展', '軍事完全統一', '商業停滯', '文字消失', '諸子百家並起。'],
  ['秦朝統一後推行的重要制度之一是？', '中央集權與郡縣制', '封建分封擴大', '取消文字', '廢除法律', '秦行郡縣、中央集權。'],
  ['漢武帝採納董仲舒建議，主要影響是？', '獨尊儒術', '全面廢儒', '只重法家', '取消考試', '獨尊儒術影響深遠。'],
  ['唐代對外交流興盛的代表城市是？', '長安', '僅有洛陽無關', '只限泉州', '只限廣州無關其他', '長安為國際都會。'],
  ['明清海禁政策的主要目的傾向？', '加強沿海控管', '鼓勵民間海外貿易最大化', '放棄海防', '遷都海外', '海禁重在控管。'],
  ['鴉片戰爭後簽訂南京條約，中國被迫？', '開放通商口岸等', '立刻工業化成功', '收回全部利權', '取消外交', '南京條約開放口岸等。'],
  ['辛亥革命的直接結果之一是？', '結束帝制、建立民國', '恢復科舉', '恢復分封', '取消政黨', '辛亥革命結束帝制。'],
  ['五四運動的重要口號包含？', '民主與科學', '恢復帝制', '鎖國', '廢除學校', '德先生與賽先生。'],
  ['冷戰時期兩大陣營大致是？', '美蘇對峙', '英法聯盟唯一', '中日同盟唯一', '無對立', '冷戰以美蘇為核心。'],
  ['臺灣戰後經濟發展常被稱為？', '經濟奇蹟（出口導向等）', '完全農業停滯', '無工業', '只靠礦業', '戰後出口導向成長。'],
];

const AST_GEO = [
  ['地圖上的等高線越密集表示？', '坡度越陡', '坡度越緩', '海拔一定最低', '一定是平原', '等高線密則陡。'],
  ['熱帶雨林氣候的典型特徵是？', '高溫多雨', '終年酷寒', '極度乾燥', '四季分明如溫帶', '熱帶雨林高溫多雨。'],
  ['板塊隱沒帶常伴隨？', '地震與火山活動', '完全無地震', '只有沙漠', '極光必現', '隱沒帶多地震火山。'],
  ['城市化的常見影響包含？', '土地利用改變與熱島效應', '人口必減', '農業面積必增', '無交通問題', '城市化改變土地利用。'],
  ['季風的形成主要與？', '海陸熱力性質差異', '月球盈虧唯一', '地磁反轉唯一', '潮汐唯一', '季風與海陸差異有關。'],
  ['永續發展強調？', '滿足當代需求且不損後代', '只顧當代消耗', '完全停止開發', '只重經濟無視環境', '永續兼顧世代。'],
  ['GIS 的主要功能是？', '空間資料分析與展示', '只聽音樂', '只做文字排版', '取代所有實驗', 'GIS 處理空間資訊。'],
  ['臺灣西南沿海常見的產業地景包含？', '養殖漁業與鹽田等', '極地冰原', '熱帶雨林唯一', '沙漠綠洲唯一', '西南沿海多養殖等。'],
  ['人口金字塔呈底寬頂窄常表示？', '年輕人口比例較高', '高齡化極嚴重', '人口零增長唯一', '無出生', '底寬表示幼年多。'],
  ['全球暖化可能導致？', '海平面上升等風險', '極地擴大', '無氣候影響', '火山消失', '暖化與海平面上升相關。'],
];

function makeChineseQuestion(r, seed, idx, difficulty, level) {
  const isJunior = level === 'junior';
  const idioms = isJunior ? CHINESE_IDIOMS.slice(0, 28) : CHINESE_IDIOMS.slice(8);
  const phonetics = isJunior ? CHINESE_PHONETICS.slice(0, 18) : CHINESE_PHONETICS.slice(6);
  const rhetoric = isJunior ? RHETORIC.slice(0, 14) : RHETORIC.slice(5);
  const classics = isJunior ? CLASSIC_LINES.slice(0, 14) : CLASSIC_LINES.slice(5);
  const tone = difficulty === 'easy' ? '基礎' : difficulty === 'hard' ? '進階綜合' : '應用理解';
  const levelTag = isJunior ? '國中會考' : '高中學測';
  const juniorThemes = [
    ['閱讀能拓展視野', '拓展視野', '只為考試分數', '打發時間', '取代所有經驗'],
    ['寫作要先確立主旨', '先有清楚中心思想', '堆砌成語即可', '越長越好', '不必修改'],
    ['標點能幫助語意表達', '正確使用標點有助理解', '標點可完全省略', '只用逗號', '標點無作用'],
    ['摘要應抓住關鍵訊息', '保留核心、刪去枝節', '逐字抄錄全文', '只抄第一句', '完全改寫無關內容'],
    ['好朋友應彼此尊重', '相互尊重與傾聽', '只顧自己', '嘲笑對方', '不必溝通'],
    ['觀察生活能豐富寫作素材', '從生活取材', '只能抄範文', '不必觀察', '只背佳句'],
    ['朗讀有助掌握文章節奏', '感受語氣與停頓', '只求大聲', '不必理解', '只讀註解'],
  ];
  const gsatThemes = [
    ['好文章能引發共鳴', '產生相同感受', '聲音變大', '意見衝突', '完全無理解'],
    ['數位時代仍需深度閱讀', '重視理解與思辨', '不必閱讀', '只看短影音即可', '紙本已無價值'],
    ['議論需有論據支撐', '主張須有理由與證據', '只要語氣強硬', '引用越多越好不管相關', '結論可無前提'],
    ['文本互文能深化詮釋', '連結相關文本以豐富理解', '只需看標題', '拒絕比較', '只背作者生平'],
    ['批判思考強調檢視前提', '檢視假設與推論是否成立', '全盤接受權威', '只看結論', '拒絕證據'],
    ['修辭辨識有助鑑賞風格', '認識表達策略', '只背術語即可', '與理解無關', '可完全忽略'],
    ['文化語境影響文本解讀', '結合時空背景理解', '只看字面', '不必查證', '只看作者名氣'],
  ];
  const themes = isJunior ? juniorThemes : gsatThemes;

  let cursor = 0;
  // 1) 成語釋義（每則一次）
  if (idx < cursor + idioms.length) {
    const [idiom, correct, w1, w2, w3] = idioms[idx - cursor];
    const stem = isJunior
      ? `「${idiom}」的意思最接近下列何者？`
      : `語文素養：「${idiom}」最恰當的詮釋是？`;
    return withMeta({
      type: 'single', section: '成語',
      text: `【${levelTag}・${tone}】${stem}`,
      options: [correct, w1, w2, w3], answer: 0,
      explanation: `「${idiom}」意指「${correct}」。`,
    }, difficulty);
  }
  cursor += idioms.length;
  // 2) 成語運用（與釋義題幹不同，可再出一輪）
  if (idx < cursor + idioms.length) {
    const [idiom, correct, w1, w2, w3] = idioms[idx - cursor];
    return withMeta({
      type: 'single', section: '成語',
      text: `【${levelTag}・${tone}】下列哪一情況最適合用「${idiom}」形容？`,
      options: [`出現「${correct}」的情形`, w1, w2, w3], answer: 0,
      explanation: `「${idiom}」用於「${correct}」。`,
    }, difficulty);
  }
  cursor += idioms.length;
  if (idx < cursor + phonetics.length) {
    const [ch, phrase, correct, w1, w2, w3] = phonetics[idx - cursor];
    return withMeta({
      type: 'single', section: '字音字形',
      text: `【${levelTag}・${tone}】「${phrase}」中的「${ch}」讀音何者正確？`,
      options: [correct, w1, w2, w3], answer: 0,
      explanation: `「${ch}」在「${phrase}」中讀作 ${correct}。`,
    }, difficulty);
  }
  cursor += phonetics.length;
  if (idx < cursor + rhetoric.length) {
    const [line, correct, w1, w2, w3] = rhetoric[idx - cursor];
    return withMeta({
      type: 'single', section: '修辭',
      text: `【${levelTag}・${tone}】「${line}」主要使用哪種修辭？`,
      options: [correct, w1, w2, w3], answer: 0,
      explanation: `「${line}」主要運用「${correct}」。`,
    }, difficulty);
  }
  cursor += rhetoric.length;
  if (idx < cursor + classics.length) {
    const [line, focus, correct, w1, w2, w3, expl] = classics[idx - cursor];
    return withMeta({
      type: 'single', section: '文言文',
      text: `【${levelTag}・${tone}】「${line}」中關於「${focus}」的理解何者正確？`,
      options: [correct, w1, w2, w3], answer: 0,
      explanation: expl,
    }, difficulty);
  }
  cursor += classics.length;
  if (idx < cursor + themes.length) {
    const t = themes[idx - cursor];
    return withMeta({
      type: 'single', section: '白話文',
      text: `【${levelTag}・${tone}】下列對「${t[0]}」的詮釋，何者最適切？`,
      options: [t[1], t[2], t[3], t[4]], answer: 0,
      explanation: `主旨側重「${t[1]}」。`,
    }, difficulty);
  }
  cursor += themes.length;
  // 補題：字形／詞義辨識（參數化，題幹含不同字詞）
  const pairs = isJunior
    ? [['再', '在', '表示重複用「再」'], ['的', '得', '連接動詞與補語常用「得」'], ['辨', '辦', '辨別用「辨」'], ['合', '和', '合併用「合」'], ['做', '作', '具體動作常用「做」']]
    : [['必須', '必需', '事理上一定要用「必須」'], ['啟事', '啟示', '刊登告知用「啟事」'], ['反映', '反應', '呈現問題用「反映」'], ['權利', '權力', '法律上得主張者為「權利」'], ['學力', '學歷', '學習能力為「學力」']];
  const p = pairs[(idx - cursor) % pairs.length];
  const n = Math.floor((idx - cursor) / pairs.length) + 1;
  return withMeta({
    type: 'single', section: '字音字形',
    text: `【${levelTag}・${tone}】辨字組 ${n}：「${p[0]}／${p[1]}」——${p[2]}，正確應選？`,
    options: [p[0], p[1], `${p[0]}${p[1]}`, '兩者皆可任意'], answer: 0,
    explanation: p[2],
  }, difficulty);
}

function makeEnglishQuestion(r, seed, idx, difficulty, level) {
  const isJunior = level === 'junior';
  const hardPrefix = difficulty === 'hard' ? 'Advanced: ' : difficulty === 'normal' ? 'Practice: ' : 'Basic: ';
  const vocab = isJunior ? JUNIOR_ENGLISH_VOCAB : GSAT_ENGLISH_VOCAB;
  const places = isJunior
    ? ['school', 'the library', 'the park', 'class', 'home', 'the museum', 'the station']
    : ['the laboratory', 'campus', 'the conference', 'the archive', 'the seminar'];

  // 系統化：動詞×地點（easy）、完成式、字彙、條件句／關係子句、閱讀
  const verbCount = ENGLISH_VERBS.length * places.length;
  if (difficulty === 'easy' && idx < verbCount) {
    const v = ENGLISH_VERBS[idx % ENGLISH_VERBS.length];
    const place = places[Math.floor(idx / ENGLISH_VERBS.length) % places.length];
    const [base, third, ing, past] = v;
    const text = isJunior
      ? `${hardPrefix}Amy _____ to ${place} every day. (verb: ${base})`
      : `${hardPrefix}The researcher _____ toward ${place} every morning. (verb: ${base})`;
    return withMeta({
      type: 'single', section: '文法',
      text,
      options: [third, base, ing, past], answer: 0,
      explanation: `第三人稱單數現在式用 ${third}。`,
    }, difficulty);
  }

  let offset = difficulty === 'easy' ? verbCount : 0;
  if (idx < offset + ENGLISH_VERBS.length) {
    const v = ENGLISH_VERBS[idx - offset];
    const [base, third, ing] = v;
    if (difficulty === 'hard' && isJunior) {
      return withMeta({
        type: 'single', section: '文法',
        text: `${hardPrefix}The report was _____ by the students yesterday. (verb: ${base})`,
        options: [v[4], ing, base, third], answer: 0,
        explanation: `被動語態：be + p.p.，答案為 ${v[4]}。`,
      }, difficulty);
    }
    if (difficulty === 'hard' && !isJunior) {
      return withMeta({
        type: 'single', section: '文法',
        text: `${hardPrefix}Not until yesterday _____ how important it was to ${base} carefully.`,
        options: ['did he realize', 'he realized', 'he realizes', 'has he realized'], answer: 0,
        explanation: 'Not until 置於句首時需倒裝。',
      }, difficulty);
    }
    const text = isJunior
      ? `${hardPrefix}They have _____ the ${base} homework already.`
      : `${hardPrefix}Scholars have _____ the ${base} proposal already.`;
    return withMeta({
      type: 'single', section: '文法',
      text,
      options: [v[4], ing, base, third], answer: 0,
      explanation: `現在完成式 have + p.p.，答案為 ${v[4]}。`,
    }, difficulty);
  }
  offset += ENGLISH_VERBS.length;

  if (idx < offset + vocab.length) {
    const [word, correct, w1, w2, w3] = vocab[idx - offset];
    const ctx = isJunior ? 'in daily school English' : 'in an academic context';
    return withMeta({
      type: 'single', section: '字彙',
      text: `${hardPrefix}Which meaning best matches the word "${word}" ${ctx}?`,
      options: [correct, w1, w2, w3], answer: 0,
      explanation: `"${word}" means: ${correct}.`,
    }, difficulty);
  }
  offset += vocab.length;

  const subjects = isJunior
    ? ['English', 'math', 'science', 'history', 'art', 'music', 'PE']
    : ['economics', 'literature', 'biology', 'physics', 'chemistry', 'geography', 'civics'];
  if (idx < offset + subjects.length * 8) {
    const i = idx - offset;
    const subj = subjects[i % subjects.length];
    const n = 2 + Math.floor(i / subjects.length);
    if (isJunior && difficulty === 'hard') {
      return withMeta({
        type: 'single', section: '文法',
        text: `${hardPrefix}He is the student _____ won the ${subj} contest for ${n} years.`,
        options: ['who', 'which', 'where', 'when'], answer: 0,
        explanation: '修飾人用關係代名詞 who。',
      }, difficulty);
    }
    const text = isJunior
      ? `${hardPrefix}If it rains tomorrow, we _____ at home and review ${subj} for ${n} hours.`
      : `${hardPrefix}Should it rain tomorrow, we _____ at home and review ${subj} for ${n} hours.`;
    return withMeta({
      type: 'single', section: '文法',
      text,
      options: isJunior
        ? ['will stay', 'stayed', 'stay', 'staying']
        : ['will stay', 'stayed', 'would stay', 'staying'],
      answer: 0,
      explanation: isJunior
        ? 'If + 現在式，主要子句用 will + V。'
        : '條件語氣／未來條件，主要子句用 will + V。',
    }, difficulty);
  }
  offset += subjects.length * 8;

  const juniorTopics = [
    ['What is a deadline?', 'The last day to finish something', 'A fishing line', 'A sports rule', 'A food name'],
    ['What does recycle mean?', 'To use materials again', 'To throw everything away', 'To buy only new items', 'To break objects'],
    ['What is a volunteer?', 'Someone who helps without pay', 'A full-time boss only', 'A paid athlete only', 'A tourist guide only'],
    ['What does improve mean?', 'To make better', 'To make worse', 'To stop suddenly', 'To copy exactly'],
    ['What is a library?', 'A place to borrow books', 'A place to buy cars', 'A sports stadium only', 'A kitchen'],
    ['What does weather mean?', 'Conditions like rain or sunshine', 'A school subject only', 'A type of food', 'A music show'],
    ['What is homework?', 'School work done at home', 'A holiday trip', 'A sports game', 'A music show'],
    ['What is a neighbor?', 'A person living nearby', 'A distant stranger only', 'A type of animal', 'A school subject'],
  ];
  const gsatTopics = [
    ['What does sustainable mean?', 'Able to continue long-term', 'Very expensive always', 'Useful only once', 'Completely new'],
    ['What is evidence?', 'Information that supports a claim', 'A random guess', 'A rumor', 'An advertisement only'],
    ['What does ambiguous mean?', 'Having more than one possible meaning', 'Always clear', 'Always silent', 'Always correct'],
    ['What is a hypothesis?', 'A proposed explanation to be tested', 'A proven law only', 'A finished product', 'A random joke'],
    ['What does inevitable mean?', 'Certain to happen', 'Unlikely ever', 'Optional always', 'Already finished'],
    ['What is a consequence?', 'A result that follows an action', 'A starting point only', 'An unrelated hobby', 'A weather report'],
    ['What does reluctant mean?', 'Unwilling or hesitant', 'Eager always', 'Silent forever', 'Perfectly sure'],
    ['What does sufficient mean?', 'Enough for a purpose', 'Far too little', 'Completely empty', 'Always wrong'],
  ];
  const topics = isJunior ? juniorTopics : gsatTopics;
  const t = topics[(idx - offset) % topics.length];
  const sceneN = Math.floor((idx - offset) / topics.length) + 1;
  return withMeta({
    type: 'single', section: '閱讀',
    text: `${hardPrefix}${t[0]} — reading set ${sceneN}`,
    options: [t[1], t[2], t[3], t[4]], answer: 0,
    explanation: `正解：${t[1]}`,
  }, difficulty);
}

// ── 數學生成 ──────────────────────────────────────────────
function juniorMathSingle(r, seed, idx, difficulty) {
  const sc = diffScale(difficulty);
  // 困難題避開過於基礎的 kind，改以聯立、比例、幾何綜合為主
  let kind = (seed + idx * 13) % 16;
  if (difficulty === 'hard') {
    const hardKinds = [0, 1, 3, 8, 9, 11, 12, 14];
    kind = hardKinds[(seed + idx * 7) % hardKinds.length];
  } else if (difficulty === 'normal') {
    const normalKinds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 14];
    kind = normalKinds[(seed + idx * 11) % normalKinds.length];
  }

  if (difficulty === 'easy' && kind < 4) {
    const a = randInt(r, sc.lo, sc.hi);
    const b = randInt(r, sc.lo, sc.hi);
    const ops = [
      ['+', a + b, [a + b + 1, a + b - 1, a * b]],
      ['-', Math.max(a, b) - Math.min(a, b), [Math.abs(a - b) + 1, a + b, a * b]],
      ['×', a * b, [a + b, a * b + a, a * b - 1]],
      ['÷', Math.floor(Math.max(a, b) / Math.max(1, Math.min(a, b))), null],
    ];
    const op = ops[kind];
    let ans, distractors, text;
    if (kind === 3) {
      const dividend = a * b;
      ans = a;
      distractors = [a + 1, b, a + b];
      text = `計算 ${dividend} ÷ ${b} = ?`;
    } else if (kind === 1) {
      const x = Math.max(a, b), y = Math.min(a, b);
      ans = x - y;
      distractors = op[2];
      text = `計算 ${x} − ${y} = ?`;
    } else {
      ans = op[1];
      distractors = op[2];
      text = `計算 ${a} ${op[0]} ${b} = ?`;
    }
    const { options, answer } = makeOptions(r, seed + idx, ans, distractors);
    return withMeta({ type: 'single', section: '代數', text, options, answer, explanation: `依四則運算得 ${ans}。` }, difficulty);
  }

  if (kind === 0) {
    const a = randInt(r, sc.lo, sc.hi);
    const b = randInt(r, 1, sc.hi);
    const c = a * 3 - 5;
    // 3x - 5 = c  => wait, use 3x - b = c
    const x = randInt(r, difficulty === 'hard' ? 12 : 2, difficulty === 'hard' ? 40 : 15);
    const bb = randInt(r, difficulty === 'hard' ? 5 : 1, difficulty === 'hard' ? 18 : 9);
    const coef = difficulty === 'hard' ? randInt(r, 3, 7) : 3;
    const rhs = coef * x - bb;
    const { options, answer } = makeOptions(r, seed + idx, x, [x + 1, x - 1, x + 2]);
    return withMeta({
      type: 'single', section: '代數',
      text: `某數的 ${coef} 倍減 ${bb} 等於 ${rhs}，此數為何？`,
      options, answer, explanation: `設未知數為 x，則 ${coef}x - ${bb} = ${rhs}，x = ${x}。`,
    }, difficulty);
  }
  if (kind === 1) {
    const x = randInt(r, 5, sc.hi + 5);
    const y = randInt(r, 2, sc.hi);
    const s = x + y, d = x - y;
    const { options, answer } = makeOptions(r, seed + idx, x, [y, s, d]);
    return withMeta({
      type: 'single', section: '代數',
      text: `若 x + y = ${s}，x − y = ${d}，則 x = ?`,
      options, answer, explanation: `兩式相加得 2x = ${2 * x}，x = ${x}。`,
    }, difficulty);
  }
  if (kind === 2) {
    const base = randInt(r, sc.lo + 2, sc.hi);
    const height = randInt(r, sc.lo + 1, sc.hi - 1);
    const ans = (base * height) / 2;
    const { options, answer } = makeOptions(r, seed + idx, ans, [base * height, base + height, ans + 2]);
    return withMeta({
      type: 'single', section: '幾何',
      text: `底為 ${base}、高為 ${height} 的三角形面積為何？`,
      options, answer, explanation: `面積 = 底×高÷2 = ${ans}。`,
    }, difficulty);
  }
  if (kind === 3) {
    const triples = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [9, 12, 15], [7, 24, 25]];
    const [a, b, c] = triples[idx % triples.length];
    const { options, answer } = makeOptions(r, seed + idx, b, [a, c, a + b]);
    return withMeta({
      type: 'single', section: '幾何',
      text: `直角三角形斜邊 ${c}、一股 ${a}，另一股為？`,
      options, answer, explanation: `√(${c}²-${a}²) = ${b}。`,
    }, difficulty);
  }
  if (kind === 4) {
    const total = randInt(r, 20, 20 + sc.hi);
    const n = [10, 20, 25, 40, 50][idx % 5];
    const part = Math.round(total * n / 100);
    const { options, answer } = makeOptions(r, seed + idx, part, [part + 1, part - 1, total - part]);
    return withMeta({
      type: 'single', section: '統計',
      text: `某班 ${total} 人，其中 ${n}% 參加社團，參加社團的有多少人？`,
      options, answer, explanation: `${total} × ${n}% = ${part}。`,
    }, difficulty);
  }
  if (kind === 5) {
    const len = randInt(r, sc.lo + 2, sc.hi);
    const wid = randInt(r, sc.lo, sc.hi - 2);
    const ans = len * wid;
    const { options, answer } = makeOptions(r, seed + idx, ans, [2 * (len + wid), len + wid, ans + len]);
    return withMeta({
      type: 'single', section: '幾何',
      text: `長 ${len}、寬 ${wid} 的長方形面積為？`,
      options, answer, explanation: `面積 = ${len}×${wid} = ${ans}。`,
    }, difficulty);
  }
  if (kind === 6) {
    const a = randInt(r, 2, 9);
    const b = randInt(r, 2, 9);
    const ans = a * a + b;
    const { options, answer } = makeOptions(r, seed + idx, ans, [a * a - b, (a + b) * (a + b), a + b]);
    return withMeta({
      type: 'single', section: '代數',
      text: `計算 ${a}² + ${b} = ?`,
      options, answer, explanation: `${a}² + ${b} = ${ans}。`,
    }, difficulty);
  }
  if (kind === 7) {
    const speed = randInt(r, 30 + sc.lo, 40 + sc.hi);
    const time = randInt(r, 2, difficulty === 'hard' ? 6 : 4);
    const dist = speed * time;
    const { options, answer } = makeOptions(r, seed + idx, dist, [dist + speed, speed + time, dist - time]);
    return withMeta({
      type: 'single', section: '生活應用',
      text: `以每小時 ${speed} 公里行駛 ${time} 小時，共行駛幾公里？`,
      options, answer, explanation: `距離 = ${speed}×${time} = ${dist}。`,
    }, difficulty);
  }
  if (kind === 8) {
    const p = randInt(r, 2, 8);
    const k = randInt(r, 2, 6);
    const q = randInt(r, 2, 8);
    const aVal = p * k;
    const bVal = q * k;
    const { options, answer } = makeOptions(r, seed + idx, bVal, [q * (k + 1), aVal, p + q]);
    return withMeta({
      type: 'single', section: '比例',
      text: `若 a : b = ${p} : ${q}，且 a = ${aVal}，則 b = ?`,
      options, answer, explanation: `a/b=${p}/${q}，b=${bVal}。`,
    }, difficulty);
  }
  if (kind === 9) {
    const rad = randInt(r, 2, 8);
    const ans = Math.round(3.14 * rad * rad * 100) / 100;
    const { options, answer } = makeOptions(r, seed + idx, ans, [2 * 3.14 * rad, rad * rad, ans + rad]);
    return withMeta({
      type: 'single', section: '幾何',
      text: `半徑 ${rad} 的圓面積為何？（π 取 3.14）`,
      options, answer, explanation: `πr² = 3.14×${rad}² = ${ans}。`,
    }, difficulty);
  }
  if (kind === 10) {
    const a = randInt(r, 2, 6);
    const b = randInt(r, 2, 6);
    const sum = a + b;
    const { options, answer } = makeOptions(r, seed + idx, `${a}x`, [`${sum}x`, `${b}x`, `${a * b}x`]);
    return withMeta({
      type: 'single', section: '代數',
      text: `化簡 ${sum}x − ${b}x = ?`,
      options, answer, explanation: `${sum}x − ${b}x = ${a}x。`,
    }, difficulty);
  }
  if (kind === 11) {
    const n = randInt(r, 3, 9);
    const ans = n * (n + 1) / 2;
    const { options, answer } = makeOptions(r, seed + idx, ans, [n * n, ans + n, n + 1]);
    return withMeta({
      type: 'single', section: '數列',
      text: `求 1+2+…+${n} 的和。`,
      options, answer, explanation: `和 = ${n}(${n}+1)/2 = ${ans}。`,
    }, difficulty);
  }
  if (kind === 12) {
    const price = 100 + randInt(r, sc.lo, sc.hi) * 10;
    const discount = [70, 80, 85, 90][idx % 4];
    const ans = Math.round(price * discount / 100);
    const { options, answer } = makeOptions(r, seed + idx, ans, [price, price - discount, ans + 10]);
    return withMeta({
      type: 'single', section: '生活應用',
      text: `原價 ${price} 元，打 ${discount} 折後售價為？`,
      options, answer, explanation: `${price}×${discount}/100 = ${ans}。`,
    }, difficulty);
  }
  if (kind === 13) {
    const a = randInt(r, 2, 9);
    const b = randInt(r, 2, 9);
    const c = a + b;
    const { options, answer } = makeOptions(r, seed + idx, c, [a * b, Math.abs(a - b), a]);
    return withMeta({
      type: 'single', section: '代數',
      text: `已知一元一次方程式 x − ${a} = ${b}，則 x = ?`,
      options, answer, explanation: `x = ${a}+${b} = ${c}。`,
    }, difficulty);
  }
  if (kind === 14) {
    const vals = [randInt(r, 5, 15), randInt(r, 6, 16), randInt(r, 7, 17), randInt(r, 8, 18)];
    const mean = Math.round(vals.reduce((s, v) => s + v, 0) / 4);
    const { options, answer } = makeOptions(r, seed + idx, mean, [mean + 2, mean - 2, vals[0]]);
    return withMeta({
      type: 'single', section: '統計',
      text: `資料 ${vals.join('、')} 的平均數（四捨五入至整數）為何？`,
      options, answer, explanation: `平均約為 ${mean}。`,
    }, difficulty);
  }
  {
    const a = randInt(r, 3, 12 + sc.hi);
    const b = randInt(r, 2, 9);
    const ans = a * b;
    const { options, answer } = makeOptions(r, seed + idx, ans, [a + b, ans + a, ans - b]);
    return withMeta({
      type: 'single', section: '代數',
      text: `計算 ${a} × ${b} = ?`,
      options, answer, explanation: `${a}×${b}=${ans}。`,
    }, difficulty);
  }
}

function juniorMathNonChoice(r, seed, idx, difficulty) {
  const sc = diffScale(difficulty);
  const kind = (seed + idx) % 4;
  if (kind === 0) {
    const speed = randInt(r, 40, 40 + sc.hi);
    const time = randInt(r, 2, 5);
    const dist = speed * time;
    return withMeta({
      type: 'non-choice', section: '非選擇題',
      text: `小華以每小時 ${speed} 公里騎車 ${time} 小時，共騎了幾公里？請寫出算式與答案。`,
      answerText: `<p><strong>解：</strong></p><p>距離 = ${speed} × ${time} = ${dist}（公里）</p>`,
      explanation: '距離 = 速度 × 時間。',
    }, difficulty);
  }
  if (kind === 1) {
    const base = randInt(r, 4, 12);
    const height = randInt(r, 3, 10);
    const area = (base * height) / 2;
    return withMeta({
      type: 'non-choice', section: '非選擇題',
      text: `三角形底 ${base}、高 ${height}，求面積並說明公式。`,
      answerText: `<p>面積 = 底×高÷2 = ${base}×${height}÷2 = ${area}</p>`,
      explanation: '三角形面積公式。',
    }, difficulty);
  }
  if (kind === 2) {
    const x = randInt(r, 3, 12);
    const y = randInt(r, 2, 10);
    return withMeta({
      type: 'non-choice', section: '非選擇題',
      text: `解聯立：x+y=${x + y}，x−y=${x - y}。請寫出求解過程。`,
      answerText: `<p>兩式相加：2x=${2 * x}，x=${x}；代回得 y=${y}。</p>`,
      explanation: '加減消去法。',
    }, difficulty);
  }
  const price = 200 + randInt(r, 1, 20) * 10;
  const rate = [8, 9, 85][idx % 3];
  const pay = rate > 10 ? Math.round(price * rate / 100) : Math.round(price * rate / 10);
  return withMeta({
    type: 'non-choice', section: '非選擇題',
    text: `商品原價 ${price} 元，以 ${rate > 10 ? rate + ' 折' : rate + ' 折'} 出售，實付多少元？請列式。`,
    answerText: `<p>實付 = ${pay} 元</p>`,
    explanation: '售價 = 原價 × 折扣。',
  }, difficulty);
}

function hsMathSingle(r, seed, idx, difficulty, track) {
  // track: mathA | mathB
  const sc = diffScale(difficulty);
  const kind = (seed + idx * 17) % 16;
  const hardBoost = difficulty === 'hard' ? 2 : difficulty === 'normal' ? 1 : 0;

  if (kind === 0) {
    const base = pick(r, [2, 3, 5]);
    const ans = randInt(r, 1 + hardBoost, 4 + hardBoost);
    const exp = 2 * ans - 1;
    const rhs = base ** exp;
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + 1, ans - 1, ans + 2]);
    return withMeta({
      type: 'single', section: '指數與對數',
      text: `若 ${base}^(2x-1) = ${rhs}，則 x = ?`,
      options, answer, explanation: `2x-1=${exp}，x=${ans}。`,
    }, difficulty);
  }
  if (kind === 1) {
    const base = pick(r, [2, 3, 10]);
    const exp = randInt(r, 2, 3 + hardBoost);
    const val = base ** exp;
    const { options, answer } = makeOptions(r, seed + idx, exp, [exp + 1, exp - 1, exp * 2]);
    return withMeta({
      type: 'single', section: '指數與對數',
      text: `log_${base} ${val} = ?`,
      options, answer, explanation: `${base}^${exp}=${val}，故對數為 ${exp}。`,
    }, difficulty);
  }
  if (kind === 2) {
    const a1 = randInt(r, 1, 5 + sc.lo);
    const d = randInt(r, 2, 4 + hardBoost);
    const n = randInt(r, 5, 8 + hardBoost);
    const ans = a1 + (n - 1) * d;
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + d, ans - d, a1 + n * d]);
    return withMeta({
      type: 'single', section: '數列',
      text: `等差數列首項 ${a1}，公差 ${d}，第 ${n} 項為何？`,
      options, answer, explanation: `a_n = ${a1}+(${n}-1)×${d}=${ans}。`,
    }, difficulty);
  }
  if (kind === 3) {
    const a1 = randInt(r, 1, 3 + hardBoost);
    const qv = randInt(r, 2, 3);
    const n = randInt(r, 3, 5 + hardBoost);
    const ans = a1 * (qv ** (n - 1));
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + a1, ans / qv, a1 * n * qv]);
    return withMeta({
      type: 'single', section: '數列',
      text: `等比數列首項 ${a1}，公比 ${qv}，第 ${n} 項為何？`,
      options, answer, explanation: `a_n=${a1}×${qv}^(${n}-1)=${ans}。`,
    }, difficulty);
  }
  if (kind === 4) {
    const triples = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25]];
    const [p, q, h] = triples[idx % triples.length];
    const ans = `${q}/${h}`;
    const { options, answer } = makeOptions(r, seed + idx, ans, [`${p}/${h}`, `${h}/${q}`, `${p}/${q}`]);
    return withMeta({
      type: 'single', section: '三角',
      text: `已知 sin θ = ${p}/${h}，且 θ 為銳角，則 cos θ = ?`,
      options, answer, explanation: `cos θ = ${q}/${h}。`,
    }, difficulty);
  }
  if (kind === 5) {
    const angles = [[30, '√3/2', 'cos'], [45, '√2/2', 'sin'], [60, '1/2', 'cos'], [90, '1', 'sin']];
    const [deg, val, fn] = angles[idx % angles.length];
    const { options, answer } = makeOptions(r, seed + idx, deg, [deg === 30 ? 60 : 30, 45, 90]);
    return withMeta({
      type: 'single', section: '三角',
      text: `若 ${fn} x = ${val} 且 0° < x ≤ 90°，則 x = ?（度）`,
      options, answer, explanation: `${fn} ${deg}° = ${val}。`,
    }, difficulty);
  }
  if (kind === 6) {
    const h = randInt(r, 2, 5 + hardBoost);
    const k = randInt(r, -3, 5);
    const { options, answer } = makeOptions(r, seed + idx, k, [k + 1, k + h, h * h + k]);
    return withMeta({
      type: 'single', section: '二次函數',
      text: `f(x)=x²-${2 * h}x+${h * h + k} 的最小值為何？`,
      options, answer, explanation: `配方得 (x-${h})²+${k}，最小值 ${k}。`,
    }, difficulty);
  }
  if (kind === 7) {
    const rad = randInt(r, 2, 6 + hardBoost);
    const { options, answer } = makeOptions(r, seed + idx, rad, [rad * 2, rad + 1, rad * rad]);
    return withMeta({
      type: 'single', section: '圓',
      text: `圓 x²+y²=${rad * rad} 的半徑為何？`,
      options, answer, explanation: `半徑 r=${rad}。`,
    }, difficulty);
  }
  if (kind === 8) {
    const x = randInt(r, 1, 6 + hardBoost);
    const y = randInt(r, 1, 8);
    const exact = x * x + y * y;
    const ans = Number.isInteger(Math.sqrt(exact)) ? Math.sqrt(exact) : `√${exact}`;
    const { options, answer } = makeOptions(r, seed + idx, ans, [x + y, Math.abs(x - y), exact]);
    return withMeta({
      type: 'single', section: '向量',
      text: `向量 a=(${x},${y})，則 |a| = ?`,
      options, answer, explanation: `|a|=√(${x}²+${y}²)=${ans}。`,
    }, difficulty);
  }
  if (kind === 9) {
    const n = randInt(r, 4, 6 + Math.min(2, hardBoost));
    let fact = 1;
    for (let i = 2; i <= n; i++) fact *= i;
    const { options, answer } = makeOptions(r, seed + idx, fact, [fact + n, fact - n, n * (n - 1)]);
    return withMeta({
      type: 'single', section: '排列組合',
      text: `${n} 個不同物品排成一列，共有幾種排法？`,
      options, answer, explanation: `${n}! = ${fact}。`,
    }, difficulty);
  }
  if (kind === 10) {
    const n = randInt(r, 6, 10 + hardBoost);
    const ans = (n * (n - 1)) / 2;
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + n, n * 2, n + 2]);
    return withMeta({
      type: 'single', section: '排列組合',
      text: `從 ${n} 人中選 2 人，有幾種選法？`,
      options, answer, explanation: `C(${n},2)=${ans}。`,
    }, difficulty);
  }
  if (kind === 11) {
    const red = randInt(r, 2, 5 + hardBoost);
    const white = randInt(r, 2, 4 + hardBoost);
    const total = red + white;
    const ans = `${red}/${total}`;
    const { options, answer } = makeOptions(r, seed + idx, ans, [`${white}/${total}`, `${red}/${white}`, `1/${total}`]);
    return withMeta({
      type: 'single', section: '機率',
      text: `袋中紅球 ${red}、白球 ${white}，隨機取 1 顆為紅球的機率？`,
      options, answer, explanation: `P= ${ans}。`,
    }, difficulty);
  }
  if (kind === 12) {
    const vals = [randInt(r, 2, 8), randInt(r, 4, 10), randInt(r, 6, 12), randInt(r, 8, 14)];
    const mean = Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
    const { options, answer } = makeOptions(r, seed + idx, mean, [mean + 2, mean - 2, mean + 1]);
    return withMeta({
      type: 'single', section: '統計',
      text: `資料 ${vals.join('、')} 的平均數（四捨五入）為何？`,
      options, answer, explanation: `平均約 ${mean}。`,
    }, difficulty);
  }
  if (kind === 13) {
    const a = randInt(r, 2, 5);
    const b = randInt(r, 1, 8);
    const root = fmtNum(-b / a);
    const ans = `x > ${root}`;
    const { options, answer } = makeOptions(r, seed + idx, ans, [`x < ${root}`, `x = ${root}`, '無解']);
    return withMeta({
      type: 'single', section: '不等式',
      text: `解不等式 ${a}x + ${b} > 0。`,
      options, answer, explanation: `得 ${ans}。`,
    }, difficulty);
  }
  if (kind === 14) {
    const a = randInt(r, 2, 5 + hardBoost);
    const b = randInt(r, 1, 4);
    const ans = a ** b;
    const { options, answer } = makeOptions(r, seed + idx, ans, [ans + a, a * b, ans - b]);
    return withMeta({
      type: 'single', section: '指數與對數',
      text: `化簡 ${a}^${b} = ?`,
      options, answer, explanation: `${a}^${b}=${ans}。`,
    }, difficulty);
  }
  // mathB slant / default
  const x1 = randInt(r, 1, 4);
  const y1 = randInt(r, 1, 4);
  const x2 = x1 + randInt(r, 2, 5);
  const y2 = y1 + randInt(r, 1, 4);
  const slope = fmtNum((y2 - y1) / (x2 - x1));
  const { options, answer } = makeOptions(r, seed + idx, slope, [fmtNum(Number(slope) + 1), fmtNum(x2 - x1), fmtNum(y2 - y1)]);
  return withMeta({
    type: 'single', section: track === 'mathB' ? '一次函數' : '解析幾何',
    text: `過點 (${x1},${y1}) 與 (${x2},${y2}) 的直線斜率為何？`,
    options, answer, explanation: `斜率 = ${slope}。`,
  }, difficulty);
}

function hsMathNonChoice(r, seed, idx, difficulty, track) {
  const kind = (seed + idx) % 3;
  if (kind === 0) {
    const h = randInt(r, 2, 6);
    const k = randInt(r, -2, 5);
    return withMeta({
      type: 'non-choice', section: '非選擇題',
      text: `已知 f(x)=x²-${2 * h}x+${h * h + k}，(1) 配方；(2) 求最小值及對應 x。`,
      answerText: `<p>f(x)=(x-${h})²+${k}；最小值 ${k}（x=${h}）。</p>`,
      explanation: '二次函數配方。',
    }, difficulty);
  }
  if (kind === 1) {
    const a1 = randInt(r, 2, 6);
    const d = randInt(r, 2, 5);
    const n = randInt(r, 5, 10);
    const an = a1 + (n - 1) * d;
    const sum = (n * (a1 + an)) / 2;
    return withMeta({
      type: 'non-choice', section: '非選擇題',
      text: `等差數列首項 ${a1}、公差 ${d}，求第 ${n} 項與前 ${n} 項和。`,
      answerText: `<p>第 ${n} 項=${an}；前 ${n} 項和=${sum}。</p>`,
      explanation: '等差數列公式。',
    }, difficulty);
  }
  const base = pick(r, [2, 3, 5]);
  const exp = randInt(r, 2, 4);
  return withMeta({
    type: 'non-choice', section: '非選擇題',
    text: `計算 log_${base}(${base ** exp})，並說明理由。`,
    answerText: `<p>因 ${base}^${exp}=${base ** exp}，故對數值為 ${exp}。</p>`,
    explanation: '對數定義。',
  }, difficulty);
}

// ── 自然／社會／分科 ──────────────────────────────────────────
function makeScienceLike(r, seed, idx, difficulty, pool, sectionPrefix, levelTag = '') {
  const item = pool[idx];
  if (!item) return null;
  const [section, stem, c, w1, w2, w3, expl] = item;
  const tone = difficulty === 'easy' ? '基礎概念' : difficulty === 'hard' ? '綜合應用' : '進階理解';
  const tag = levelTag ? `${levelTag}・` : '';
  return withMeta({
    type: 'single',
    section: sectionPrefix || section,
    text: `【${tag}${tone}】${stem}`,
    options: [c, w1, w2, w3], answer: 0,
    explanation: expl,
  }, difficulty);
}

function makeSocialParametric(r, seed, idx, difficulty, level) {
  const isJunior = level === 'junior';
  const kind = idx % 6;
  const n1 = 10 + idx;
  const n2 = 3 + (idx % 17);

  if (kind === 0) {
    const year = (isJunior ? 1600 : 1800) + idx;
    const gap = 2 + (idx % 25);
    const { options, answer } = makeOptions(r, seed + idx, year + gap, [year, year + gap + 1, year - gap]);
    return withMeta({
      type: 'single', section: '歷史',
      text: `史料紀年練習：若事件甲發生於 ${year} 年，事件乙晚 ${gap} 年，則事件乙約為？`,
      options, answer, explanation: `${year}+${gap}=${year + gap}。`,
    }, difficulty);
  }
  if (kind === 1) {
    const pop = n1 * 10;
    const rate = 5 + (idx % 15);
    const part = Math.round(pop * rate / 100);
    const { options, answer } = makeOptions(r, seed + idx, part, [part + 5, pop - part, rate]);
    return withMeta({
      type: 'single', section: '地理',
      text: `某縣市人口 ${pop} 萬，其中約 ${rate}% 居住都市，都市人口約多少萬？`,
      options, answer, explanation: `${pop}×${rate}%=${part}。`,
    }, difficulty);
  }
  if (kind === 2) {
    const perSeat = 3 + (idx % 20);
    const seatsWanted = 2 + (idx % 12);
    const votes = perSeat * seatsWanted;
    const { options, answer } = makeOptions(r, seed + idx, seatsWanted, [seatsWanted + 1, Math.max(1, seatsWanted - 1), votes]);
    return withMeta({
      type: 'single', section: '公民',
      text: `若每滿 ${perSeat} 萬票可獲 1 席，得票 ${votes} 萬票約可獲幾席？`,
      options, answer, explanation: `${votes}÷${perSeat}=${seatsWanted}。`,
    }, difficulty);
  }
  if (kind === 3) {
    const counties = isJunior
      ? ['新北市', '臺中市', '高雄市', '臺南市', '桃園市', '彰化縣', '屏東縣', '花蓮縣', '宜蘭縣', '南投縣']
      : ['臺北都會區', '中彰投', '雲嘉南', '高屏', '宜花東', '桃竹苗', '基隆港區', '嘉義平原', '臺東縱谷', '澎湖群島'];
    const c = counties[idx % counties.length];
    const code = 1000 + idx;
    const trait = isJunior
      ? ['人口密度較高', '農業活動可見', '臨海交通便利', '山地地形明顯'][Math.floor(idx / counties.length) % 4]
      : ['產業結構較多元', '交通網絡較密集', '自然資源管理重要', '區域發展需協調'][Math.floor(idx / counties.length) % 4];
    return withMeta({
      type: 'single', section: '地理',
      text: `題組 ${code}：關於「${c}」的地理認識，下列敘述何者較合理？`,
      options: [trait, '完全無人類活動', '位於南極圈', '全年無降雨紀錄'],
      answer: 0, explanation: `${c}可視為「${trait}」的例子之一。`,
    }, difficulty);
  }
  if (kind === 4) {
    const { options, answer } = makeOptions(r, seed + idx, n1 + n2, [n1 * n2, Math.abs(n1 - n2), n1]);
    return withMeta({
      type: 'single', section: '公民',
      text: `班會提案：贊成 ${n1} 票、反對 ${n2} 票，合計投票人數？`,
      options, answer, explanation: `${n1}+${n2}=${n1 + n2}。`,
    }, difficulty);
  }
  const start = isJunior ? 1895 : 1911;
  const qYear = start + n2 + Math.floor(idx / 6);
  const yearsSince = qYear - start;
  const { options, answer } = makeOptions(r, seed + idx, yearsSince, [yearsSince + 1, n2, yearsSince + 5]);
  return withMeta({
    type: 'single', section: '歷史',
    text: `若以 ${start} 年為起點，到 ${qYear} 年共經過多少年？`,
    options, answer, explanation: `${qYear}-${start}=${yearsSince}。`,
  }, difficulty);
}

function makeHumanitiesFill(r, seed, idx, difficulty, section) {
  const a = 20 + idx;
  const b = 7 + Math.floor(idx / 2);
  if (section === '歷史') {
    const { options, answer } = makeOptions(r, seed + idx, a + b, [a, b, a * 2]);
    return withMeta({
      type: 'single', section,
      text: `年代推算 ${idx}：前段歷時 ${a} 年、後段 ${b} 年，合計時長？`,
      options, answer, explanation: `${a}+${b}=${a + b}。`,
    }, difficulty);
  }
  if (section === '地理') {
    const area = Math.max(1, b / 5);
    const dens = fmtNum(a / area);
    const { options, answer } = makeOptions(r, seed + idx, dens, [String(a), String(b), fmtNum(a * b)]);
    return withMeta({
      type: 'single', section,
      text: `區域 ${idx}：人口 ${a} 萬、面積約 ${area.toFixed(1)} 百平方公里，粗估密度最接近？`,
      options, answer, explanation: `粗估密度約 ${dens}。`,
    }, difficulty);
  }
  const votes = a * b;
  const { options, answer } = makeOptions(r, seed + idx, b, [b + 1, a, votes]);
  return withMeta({
    type: 'single', section: '公民',
    text: `選舉試算 ${idx}：每席需 ${a} 票，共得 ${votes} 票，可獲幾席？`,
    options, answer, explanation: `${votes}÷${a}=${b}。`,
  }, difficulty);
}

function makeFactBank(r, seed, idx, difficulty, rows, defaultSection) {
  const row = rows[idx % rows.length];
  const section = row.length >= 7 ? row[0] : defaultSection;
  const stem = row.length >= 7 ? row[1] : row[0];
  const correct = row.length >= 7 ? row[2] : row[1];
  const d1 = row.length >= 7 ? row[3] : row[2];
  const d2 = row.length >= 7 ? row[4] : row[3];
  const d3 = row.length >= 7 ? row[5] : row[4];
  const explanation = row.length >= 7 ? row[6] : row[5];
  const tone = difficulty === 'easy' ? '基礎' : difficulty === 'hard' ? '挑戰' : '進階';
  return withMeta({
    type: 'single', section: section || defaultSection,
    text: `【${tone}】${stem}`,
    options: [correct, d1, d2, d3], answer: 0,
    explanation,
  }, difficulty);
}

const PHYSICS_ITEMS = [
  ['牛頓第二運動定律 F=ma，若 m 加倍、a 不變，則 F 如何變化？', '變為兩倍', '不變', '減半', '變四倍', 'F 與 m 成正比。'],
  ['自由落體（忽略空氣阻力）加速度約為？', '9.8 m/s²', '0', '3×10⁸', '1 m/s²', '重力加速度約 9.8。'],
  ['動能公式為？', '½mv²', 'mv', 'mgh', 'Fd', '動能 = ½mv²。'],
  ['歐姆定律為？', 'V=IR', 'P=IV 以外唯一', 'F=ma 以外唯一', 'p=mv 以外唯一', 'V=IR。'],
  ['波的週期與頻率關係？', '互為倒數', '彼此無關', '週期等於頻率', '週期為頻率平方', 'T=1/f。'],
  ['電荷守恆指出？', '封閉系統總電荷不變', '電荷可憑空產生淨量', '只有正電守恆', '只有負電守恆', '總電荷守恆。'],
  ['透鏡成像：凸透鏡對遠處物體成？', '倒立實像（於焦點附近）', '一定正立虛像', '無成像', '只成放大虛像於無窮遠', '遠處物體近焦點成實像。'],
  ['動量 p 的定義？', 'mv', '½mv²', 'mgh', 'FΔt 以外唯一形式', 'p=mv。'],
  ['簡諧運動回復力與位移關係？', '成正比反向', '成正比同向', '無關', '與速度平方成正比', 'F=-kx。'],
  ['電阻串聯總阻？', '各電阻相加', '各電阻倒數和', '取最小電阻', '取平均', '串聯 R=ΣR。'],
];

const CHEM_ITEMS = [
  ['莫耳數 n = ?', 'm/M', 'M/m', 'm×M', 'V/T', 'n=質量/莫耳質量。'],
  ['酸鹼中和主要生成？', '鹽與水', '只有酸', '只有氫氣', '只有金屬', '中和生成鹽與水。'],
  ['氧化還原中，失去電子稱為？', '氧化', '還原', '中和', '昇華', '失電子為氧化。'],
  ['氣體莫耳體積（標況）約？', '22.4 L', '2.24 L', '224 L', '1 L', '標況約 22.4 L/mol。'],
  ['原子量的相對基準現行主要為？', '碳-12', '氧-16 舊制唯一', '氫-1 唯一', '氮-14 唯一', '以碳-12 為基準。'],
  ['強酸在水中？', '幾乎完全電離', '完全不電離', '只溶於油', '一定沉澱', '強酸幾乎全電離。'],
  ['化學平衡移動可用？', '勒沙特列原理判斷', '與條件無關', '只看顏色', '只看氣味', '勒沙特列原理。'],
  ['有機物必含？', '碳', '一定含鈉', '一定含鐵', '一定含氦', '有機物以碳為核心。'],
  ['pH=3 比 pH=5 的 [H⁺]？', '高 100 倍', '低 100 倍', '相同', '高 2 倍', '每差 1 為 10 倍，差 2 為 100 倍。'],
  ['電解質水溶液能導電是因為？', '有自由移動離子', '有電子氣體', '水分子不極性', '無帶電粒子', '離子可移動而導電。'],
];

const BIO_ITEMS = [
  ['DNA 的基本單位是？', '核苷酸', '胺基酸', '脂肪酸', '葡萄糖', 'DNA 由核苷酸組成。'],
  ['有絲分裂的意義接近？', '產生遺傳物質相同的體細胞', '一定產生配子', '染色體數必半', '無紡錘絲', '有絲分裂維持染色體數。'],
  ['光合作用光反應發生於？', '類囊體', '基質唯一', '細胞核', '核糖體', '光反應在類囊體。'],
  ['酵素的特性？', '專一性且可重複使用', '反應後必被消耗殆盡', '無專一性', '只在 0°C 作用', '酵素具專一性。'],
  ['生態系統中能量流動大致？', '單向且逐級遞減', '完全循環無損失', '只由動物到植物', '與營養級無關', '能量單向流動。'],
  ['孟德爾分離律說明？', '成對等位基因分離進入配子', '性狀永不分離', '無顯隱性', '只無性生殖適用', '分離律。'],
  ['抗體由哪類細胞密切相關？', 'B 細胞／漿細胞', '紅血球唯一', '血小板唯一', '表皮細胞唯一', '漿細胞分泌抗體。'],
  ['呼吸作用目的？', '釋放能量（ATP）', '製造葡萄糖唯一', '只產生氧氣', '只儲存光能', '呼吸釋放能量。'],
  ['生物多樣性包含？', '遺傳、物種、生態系層次', '只有物種數', '只有基因一段', '只有景觀顏色', '三層次多樣性。'],
  ['細胞膜主要成分含？', '磷脂雙層與蛋白質等', '只有纖維素', '只有核酸', '只有澱粉', '細胞膜為磷脂雙層。'],
];

function scienceNumeric(r, seed, idx, difficulty, subjectFilter = null, level = 'gsat') {
  const isJunior = level === 'junior';
  // 以 idx 展開參數空間，避免隨機碰撞造成題幹重複
  let kind = idx % 8;
  if (subjectFilter === 'physics') kind = [0, 1, 4, 6][idx % 4];
  if (subjectFilter === 'chemistry') kind = isJunior ? [6, 7][idx % 2] : [2, 5, 7][idx % 3];
  if (subjectFilter === 'biology') kind = 3;

  if (kind === 0) {
    const m = 2 + idx;
    const a = 1 + (idx % 11);
    const F = m * a;
    const { options, answer } = makeOptions(r, seed + idx, F, [F + m, m + a, Math.max(1, F - 1)]);
    const text = isJunior
      ? `（會考）質量 ${m} kg 的物體加速度 ${a} m/s²，所受合力為多少 N？`
      : `（學測）質量 ${m} kg、加速度 ${a} m/s²，依 F=ma 求合力（N）。`;
    return withMeta({ type: 'single', section: '物理', text, options, answer, explanation: `F=ma=${F}。` }, difficulty);
  }
  if (kind === 1) {
    const V = 6 + idx;
    const R = 2 + (idx % 9);
    const I = V / R;
    const ans = Number.isInteger(I) ? I : fmtNum(I);
    const { options, answer } = makeOptions(r, seed + idx, ans, [V + R, V * R, fmtNum(V / (R + 1))]);
    const text = isJunior
      ? `（會考）電壓 ${V} V、電阻 ${R} Ω，電流為多少 A？`
      : `（學測）歐姆定律：V=${V}、R=${R}，求電流（A）。`;
    return withMeta({ type: 'single', section: '物理', text, options, answer, explanation: `I=V/R=${ans}。` }, difficulty);
  }
  if (kind === 2) {
    const masses = [18, 36, 44, 22, 32, 28, 16, 40];
    const Mlist = [18, 44, 32, 28, 16];
    const m = masses[idx % masses.length] + Math.floor(idx / masses.length) * 2;
    const M = Mlist[idx % Mlist.length];
    const n = fmtNum(m / M);
    const { options, answer } = makeOptions(r, seed + idx, n, [fmtNum(m * M), fmtNum(M / m), String(m)]);
    return withMeta({
      type: 'single', section: '化學',
      text: `（學測）質量 ${m} g、莫耳質量 ${M} g/mol，約為多少莫耳？`,
      options, answer, explanation: `n=m/M=${n}。`,
    }, difficulty);
  }
  if (kind === 3) {
    const base = 400 + idx * 17;
    const gen = 2 + (idx % 4);
    const rate = [10, 20][idx % 2];
    const factor = rate === 10 ? 10 : 5;
    const energy2 = Math.round(base / (factor ** (gen - 1)));
    const { options, answer } = makeOptions(r, seed + idx, energy2, [energy2 * 2, base, energy2 + 10]);
    const text = isJunior
      ? `（會考）食物鏈能量：第一營養級 ${base}，效率 ${rate}%，第 ${gen} 級約剩多少？`
      : `（學測）生態能量金字塔：基底 ${base}、傳遞率 ${rate}%，第 ${gen} 營養級能量約？`;
    return withMeta({
      type: 'single', section: '生物',
      text, options, answer, explanation: `逐級 ×${rate / 100}，得 ${energy2}。`,
    }, difficulty);
  }
  if (kind === 4) {
    const v = 3 + idx;
    const t = 2 + (idx % 8);
    const s = v * t;
    const { options, answer } = makeOptions(r, seed + idx, s, [v + t, s + v, s + 1]);
    const text = isJunior
      ? `（會考）以 ${v} m/s 勻速運動 ${t} s，位移多少 m？`
      : `（學測）勻速運動 v=${v} m/s、t=${t} s，位移大小？`;
    return withMeta({ type: 'single', section: '物理', text, options, answer, explanation: `s=vt=${s}。` }, difficulty);
  }
  if (kind === 5) {
    const pH = 1 + (idx % 6);
    const { options, answer } = makeOptions(r, seed + idx, `10^${7 - pH}`, [`10^${pH}`, '1', `10^${pH - 7}`]);
    return withMeta({
      type: 'single', section: '化學',
      text: `（學測）pH=${pH} 的溶液，[H⁺] 約為多少 M？（相對中性）`,
      options, answer, explanation: `[H⁺]=10^{-${pH}}。`,
    }, difficulty);
  }
  if (kind === 6) {
    const mass = 10 + idx;
    const vols = [2, 4, 5, 8, 10];
    const vol = vols[idx % vols.length];
    const dens = fmtNum(mass / vol);
    const { options, answer } = makeOptions(r, seed + idx, dens, [fmtNum(mass * vol), String(mass), String(vol)]);
    return withMeta({
      type: 'single', section: '物理',
      text: `${isJunior ? '（會考）' : '（學測）'}質量 ${mass} g、體積 ${vol} cm³，密度為多少 g/cm³？`,
      options, answer, explanation: `密度=質量/體積=${dens}。`,
    }, difficulty);
  }
  const hot = 40 + (idx % 41);
  const cold = 5 + ((idx * 3) % 25);
  const avg = Math.round((hot + cold) / 2);
  const { options, answer } = makeOptions(r, seed + idx, avg, [hot, cold, Math.abs(hot - cold)]);
  return withMeta({
    type: 'single', section: '化學',
    text: `${isJunior ? '（會考）' : '（學測）'}兩杯等量水溫分別為 ${hot}℃ 與 ${cold}℃，混合後約為多少℃？（忽略熱損失）`,
    options, answer, explanation: `等量混合約取平均 ${avg}℃。`,
  }, difficulty);
}

function makeAstScienceNonChoice(r, seed, idx, difficulty, subject) {
  if (subject === 'physics') {
    const m = randInt(r, 2, 8);
    const v = randInt(r, 3, 12);
    const K = 0.5 * m * v * v;
    return withMeta({
      type: 'non-choice', section: '非選擇題',
      text: `質量 ${m} kg、速率 ${v} m/s 的物體，動能為多少焦耳？請列式。`,
      answerText: `<p>K=½mv²=${K} J</p>`,
      explanation: '動能公式。',
    }, difficulty);
  }
  if (subject === 'chemistry') {
    const m = randInt(r, 10, 40);
    return withMeta({
      type: 'non-choice', section: '非選擇題',
      text: `取 ${m} g 水（M=18），求莫耳數（列式）。`,
      answerText: `<p>n=${fmtNum(m / 18)} mol</p>`,
      explanation: 'n=m/M。',
    }, difficulty);
  }
  const n = randInt(r, 2, 5);
  return withMeta({
    type: 'non-choice', section: '非選擇題',
    text: `某基因雜交實驗，預期顯性表現型比例為 3:1。若子代 ${40 * n} 株，約預期顯性幾株？請說明。`,
    answerText: `<p>約 ${30 * n} 株（3/4）。</p>`,
    explanation: '孟德爾比例。',
  }, difficulty);
}

const CLEAN_CIVICS = [
  ['法治精神強調？', '依法而治、權利義務並重', '人治至上', '權力不受限', '法律可隨意忽視', '法治重依法治理。'],
  ['公民不服從通常指？', '公開非暴力抗拒不正義法律', '私下犯罪', '暴力革命唯一途徑', '逃稅有理', '公民不服從具公開非暴力特徵。'],
  ['媒體識讀能力有助於？', '分辨訊息真偽與立場', '完全相信所有新聞', '拒絕一切資訊', '只看標題', '識讀提升判斷力。'],
  ['社會契約論大致主張？', '政權正當性來自人民同意', '君權神授唯一', '武力即正義', '無需政府', '契約論強調同意。'],
  ['多元文化社會應重視？', '尊重差異與平等對待', '強制單一文化', '歧視少數', '取消語言權', '多元文化重尊重。'],
  ['公共財的特性包含？', '非排他性與非敵對性等', '完全私有可排除所有人', '只能一人使用', '無外部性', '公共財具共享特質。'],
  ['人權保障的核心觀念是？', '人人生而平等具尊嚴', '權利可任意剝奪', '只保障富人', '只保障特定群體', '人權強調平等尊嚴。'],
  ['選舉制度設計影響？', '政黨席次與代表性', '與政治無關', '只影響天氣', '取消投票必要', '制度影響代表性。'],
  ['公民社會的重要元素包含？', '志願結社與公共參與', '完全私人孤立', '禁止社團', '取消言論', '公民社會重參與。'],
  ['永續發展目標與公民相關處在於？', '環境、社會、經濟均衡', '只追求短期利潤', '忽視弱勢', '排斥國際合作', 'SDGs 強調均衡。'],
];

function makeTemplatedHumanities(r, seed, idx, difficulty, templates, section) {
  const t = templates[idx];
  if (!t) return null;
  const tone = difficulty === 'easy' ? '基礎' : difficulty === 'hard' ? '綜合' : '應用';
  return withMeta({
    type: 'single', section,
    text: `【${tone}】${t[0]}`,
    options: [t[1], t[2], t[3], t[4]], answer: 0,
    explanation: t[5],
  }, difficulty);
}

// ── 主入口：單題工廠 ──────────────────────────────────────────
function makeOne(level, subject, difficulty, seed, idx) {
  const r = rng((seed + idx * 9973 + difficulty.length * 13) >>> 0);

  if (subject === 'chinese') return makeChineseQuestion(r, seed, idx, difficulty, level);
  if (subject === 'english') return makeEnglishQuestion(r, seed, idx, difficulty, level);

  if (subject === 'math' && level === 'junior') return juniorMathSingle(r, seed, idx, difficulty);
  if ((subject === 'mathA' || subject === 'mathB') && (level === 'gsat' || level === 'ast')) {
    return hsMathSingle(r, seed, idx, difficulty, subject);
  }

  if (subject === 'science') {
    const pool = level === 'junior' ? JUNIOR_SCIENCE_FACTS : GSAT_SCIENCE_FACTS;
    const tag = level === 'junior' ? '會考' : '學測';
    if (idx < pool.length) return makeScienceLike(r, seed, idx, difficulty, pool, null, tag);
    return scienceNumeric(r, seed, idx, difficulty, null, level);
  }
  if (subject === 'social') {
    const pool = level === 'junior' ? JUNIOR_SOCIAL_FACTS : GSAT_SOCIAL_FACTS;
    const tag = level === 'junior' ? '會考' : '學測';
    if (idx < pool.length) return makeScienceLike(r, seed, idx, difficulty, pool, null, tag);
    return makeSocialParametric(r, seed, idx, difficulty, level);
  }
  if (subject === 'physics') {
    if (idx < PHYSICS_ITEMS.length) return makeTemplatedHumanities(r, seed, idx, difficulty, PHYSICS_ITEMS, '物理');
    return scienceNumeric(r, seed, idx, difficulty, 'physics', level);
  }
  if (subject === 'chemistry') {
    if (idx < CHEM_ITEMS.length) return makeTemplatedHumanities(r, seed, idx, difficulty, CHEM_ITEMS, '化學');
    return scienceNumeric(r, seed, idx, difficulty, 'chemistry', level);
  }
  if (subject === 'biology') {
    if (idx < BIO_ITEMS.length) return makeTemplatedHumanities(r, seed, idx, difficulty, BIO_ITEMS, '生物');
    return scienceNumeric(r, seed, idx, difficulty, 'biology', level);
  }
  if (subject === 'history') {
    if (idx < AST_HISTORY.length) return makeTemplatedHumanities(r, seed, idx, difficulty, AST_HISTORY, '歷史');
    return makeHumanitiesFill(r, seed, idx, difficulty, '歷史');
  }
  if (subject === 'geography') {
    if (idx < AST_GEO.length) return makeTemplatedHumanities(r, seed, idx, difficulty, AST_GEO, '地理');
    return makeHumanitiesFill(r, seed, idx, difficulty, '地理');
  }
  if (subject === 'civics') {
    if (idx < CLEAN_CIVICS.length) return makeTemplatedHumanities(r, seed, idx, difficulty, CLEAN_CIVICS, '公民');
    return makeHumanitiesFill(r, seed, idx, difficulty, '公民');
  }

  // fallback — still a real question, never 補充題
  const a = randInt(r, 2, 20);
  const b = randInt(r, 2, 15);
  const { options, answer } = makeOptions(r, seed + idx, a + b, [a + b + 1, a - b, a * b]);
  return withMeta({
    type: 'single', section: '綜合',
    text: `【${level}/${subject}】計算 ${a}+${b}=？`,
    options, answer, explanation: `${a}+${b}=${a + b}。`,
  }, difficulty);
}

function makeNonChoiceOne(level, subject, difficulty, seed, idx) {
  const r = rng((seed + idx * 7919) >>> 0);
  if (level === 'junior' && subject === 'math') return juniorMathNonChoice(r, seed, idx, difficulty);
  if ((subject === 'mathA' || subject === 'mathB')) return hsMathNonChoice(r, seed, idx, difficulty, subject);
  if (['physics', 'chemistry', 'biology'].includes(subject)) {
    return makeAstScienceNonChoice(r, seed, idx, difficulty, subject);
  }
  return null;
}

/**
 * 生成單一科目某一難度的題庫
 * @returns {Array} units
 */
export function generateSubjectBank(level, subject, difficulty, count = 200, baseSeed = 202609) {
  const seed = levelSubjectSeed(level, subject, difficulty, baseSeed);
  const ncTarget = Math.min(nonChoiceQuota(level, subject), Math.max(8, Math.min(15, Math.floor(count * 0.06))));
  const units = [];

  // 非選擇
  if (ncTarget > 0) {
    const nc = ensureUnique(ncTarget, (idx) => makeNonChoiceOne(level, subject, difficulty, seed, idx + 5000));
    units.push(...nc);
  }

  const need = count - units.length;
  const singles = ensureUnique(need, (idx) => makeOne(level, subject, difficulty, seed, idx));
  units.push(...singles);

  let out = dedupeUnits(units);
  // 若仍不足，繼續以更大 idx 補（改變參數，不用 placeholder）
  let fillIdx = count * 3;
  let guard = 0;
  const seen = new Set();
  out.forEach(u => unitQuestionKeys(u).forEach(k => seen.add(k)));
  while (out.length < count && guard < count * 300) {
    guard += 1;
    const q = makeOne(level, subject, difficulty, seed + fillIdx, fillIdx);
    fillIdx += 1;
    if (!q || !q.text || /補充題/.test(q.text)) continue;
    if (q.type === 'single') {
      if (!q.options || q.options.length !== 4) continue;
      if (q.options.every(o => /^[A-D]$/.test(String(o).trim()))) continue;
    }
    const keys = unitQuestionKeys(q);
    if (keys.some(k => !k || k.length < 8 || seen.has(k))) continue;
    keys.forEach(k => seen.add(k));
    out.push(q);
  }

  out = out.slice(0, count);
  out = balanceAnswerDistribution(out, seed);

  // 最終再檢查並標記（呼叫端會 error）
  return out;
}

export function validateBank(units, target = 200) {
  const errors = [];
  const n = countUnits(units);
  if (n !== target) errors.push(`題數 ${n} ≠ ${target}`);
  const seen = new Set();
  for (const u of units) {
    if (/補充題/.test(u.text || '')) errors.push('含補充題');
    if (u.type === 'single') {
      if (!u.options || u.options.length !== 4) errors.push('options 非 4');
      else if (u.options.every(o => /^[A-D]$/.test(String(o).trim()))) errors.push('options 僅 A/B/C/D');
      if (!u.text || questionKey(u).length < 8) errors.push('題幹過短');
    }
    for (const k of unitQuestionKeys(u)) {
      if (seen.has(k)) errors.push('題幹重複');
      seen.add(k);
    }
  }
  return errors;
}
