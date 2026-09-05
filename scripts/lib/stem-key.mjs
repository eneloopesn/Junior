/**
 * 題幹正規化：去掉包裝標籤後比對「真正考什麼」
 * 題庫生成與出題抽題共用，避免包裝不同、內容相同的重複題
 */
export function normalizedStemKey(q) {
  let t = String(q?.text || '');
  t = t
    .replace(/【[^】]*】/g, '')
    .replace(/^(?:Basic|Practice|Advanced):\s*/i, '')
    .replace(/\[Q\d+\]\s*/gi, '')
    .replace(/（會考）|（學測）/g, '')
    .replace(/\(\s*Junior\s*\)|\(\s*GSAT\s*\)/gi, '')
    .replace(/^(課堂提問|段考練習|實驗討論|生活應用|概念確認|復習測驗|素養情境|單元檢核|跨科整合|學測取向|進階推理|實驗分析|觀念辯證|資料判讀|綜合應用)：/, '')
    .replace(/在「[^」]+」練習中，/g, '')
    .replace(/就「[^」]+」判斷，/g, '')
    .replace(/(字音練習|多音字辨識|修辭辨認|修辭精準度|文言理解|文言詮釋)（[^）]*）：/g, '')
    .replace(/^(課堂練習|段考複習|會考練習|單元評量|學測模擬|素養挑題|綜合複習|進階評量)：/, '')
    .replace(/^[甲乙丙丁戊己庚辛壬癸]\d{4}\S*?：/, '')
    .replace(/\s*\([^)]{2,50}\)\s*$/g, '')
    .replace(/\s*（#[^）]+）/g, '')
    .replace(/\s*\(Q\d+-\d+\)/g, '')
    .replace(/\s*\[題號 \d+\]/g, '')
    .replace(/\s*（\d+）\s*$/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
  return t;
}
