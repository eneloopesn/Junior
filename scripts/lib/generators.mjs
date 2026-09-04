/**
 * 每月自動生成新題目（數學、自然）
 */
import { getMonthSeed } from './bank-utils.mjs';

function rng(seed) {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s;
  };
}

function pick(r, arr) {
  return arr[r() % arr.length];
}

function randInt(r, min, max) {
  return min + (r() % (max - min + 1));
}

export function generateMathQuestions(seed) {
  const r = rng(seed);
  const questions = [];

  for (let i = 0; i < 15; i++) {
    const a = randInt(r, 2, 20);
    const b = randInt(r, 2, 15);
    const ans = a + b;
    const wrong = [ans + 1, ans - 1, ans + 2, a * b].filter(x => x !== ans && x > 0);
    const opts = [ans, wrong[0], wrong[1], wrong[2]].sort(() => (r() % 3) - 1);
    questions.push({
      type: 'single', section: '代數',
      text: `計算 ${a} + ${b} = ?`,
      options: opts.map(String),
      answer: opts.indexOf(ans),
      explanation: `${a} + ${b} = ${ans}。`
    });
  }

  for (let i = 0; i < 10; i++) {
    const a = randInt(r, 2, 12);
    const b = randInt(r, 2, 12);
    const ans = a * b;
    const opts = [ans, ans + a, ans - b, a + b].sort(() => (r() % 3) - 1);
    questions.push({
      type: 'single', section: '代數',
      text: `計算 ${a} × ${b} = ?`,
      options: opts.map(String),
      answer: opts.indexOf(ans),
      explanation: `${a} × ${b} = ${ans}。`
    });
  }

  for (let i = 0; i < 8; i++) {
    const base = randInt(r, 3, 12);
    const height = randInt(r, 3, 10);
    const ans = (base * height) / 2;
    const opts = [ans, base * height, base + height, ans + 2].sort(() => (r() % 3) - 1);
    questions.push({
      type: 'single', section: '幾何',
      text: `底為 ${base}、高為 ${height} 的三角形面積為何？`,
      options: opts.map(String),
      answer: opts.indexOf(ans),
      explanation: `三角形面積 = 底 × 高 ÷ 2 = ${base} × ${height} ÷ 2 = ${ans}。`
    });
  }

  for (let i = 0; i < 7; i++) {
    const n = randInt(r, 5, 15);
    const total = randInt(r, 20, 50);
    const part = Math.round(total * n / 100);
    const opts = [part, part + 1, part - 1, total - part].filter((v, idx, a) => a.indexOf(v) === idx);
    while (opts.length < 4) opts.push(part + opts.length);
    questions.push({
      type: 'single', section: '統計',
      text: `某班 ${total} 人，其中 ${n}% 參加社團，參加社團的有多少人？`,
      options: opts.slice(0, 4).map(String),
      answer: opts.indexOf(part),
      explanation: `${total} × ${n}% = ${part} 人。`
    });
  }

  const x = randInt(r, 3, 15);
  const speed = randInt(r, 40, 80);
  const time = randInt(r, 2, 5);
  const dist = speed * time;
  questions.push({
    type: 'non-choice', section: '非選擇題',
    text: `小明以每小時 ${speed} 公里的速度騎車 ${time} 小時，共騎了幾公里？請寫出算式與答案。`,
    answerText: `<p><strong>解：</strong></p><p>距離 = 速度 × 時間 = ${speed} × ${time} = ${dist}（公里）</p><p>答：共騎 ${dist} 公里</p>`,
    explanation: `距離 = 速度 × 時間。`
  });

  return questions;
}

