window.QuestionBanks = window.QuestionBanks || {};
window.QuestionBanks.ast = window.QuestionBanks.ast || {};
window.QuestionBanks.ast.mathA = window.QuestionBanks.ast.mathA || {};
window.QuestionBanks.ast.mathA.easy = [
  { type: 'non-choice', section: "非選擇題", text: "已知 f(x)=x²-8x+14，(1) 配方；(2) 求最小值及對應 x。", answerText: "<p>f(x)=(x-4)²+-2；最小值 -2（x=4）。</p>", explanation: "二次函數配方。", difficulty: "easy" },

  { type: 'non-choice', section: "非選擇題", text: "等差數列首項 5、公差 2，求第 9 項與前 9 項和。", answerText: "<p>第 9 項=21；前 9 項和=117。</p>", explanation: "等差數列公式。", difficulty: "easy" },

  { type: 'non-choice', section: "非選擇題", text: "計算 log_5(125)，並說明理由。", answerText: "<p>因 5^3=125，故對數值為 3。</p>", explanation: "對數定義。", difficulty: "easy" },

  { type: 'non-choice', section: "非選擇題", text: "已知 f(x)=x²-4x+2，(1) 配方；(2) 求最小值及對應 x。", answerText: "<p>f(x)=(x-2)²+-2；最小值 -2（x=2）。</p>", explanation: "二次函數配方。", difficulty: "easy" },

  { type: 'non-choice', section: "非選擇題", text: "等差數列首項 6、公差 2，求第 9 項與前 9 項和。", answerText: "<p>第 9 項=22；前 9 項和=126。</p>", explanation: "等差數列公式。", difficulty: "easy" },

  { type: 'non-choice', section: "非選擇題", text: "計算 log_2(8)，並說明理由。", answerText: "<p>因 2^3=8，故對數值為 3。</p>", explanation: "對數定義。", difficulty: "easy" },

  { type: 'non-choice', section: "非選擇題", text: "已知 f(x)=x²-12x+34，(1) 配方；(2) 求最小值及對應 x。", answerText: "<p>f(x)=(x-6)²+-2；最小值 -2（x=6）。</p>", explanation: "二次函數配方。", difficulty: "easy" },

  { type: 'non-choice', section: "非選擇題", text: "等差數列首項 4、公差 2，求第 7 項與前 7 項和。", answerText: "<p>第 7 項=16；前 7 項和=70。</p>", explanation: "等差數列公式。", difficulty: "easy" },

  { type: 'non-choice', section: "非選擇題", text: "計算 log_2(16)，並說明理由。", answerText: "<p>因 2^4=16，故對數值為 4。</p>", explanation: "對數定義。", difficulty: "easy" },

  { type: 'non-choice', section: "非選擇題", text: "等差數列首項 3、公差 2，求第 7 項與前 7 項和。", answerText: "<p>第 7 項=15；前 7 項和=63。</p>", explanation: "等差數列公式。", difficulty: "easy" },

  { type: 'non-choice', section: "非選擇題", text: "計算 log_2(4)，並說明理由。", answerText: "<p>因 2^2=4，故對數值為 2。</p>", explanation: "對數定義。", difficulty: "easy" },

  { type: 'non-choice', section: "非選擇題", text: "等差數列首項 6、公差 2，求第 7 項與前 7 項和。", answerText: "<p>第 7 項=18；前 7 項和=84。</p>", explanation: "等差數列公式。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、6、10、12 的平均數（四捨五入）為何？", options: ["8","9","10","6"], answer: 0, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "不等式", text: "解不等式 2x + 1 > 0。", options: ["x < -0.5","x = -0.5","無解","x > -0.5"], answer: 3, explanation: "得 x > -0.5。", difficulty: "easy" },

  { type: 'single', section: "指數與對數", text: "化簡 2^1 = ?", options: ["選項變體1","1","2","4"], answer: 2, explanation: "2^1=2。", difficulty: "easy" },

  { type: 'single', section: "解析幾何", text: "過點 (1,1) 與 (3,2) 的直線斜率為何？", options: ["1","0.5","1.5","2"], answer: 1, explanation: "斜率 = 0.5。", difficulty: "easy" },

  { type: 'single', section: "指數與對數", text: "若 5^(2x-1) = 5，則 x = ?", options: ["1","0","3","2"], answer: 0, explanation: "2x-1=1，x=1。", difficulty: "easy" },

  { type: 'single', section: "指數與對數", text: "log_2 4 = ?", options: ["3","4","1","2"], answer: 3, explanation: "2^2=4，故對數為 2。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等差數列首項 5，公差 3，第 5 項為何？", options: ["20","16","17","14"], answer: 2, explanation: "a_n = 5+(5-1)×3=17。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等比數列首項 3，公比 2，第 4 項為何？", options: ["23","24","12","27"], answer: 1, explanation: "a_n=3×2^(4-1)=24。", difficulty: "easy" },

  { type: 'single', section: "三角", text: "已知 sin θ = 3/5，且 θ 為銳角，則 cos θ = ?", options: ["4/5","3/4","5/4","3/5"], answer: 0, explanation: "cos θ = 4/5。", difficulty: "easy" },

  { type: 'single', section: "三角", text: "若 sin x = √2/2 且 0° < x ≤ 90°，則 x = ?（度）", options: ["30","44","90","45"], answer: 3, explanation: "sin 45° = √2/2。", difficulty: "easy" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+4 的最小值為何？", options: ["1","2","0","4"], answer: 2, explanation: "配方得 (x-2)²+0，最小值 0。", difficulty: "easy" },

  { type: 'single', section: "圓", text: "圓 x²+y²=16 的半徑為何？", options: ["16","4","5","8"], answer: 1, explanation: "半徑 r=4。", difficulty: "easy" },

  { type: 'single', section: "向量", text: "向量 a=(5,1)，則 |a| = ?", options: ["√26","6","4","26"], answer: 0, explanation: "|a|=√(5²+1²)=√26。", difficulty: "easy" },

  { type: 'single', section: "排列組合", text: "4 個不同物品排成一列，共有幾種排法？", options: ["28","20","12","24"], answer: 3, explanation: "4! = 24。", difficulty: "easy" },

  { type: 'single', section: "排列組合", text: "從 6 人中選 2 人，有幾種選法？", options: ["8","21","15","12"], answer: 2, explanation: "C(6,2)=15。", difficulty: "easy" },

  { type: 'single', section: "機率", text: "袋中紅球 2、白球 4，隨機取 1 顆為紅球的機率？", options: ["4/6","2/6","2/4","1/6"], answer: 1, explanation: "P= 2/6。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、6、6、12 的平均數（四捨五入）為何？", options: ["7","8","5","9"], answer: 0, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "指數與對數", text: "若 3^(2x-1) = 3，則 x = ?", options: ["2","0","3","1"], answer: 3, explanation: "2x-1=1，x=1。", difficulty: "easy" },

  { type: 'single', section: "指數與對數", text: "log_10 100 = ?", options: ["3","1","2","4"], answer: 2, explanation: "10^2=100，故對數為 2。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 2，第 5 項為何？", options: ["11","9","8","7"], answer: 1, explanation: "a_n = 1+(5-1)×2=9。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等比數列首項 3，公比 2，第 5 項為何？", options: ["48","51","24","30"], answer: 0, explanation: "a_n=3×2^(5-1)=48。", difficulty: "easy" },

  { type: 'single', section: "圓", text: "圓 x²+y²=4 的半徑為何？", options: ["3","1","4","2"], answer: 3, explanation: "半徑 r=2。", difficulty: "easy" },

  { type: 'single', section: "向量", text: "向量 a=(1,1)，則 |a| = ?", options: ["選項變體1","0","√2","2"], answer: 2, explanation: "|a|=√(1²+1²)=√2。", difficulty: "easy" },

  { type: 'single', section: "排列組合", text: "6 個不同物品排成一列，共有幾種排法？", options: ["726","720","30","714"], answer: 1, explanation: "6! = 720。", difficulty: "easy" },

  { type: 'single', section: "排列組合", text: "從 7 人中選 2 人，有幾種選法？", options: ["21","14","9","28"], answer: 0, explanation: "C(7,2)=21。", difficulty: "easy" },

  { type: 'single', section: "機率", text: "袋中紅球 2、白球 3，隨機取 1 顆為紅球的機率？", options: ["1/5","3/5","2/3","2/5"], answer: 3, explanation: "P= 2/5。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、10、7、14 的平均數（四捨五入）為何？", options: ["11","10","9","7"], answer: 2, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "指數與對數", text: "log_3 9 = ?", options: ["3","2","4","1"], answer: 1, explanation: "3^2=9，故對數為 2。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等比數列首項 2，公比 2，第 4 項為何？", options: ["16","18","15","8"], answer: 0, explanation: "a_n=2×2^(4-1)=16。", difficulty: "easy" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+7 的最小值為何？", options: ["5","7","4","3"], answer: 3, explanation: "配方得 (x-2)²+3，最小值 3。", difficulty: "easy" },

  { type: 'single', section: "圓", text: "圓 x²+y²=9 的半徑為何？", options: ["9","6","3","4"], answer: 2, explanation: "半徑 r=3。", difficulty: "easy" },

  { type: 'single', section: "排列組合", text: "5 個不同物品排成一列，共有幾種排法？", options: ["115","120","20","125"], answer: 1, explanation: "5! = 120。", difficulty: "easy" },

  { type: 'single', section: "排列組合", text: "從 8 人中選 2 人，有幾種選法？", options: ["28","16","10","36"], answer: 0, explanation: "C(8,2)=28。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 6、5、9、11 的平均數（四捨五入）為何？", options: ["6","9","10","8"], answer: 3, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "指數與對數", text: "若 2^(2x-1) = 2，則 x = ?", options: ["3","2","1","0"], answer: 2, explanation: "2x-1=1，x=1。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等差數列首項 3，公差 3，第 5 項為何？", options: ["18","15","14","12"], answer: 1, explanation: "a_n = 3+(5-1)×3=15。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 3 項為何？", options: ["4","5","2","6"], answer: 0, explanation: "a_n=1×2^(3-1)=4。", difficulty: "easy" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+3 的最小值為何？", options: ["3","1","0","-1"], answer: 3, explanation: "配方得 (x-2)²+-1，最小值 -1。", difficulty: "easy" },

  { type: 'single', section: "向量", text: "向量 a=(3,1)，則 |a| = ?", options: ["10","4","√10","2"], answer: 2, explanation: "|a|=√(3²+1²)=√10。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 8、8、9、14 的平均數（四捨五入）為何？", options: ["12","10","8","11"], answer: 1, explanation: "平均約 10。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等差數列首項 3，公差 2，第 5 項為何？", options: ["11","10","9","13"], answer: 0, explanation: "a_n = 3+(5-1)×2=11。", difficulty: "easy" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+9 的最小值為何？", options: ["7","9","6","5"], answer: 3, explanation: "配方得 (x-2)²+5，最小值 5。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 3、6、8、9 的平均數（四捨五入）為何？", options: ["9","8","7","5"], answer: 2, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等差數列首項 5，公差 2，第 5 項為何？", options: ["15","13","11","12"], answer: 1, explanation: "a_n = 5+(5-1)×2=13。", difficulty: "easy" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+1 的最小值為何？", options: ["-3","1","-1","-2"], answer: 0, explanation: "配方得 (x-2)²+-3，最小值 -3。", difficulty: "easy" },

  { type: 'single', section: "機率", text: "袋中紅球 2、白球 2，隨機取 1 顆為紅球的機率？", options: ["1/4","選項變體1","2/2","2/4"], answer: 3, explanation: "P= 2/4。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 3、10、11、10 的平均數（四捨五入）為何？", options: ["7","10","9","11"], answer: 2, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 3，第 5 項為何？", options: ["16","13","10","12"], answer: 1, explanation: "a_n = 1+(5-1)×3=13。", difficulty: "easy" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+2 的最小值為何？", options: ["-2","2","-1","0"], answer: 0, explanation: "配方得 (x-2)²+-2，最小值 -2。", difficulty: "easy" },

  { type: 'single', section: "排列組合", text: "從 9 人中選 2 人，有幾種選法？", options: ["45","18","11","36"], answer: 3, explanation: "C(9,2)=36。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、5、8、10 的平均數（四捨五入）為何？", options: ["8","5","7","9"], answer: 2, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 4，第 5 項為何？", options: ["16","17","21","13"], answer: 1, explanation: "a_n = 1+(5-1)×4=17。", difficulty: "easy" },

  { type: 'single', section: "圓", text: "圓 x²+y²=25 的半徑為何？", options: ["5","10","6","25"], answer: 0, explanation: "半徑 r=5。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、8、8、8 的平均數（四捨五入）為何？", options: ["9","6","10","8"], answer: 3, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等差數列首項 3，公差 4，第 5 項為何？", options: ["18","15","19","23"], answer: 2, explanation: "a_n = 3+(5-1)×4=19。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 5 項為何？", options: ["17","16","8","10"], answer: 1, explanation: "a_n=1×2^(5-1)=16。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、5、11、9 的平均數（四捨五入）為何？", options: ["8","10","9","6"], answer: 0, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 2、7、9、12 的平均數（四捨五入）為何？", options: ["10","6","9","8"], answer: 3, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等差數列首項 5，公差 4，第 5 項為何？", options: ["25","20","21","17"], answer: 2, explanation: "a_n = 5+(5-1)×4=21。", difficulty: "easy" },

  { type: 'single', section: "圓", text: "圓 x²+y²=36 的半徑為何？", options: ["12","6","36","7"], answer: 1, explanation: "半徑 r=6。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、5、8、14 的平均數（四捨五入）為何？", options: ["8","10","9","6"], answer: 0, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等比數列首項 2，公比 2，第 5 項為何？", options: ["16","20","34","32"], answer: 3, explanation: "a_n=2×2^(5-1)=32。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、9、11、8 的平均數（四捨五入）為何？", options: ["10","6","8","9"], answer: 2, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "排列組合", text: "從 10 人中選 2 人，有幾種選法？", options: ["12","45","20","55"], answer: 1, explanation: "C(10,2)=45。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 6、4、8、8 的平均數（四捨五入）為何？", options: ["7","8","5","9"], answer: 0, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 4 項為何？", options: ["7","4","9","8"], answer: 3, explanation: "a_n=1×2^(4-1)=8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 8、7、8、13 的平均數（四捨五入）為何？", options: ["7","10","9","11"], answer: 2, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 3、10、8、11 的平均數（四捨五入）為何？", options: ["9","8","10","6"], answer: 1, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、10、7、12 的平均數（四捨五入）為何？", options: ["9","11","7","10"], answer: 0, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 2、6、7、10 的平均數（四捨五入）為何？", options: ["7","8","4","6"], answer: 3, explanation: "平均約 6。", difficulty: "easy" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+6 的最小值為何？", options: ["6","4","2","3"], answer: 2, explanation: "配方得 (x-2)²+2，最小值 2。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、9、7、8 的平均數（四捨五入）為何？", options: ["8","7","5","9"], answer: 1, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、6、10、9 的平均數（四捨五入）為何？", options: ["7","9","8","5"], answer: 0, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等比數列首項 3，公比 2，第 3 項為何？", options: ["18","6","15","12"], answer: 3, explanation: "a_n=3×2^(3-1)=12。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 6、8、8、12 的平均數（四捨五入）為何？", options: ["10","7","9","11"], answer: 2, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "指數與對數", text: "化簡 2^2 = ?", options: ["3","4","6","2"], answer: 1, explanation: "2^2=4。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 8、6、11、9 的平均數（四捨五入）為何？", options: ["9","11","10","7"], answer: 0, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等比數列首項 2，公比 2，第 3 項為何？", options: ["10","4","12","8"], answer: 3, explanation: "a_n=2×2^(3-1)=8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 8、10、10、8 的平均數（四捨五入）為何？", options: ["11","7","9","10"], answer: 2, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 3、5、7、8 的平均數（四捨五入）為何？", options: ["4","6","7","8"], answer: 1, explanation: "平均約 6。", difficulty: "easy" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+5 的最小值為何？", options: ["1","2","3","5"], answer: 0, explanation: "配方得 (x-2)²+1，最小值 1。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、8、7、13 的平均數（四捨五入）為何？", options: ["10","6","9","8"], answer: 3, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、8、11、8 的平均數（四捨五入）為何？", options: ["7","10","9","11"], answer: 2, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+8 的最小值為何？", options: ["8","4","5","6"], answer: 1, explanation: "配方得 (x-2)²+4，最小值 4。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、7、8、10 的平均數（四捨五入）為何？", options: ["8","10","9","6"], answer: 0, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 2、10、8、8 的平均數（四捨五入）為何？", options: ["9","5","8","7"], answer: 3, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、8、7、8 的平均數（四捨五入）為何？", options: ["9","5","7","8"], answer: 2, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、5、10、12 的平均數（四捨五入）為何？", options: ["6","8","9","10"], answer: 1, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 6、7、7、11 的平均數（四捨五入）為何？", options: ["8","10","6","9"], answer: 0, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 8、10、7、8 的平均數（四捨五入）為何？", options: ["10","6","9","8"], answer: 3, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 8、7、10、11 的平均數（四捨五入）為何？", options: ["7","10","9","11"], answer: 2, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、6、6、8 的平均數（四捨五入）為何？", options: ["9","7","8","5"], answer: 1, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 2、9、6、11 的平均數（四捨五入）為何？", options: ["7","8","9","5"], answer: 0, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 2、5、9、8 的平均數（四捨五入）為何？", options: ["8","4","7","6"], answer: 3, explanation: "平均約 6。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、8、7、10 的平均數（四捨五入）為何？", options: ["8","5","7","9"], answer: 2, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 6、4、7、8 的平均數（四捨五入）為何？", options: ["8","6","4","7"], answer: 1, explanation: "平均約 6。", difficulty: "easy" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 3，第 4 項為何？", options: ["27","28","9","12"], answer: 0, explanation: "a_n=1×3^(4-1)=27。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 8、9、6、9 的平均數（四捨五入）為何？", options: ["10","9","6","8"], answer: 3, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 8、6、9、10 的平均數（四捨五入）為何？", options: ["9","6","8","10"], answer: 2, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 3、8、6、10 的平均數（四捨五入）為何？", options: ["8","7","5","9"], answer: 1, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、4、6、8 的平均數（四捨五入）為何？", options: ["6","7","8","4"], answer: 0, explanation: "平均約 6。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、8、11、8 的平均數（四捨五入）為何？", options: ["9","6","10","8"], answer: 3, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、10、7、8 的平均數（四捨五入）為何？", options: ["9","6","8","10"], answer: 2, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 2、8、10、10 的平均數（四捨五入）為何？", options: ["10","8","6","9"], answer: 1, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 2、5、11、14 的平均數（四捨五入）為何？", options: ["8","10","9","6"], answer: 0, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、7、8、9 的平均數（四捨五入）為何？", options: ["8","5","9","7"], answer: 3, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 6、10、8、12 的平均數（四捨五入）為何？", options: ["11","7","9","10"], answer: 2, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、10、12、9 的平均數（四捨五入）為何？", options: ["11","9","10","7"], answer: 1, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、6、12、14 的平均數（四捨五入）為何？", options: ["9","11","7","10"], answer: 0, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、9、12、10 的平均數（四捨五入）為何？", options: ["12","8","11","10"], answer: 3, explanation: "平均約 10。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 2、5、12、14 的平均數（四捨五入）為何？", options: ["10","6","8","9"], answer: 2, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 2、9、10、8 的平均數（四捨五入）為何？", options: ["9","7","5","8"], answer: 1, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、4、8、11 的平均數（四捨五入）為何？", options: ["7","9","5","8"], answer: 0, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 6、9、7、13 的平均數（四捨五入）為何？", options: ["10","7","11","9"], answer: 3, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 6、6、10、14 的平均數（四捨五入）為何？", options: ["10","7","9","11"], answer: 2, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 8、8、7、14 的平均數（四捨五入）為何？", options: ["11","9","7","10"], answer: 1, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 3、4、7、12 的平均數（四捨五入）為何？", options: ["7","9","5","8"], answer: 0, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、7、7、10 的平均數（四捨五入）為何？", options: ["9","8","5","7"], answer: 3, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、10、8、9 的平均數（四捨五入）為何？", options: ["10","9","8","6"], answer: 2, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、6、8、14 的平均數（四捨五入）為何？", options: ["11","9","10","7"], answer: 1, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 2、4、7、9 的平均數（四捨五入）為何？", options: ["6","7","8","4"], answer: 0, explanation: "平均約 6。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、10、7、10 的平均數（四捨五入）為何？", options: ["9","10","6","8"], answer: 3, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 6、6、7、8 的平均數（四捨五入）為何？", options: ["9","8","7","5"], answer: 2, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 3、7、9、14 的平均數（四捨五入）為何？", options: ["6","8","9","10"], answer: 1, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、9、6、14 的平均數（四捨五入）為何？", options: ["9","7","10","11"], answer: 0, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、5、6、12 的平均數（四捨五入）為何？", options: ["10","6","9","8"], answer: 3, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、8、9、8 的平均數（四捨五入）為何？", options: ["9","10","8","6"], answer: 2, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、7、7、14 的平均數（四捨五入）為何？", options: ["10","8","6","9"], answer: 1, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 6、5、6、14 的平均數（四捨五入）為何？", options: ["8","9","6","10"], answer: 0, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 6、9、9、10 的平均數（四捨五入）為何？", options: ["11","10","7","9"], answer: 3, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 8、4、6、10 的平均數（四捨五入）為何？", options: ["9","8","7","5"], answer: 2, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 3、7、6、8 的平均數（四捨五入）為何？", options: ["7","6","4","8"], answer: 1, explanation: "平均約 6。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 3、4、9、9 的平均數（四捨五入）為何？", options: ["6","7","4","8"], answer: 0, explanation: "平均約 6。", difficulty: "easy" },

  { type: 'single', section: "解析幾何", text: "過點 (1,1) 與 (3,3) 的直線斜率為何？", options: ["2","0","3","1"], answer: 3, explanation: "斜率 = 1。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、6、7、12 的平均數（四捨五入）為何？", options: ["10","9","8","6"], answer: 2, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、4、6、14 的平均數（四捨五入）為何？", options: ["10","8","6","9"], answer: 1, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、8、9、9 的平均數（四捨五入）為何？", options: ["8","6","9","10"], answer: 0, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 2、10、6、8 的平均數（四捨五入）為何？", options: ["9","8","5","7"], answer: 3, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 8、8、6、14 的平均數（四捨五入）為何？", options: ["11","7","9","10"], answer: 2, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 3、6、12、14 的平均數（四捨五入）為何？", options: ["7","9","10","11"], answer: 1, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 3、9、12、12 的平均數（四捨五入）為何？", options: ["9","10","7","11"], answer: 0, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、5、12、10 的平均數（四捨五入）為何？", options: ["9","10","6","8"], answer: 3, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、8、12、13 的平均數（四捨五入）為何？", options: ["12","11","10","8"], answer: 2, explanation: "平均約 10。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、5、8、10 的平均數（四捨五入）為何？", options: ["10","8","9","6"], answer: 1, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 2、7、6、12 的平均數（四捨五入）為何？", options: ["7","8","5","9"], answer: 0, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、5、8、10 的平均數（四捨五入）為何？", options: ["9","5","8","7"], answer: 3, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、9、8、9 的平均數（四捨五入）為何？", options: ["10","9","8","6"], answer: 2, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 6、4、12、9 的平均數（四捨五入）為何？", options: ["10","8","9","6"], answer: 1, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 8、7、12、12 的平均數（四捨五入）為何？", options: ["10","11","8","12"], answer: 0, explanation: "平均約 10。", difficulty: "easy" },

  { type: 'single', section: "解析幾何", text: "過點 (1,2) 與 (3,3) 的直線斜率為何？", options: ["1","1.5","2","0.5"], answer: 3, explanation: "斜率 = 0.5。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 3、6、10、10 的平均數（四捨五入）為何？", options: ["9","5","7","8"], answer: 2, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 3、6、6、12 的平均數（四捨五入）為何？", options: ["9","7","8","5"], answer: 1, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、9、6、10 的平均數（四捨五入）為何？", options: ["8","10","9","6"], answer: 0, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、7、12、8 的平均數（四捨五入）為何？", options: ["11","7","10","9"], answer: 3, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、4、10、9 的平均數（四捨五入）為何？", options: ["10","9","8","6"], answer: 2, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 2、6、7、9 的平均數（四捨五入）為何？", options: ["8","6","4","7"], answer: 1, explanation: "平均約 6。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 8、6、11、13 的平均數（四捨五入）為何？", options: ["10","8","11","12"], answer: 0, explanation: "平均約 10。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 8、10、7、13 的平均數（四捨五入）為何？", options: ["11","8","12","10"], answer: 3, explanation: "平均約 10。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 3、5、11、14 的平均數（四捨五入）為何？", options: ["10","6","8","9"], answer: 2, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、8、11、12 的平均數（四捨五入）為何？", options: ["10","9","11","7"], answer: 1, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、5、9、12 的平均數（四捨五入）為何？", options: ["8","9","6","10"], answer: 0, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、7、7、10 的平均數（四捨五入）為何？", options: ["10","6","9","8"], answer: 3, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 2、10、7、13 的平均數（四捨五入）為何？", options: ["10","9","8","6"], answer: 2, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、8、6、8 的平均數（四捨五入）為何？", options: ["8","7","5","9"], answer: 1, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、4、6、13 的平均數（四捨五入）為何？", options: ["7","9","5","8"], answer: 0, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 6、7、6、9 的平均數（四捨五入）為何？", options: ["8","5","9","7"], answer: 3, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 8、10、6、14 的平均數（四捨五入）為何？", options: ["12","11","10","8"], answer: 2, explanation: "平均約 10。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 8、7、9、8 的平均數（四捨五入）為何？", options: ["10","8","9","6"], answer: 1, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "指數與對數", text: "log_3 27 = ?", options: ["3","4","6","2"], answer: 0, explanation: "3^3=27，故對數為 3。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 3、9、7、11 的平均數（四捨五入）為何？", options: ["10","9","6","8"], answer: 3, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、7、6、13 的平均數（四捨五入）為何？", options: ["10","6","8","9"], answer: 2, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、4、9、14 的平均數（四捨五入）為何？", options: ["9","8","6","10"], answer: 1, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 6、4、6、13 的平均數（四捨五入）為何？", options: ["7","9","8","5"], answer: 0, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 8、9、12、8 的平均數（四捨五入）為何？", options: ["10","7","11","9"], answer: 3, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 8、5、12、11 的平均數（四捨五入）為何？", options: ["10","11","9","7"], answer: 2, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 3、8、12、9 的平均數（四捨五入）為何？", options: ["10","8","9","6"], answer: 1, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、4、12、14 的平均數（四捨五入）為何？", options: ["9","11","10","7"], answer: 0, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、8、8、8 的平均數（四捨五入）為何？", options: ["5","8","9","7"], answer: 3, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 7、10、6、11 的平均數（四捨五入）為何？", options: ["7","10","9","11"], answer: 2, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 2、8、12、13 的平均數（四捨五入）為何？", options: ["10","9","7","11"], answer: 1, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 2、5、8、14 的平均數（四捨五入）為何？", options: ["7","8","5","9"], answer: 0, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、7、12、14 的平均數（四捨五入）為何？", options: ["10","7","11","9"], answer: 3, explanation: "平均約 9。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 6、10、12、12 的平均數（四捨五入）為何？", options: ["12","8","10","11"], answer: 2, explanation: "平均約 10。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 6、6、8、9 的平均數（四捨五入）為何？", options: ["8","7","5","9"], answer: 1, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 3、5、6、14 的平均數（四捨五入）為何？", options: ["7","9","8","5"], answer: 0, explanation: "平均約 7。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、10、12、14 的平均數（四捨五入）為何？", options: ["12","8","11","10"], answer: 3, explanation: "平均約 10。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 5、7、8、11 的平均數（四捨五入）為何？", options: ["10","9","8","6"], answer: 2, explanation: "平均約 8。", difficulty: "easy" },

  { type: 'single', section: "統計", text: "資料 4、4、12、11 的平均數（四捨五入）為何？", options: ["9","8","10","6"], answer: 1, explanation: "平均約 8。", difficulty: "easy" }
];
