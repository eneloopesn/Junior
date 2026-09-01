/**
 * 補足未達 200 題的科目
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BANKS = path.join(__dirname, '../assets/js/banks');
const TARGET = 200;

function loadBank(subject) {
  const w = { QuestionBanks: {} };
  new Function('window', fs.readFileSync(path.join(BANKS, `${subject}.js`), 'utf8'))(w);
  return w.QuestionBanks[subject];
}

function count(units) {
  let n = 0;
  units.forEach(u => { n += u.type === 'group' ? u.questions.length : 1; });
  return n;
}

function serialize(q, indent = '  ') {
  if (q.type === 'group') {
    const qs = q.questions.map(sq =>
      `{ text: ${JSON.stringify(sq.text)}, options: ${JSON.stringify(sq.options)}, answer: ${sq.answer}, explanation: ${JSON.stringify(sq.explanation)} }`
    ).join(',\n      ');
    return `${indent}{\n${indent}  type: 'group', section: ${JSON.stringify(q.section)},\n${indent}  passage: ${JSON.stringify(q.passage)},\n${indent}  questions: [\n      ${qs}\n${indent}  ]\n${indent}}`;
  }
  return `${indent}{ type: 'single', section: ${JSON.stringify(q.section)}, text: ${JSON.stringify(q.text)}, options: ${JSON.stringify(q.options)}, answer: ${q.answer}, explanation: ${JSON.stringify(q.explanation)} }`;
}

function writeBank(subject, units) {
  const lines = units.map(u => serialize(u)).join(',\n\n');
  fs.writeFileSync(path.join(BANKS, `${subject}.js`),
    `window.QuestionBanks = window.QuestionBanks || {};\nwindow.QuestionBanks.${subject} = [\n${lines}\n];\n`);
}

const chineseExtra = [
  { type: 'single', section: '字音字形', text: '「狹隘」的「隘」字，下列注音何者正確？', options: ['ㄞˋ', 'ㄧˋ', 'ㄜˋ', 'ㄨㄞˋ'], answer: 1, explanation: '「隘」讀ㄧˋ，指狹窄。' },
  { type: 'single', section: '字音字形', text: '「參差」的「差」字，在此讀音為何？', options: ['ㄔㄚ', 'ㄔㄚˋ', 'ㄔㄞ', 'ㄘㄣ'], answer: 2, explanation: '「參差」的「差」讀ㄔㄞ。' },
  { type: 'single', section: '成語', text: '「他做事認真，從不____。」何者最適合？', options: ['敷衍塞責', '投機取巧', '見異思遷', '故步自封'], answer: 0, explanation: '「敷衍塞責」指不認真負責，與句意相反，故選此項表示「從不敷衍」。' },
  { type: 'single', section: '成語', text: '「曲高和寡」比喻什麼？', options: ['作品高深，能欣賞的人少', '音樂非常動聽', '唱歌的人很少', '道路狹窄難行'], answer: 0, explanation: '「曲高和寡」比喻言論或作品高深，能理解和附和的人很少。' },
  { type: 'single', section: '修辭', text: '「時間就是金錢」運用了何種修辭？', options: ['譬喻', '誇飾', '設問', '借代'], answer: 0, explanation: '將時間比作金錢，為譬喻（隱喻）。' },
  { type: 'single', section: '修辭', text: '「試問閑愁都幾許？一川煙草，滿城風絮，梅子黃時雨。」運用了何種修辭？', options: ['設問', '感嘆', '倒反', '層遞'], answer: 0, explanation: '先設問再自答，為設問。' },
  { type: 'single', section: '文言文', text: '「學而時習之，不亦說乎？」中「說」通何字？', options: ['悅', '脫', '銳', '閱'], answer: 0, explanation: '「說」通「悅」，意為愉快。' },
  { type: 'single', section: '文言文', text: '「溫故而知新，可以為師矣」中「故」的意思為何？', options: ['舊的、過去的', '所以', '故意', '故鄉'], answer: 0, explanation: '「故」指舊有的知識。' },
  { type: 'single', section: '白話文', text: '閱讀理解：「閱讀不僅是獲取資訊，更是與作者對話的過程。」作者強調閱讀的何種特質？', options: ['互動性與思考', '速度與效率', '記憶與背誦', '娛樂與消遣'], answer: 0, explanation: '「與作者對話」強調閱讀的互動與思考特質。' },
  { type: 'single', section: '語文素養', text: '下列何者符合正確的標點使用？', options: ['他問：「你去哪裡？」', '他問，「你去哪裡」？', '他問：「你去哪裡」？', '他問，「你去哪裡？」'], answer: 0, explanation: '直接引語用冒號，問號在引號內。' },
  { type: 'single', section: '字音字形', text: '「費寢忘食」的「寢」字，意思為何？', options: ['睡覺', '吃飯', '讀書', '工作'], answer: 0, explanation: '「寢」指睡覺，「廢寢忘食」形容專心努力。' },
  { type: 'single', section: '成語', text: '「一箭雙雕」比喻什麼？', options: ['一舉兩得', '射箭技術高', '獵鷹很厲害', '浪費資源'], answer: 0, explanation: '「一箭雙雕」比喻做一件事達到兩個目的。' },
  { type: 'single', section: '修辭', text: '「牆角的花，你孤芳自賞時，天地便小了」運用了何種修辭？', options: ['轉化', '譬喻', '誇飾', '對偶'], answer: 0, explanation: '將花擬人化，賦予「孤芳自賞」的動作，為轉化。' },
  { type: 'single', section: '文言文', text: '「三人行，必有我師焉」中「焉」的用法為何？', options: ['語助詞', '代詞', '介詞', '連詞'], answer: 0, explanation: '「焉」在此為語助詞，無實義。' },
  { type: 'single', section: '白話文', text: '「數位閱讀讓資訊取得更容易，但也可能讓專注力下降。」這段文字的主旨為何？', options: ['數位閱讀有利有弊', '應完全禁止數位閱讀', '紙本書已無價值', '專注力與閱讀無關'], answer: 0, explanation: '文中同時提到便利與專注力問題，呈現有利有弊。' },
  { type: 'single', section: '語文素養', text: '「刎頸之交」形容什麼樣的朋友？', options: ['可同生死的至交', '點頭之交', '商業夥伴', '師生關係'], answer: 0, explanation: '「刎頸之交」指可以同生死、共患難的朋友。' },
  { type: 'single', section: '字音字形', text: '「採菊東籬下，悠然見南山」中「見」的讀音為何？', options: ['ㄐㄧㄢˋ', 'ㄒㄧㄢˋ', 'ㄐㄧㄢ', 'ㄒㄧㄢˇ'], answer: 0, explanation: '「見南山」的「見」讀ㄐㄧㄢˋ，意為看見。' },
  { type: 'single', section: '成語', text: '「亡羊補牢」的寓意為何？', options: ['出問題後及時補救還不算晚', '羊丢了就不用管', '牢籠要常修', '牧羊人很懶'], answer: 0, explanation: '「亡羊補牢」比喻出問題後及時補救，還不算晚。' },
  { type: 'single', section: '修辭', text: '「飛流直下三千尺，疑是銀河落九天」主要運用了何種修辭？', options: ['誇飾', '譬喻', '設問', '借代'], answer: 0, explanation: '「三千尺」「銀河落九天」誇大瀑布的氣勢，為誇飾。' },
  { type: 'single', section: '文言文', text: '「學而不思則罔，思而不學則殆」強調什麼？', options: ['學思並重', '只讀書不思考', '只思考不讀書', '不必讀書'], answer: 0, explanation: '孔子強調學習與思考要並重。' },
  { type: 'single', section: '白話文', text: '「經典作品之所以歷久彌新，是因為它能觸動不同世代的心靈。」這句話說明經典的什麼特質？', options: ['跨越時代的感染力', '文字艱深難懂', '只有古人能欣賞', '數量非常稀少'], answer: 0, explanation: '「歷久彌新」「不同世代」說明跨越時代的感染力。' },
  { type: 'single', section: '語文素養', text: '下列何者為形聲字？', options: ['江', '日', '上', '刃'], answer: 0, explanation: '「江」：氵為形符，工為聲符，屬形聲字。' },
  { type: 'single', section: '字音字形', text: '「锲而不舍」的「舍」字，意思為何？', options: ['停止', '房屋', '放棄', '居住'], answer: 0, explanation: '「锲而不舍」的「舍」指停止。' },
  { type: 'single', section: '成語', text: '「百聞不如一見」強調什麼？', options: ['親眼所見比聽聞更可靠', '聽比看重要', '不要出門', '謠言不可信'], answer: 0, explanation: '強調親眼所見比多次聽聞更可靠。' },
  { type: 'single', section: '修辭', text: '「你說話怎麼像機關槍一樣？」運用了何種修辭？', options: ['譬喻', '誇飾', '設問', '映襯'], answer: 0, explanation: '將說話速度比作機關槍，為譬喻。' },
  { type: 'single', section: '文言文', text: '「知之为知之，不知为不知，是知也」中最後一個「知」的讀音為何？', options: ['ㄓˋ', 'ㄓ', 'ㄓㄨ', 'ㄓㄜ'], answer: 0, explanation: '最後一個「知」通「智」，讀ㄓˋ，意為智慧。' },
  { type: 'single', section: '白話文', text: '「寫作是整理思緒的過程，而不只是交作業。」作者想表達什麼？', options: ['寫作具有思考與整理的功能', '寫作只是形式', '不必認真寫作', '思緒與寫作無關'], answer: 0, explanation: '作者強調寫作能整理思緒，不只是交作業。' },
  { type: 'single', section: '語文素養', text: '「望梅止渴」的故事說明什麼道理？', options: ['用空想安慰自己', '梅子可以解渴', '曹操很聰明', '士兵不該喝水'], answer: 0, explanation: '「望梅止渴」比喻用空想来安慰自己。' },
  { type: 'single', section: '字音字形', text: '「蓋棺論定」的「論」字，讀音為何？', options: ['ㄌㄨㄣˊ', 'ㄌㄨㄣˋ', 'ㄌㄨㄢˊ', 'ㄋㄨㄣˊ'], answer: 1, explanation: '「論定」的「論」讀ㄌㄨㄣˋ，意為評論、判定。' },
  { type: 'single', section: '成語', text: '「紙上談兵」諷刺什麼？', options: ['只會空談，不能實際解決問題', '兵書讀太多', '紙張太貴', '戰爭很殘酷'], answer: 0, explanation: '「紙上談兵」諷刺只會空談理論，不能解決實際問題。' },
  { type: 'single', section: '修辭', text: '「朱門酒肉臭，路有凍死骨」運用了何種修辭？', options: ['對比', '誇飾', '設問', '借代'], answer: 0, explanation: '富人與窮人的境遇形成對比。' },
  { type: 'single', section: '文言文', text: '「己所不欲，勿施於人」出自何者？', options: ['孔子', '孟子', '老子', '莊子'], answer: 0, explanation: '此為孔子所言，是儒家的恕道。' },
  { type: 'single', section: '白話文', text: '「語文能力不只是考試分數，更是溝通與理解世界的工具。」這句話的主旨為何？', options: ['語文能力具有實用與溝通價值', '語文只為考試', '溝通不需要語文', '分數最重要'], answer: 0, explanation: '強調語文是溝通與理解世界的工具，不只為考試。' },
  { type: 'single', section: '語文素養', text: '「推敲」一詞與哪位詩人有關？', options: ['賈島', '李白', '杜甫', '白居易'], answer: 0, explanation: '賈島在「僧敲月下門」與「僧推月下門」之間推敲用字。' },
  { type: 'single', section: '字音字形', text: '「絡繹不絕」的「繹」字，讀音為何？', options: ['ㄧˋ', 'ㄌㄧˋ', 'ㄕˋ', 'ㄓˊ'], answer: 0, explanation: '「繹」讀ㄧˋ，「絡繹不絕」形容人車來往不斷。' },
  { type: 'single', section: '成語', text: '「水滴石穿」比喻什麼？', options: ['持之以恒，終能成功', '水比石頭強', '石頭很脆弱', '不需要努力'], answer: 0, explanation: '比喻只要持之以恒，力量雖小也能成功。' },
  { type: 'single', section: '修辭', text: '「春風又綠江南岸」中「綠」字詞性轉換為何？', options: ['形容詞作動詞', '名詞作動詞', '動詞作名詞', '副詞作動詞'], answer: 0, explanation: '「綠」原為形容詞，此處作動詞用，為轉品。' },
  { type: 'single', section: '文言文', text: '「見賢思齊焉，見不賢而內自省也」中「齊」的意思為何？', options: ['看齐、效法', '整齊', '齊國', '相同'], answer: 0, explanation: '「思齊」指看到賢者就想效法看齐。' },
  { type: 'single', section: '白話文', text: '「好的演講者懂得用故事打動人心。」這句話強調演講的什麼技巧？', options: ['運用故事增加感染力', '聲音要大', '內容要長', '不需要準備'], answer: 0, explanation: '用故事打動人心，強調故事的感染力。' },
];

const englishExtra = [
  { type: 'single', section: '文法', text: 'She has been studying English _____ five years.', options: ['since', 'for', 'during', 'ago'], answer: 1, explanation: 'for + 一段時間，five years 是持續時間。' },
  { type: 'single', section: '字彙', text: 'The weather is too _____ to go hiking today.', options: ['bad', 'good', 'nice', 'warm'], answer: 0, explanation: 'too bad 表示天氣太糟，不適合健行。' },
  { type: 'single', section: '閱讀', text: 'What does "deadline" mean?', options: ['The last day to finish something', 'A line that cannot move', 'A type of food', 'A school subject'], answer: 0, explanation: 'deadline 指截止日期。' },
  { type: 'single', section: '文法', text: 'If it _____ tomorrow, we will stay at home.', options: ['rain', 'rains', 'will rain', 'rained'], answer: 1, explanation: 'if 條件句：主句未來式，從句用現在式。' },
  { type: 'single', section: '字彙', text: 'Please _____ the door when you leave.', options: ['close', 'open', 'break', 'paint'], answer: 0, explanation: 'leave 時 close the door 關門。' },
];

for (const [subject, extra] of [['chinese', chineseExtra], ['english', englishExtra]]) {
  const bank = loadBank(subject);
  const need = TARGET - count(bank);
  if (need > 0) {
    const add = extra.slice(0, need);
    writeBank(subject, [...bank, ...add]);
    console.log(`${subject}: 補充 ${add.length} 題 → 共 ${count(loadBank(subject))} 題`);
  } else {
    console.log(`${subject}: 已有 ${count(bank)} 題`);
  }
}