export function generateScienceQuestions(seed) {
  const r = rng(seed + 1000);
  const topics = [
    { section: '物理', texts: [
      ['下列何者為力的單位？', ['牛頓', '焦耳', '瓦特', '帕斯卡'], 0, '力的 SI 單位為牛頓（N）。'],
      ['光在真空中約每秒走多少公里？', ['30 萬', '3 萬', '3000', '300'], 0, '光速約每秒 30 萬公里。'],
      ['下列何者為電的良導體？', ['銅', '橡膠', '玻璃', '塑膠'], 0, '銅為良導體。']
    ]},
    { section: '化學', texts: [
      ['下列何者為純物質？', ['蒸餾水', '空氣', '牛奶', '海水'], 0, '蒸餾水為純物質。'],
      ['氧氣的化學式為何？', ['O₂', 'CO₂', 'H₂O', 'NaCl'], 0, '氧氣為 O₂。'],
      ['下列何者為物理變化？', ['冰融化', '鐵生鏽', '燃燒', '發霉'], 0, '冰融化為物理變化。']
    ]},
    { section: '生物', texts: [
      ['光合作用主要在植物的哪個構造進行？', ['葉綠體', '粒線體', '細胞核', '液胞'], 0, '葉綠體進行光合作用。'],
      ['人體中，血液循環的主要器官為何？', ['心臟', '肺', '肝', '腎'], 0, '心臟推動血液循環。'],
      ['下列何者為消費者？', ['兔子', '草', '藻類', '真菌'], 0, '兔子以植物為食，為消費者。']
    ]},
    { section: '地科', texts: [
      ['地球內部由外而內的第一層為何？', ['地殼', '地函', '地核', '大氣圈'], 0, '由外而內為地殼、地函、地核。'],
      ['颱風主要生成於哪類地區？', ['熱帶海洋', '極地', '沙漠', '高海拔山區'], 0, '颱風生成於熱帶海洋。'],
      ['化石主要保存在哪類岩石中？', ['沉積岩', '火成岩', '變質岩', '玄武岩'], 0, '化石主要保存在沉積岩。']
    ]}
  ];

  const questions = [];
  for (let i = 0; i < 20; i++) {
    const topic = pick(r, topics);
    const item = pick(r, topic.texts);
    questions.push({
      type: 'single', section: topic.section,
      text: item[0], options: item[1], answer: item[2], explanation: item[3]
    });
  }
  return questions;
}

export function generateMonthlyQuestions(subject, seed) {
  if (subject === 'math') return generateMathQuestions(seed);
  if (subject === 'science') return generateScienceQuestions(seed);
  if (subject === 'chinese') return generateChineseQuestions(seed);
  if (subject === 'english') return generateEnglishQuestions(seed);
  if (subject === 'social') return generateSocialQuestions(seed);
  return [];
}

