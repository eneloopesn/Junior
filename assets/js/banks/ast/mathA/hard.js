window.QuestionBanks = window.QuestionBanks || {};
window.QuestionBanks.ast = window.QuestionBanks.ast || {};
window.QuestionBanks.ast.mathA = window.QuestionBanks.ast.mathA || {};
window.QuestionBanks.ast.mathA.hard = [
  { type: 'non-choice', section: "非選擇題", text: "計算 log_3(9)，並說明理由。", answerText: "<p>因 3^2=9，故對數值為 2。</p>", explanation: "對數定義。", difficulty: "hard" },

  { type: 'non-choice', section: "非選擇題", text: "已知 f(x)=x²-6x+7，(1) 配方；(2) 求最小值及對應 x。", answerText: "<p>f(x)=(x-3)²+-2；最小值 -2（x=3）。</p>", explanation: "二次函數配方。", difficulty: "hard" },

  { type: 'non-choice', section: "非選擇題", text: "等差數列首項 4、公差 2，求第 5 項與前 5 項和。", answerText: "<p>第 5 項=12；前 5 項和=40。</p>", explanation: "等差數列公式。", difficulty: "hard" },

  { type: 'non-choice', section: "非選擇題", text: "已知 f(x)=x²-12x+34，(1) 配方；(2) 求最小值及對應 x。", answerText: "<p>f(x)=(x-6)²+-2；最小值 -2（x=6）。</p>", explanation: "二次函數配方。", difficulty: "hard" },

  { type: 'non-choice', section: "非選擇題", text: "等差數列首項 2、公差 2，求第 5 項與前 5 項和。", answerText: "<p>第 5 項=10；前 5 項和=30。</p>", explanation: "等差數列公式。", difficulty: "hard" },

  { type: 'non-choice', section: "非選擇題", text: "計算 log_5(25)，並說明理由。", answerText: "<p>因 5^2=25，故對數值為 2。</p>", explanation: "對數定義。", difficulty: "hard" },

  { type: 'non-choice', section: "非選擇題", text: "已知 f(x)=x²-8x+14，(1) 配方；(2) 求最小值及對應 x。", answerText: "<p>f(x)=(x-4)²+-2；最小值 -2（x=4）。</p>", explanation: "二次函數配方。", difficulty: "hard" },

  { type: 'non-choice', section: "非選擇題", text: "等差數列首項 5、公差 2，求第 7 項與前 7 項和。", answerText: "<p>第 7 項=17；前 7 項和=77。</p>", explanation: "等差數列公式。", difficulty: "hard" },

  { type: 'non-choice', section: "非選擇題", text: "等差數列首項 2、公差 2，求第 9 項與前 9 項和。", answerText: "<p>第 9 項=18；前 9 項和=90。</p>", explanation: "等差數列公式。", difficulty: "hard" },

  { type: 'non-choice', section: "非選擇題", text: "計算 log_5(125)，並說明理由。", answerText: "<p>因 5^3=125，故對數值為 3。</p>", explanation: "對數定義。", difficulty: "hard" },

  { type: 'non-choice', section: "非選擇題", text: "計算 log_2(8)，並說明理由。", answerText: "<p>因 2^3=8，故對數值為 3。</p>", explanation: "對數定義。", difficulty: "hard" },

  { type: 'non-choice', section: "非選擇題", text: "等差數列首項 3、公差 2，求第 5 項與前 5 項和。", answerText: "<p>第 5 項=11；前 5 項和=35。</p>", explanation: "等差數列公式。", difficulty: "hard" },

  { type: 'single', section: "三角", text: "若 cos x = √3/2 且 0° < x ≤ 90°，則 x = ?（度）", options: ["60","30","90","45"], answer: 1, explanation: "cos 30° = √3/2。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-8x+17 的最小值為何？", options: ["1","17","5","2"], answer: 0, explanation: "配方得 (x-4)²+1，最小值 1。", difficulty: "hard" },

  { type: 'single', section: "圓", text: "圓 x²+y²=4 的半徑為何？", options: ["3","1","4","2"], answer: 3, explanation: "半徑 r=2。", difficulty: "hard" },

  { type: 'single', section: "向量", text: "向量 a=(1,1)，則 |a| = ?", options: ["2","0","√2","選項變體1"], answer: 2, explanation: "|a|=√(1²+1²)=√2。", difficulty: "hard" },

  { type: 'single', section: "排列組合", text: "5 個不同物品排成一列，共有幾種排法？", options: ["20","120","115","125"], answer: 1, explanation: "5! = 120。", difficulty: "hard" },

  { type: 'single', section: "排列組合", text: "從 6 人中選 2 人，有幾種選法？", options: ["15","21","12","8"], answer: 0, explanation: "C(6,2)=15。", difficulty: "hard" },

  { type: 'single', section: "機率", text: "袋中紅球 6、白球 2，隨機取 1 顆為紅球的機率？", options: ["2/8","1/8","6/2","6/8"], answer: 3, explanation: "P= 6/8。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 3、5、10、14 的平均數（四捨五入）為何？", options: ["10","9","8","6"], answer: 2, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "不等式", text: "解不等式 2x + 1 > 0。", options: ["無解","x > -0.5","x = -0.5","x < -0.5"], answer: 1, explanation: "得 x > -0.5。", difficulty: "hard" },

  { type: 'single', section: "指數與對數", text: "化簡 4^1 = ?", options: ["4","3","選項變體1","8"], answer: 0, explanation: "4^1=4。", difficulty: "hard" },

  { type: 'single', section: "解析幾何", text: "過點 (1,1) 與 (3,2) 的直線斜率為何？", options: ["1.5","2","1","0.5"], answer: 3, explanation: "斜率 = 0.5。", difficulty: "hard" },

  { type: 'single', section: "指數與對數", text: "若 2^(2x-1) = 32，則 x = ?", options: ["4","5","3","2"], answer: 2, explanation: "2x-1=5，x=3。", difficulty: "hard" },

  { type: 'single', section: "指數與對數", text: "log_10 100 = ?", options: ["3","2","4","1"], answer: 1, explanation: "10^2=100，故對數為 2。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 7，公差 2，第 9 項為何？", options: ["23","25","21","22"], answer: 0, explanation: "a_n = 7+(9-1)×2=23。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 3 項為何？", options: ["6","5","2","4"], answer: 3, explanation: "a_n=1×2^(3-1)=4。", difficulty: "hard" },

  { type: 'single', section: "三角", text: "已知 sin θ = 7/25，且 θ 為銳角，則 cos θ = ?", options: ["25/24","7/24","24/25","7/25"], answer: 2, explanation: "cos θ = 24/25。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-12x+39 的最小值為何？", options: ["4","3","9","39"], answer: 1, explanation: "配方得 (x-6)²+3，最小值 3。", difficulty: "hard" },

  { type: 'single', section: "排列組合", text: "6 個不同物品排成一列，共有幾種排法？", options: ["720","726","30","714"], answer: 0, explanation: "6! = 720。", difficulty: "hard" },

  { type: 'single', section: "排列組合", text: "從 8 人中選 2 人，有幾種選法？", options: ["36","16","10","28"], answer: 3, explanation: "C(8,2)=28。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 5、8、11、8 的平均數（四捨五入）為何？", options: ["10","6","8","9"], answer: 2, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "指數與對數", text: "化簡 6^1 = ?", options: ["選項變體1","6","5","12"], answer: 1, explanation: "6^1=6。", difficulty: "hard" },

  { type: 'single', section: "指數與對數", text: "log_3 9 = ?", options: ["2","4","1","3"], answer: 0, explanation: "3^2=9，故對數為 2。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 7，公差 5，第 5 項為何？", options: ["32","22","26","27"], answer: 3, explanation: "a_n = 7+(5-1)×5=27。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 2，公比 2，第 4 項為何？", options: ["18","15","16","8"], answer: 2, explanation: "a_n=2×2^(4-1)=16。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+8 的最小值為何？", options: ["5","4","6","8"], answer: 1, explanation: "配方得 (x-2)²+4，最小值 4。", difficulty: "hard" },

  { type: 'single', section: "圓", text: "圓 x²+y²=16 的半徑為何？", options: ["4","8","16","5"], answer: 0, explanation: "半徑 r=4。", difficulty: "hard" },

  { type: 'single', section: "排列組合", text: "7 個不同物品排成一列，共有幾種排法？", options: ["5047","5033","42","5040"], answer: 3, explanation: "7! = 5040。", difficulty: "hard" },

  { type: 'single', section: "排列組合", text: "從 10 人中選 2 人，有幾種選法？", options: ["55","20","45","12"], answer: 2, explanation: "C(10,2)=45。", difficulty: "hard" },

  { type: 'single', section: "機率", text: "袋中紅球 2、白球 6，隨機取 1 顆為紅球的機率？", options: ["1/8","2/8","6/8","2/6"], answer: 1, explanation: "P= 2/8。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 5、6、10、10 的平均數（四捨五入）為何？", options: ["8","10","6","9"], answer: 0, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "指數與對數", text: "化簡 2^1 = ?", options: ["4","1","選項變體1","2"], answer: 3, explanation: "2^1=2。", difficulty: "hard" },

  { type: 'single', section: "指數與對數", text: "若 5^(2x-1) = 3125，則 x = ?", options: ["5","4","3","2"], answer: 2, explanation: "2x-1=5，x=3。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 7，公差 3，第 5 項為何？", options: ["22","19","18","16"], answer: 1, explanation: "a_n = 7+(5-1)×3=19。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 3，公比 2，第 7 項為何？", options: ["192","195","96","42"], answer: 0, explanation: "a_n=3×2^(7-1)=192。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-8x+21 的最小值為何？", options: ["21","9","6","5"], answer: 3, explanation: "配方得 (x-4)²+5，最小值 5。", difficulty: "hard" },

  { type: 'single', section: "圓", text: "圓 x²+y²=9 的半徑為何？", options: ["9","4","3","6"], answer: 2, explanation: "半徑 r=3。", difficulty: "hard" },

  { type: 'single', section: "機率", text: "袋中紅球 4、白球 4，隨機取 1 顆為紅球的機率？", options: ["選項變體1","4/8","4/4","1/8"], answer: 1, explanation: "P= 4/8。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 7、9、10、13 的平均數（四捨五入）為何？", options: ["10","11","12","8"], answer: 0, explanation: "平均約 10。", difficulty: "hard" },

  { type: 'single', section: "指數與對數", text: "若 3^(2x-1) = 243，則 x = ?", options: ["4","5","2","3"], answer: 3, explanation: "2x-1=5，x=3。", difficulty: "hard" },

  { type: 'single', section: "指數與對數", text: "log_2 4 = ?", options: ["1","4","2","3"], answer: 2, explanation: "2^2=4，故對數為 2。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 9，公差 5，第 7 項為何？", options: ["38","39","44","34"], answer: 1, explanation: "a_n = 9+(7-1)×5=39。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 4，公比 2，第 5 項為何？", options: ["64","40","32","68"], answer: 0, explanation: "a_n=4×2^(5-1)=64。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-8x+13 的最小值為何？", options: ["-2","13","1","-3"], answer: 3, explanation: "配方得 (x-4)²+-3，最小值 -3。", difficulty: "hard" },

  { type: 'single', section: "排列組合", text: "從 9 人中選 2 人，有幾種選法？", options: ["11","18","36","45"], answer: 2, explanation: "C(9,2)=36。", difficulty: "hard" },

  { type: 'single', section: "機率", text: "袋中紅球 4、白球 6，隨機取 1 顆為紅球的機率？", options: ["6/10","4/10","4/6","1/10"], answer: 1, explanation: "P= 4/10。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 2、5、10、11 的平均數（四捨五入）為何？", options: ["7","9","5","8"], answer: 0, explanation: "平均約 7。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 9，公差 2，第 5 項為何？", options: ["19","16","15","17"], answer: 3, explanation: "a_n = 9+(5-1)×2=17。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 2，公比 2，第 7 項為何？", options: ["28","64","128","130"], answer: 2, explanation: "a_n=2×2^(7-1)=128。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-12x+34 的最小值為何？", options: ["4","-2","34","-1"], answer: 1, explanation: "配方得 (x-6)²+-2，最小值 -2。", difficulty: "hard" },

  { type: 'single', section: "圓", text: "圓 x²+y²=25 的半徑為何？", options: ["5","10","25","6"], answer: 0, explanation: "半徑 r=5。", difficulty: "hard" },

  { type: 'single', section: "排列組合", text: "從 11 人中選 2 人，有幾種選法？", options: ["66","22","13","55"], answer: 3, explanation: "C(11,2)=55。", difficulty: "hard" },

  { type: 'single', section: "機率", text: "袋中紅球 6、白球 5，隨機取 1 顆為紅球的機率？", options: ["1/11","6/5","6/11","5/11"], answer: 2, explanation: "P= 6/11。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 2、9、6、13 的平均數（四捨五入）為何？", options: ["9","8","10","6"], answer: 1, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 3，公比 2，第 6 項為何？", options: ["96","36","48","99"], answer: 0, explanation: "a_n=3×2^(6-1)=96。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+3 的最小值為何？", options: ["0","1","3","-1"], answer: 3, explanation: "配方得 (x-2)²+-1，最小值 -1。", difficulty: "hard" },

  { type: 'single', section: "圓", text: "圓 x²+y²=49 的半徑為何？", options: ["14","8","7","49"], answer: 2, explanation: "半徑 r=7。", difficulty: "hard" },

  { type: 'single', section: "機率", text: "袋中紅球 2、白球 3，隨機取 1 顆為紅球的機率？", options: ["1/5","2/5","3/5","2/3"], answer: 1, explanation: "P= 2/5。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 4、4、10、13 的平均數（四捨五入）為何？", options: ["8","9","6","10"], answer: 0, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 11，公差 2，第 5 項為何？", options: ["21","18","17","19"], answer: 3, explanation: "a_n = 11+(5-1)×2=19。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 5，公比 2，第 7 項為何？", options: ["325","160","320","70"], answer: 2, explanation: "a_n=5×2^(7-1)=320。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+7 的最小值為何？", options: ["7","3","5","4"], answer: 1, explanation: "配方得 (x-2)²+3，最小值 3。", difficulty: "hard" },

  { type: 'single', section: "機率", text: "袋中紅球 2、白球 2，隨機取 1 顆為紅球的機率？", options: ["2/4","選項變體1","2/2","1/4"], answer: 0, explanation: "P= 2/4。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 6、7、11、8 的平均數（四捨五入）為何？", options: ["9","6","10","8"], answer: 3, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 11，公差 6，第 5 項為何？", options: ["41","29","35","34"], answer: 2, explanation: "a_n = 11+(5-1)×6=35。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 3，公比 2，第 5 項為何？", options: ["51","48","24","30"], answer: 1, explanation: "a_n=3×2^(5-1)=48。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+4 的最小值為何？", options: ["0","4","1","2"], answer: 0, explanation: "配方得 (x-2)²+0，最小值 0。", difficulty: "hard" },

  { type: 'single', section: "機率", text: "袋中紅球 4、白球 2，隨機取 1 顆為紅球的機率？", options: ["2/6","1/6","4/2","4/6"], answer: 3, explanation: "P= 4/6。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 6、4、8、13 的平均數（四捨五入）為何？", options: ["10","9","8","6"], answer: 2, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 11，公差 4，第 7 項為何？", options: ["39","35","31","34"], answer: 1, explanation: "a_n = 11+(7-1)×4=35。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 4，公比 2，第 7 項為何？", options: ["256","260","56","128"], answer: 0, explanation: "a_n=4×2^(7-1)=256。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 8、8、10、12 的平均數（四捨五入）為何？", options: ["12","11","8","10"], answer: 3, explanation: "平均約 10。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 11，公差 3，第 9 項為何？", options: ["32","34","35","38"], answer: 2, explanation: "a_n = 11+(9-1)×3=35。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 5，公比 2，第 6 項為何？", options: ["165","160","80","60"], answer: 1, explanation: "a_n=5×2^(6-1)=160。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-8x+19 的最小值為何？", options: ["3","4","19","7"], answer: 0, explanation: "配方得 (x-4)²+3，最小值 3。", difficulty: "hard" },

  { type: 'single', section: "圓", text: "圓 x²+y²=36 的半徑為何？", options: ["12","36","7","6"], answer: 3, explanation: "半徑 r=6。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 7、6、9、14 的平均數（四捨五入）為何？", options: ["11","10","9","7"], answer: 2, explanation: "平均約 9。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 13，公差 3，第 5 項為何？", options: ["28","25","22","24"], answer: 1, explanation: "a_n = 13+(5-1)×3=25。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-12x+41 的最小值為何？", options: ["5","6","11","41"], answer: 0, explanation: "配方得 (x-6)²+5，最小值 5。", difficulty: "hard" },

  { type: 'single', section: "排列組合", text: "8 個不同物品排成一列，共有幾種排法？", options: ["56","40328","40312","40320"], answer: 3, explanation: "8! = 40320。", difficulty: "hard" },

  { type: 'single', section: "排列組合", text: "從 12 人中選 2 人，有幾種選法？", options: ["78","24","66","14"], answer: 2, explanation: "C(12,2)=66。", difficulty: "hard" },

  { type: 'single', section: "機率", text: "袋中紅球 2、白球 5，隨機取 1 顆為紅球的機率？", options: ["1/7","2/7","2/5","5/7"], answer: 1, explanation: "P= 2/7。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 2、9、10、8 的平均數（四捨五入）為何？", options: ["7","5","8","9"], answer: 0, explanation: "平均約 7。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 9，公差 5，第 9 項為何？", options: ["54","48","44","49"], answer: 3, explanation: "a_n = 9+(9-1)×5=49。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+1 的最小值為何？", options: ["-2","-1","-3","1"], answer: 2, explanation: "配方得 (x-2)²+-3，最小值 -3。", difficulty: "hard" },

  { type: 'single', section: "圓", text: "圓 x²+y²=64 的半徑為何？", options: ["16","8","9","64"], answer: 1, explanation: "半徑 r=8。", difficulty: "hard" },

  { type: 'single', section: "排列組合", text: "4 個不同物品排成一列，共有幾種排法？", options: ["24","12","20","28"], answer: 0, explanation: "4! = 24。", difficulty: "hard" },

  { type: 'single', section: "排列組合", text: "從 7 人中選 2 人，有幾種選法？", options: ["14","9","28","21"], answer: 3, explanation: "C(7,2)=21。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 2、7、12、13 的平均數（四捨五入）為何？", options: ["10","7","9","11"], answer: 2, explanation: "平均約 9。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 9，公差 3，第 9 項為何？", options: ["32","33","30","36"], answer: 1, explanation: "a_n = 9+(9-1)×3=33。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 5，公比 2，第 5 項為何？", options: ["80","50","85","40"], answer: 0, explanation: "a_n=5×2^(5-1)=80。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-8x+14 的最小值為何？", options: ["-1","14","2","-2"], answer: 3, explanation: "配方得 (x-4)²+-2，最小值 -2。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 4、10、9、13 的平均數（四捨五入）為何？", options: ["11","7","9","10"], answer: 2, explanation: "平均約 9。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 11，公差 5，第 5 項為何？", options: ["30","31","26","36"], answer: 1, explanation: "a_n = 11+(5-1)×5=31。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-8x+15 的最小值為何？", options: ["-1","0","3","15"], answer: 0, explanation: "配方得 (x-4)²+-1，最小值 -1。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 6、6、9、12 的平均數（四捨五入）為何？", options: ["10","6","9","8"], answer: 3, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 11，公差 2，第 9 項為何？", options: ["29","26","27","25"], answer: 2, explanation: "a_n = 11+(9-1)×2=27。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-12x+36 的最小值為何？", options: ["6","0","36","1"], answer: 1, explanation: "配方得 (x-6)²+0，最小值 0。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 6、10、12、13 的平均數（四捨五入）為何？", options: ["10","11","12","8"], answer: 0, explanation: "平均約 10。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 5，公比 2，第 4 項為何？", options: ["39","45","20","40"], answer: 3, explanation: "a_n=5×2^(4-1)=40。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+5 的最小值為何？", options: ["2","3","1","5"], answer: 2, explanation: "配方得 (x-2)²+1，最小值 1。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 8、5、9、13 的平均數（四捨五入）為何？", options: ["11","9","7","10"], answer: 1, explanation: "平均約 9。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 13，公差 2，第 9 項為何？", options: ["29","28","27","31"], answer: 0, explanation: "a_n = 13+(9-1)×2=29。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 7 項為何？", options: ["65","32","14","64"], answer: 3, explanation: "a_n=1×2^(7-1)=64。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+9 的最小值為何？", options: ["6","9","5","7"], answer: 2, explanation: "配方得 (x-2)²+5，最小值 5。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 3、8、10、8 的平均數（四捨五入）為何？", options: ["9","7","5","8"], answer: 1, explanation: "平均約 7。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 13，公差 6，第 9 項為何？", options: ["61","60","55","67"], answer: 0, explanation: "a_n = 13+(9-1)×6=61。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 3、5、9、10 的平均數（四捨五入）為何？", options: ["8","9","5","7"], answer: 3, explanation: "平均約 7。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 13，公差 4，第 5 項為何？", options: ["33","28","29","25"], answer: 2, explanation: "a_n = 13+(5-1)×4=29。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 5，公比 2，第 3 項為何？", options: ["30","20","10","25"], answer: 1, explanation: "a_n=5×2^(3-1)=20。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-12x+33 的最小值為何？", options: ["-3","33","3","-2"], answer: 0, explanation: "配方得 (x-6)²+-3，最小值 -3。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 5、9、9、12 的平均數（四捨五入）為何？", options: ["11","7","10","9"], answer: 3, explanation: "平均約 9。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 2，公差 6，第 5 項為何？", options: ["32","25","26","20"], answer: 2, explanation: "a_n = 2+(5-1)×6=26。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 6 項為何？", options: ["16","32","12","33"], answer: 1, explanation: "a_n=1×2^(6-1)=32。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-12x+35 的最小值為何？", options: ["-1","5","35","0"], answer: 0, explanation: "配方得 (x-6)²+-1，最小值 -1。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 7、5、9、9 的平均數（四捨五入）為何？", options: ["9","10","6","8"], answer: 3, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 2，公差 5，第 6 項為何？", options: ["26","22","27","32"], answer: 2, explanation: "a_n = 2+(6-1)×5=27。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 4，公比 2，第 4 項為何？", options: ["31","32","16","36"], answer: 1, explanation: "a_n=4×2^(4-1)=32。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 7、8、7、12 的平均數（四捨五入）為何？", options: ["9","7","10","11"], answer: 0, explanation: "平均約 9。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-8x+16 的最小值為何？", options: ["16","4","1","0"], answer: 3, explanation: "配方得 (x-4)²+0，最小值 0。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 2、4、11、10 的平均數（四捨五入）為何？", options: ["9","8","7","5"], answer: 2, explanation: "平均約 7。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 2，公差 4，第 7 項為何？", options: ["25","26","22","30"], answer: 1, explanation: "a_n = 2+(7-1)×4=26。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 2，公比 2，第 3 項為何？", options: ["8","4","12","10"], answer: 0, explanation: "a_n=2×2^(3-1)=8。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 4、7、11、8 的平均數（四捨五入）為何？", options: ["10","9","6","8"], answer: 3, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 4，公差 2，第 9 項為何？", options: ["19","22","20","18"], answer: 2, explanation: "a_n = 4+(9-1)×2=20。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 6、10、12、9 的平均數（四捨五入）為何？", options: ["10","9","11","7"], answer: 1, explanation: "平均約 9。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 4，公差 5，第 5 項為何？", options: ["24","19","23","29"], answer: 0, explanation: "a_n = 4+(5-1)×5=24。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-12x+38 的最小值為何？", options: ["3","8","38","2"], answer: 3, explanation: "配方得 (x-6)²+2，最小值 2。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 6、9、7、14 的平均數（四捨五入）為何？", options: ["11","7","9","10"], answer: 2, explanation: "平均約 9。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 4，公差 3，第 7 項為何？", options: ["21","22","19","25"], answer: 1, explanation: "a_n = 4+(7-1)×3=22。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 5、6、8、13 的平均數（四捨五入）為何？", options: ["8","10","9","6"], answer: 0, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 6，公差 5，第 9 項為何？", options: ["51","41","45","46"], answer: 3, explanation: "a_n = 6+(9-1)×5=46。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+2 的最小值為何？", options: ["2","-1","-2","0"], answer: 2, explanation: "配方得 (x-2)²+-2，最小值 -2。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 7、9、9、14 的平均數（四捨五入）為何？", options: ["12","10","8","11"], answer: 1, explanation: "平均約 10。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 2，公差 6，第 7 項為何？", options: ["38","44","32","37"], answer: 0, explanation: "a_n = 2+(7-1)×6=38。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 5 項為何？", options: ["10","8","17","16"], answer: 3, explanation: "a_n=1×2^(5-1)=16。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 7、6、8、14 的平均數（四捨五入）為何？", options: ["10","11","9","7"], answer: 2, explanation: "平均約 9。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 2，公差 4，第 9 項為何？", options: ["38","34","30","33"], answer: 1, explanation: "a_n = 2+(9-1)×4=34。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 2，公比 2，第 6 項為何？", options: ["64","66","32","24"], answer: 0, explanation: "a_n=2×2^(6-1)=64。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 2、10、10、11 的平均數（四捨五入）為何？", options: ["10","6","9","8"], answer: 3, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 4，公差 6，第 5 項為何？", options: ["34","22","28","27"], answer: 2, explanation: "a_n = 4+(5-1)×6=28。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 3，公比 2，第 4 項為何？", options: ["27","24","23","12"], answer: 1, explanation: "a_n=3×2^(4-1)=24。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-12x+37 的最小值為何？", options: ["1","2","7","37"], answer: 0, explanation: "配方得 (x-6)²+1，最小值 1。", difficulty: "hard" },

  { type: 'single', section: "機率", text: "袋中紅球 4、白球 5，隨機取 1 顆為紅球的機率？", options: ["1/9","4/5","5/9","4/9"], answer: 3, explanation: "P= 4/9。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 4、6、10、9 的平均數（四捨五入）為何？", options: ["8","5","7","9"], answer: 2, explanation: "平均約 7。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 4，公差 5，第 10 項為何？", options: ["54","49","48","44"], answer: 1, explanation: "a_n = 4+(10-1)×5=49。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 4、10、6、10 的平均數（四捨五入）為何？", options: ["8","6","9","10"], answer: 0, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 4，公差 6，第 9 項為何？", options: ["58","46","51","52"], answer: 3, explanation: "a_n = 4+(9-1)×6=52。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-8x+18 的最小值為何？", options: ["3","18","2","6"], answer: 2, explanation: "配方得 (x-4)²+2，最小值 2。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 6、5、10、10 的平均數（四捨五入）為何？", options: ["10","8","9","6"], answer: 1, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 4，公差 4，第 7 項為何？", options: ["28","27","24","32"], answer: 0, explanation: "a_n = 4+(7-1)×4=28。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 3，公比 2，第 3 項為何？", options: ["6","18","15","12"], answer: 3, explanation: "a_n=3×2^(3-1)=12。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-8x+20 的最小值為何？", options: ["5","8","4","20"], answer: 2, explanation: "配方得 (x-4)²+4，最小值 4。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 8、8、10、8 的平均數（四捨五入）為何？", options: ["11","9","7","10"], answer: 1, explanation: "平均約 9。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 6，公差 2，第 9 項為何？", options: ["22","20","21","24"], answer: 0, explanation: "a_n = 6+(9-1)×2=22。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 3、4、11、14 的平均數（四捨五入）為何？", options: ["10","6","9","8"], answer: 3, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 6，公差 5，第 5 項為何？", options: ["31","25","26","21"], answer: 2, explanation: "a_n = 6+(5-1)×5=26。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 3、9、10、9 的平均數（四捨五入）為何？", options: ["10","8","9","6"], answer: 1, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 6，公差 3，第 5 項為何？", options: ["18","21","17","15"], answer: 0, explanation: "a_n = 6+(5-1)×3=18。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 5、5、10、14 的平均數（四捨五入）為何？", options: ["7","10","11","9"], answer: 3, explanation: "平均約 9。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 8，公差 5，第 7 項為何？", options: ["37","33","38","43"], answer: 2, explanation: "a_n = 8+(7-1)×5=38。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 4，公比 2，第 3 項為何？", options: ["20","16","8","24"], answer: 1, explanation: "a_n=4×2^(3-1)=16。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 7、8、10、10 的平均數（四捨五入）為何？", options: ["9","10","7","11"], answer: 0, explanation: "平均約 9。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 8，公差 2，第 5 項為何？", options: ["18","15","14","16"], answer: 3, explanation: "a_n = 8+(5-1)×2=16。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等比數列首項 2，公比 2，第 5 項為何？", options: ["20","34","32","16"], answer: 2, explanation: "a_n=2×2^(5-1)=32。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 7、5、6、13 的平均數（四捨五入）為何？", options: ["10","8","6","9"], answer: 1, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+6 的最小值為何？", options: ["2","3","4","6"], answer: 0, explanation: "配方得 (x-2)²+2，最小值 2。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 2、7、10、13 的平均數（四捨五入）為何？", options: ["9","6","10","8"], answer: 3, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 10，公差 2，第 5 項為何？", options: ["17","16","18","20"], answer: 2, explanation: "a_n = 10+(5-1)×2=18。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 4、10、11、12 的平均數（四捨五入）為何？", options: ["11","9","10","7"], answer: 1, explanation: "平均約 9。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 10，公差 6，第 5 項為何？", options: ["34","40","33","28"], answer: 0, explanation: "a_n = 10+(5-1)×6=34。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 4、7、8、13 的平均數（四捨五入）為何？", options: ["9","6","10","8"], answer: 3, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 10，公差 4，第 7 項為何？", options: ["38","30","34","33"], answer: 2, explanation: "a_n = 10+(7-1)×4=34。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 3、6、9、10 的平均數（四捨五入）為何？", options: ["9","7","5","8"], answer: 1, explanation: "平均約 7。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 12，公差 3，第 9 項為何？", options: ["36","39","33","35"], answer: 0, explanation: "a_n = 12+(9-1)×3=36。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 5、9、9、13 的平均數（四捨五入）為何？", options: ["10","7","11","9"], answer: 3, explanation: "平均約 9。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 8，公差 2，第 7 項為何？", options: ["22","18","20","19"], answer: 2, explanation: "a_n = 8+(7-1)×2=20。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 8，公差 5，第 9 項為何？", options: ["47","48","53","43"], answer: 1, explanation: "a_n = 8+(9-1)×5=48。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 7、10、9、9 的平均數（四捨五入）為何？", options: ["9","11","7","10"], answer: 0, explanation: "平均約 9。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 8，公差 3，第 9 項為何？", options: ["35","29","31","32"], answer: 3, explanation: "a_n = 8+(9-1)×3=32。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 2、6、9、12 的平均數（四捨五入）為何？", options: ["8","5","7","9"], answer: 2, explanation: "平均約 7。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 10，公差 5，第 5 項為何？", options: ["35","30","29","25"], answer: 1, explanation: "a_n = 10+(5-1)×5=30。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 4、9、9、10 的平均數（四捨五入）為何？", options: ["8","9","6","10"], answer: 0, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 10，公差 2，第 9 項為何？", options: ["28","25","24","26"], answer: 3, explanation: "a_n = 10+(9-1)×2=26。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 4、6、12、11 的平均數（四捨五入）為何？", options: ["10","6","8","9"], answer: 2, explanation: "平均約 8。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 6、8、9、11 的平均數（四捨五入）為何？", options: ["10","9","7","11"], answer: 1, explanation: "平均約 9。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 12，公差 2，第 9 項為何？", options: ["28","27","26","30"], answer: 0, explanation: "a_n = 12+(9-1)×2=28。", difficulty: "hard" },

  { type: 'single', section: "統計", text: "資料 8、4、10、12 的平均數（四捨五入）為何？", options: ["11","7","10","9"], answer: 3, explanation: "平均約 9。", difficulty: "hard" },

  { type: 'single', section: "數列", text: "等差數列首項 12，公差 6，第 9 項為何？", options: ["66","54","60","59"], answer: 2, explanation: "a_n = 12+(9-1)×6=60。", difficulty: "hard" }
];
