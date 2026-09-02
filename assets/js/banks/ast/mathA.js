window.QuestionBanks = window.QuestionBanks || {};
window.QuestionBanks.ast = window.QuestionBanks.ast || {};
window.QuestionBanks.ast.mathA = [
  { type: 'non-choice', section: "非選擇題", text: "解方程式 x² - 11x + 30 = 0。（#2055255792-nc100）", answerText: "<p><strong>解：</strong></p><p>x² - 11x + 30 = (x - 5)(x - 6) = 0</p><p>∴ x = 5 或 x = 6</p>", explanation: "因式分解法解二次方程式。" },

  { type: 'non-choice', section: "非選擇題", text: "長 7、寬 3 的長方形，求面積與周長。（#2055255792-nc101）", answerText: "<p><strong>解：</strong></p><p>面積 = 7 × 3 = 21</p><p>周長 = 2×(7+3) = 20</p>", explanation: "長方形面積 = 長×寬，周長 = 2×(長+寬)。" },

  { type: 'non-choice', section: "非選擇題", text: "小明以每小時 67 公里速度騎車 6 小時，共騎幾公里？請寫算式與答案。（#2055255792-nc102）", answerText: "<p><strong>解：</strong></p><p>距離 = 速度 × 時間 = 67 × 6 = 402（公里）</p><p>答：共騎 402 公里</p>", explanation: "距離 = 速度 × 時間。" },

  { type: 'non-choice', section: "非選擇題", text: "解方程式 x² - 5x + 6 = 0。（#2055255792-nc103）", answerText: "<p><strong>解：</strong></p><p>x² - 5x + 6 = (x - 2)(x - 3) = 0</p><p>∴ x = 2 或 x = 3</p>", explanation: "因式分解法解二次方程式。" },

  { type: 'non-choice', section: "非選擇題", text: "長 11、寬 3 的長方形，求面積與周長。（#2055255792-nc104）", answerText: "<p><strong>解：</strong></p><p>面積 = 11 × 3 = 33</p><p>周長 = 2×(11+3) = 28</p>", explanation: "長方形面積 = 長×寬，周長 = 2×(長+寬)。" },

  { type: 'non-choice', section: "非選擇題", text: "小明以每小時 50 公里速度騎車 5 小時，共騎幾公里？請寫算式與答案。（#2055255792-nc105）", answerText: "<p><strong>解：</strong></p><p>距離 = 速度 × 時間 = 50 × 5 = 250（公里）</p><p>答：共騎 250 公里</p>", explanation: "距離 = 速度 × 時間。" },

  { type: 'non-choice', section: "非選擇題", text: "解方程式 x² - 7x + 12 = 0。（#2055255792-nc106）", answerText: "<p><strong>解：</strong></p><p>x² - 7x + 12 = (x - 3)(x - 4) = 0</p><p>∴ x = 3 或 x = 4</p>", explanation: "因式分解法解二次方程式。" },

  { type: 'non-choice', section: "非選擇題", text: "長 15、寬 3 的長方形，求面積與周長。（#2055255792-nc107）", answerText: "<p><strong>解：</strong></p><p>面積 = 15 × 3 = 45</p><p>周長 = 2×(15+3) = 36</p>", explanation: "長方形面積 = 長×寬，周長 = 2×(長+寬)。" },

  { type: 'non-choice', section: "非選擇題", text: "小明以每小時 63 公里速度騎車 5 小時，共騎幾公里？請寫算式與答案。（#2055255792-nc108）", answerText: "<p><strong>解：</strong></p><p>距離 = 速度 × 時間 = 63 × 5 = 315（公里）</p><p>答：共騎 315 公里</p>", explanation: "距離 = 速度 × 時間。" },

  { type: 'single', section: "機率統計", text: "∫₀¹ 2x^(1) dx = ?（#2055255792-0）", options: ["1/2","1/4","1/2","2"], answer: 2, explanation: "∫₀¹ 2x^(1)dx = [x^2]₀¹ = 1。" },

  { type: 'single', section: "向量", text: "7 人兩兩握手，共幾次？（#2055255792-1）", options: ["21","21","10","28"], answer: 1, explanation: "C(7,2) = 21。" },

  { type: 'single', section: "向量", text: "資料 8,12,13,20 的平均數？（#2055255792-2）", options: ["13","26","15","11"], answer: 0, explanation: "平均 = (8+12+13+20)/4 = 13。" },

  { type: 'single', section: "微積分", text: "計算 7! = ?（#2055255792-3）", options: ["5047","49","5039","5040"], answer: 3, explanation: "7! = 5040。" },

  { type: 'single', section: "機率統計", text: "若向量 |a|=3、|b|=2 且垂直，則 |a+b|² = ?（#2055255792-4）", options: ["14","5","13","25"], answer: 2, explanation: "|a+b|² = |a|²+|b|² = 9+4 = 13。" },

  { type: 'single', section: "微積分", text: "9 人兩兩握手，共幾次？（#2055255792-6）", options: ["36","45","11","18"], answer: 0, explanation: "C(9,2) = 36。" },

  { type: 'single', section: "微積分", text: "資料 8,12,18,20 的平均數？（#2055255792-7）", options: ["36","16","20","18"], answer: 3, explanation: "平均 = (8+12+18+20)/4 = 18。" },

  { type: 'single', section: "機率統計", text: "若向量 |a|=2、|b|=5 且垂直，則 |a+b|² = ?（#2055255792-9）", options: ["49","29","7","30"], answer: 1, explanation: "|a+b|² = |a|²+|b|² = 4+25 = 29。" },

  { type: 'single', section: "機率統計", text: "5 人兩兩握手，共幾次？（#2055255792-11）", options: ["15","10","7","10"], answer: 3, explanation: "C(5,2) = 10。" },

  { type: 'single', section: "機率統計", text: "資料 8,12,28,20 的平均數？（#2055255792-12）", options: ["30","26","28","56"], answer: 2, explanation: "平均 = (8+12+28+20)/4 = 28。" },

  { type: 'single', section: "微積分", text: "計算 3! = ?（#2055255792-13）", options: ["9","6","5","9"], answer: 1, explanation: "3! = 6。" },

  { type: 'single', section: "微積分", text: "若向量 |a|=3、|b|=5 且垂直，則 |a+b|² = ?（#2055255792-14）", options: ["34","8","64","35"], answer: 0, explanation: "|a+b|² = |a|²+|b|² = 9+25 = 34。" },

  { type: 'single', section: "向量", text: "資料 8,12,19,20 的平均數？（#2055255792-17）", options: ["21","19","38","17"], answer: 1, explanation: "平均 = (8+12+19+20)/4 = 19。" },

  { type: 'single', section: "機率統計", text: "若向量 |a|=4、|b|=3 且垂直，則 |a+b|² = ?（#2055255792-19）", options: ["7","26","49","25"], answer: 3, explanation: "|a+b|² = |a|²+|b|² = 16+9 = 25。" },

  { type: 'single', section: "機率統計", text: "資料 8,12,27,20 的平均數？（#2055255792-22）", options: ["27","25","54","29"], answer: 0, explanation: "平均 = (8+12+27+20)/4 = 27。" },

  { type: 'single', section: "機率統計", text: "若向量 |a|=1、|b|=4 且垂直，則 |a+b|² = ?（#2055255792-24）", options: ["5","25","17","18"], answer: 2, explanation: "|a+b|² = |a|²+|b|² = 1+16 = 17。" },

  { type: 'single', section: "機率統計", text: "資料 8,12,10,20 的平均數？（#2055255792-27）", options: ["12","8","20","10"], answer: 3, explanation: "平均 = (8+12+10+20)/4 = 10。" },

  { type: 'single', section: "機率統計", text: "若向量 |a|=2、|b|=4 且垂直，則 |a+b|² = ?（#2055255792-29）", options: ["36","20","6","21"], answer: 1, explanation: "|a+b|² = |a|²+|b|² = 4+16 = 20。" },

  { type: 'single', section: "向量", text: "資料 8,12,25,20 的平均數？（#2055255792-32）", options: ["50","27","25","23"], answer: 2, explanation: "平均 = (8+12+25+20)/4 = 25。" },

  { type: 'single', section: "機率統計", text: "計算 5! = ?（#2055255792-33）", options: ["25","120","119","125"], answer: 1, explanation: "5! = 120。" },

  { type: 'single', section: "機率統計", text: "資料 8,12,15,20 的平均數？（#2055255792-37）", options: ["30","15","17","13"], answer: 1, explanation: "平均 = (8+12+15+20)/4 = 15。" },

  { type: 'single', section: "機率統計", text: "若向量 |a|=4、|b|=2 且垂直，則 |a+b|² = ?（#2055255792-39）", options: ["21","36","6","20"], answer: 3, explanation: "|a+b|² = |a|²+|b|² = 16+4 = 20。" },

  { type: 'single', section: "機率統計", text: "資料 8,12,23,20 的平均數？（#2055255792-42）", options: ["23","25","46","21"], answer: 0, explanation: "平均 = (8+12+23+20)/4 = 23。" },

  { type: 'single', section: "機率統計", text: "若向量 |a|=4、|b|=1 且垂直，則 |a+b|² = ?（#2055255792-44）", options: ["18","25","17","5"], answer: 2, explanation: "|a+b|² = |a|²+|b|² = 16+1 = 17。" },

  { type: 'single', section: "微積分", text: "若向量 |a|=3、|b|=4 且垂直，則 |a+b|² = ?（#2055255792-54）", options: ["25","7","49","26"], answer: 0, explanation: "|a+b|² = |a|²+|b|² = 9+16 = 25。" },

  { type: 'single', section: "微積分", text: "資料 8,12,12,20 的平均數？（#2055255792-57）", options: ["24","12","10","14"], answer: 1, explanation: "平均 = (8+12+12+20)/4 = 12。" },

  { type: 'single', section: "向量", text: "若向量 |a|=1、|b|=3 且垂直，則 |a+b|² = ?（#2055255792-59）", options: ["11","16","4","10"], answer: 3, explanation: "|a+b|² = |a|²+|b|² = 1+9 = 10。" },

  { type: 'single', section: "機率統計", text: "若向量 |a|=1、|b|=1 且垂直，則 |a+b|² = ?（#2055255792-64）", options: ["3","4","2","2"], answer: 2, explanation: "|a+b|² = |a|²+|b|² = 1+1 = 2。" },

  { type: 'single', section: "微積分", text: "資料 8,12,24,20 的平均數？（#2055255792-67）", options: ["22","48","26","24"], answer: 3, explanation: "平均 = (8+12+24+20)/4 = 24。" },

  { type: 'single', section: "向量", text: "資料 8,12,30,20 的平均數？（#2055255792-72）", options: ["32","60","30","28"], answer: 2, explanation: "平均 = (8+12+30+20)/4 = 30。" },

  { type: 'single', section: "微積分", text: "若向量 |a|=5、|b|=4 且垂直，則 |a+b|² = ?（#2055255792-74）", options: ["41","42","9","81"], answer: 0, explanation: "|a+b|² = |a|²+|b|² = 25+16 = 41。" },

  { type: 'single', section: "向量", text: "資料 8,12,22,20 的平均數？（#2055255792-77）", options: ["24","22","44","20"], answer: 1, explanation: "平均 = (8+12+22+20)/4 = 22。" },

  { type: 'single', section: "機率統計", text: "若向量 |a|=5、|b|=1 且垂直，則 |a+b|² = ?（#2055255792-79）", options: ["6","36","27","26"], answer: 3, explanation: "|a+b|² = |a|²+|b|² = 25+1 = 26。" },

  { type: 'single', section: "向量", text: "∫₀¹ 3x^(2) dx = ?（#2055255792-80）", options: ["2/3","3","1/3","1/9"], answer: 2, explanation: "∫₀¹ 3x^(2)dx = [x^3]₀¹ = 1。" },

  { type: 'single', section: "向量", text: "若向量 |a|=4、|b|=5 且垂直，則 |a+b|² = ?（#2055255792-84）", options: ["42","81","41","9"], answer: 2, explanation: "|a+b|² = |a|²+|b|² = 16+25 = 41。" },

  { type: 'single', section: "向量", text: "資料 8,12,21,20 的平均數？（#2055255792-87）", options: ["23","19","42","21"], answer: 3, explanation: "平均 = (8+12+21+20)/4 = 21。" },

  { type: 'single', section: "向量", text: "若向量 |a|=1、|b|=2 且垂直，則 |a+b|² = ?（#2055255792-99）", options: ["6","3","9","5"], answer: 3, explanation: "|a+b|² = |a|²+|b|² = 1+4 = 5。" },

  { type: 'single', section: "向量", text: "資料 8,12,17,20 的平均數？（#2055255792-102）", options: ["17","19","15","34"], answer: 0, explanation: "平均 = (8+12+17+20)/4 = 17。" },

  { type: 'single', section: "微積分", text: "資料 8,12,16,20 的平均數？（#2055255792-122）", options: ["16","14","32","18"], answer: 0, explanation: "平均 = (8+12+16+20)/4 = 16。" },

  { type: 'single', section: "機率統計", text: "資料 8,12,14,20 的平均數？（#2055255792-132）", options: ["16","12","14","28"], answer: 2, explanation: "平均 = (8+12+14+20)/4 = 14。" },

  { type: 'single', section: "向量", text: "若向量 |a|=3、|b|=1 且垂直，則 |a+b|² = ?（#2055255792-139）", options: ["11","4","16","10"], answer: 3, explanation: "|a+b|² = |a|²+|b|² = 9+1 = 10。" },

  { type: 'single', section: "微積分", text: "若向量 |a|=4、|b|=4 且垂直，則 |a+b|² = ?（#2055255792-144）", options: ["33","64","32","8"], answer: 2, explanation: "|a+b|² = |a|²+|b|² = 16+16 = 32。" },

  { type: 'single', section: "機率統計", text: "若向量 |a|=2、|b|=1 且垂直，則 |a+b|² = ?（#2055255792-149）", options: ["6","5","3","9"], answer: 1, explanation: "|a+b|² = |a|²+|b|² = 4+1 = 5。" },

  { type: 'single', section: "機率統計", text: "資料 8,12,26,20 的平均數？（#2055255792-157）", options: ["24","26","52","28"], answer: 1, explanation: "平均 = (8+12+26+20)/4 = 26。" },

  { type: 'single', section: "機率統計", text: "若向量 |a|=5、|b|=2 且垂直，則 |a+b|² = ?（#2055255792-164）", options: ["30","7","29","49"], answer: 2, explanation: "|a+b|² = |a|²+|b|² = 25+4 = 29。" },

  { type: 'single', section: "微積分", text: "資料 8,12,11,20 的平均數？（#2055255792-177）", options: ["22","11","9","13"], answer: 1, explanation: "平均 = (8+12+11+20)/4 = 11。" },

  { type: 'single', section: "補充", text: "[題號 2055256192] 補充題 400（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256193] 補充題 401（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256194] 補充題 402（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256195] 補充題 403（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256196] 補充題 404（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256197] 補充題 405（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256198] 補充題 406（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256199] 補充題 407（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256200] 補充題 408（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256201] 補充題 409（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256202] 補充題 410（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256203] 補充題 411（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256204] 補充題 412（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256205] 補充題 413（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256206] 補充題 414（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256207] 補充題 415（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256208] 補充題 416（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256209] 補充題 417（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256210] 補充題 418（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256211] 補充題 419（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256212] 補充題 420（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256213] 補充題 421（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256214] 補充題 422（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256215] 補充題 423（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256216] 補充題 424（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256217] 補充題 425（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256218] 補充題 426（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256219] 補充題 427（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256220] 補充題 428（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256221] 補充題 429（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256222] 補充題 430（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256223] 補充題 431（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256224] 補充題 432（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256225] 補充題 433（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256226] 補充題 434（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256227] 補充題 435（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256228] 補充題 436（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256229] 補充題 437（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256230] 補充題 438（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256231] 補充題 439（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256232] 補充題 440（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256233] 補充題 441（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256234] 補充題 442（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256235] 補充題 443（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256236] 補充題 444（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256237] 補充題 445（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256238] 補充題 446（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256239] 補充題 447（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256240] 補充題 448（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256241] 補充題 449（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256242] 補充題 450（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256243] 補充題 451（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256244] 補充題 452（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256245] 補充題 453（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256246] 補充題 454（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256247] 補充題 455（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256248] 補充題 456（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256249] 補充題 457（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256250] 補充題 458（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256251] 補充題 459（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256252] 補充題 460（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256253] 補充題 461（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256254] 補充題 462（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256255] 補充題 463（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256256] 補充題 464（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256257] 補充題 465（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256258] 補充題 466（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256259] 補充題 467（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256260] 補充題 468（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256261] 補充題 469（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256262] 補充題 470（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256263] 補充題 471（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256264] 補充題 472（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256265] 補充題 473（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256266] 補充題 474（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256267] 補充題 475（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256268] 補充題 476（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256269] 補充題 477（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256270] 補充題 478（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256271] 補充題 479（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256272] 補充題 480（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256273] 補充題 481（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256274] 補充題 482（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256275] 補充題 483（seed 2055255792）", options: ["A","B","C","D"], answer: 1, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256276] 補充題 484（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256277] 補充題 485（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256278] 補充題 486（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256279] 補充題 487（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256280] 補充題 488（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256281] 補充題 489（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256282] 補充題 490（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256283] 補充題 491（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256284] 補充題 492（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256285] 補充題 493（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256286] 補充題 494（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256287] 補充題 495（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256288] 補充題 496（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256289] 補充題 497（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256290] 補充題 498（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256291] 補充題 499（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256292] 補充題 500（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256293] 補充題 501（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256294] 補充題 502（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256295] 補充題 503（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256296] 補充題 504（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256297] 補充題 505（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256298] 補充題 506（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256299] 補充題 507（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256300] 補充題 508（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256301] 補充題 509（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256302] 補充題 510（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256303] 補充題 511（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256304] 補充題 512（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256305] 補充題 513（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256306] 補充題 514（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256307] 補充題 515（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256308] 補充題 516（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256309] 補充題 517（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256310] 補充題 518（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256311] 補充題 519（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256312] 補充題 520（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256313] 補充題 521（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256314] 補充題 522（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256315] 補充題 523（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256316] 補充題 524（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256317] 補充題 525（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256318] 補充題 526（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256319] 補充題 527（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256320] 補充題 528（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256321] 補充題 529（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256322] 補充題 530（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256323] 補充題 531（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256324] 補充題 532（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256325] 補充題 533（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256326] 補充題 534（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256327] 補充題 535（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256328] 補充題 536（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256329] 補充題 537（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256330] 補充題 538（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256331] 補充題 539（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256332] 補充題 540（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256333] 補充題 541（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256334] 補充題 542（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256335] 補充題 543（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" },

  { type: 'single', section: "補充", text: "[題號 2055256336] 補充題 544（seed 2055255792）", options: ["A","B","C","D"], answer: 0, explanation: "自動補充題。" }
];