function generateChineseQuestions(seed) {
  const r = rng(seed + 2000);
  const templates = [
    ['字音字形', '下列「　」中的字，何者讀音正確？', ['機會（ㄏㄨㄟˋ）', '勉強（ㄑㄧㄤˇ）', '參差（ㄘㄢ ㄔㄚ）', '妥協（ㄒㄧㄝˊ）'], 1],
    ['成語', '「锲而不舍」比喻什麼？', ['持續努力不間斷', '快速完成', '輕易放棄', '猶豫不決'], 0],
    ['修辭', '「時間就是金錢」運用何種修辭？', ['譬喻', '誇飾', '設問', '借代'], 0],
    ['文言文', '「學而時習之」的「習」是什麼意思？', ['練習、複習', '習慣', '學習', '教導'], 0],
    ['白話文', '「閱讀讓我們看見更大的世界」這句話強調閱讀的何種價值？', ['拓展視野', '增加考試分數', '打發時間', '代替旅行'], 0],
    ['語文素養', '下列何者標點符號使用正確？', ['他問：「你好吗？」', '他問，「你好吗」？', '他問：「你好吗」？', '他問，「你好吗？」'], 0],
    ['字音字形', '「一曝十寒」的「曝」讀音為何？', ['ㄆㄨˋ', 'ㄅㄠˋ', 'ㄆㄡˋ', 'ㄅㄨˋ'], 0],
    ['成語', '「破釜沉舟」表現什麼？', ['背水一戰的決心', '烹飪技術', '節約用水', '優柔寡斷'], 0],
    ['修辭', '「風兒輕撫臉龐」運用何種修辭？', ['轉化', '譬喻', '誇飾', '對偶'], 0],
    ['文言文', '「溫故而知新」的「故」指什麼？', ['舊知識', '故意', '所以', '故鄉'], 0],
    ['白話文', '「好的文章能引發共鳴」中的「共鳴」最接近何意？', ['產生相同感受', '聲音變大', '意見衝突', '完全理解'], 0],
    ['語文素養', '「刎頸之交」形容什麼？', ['生死之交', '點頭之交', '商業夥伴', '師生關係'], 0],
    ['字音字形', '「參加」的「參」讀音為何？', ['ㄘㄢ', 'ㄕㄣ', 'ㄘㄣ', 'ㄙㄣ'], 0],
    ['成語', '「亡羊補牢」的寓意為何？', ['及時補救還不算晚', '羊已經丟了', '不必修補', '等待機會'], 0],
    ['修辭', '「飛流直下三千尺」主要運用何種修辭？', ['誇飾', '譬喻', '設問', '借代'], 0],
    ['文言文', '「三人行，必有我師焉」出於何者？', ['孔子', '孟子', '老子', '韓非子'], 0],
    ['白話文', '「數位時代仍需要深度閱讀」這句話的主旨為何？', ['閱讀方式需與時並進但仍重視理解', '不必閱讀', '只看影片就夠', '紙本書已過時'], 0],
    ['語文素養', '下列何者為形聲字？', ['河', '日', '上', '刃'], 0],
    ['成語', '「一箭雙雕」比喻什麼？', ['一舉兩得', '射箭比賽', '獵鷹很強', '浪費箭矢'], 0],
    ['修辭', '「紅豆生南國」中「紅豆」常象徵什麼？', ['相思', '豐收', '離別', '愛國'], 0],
  ];
  return templates.map(([section, text, options, answer], i) => ({
    type: 'single', section, text: `${text}（${seed}-${i + 1}）`,
    options, answer, explanation: `本題為 ${seed} 年 ${section} 自動更新題。`
  }));
}

function generateEnglishQuestions(seed) {
  const r = rng(seed + 3000);
  const templates = [
    ['文法', 'She _____ to school every day.', ['goes', 'go', 'going', 'went'], 0],
    ['文法', 'I have lived here _____ 2020.', ['since', 'for', 'during', 'ago'], 0],
    ['字彙', 'The opposite of "hot" is _____.', ['cold', 'warm', 'cool', 'heat'], 0],
    ['字彙', 'We need to _____ the environment.', ['protect', 'destroy', 'ignore', 'forget'], 0],
    ['閱讀', 'What does "library" mean?', ['A place to borrow books', 'A type of food', 'A sport', 'A vehicle'], 0],
    ['文法', 'If it rains, we _____ at home.', ['will stay', 'stayed', 'stay', 'staying'], 0],
    ['字彙', 'A person who teaches is a _____.', ['teacher', 'doctor', 'driver', 'farmer'], 0],
    ['文法', 'He is _____ than his brother.', ['taller', 'tall', 'tallest', 'more tall'], 0],
    ['字彙', 'Please _____ quiet in the library.', ['be', 'is', 'are', 'being'], 0],
    ['閱讀', 'What is a "deadline"?', ['The last day to finish', 'A line on paper', 'A type of fish', 'A school subject'], 0],
    ['文法', 'They _____ playing basketball now.', ['are', 'is', 'was', 'be'], 0],
    ['字彙', 'We should drink more _____.', ['water', 'oil', 'sand', 'paper'], 0],
    ['文法', 'She has _____ finished her homework.', ['already', 'yet', 'since', 'ever'], 0],
    ['字彙', 'The weather is _____ today.', ['nice', 'nicely', 'nicer', 'nicest'], 0],
    ['閱讀', 'What does "recycle" mean?', ['Use again', 'Throw away', 'Buy new', 'Break'], 0],
    ['文法', 'Don\'t forget _____ the door.', ['to lock', 'lock', 'locking', 'locked'], 0],
    ['字彙', 'A _____ helps sick people.', ['doctor', 'chef', 'pilot', 'artist'], 0],
    ['文法', 'English _____ in many countries.', ['is spoken', 'speaks', 'spoke', 'speaking'], 0],
    ['字彙', 'I am _____ in science.', ['interested', 'interest', 'interesting', 'interests'], 0],
    ['閱讀', 'What is a "volunteer"?', ['Someone who helps without pay', 'A paid worker', 'A student', 'A teacher'], 0],
  ];
  return templates.map(([section, text, options, answer], i) => ({
    type: 'single', section, text: `${text} (${seed}-${i + 1})`,
    options, answer, explanation: `Monthly update ${seed} - ${section}.`
  }));
}

function generateSocialQuestions(seed) {
  const r = rng(seed + 4000);
  const templates = [
    ['歷史', '臺灣在清治時期最初設立的行政區域稱為什麼？', ['臺灣府', '臺北市', '福建省', '廣東省'], 0],
    ['地理', '臺灣最高的山脈為何？', ['玉山', '阿里山', '雪山', '合歡山'], 0],
    ['公民', '中華民國主權屬於誰？', ['國民全體', '總統', '立法院', '行政院'], 0],
    ['歷史', '鄭成功從哪個國家手中收復臺灣？', ['荷蘭', '西班牙', '日本', '英國'], 0],
    ['地理', '臺灣位於哪個大洋西岸？', ['太平洋', '大西洋', '印度洋', '北極洋'], 0],
    ['公民', '下列何者屬於司法權？', ['法院', '總統府', '立法院', '行政院'], 0],
    ['歷史', '二二八事件發生於哪一年？', ['1947', '1945', '1950', '1937'], 0],
    ['地理', '臺灣的氣候類型主要為何？', ['季風氣候', '沙漠氣候', '地中海型', '極地氣候'], 0],
    ['公民', '投票權屬於哪種權利？', ['參政權', '受益權', '自由權', '平等權'], 0],
    ['歷史', '科舉制度在哪個朝代確立？', ['隋朝', '漢朝', '唐朝', '宋朝'], 0],
    ['地理', '臺灣人口主要分布在哪裡？', ['西部平原', '東部海岸', '高山地區', '離島'], 0],
    ['公民', '法律之前人人平等體現哪項權利？', ['平等權', '自由權', '參政權', '受益權'], 0],
    ['歷史', '日治時期臺灣的主要出口產品為何？', ['糖', '石油', '小麥', '天然氣'], 0],
    ['地理', '全球暖化可能導致什麼？', ['海平面上升', '海平面下降', '地震減少', '颱風消失'], 0],
    ['公民', '媒體在民主社會中的功能為何？', ['監督政府', '代替政府', '控制人民', '只娛樂大眾'], 0],
    ['歷史', '臺灣解嚴發生於哪一年？', ['1987', '1996', '2000', '1975'], 0],
    ['地理', '等高線密集表示什麼？', ['坡度陡峭', '坡度平緩', '海拔低', '河谷'], 0],
    ['公民', '消費者保護法保障誰的權益？', ['消費者', '製造商', '政府', '銀行'], 0],
    ['歷史', '文藝復興的核心精神為何？', ['人文主義', '神權至上', '軍事擴張', '封建制度'], 0],
    ['地理', '東南亞主要宗教為何？', ['伊斯蘭教與佛教', '基督教', '印度教', '道教'], 0],
  ];
  return templates.map(([section, text, options, answer], i) => ({
    type: 'single', section, text: `${text}（更新${seed}-${i + 1}）`,
    options, answer, explanation: `${seed} 年 ${section} 自動更新題。`
  }));
}

export { getMonthSeed };
