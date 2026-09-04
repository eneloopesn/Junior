window.QuestionBanks = window.QuestionBanks || {};
window.QuestionBanks.ast = window.QuestionBanks.ast || {};
window.QuestionBanks.ast.mathA = window.QuestionBanks.ast.mathA || {};
window.QuestionBanks.ast.mathA.normal = [
  { type: 'non-choice', section: "非選擇題", text: "計算 log_3(9)，並說明理由。", answerText: "<p>因 3^2=9，故對數值為 2。</p>", explanation: "對數定義。", difficulty: "normal" },

  { type: 'non-choice', section: "非選擇題", text: "已知 f(x)=x²-6x+7，(1) 配方；(2) 求最小值及對應 x。", answerText: "<p>f(x)=(x-3)²+-2；最小值 -2（x=3）。</p>", explanation: "二次函數配方。", difficulty: "normal" },

  { type: 'non-choice', section: "非選擇題", text: "等差數列首項 3、公差 2，求第 5 項與前 5 項和。", answerText: "<p>第 5 項=11；前 5 項和=35。</p>", explanation: "等差數列公式。", difficulty: "normal" },

  { type: 'non-choice', section: "非選擇題", text: "已知 f(x)=x²-12x+34，(1) 配方；(2) 求最小值及對應 x。", answerText: "<p>f(x)=(x-6)²+-2；最小值 -2（x=6）。</p>", explanation: "二次函數配方。", difficulty: "normal" },

  { type: 'non-choice', section: "非選擇題", text: "等差數列首項 2、公差 3，求第 7 項與前 7 項和。", answerText: "<p>第 7 項=20；前 7 項和=77。</p>", explanation: "等差數列公式。", difficulty: "normal" },

  { type: 'non-choice', section: "非選擇題", text: "計算 log_5(25)，並說明理由。", answerText: "<p>因 5^2=25，故對數值為 2。</p>", explanation: "對數定義。", difficulty: "normal" },

  { type: 'non-choice', section: "非選擇題", text: "已知 f(x)=x²-8x+14，(1) 配方；(2) 求最小值及對應 x。", answerText: "<p>f(x)=(x-4)²+-2；最小值 -2（x=4）。</p>", explanation: "二次函數配方。", difficulty: "normal" },

  { type: 'non-choice', section: "非選擇題", text: "等差數列首項 3、公差 2，求第 7 項與前 7 項和。", answerText: "<p>第 7 項=15；前 7 項和=63。</p>", explanation: "等差數列公式。", difficulty: "normal" },

  { type: 'non-choice', section: "非選擇題", text: "計算 log_5(125)，並說明理由。", answerText: "<p>因 5^3=125，故對數值為 3。</p>", explanation: "對數定義。", difficulty: "normal" },

  { type: 'non-choice', section: "非選擇題", text: "等差數列首項 6、公差 2，求第 5 項與前 5 項和。", answerText: "<p>第 5 項=14；前 5 項和=50。</p>", explanation: "等差數列公式。", difficulty: "normal" },

  { type: 'non-choice', section: "非選擇題", text: "等差數列首項 5、公差 2，求第 5 項與前 5 項和。", answerText: "<p>第 5 項=13；前 5 項和=45。</p>", explanation: "等差數列公式。", difficulty: "normal" },

  { type: 'non-choice', section: "非選擇題", text: "計算 log_5(625)，並說明理由。", answerText: "<p>因 5^4=625，故對數值為 4。</p>", explanation: "對數定義。", difficulty: "normal" },

  { type: 'single', section: "指數與對數", text: "log_10 100 = ?", options: ["4","2","1","3"], answer: 1, explanation: "10^2=100，故對數為 2。", difficulty: "normal" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 2，第 5 項為何？", options: ["9","11","8","7"], answer: 0, explanation: "a_n = 1+(5-1)×2=9。", difficulty: "normal" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 3 項為何？", options: ["5","2","6","4"], answer: 3, explanation: "a_n=1×2^(3-1)=4。", difficulty: "normal" },

  { type: 'single', section: "三角", text: "已知 sin θ = 7/25，且 θ 為銳角，則 cos θ = ?", options: ["7/25","25/24","24/25","7/24"], answer: 2, explanation: "cos θ = 24/25。", difficulty: "normal" },

  { type: 'single', section: "三角", text: "若 cos x = √3/2 且 0° < x ≤ 90°，則 x = ?（度）", options: ["90","30","45","60"], answer: 1, explanation: "cos 30° = √3/2。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-10x+22 的最小值為何？", options: ["-3","-2","2","22"], answer: 0, explanation: "配方得 (x-5)²+-3，最小值 -3。", difficulty: "normal" },

  { type: 'single', section: "圓", text: "圓 x²+y²=16 的半徑為何？", options: ["16","5","8","4"], answer: 3, explanation: "半徑 r=4。", difficulty: "normal" },

  { type: 'single', section: "向量", text: "向量 a=(5,1)，則 |a| = ?", options: ["26","4","√26","6"], answer: 2, explanation: "|a|=√(5²+1²)=√26。", difficulty: "normal" },

  { type: 'single', section: "排列組合", text: "4 個不同物品排成一列，共有幾種排法？", options: ["12","24","28","20"], answer: 1, explanation: "4! = 24。", difficulty: "normal" },

  { type: 'single', section: "排列組合", text: "從 8 人中選 2 人，有幾種選法？", options: ["28","10","16","36"], answer: 0, explanation: "C(8,2)=28。", difficulty: "normal" },

  { type: 'single', section: "機率", text: "袋中紅球 5、白球 2，隨機取 1 顆為紅球的機率？", options: ["1/7","5/2","2/7","5/7"], answer: 3, explanation: "P= 5/7。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 2、10、12、14 的平均數（四捨五入）為何？", options: ["12","11","10","8"], answer: 2, explanation: "平均約 10。", difficulty: "normal" },

  { type: 'single', section: "不等式", text: "解不等式 2x + 1 > 0。", options: ["無解","x > -0.5","x < -0.5","x = -0.5"], answer: 1, explanation: "得 x > -0.5。", difficulty: "normal" },

  { type: 'single', section: "指數與對數", text: "化簡 6^1 = ?", options: ["6","12","選項變體1","5"], answer: 0, explanation: "6^1=6。", difficulty: "normal" },

  { type: 'single', section: "解析幾何", text: "過點 (1,1) 與 (3,2) 的直線斜率為何？", options: ["1.5","2","1","0.5"], answer: 3, explanation: "斜率 = 0.5。", difficulty: "normal" },

  { type: 'single', section: "指數與對數", text: "若 2^(2x-1) = 8，則 x = ?", options: ["3","1","2","4"], answer: 2, explanation: "2x-1=3，x=2。", difficulty: "normal" },

  { type: 'single', section: "指數與對數", text: "log_3 9 = ?", options: ["4","2","1","3"], answer: 1, explanation: "3^2=9，故對數為 2。", difficulty: "normal" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 2，第 8 項為何？", options: ["15","17","14","13"], answer: 0, explanation: "a_n = 1+(8-1)×2=15。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-12x+34 的最小值為何？", options: ["34","4","-1","-2"], answer: 3, explanation: "配方得 (x-6)²+-2，最小值 -2。", difficulty: "normal" },

  { type: 'single', section: "排列組合", text: "從 10 人中選 2 人，有幾種選法？", options: ["12","20","45","55"], answer: 2, explanation: "C(10,2)=45。", difficulty: "normal" },

  { type: 'single', section: "機率", text: "袋中紅球 6、白球 2，隨機取 1 顆為紅球的機率？", options: ["2/8","6/8","6/2","1/8"], answer: 1, explanation: "P= 6/8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 2、6、12、12 的平均數（四捨五入）為何？", options: ["8","10","9","6"], answer: 0, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "指數與對數", text: "化簡 2^1 = ?", options: ["選項變體1","1","4","2"], answer: 3, explanation: "2^1=2。", difficulty: "normal" },

  { type: 'single', section: "指數與對數", text: "若 5^(2x-1) = 125，則 x = ?", options: ["4","1","2","3"], answer: 2, explanation: "2x-1=3，x=2。", difficulty: "normal" },

  { type: 'single', section: "指數與對數", text: "log_3 81 = ?", options: ["5","4","3","8"], answer: 1, explanation: "3^4=81，故對數為 4。", difficulty: "normal" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 2，第 7 項為何？", options: ["13","11","12","15"], answer: 0, explanation: "a_n = 1+(7-1)×2=13。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+3 的最小值為何？", options: ["3","1","0","-1"], answer: 3, explanation: "配方得 (x-2)²+-1，最小值 -1。", difficulty: "normal" },

  { type: 'single', section: "圓", text: "圓 x²+y²=36 的半徑為何？", options: ["12","36","6","7"], answer: 2, explanation: "半徑 r=6。", difficulty: "normal" },

  { type: 'single', section: "向量", text: "向量 a=(7,1)，則 |a| = ?", options: ["6","√50","50","8"], answer: 1, explanation: "|a|=√(7²+1²)=√50。", difficulty: "normal" },

  { type: 'single', section: "機率", text: "袋中紅球 2、白球 2，隨機取 1 顆為紅球的機率？", options: ["2/4","選項變體1","2/2","1/4"], answer: 0, explanation: "P= 2/4。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 4、9、12、8 的平均數（四捨五入）為何？", options: ["10","9","6","8"], answer: 3, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "指數與對數", text: "化簡 5^1 = ?", options: ["選項變體1","4","5","10"], answer: 2, explanation: "5^1=5。", difficulty: "normal" },

  { type: 'single', section: "指數與對數", text: "若 3^(2x-1) = 27，則 x = ?", options: ["4","2","1","3"], answer: 1, explanation: "2x-1=3，x=2。", difficulty: "normal" },

  { type: 'single', section: "指數與對數", text: "log_2 16 = ?", options: ["4","8","5","3"], answer: 0, explanation: "2^4=16，故對數為 4。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-10x+25 的最小值為何？", options: ["1","5","25","0"], answer: 3, explanation: "配方得 (x-5)²+0，最小值 0。", difficulty: "normal" },

  { type: 'single', section: "向量", text: "向量 a=(2,1)，則 |a| = ?", options: ["5","1","√5","3"], answer: 2, explanation: "|a|=√(2²+1²)=√5。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 6、5、12、13 的平均數（四捨五入）為何？", options: ["11","9","7","10"], answer: 1, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-12x+39 的最小值為何？", options: ["3","4","9","39"], answer: 0, explanation: "配方得 (x-6)²+3，最小值 3。", difficulty: "normal" },

  { type: 'single', section: "圓", text: "圓 x²+y²=4 的半徑為何？", options: ["4","3","1","2"], answer: 3, explanation: "半徑 r=2。", difficulty: "normal" },

  { type: 'single', section: "排列組合", text: "從 6 人中選 2 人，有幾種選法？", options: ["8","12","15","21"], answer: 2, explanation: "C(6,2)=15。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 6、9、10、10 的平均數（四捨五入）為何？", options: ["11","9","10","7"], answer: 1, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 2，第 6 項為何？", options: ["11","13","9","10"], answer: 0, explanation: "a_n = 1+(6-1)×2=11。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+8 的最小值為何？", options: ["5","8","6","4"], answer: 3, explanation: "配方得 (x-2)²+4，最小值 4。", difficulty: "normal" },

  { type: 'single', section: "向量", text: "向量 a=(4,1)，則 |a| = ?", options: ["5","17","√17","3"], answer: 2, explanation: "|a|=√(4²+1²)=√17。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 8、4、12、12 的平均數（四捨五入）為何？", options: ["11","9","7","10"], answer: 1, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "向量", text: "向量 a=(6,1)，則 |a| = ?", options: ["√37","7","5","37"], answer: 0, explanation: "|a|=√(6²+1²)=√37。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 3、9、12、12 的平均數（四捨五入）為何？", options: ["11","7","10","9"], answer: 3, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+7 的最小值為何？", options: ["7","5","3","4"], answer: 2, explanation: "配方得 (x-2)²+3，最小值 3。", difficulty: "normal" },

  { type: 'single', section: "向量", text: "向量 a=(6,2)，則 |a| = ?", options: ["8","√40","4","40"], answer: 1, explanation: "|a|=√(6²+2²)=√40。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 3、6、8、13 的平均數（四捨五入）為何？", options: ["8","9","10","6"], answer: 0, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-6x+6 的最小值為何？", options: ["-2","0","6","-3"], answer: 3, explanation: "配方得 (x-3)²+-3，最小值 -3。", difficulty: "normal" },

  { type: 'single', section: "向量", text: "向量 a=(1,1)，則 |a| = ?", options: ["2","選項變體1","√2","0"], answer: 2, explanation: "|a|=√(1²+1²)=√2。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 2、10、12、9 的平均數（四捨五入）為何？", options: ["10","8","6","9"], answer: 1, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "指數與對數", text: "化簡 3^1 = ?", options: ["3","6","選項變體1","2"], answer: 0, explanation: "3^1=3。", difficulty: "normal" },

  { type: 'single', section: "指數與對數", text: "log_10 10000 = ?", options: ["5","3","8","4"], answer: 3, explanation: "10^4=10000，故對數為 4。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-12x+35 的最小值為何？", options: ["0","35","-1","5"], answer: 2, explanation: "配方得 (x-6)²+-1，最小值 -1。", difficulty: "normal" },

  { type: 'single', section: "向量", text: "向量 a=(3,1)，則 |a| = ?", options: ["2","√10","10","4"], answer: 1, explanation: "|a|=√(3²+1²)=√10。", difficulty: "normal" },

  { type: 'single', section: "機率", text: "袋中紅球 3、白球 2，隨機取 1 顆為紅球的機率？", options: ["3/5","1/5","3/2","2/5"], answer: 0, explanation: "P= 3/5。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 4、8、11、9 的平均數（四捨五入）為何？", options: ["10","6","9","8"], answer: 3, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 6、7、7、9 的平均數（四捨五入）為何？", options: ["5","8","7","9"], answer: 2, explanation: "平均約 7。", difficulty: "normal" },

  { type: 'single', section: "指數與對數", text: "log_2 4 = ?", options: ["4","2","1","3"], answer: 1, explanation: "2^2=4，故對數為 2。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-6x+9 的最小值為何？", options: ["0","9","1","3"], answer: 0, explanation: "配方得 (x-3)²+0，最小值 0。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 6、7、11、12 的平均數（四捨五入）為何？", options: ["10","7","11","9"], answer: 3, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-8x+13 的最小值為何？", options: ["13","1","-3","-2"], answer: 2, explanation: "配方得 (x-4)²+-3，最小值 -3。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 8、10、11、8 的平均數（四捨五入）為何？", options: ["11","9","10","7"], answer: 1, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+6 的最小值為何？", options: ["2","6","3","4"], answer: 0, explanation: "配方得 (x-2)²+2，最小值 2。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 3、6、11、13 的平均數（四捨五入）為何？", options: ["10","9","6","8"], answer: 3, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-6x+14 的最小值為何？", options: ["6","8","5","14"], answer: 2, explanation: "配方得 (x-3)²+5，最小值 5。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 3、10、9、8 的平均數（四捨五入）為何？", options: ["10","8","9","6"], answer: 1, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "指數與對數", text: "化簡 4^1 = ?", options: ["4","3","選項變體1","8"], answer: 0, explanation: "4^1=4。", difficulty: "normal" },

  { type: 'single', section: "指數與對數", text: "log_10 1000 = ?", options: ["4","6","2","3"], answer: 3, explanation: "10^3=1000，故對數為 3。", difficulty: "normal" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 2，第 9 項為何？", options: ["16","19","17","15"], answer: 2, explanation: "a_n = 1+(9-1)×2=17。", difficulty: "normal" },

  { type: 'single', section: "機率", text: "袋中紅球 4、白球 2，隨機取 1 顆為紅球的機率？", options: ["1/6","4/6","4/2","2/6"], answer: 1, explanation: "P= 4/6。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 5、5、11、10 的平均數（四捨五入）為何？", options: ["8","10","6","9"], answer: 0, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "指數與對數", text: "log_3 27 = ?", options: ["6","4","2","3"], answer: 3, explanation: "3^3=27，故對數為 3。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 7、10、11、12 的平均數（四捨五入）為何？", options: ["8","11","10","12"], answer: 2, explanation: "平均約 10。", difficulty: "normal" },

  { type: 'single', section: "解析幾何", text: "過點 (1,1) 與 (4,2) 的直線斜率為何？", options: ["1","0.33","1.33","3"], answer: 1, explanation: "斜率 = 0.33。", difficulty: "normal" },

  { type: 'single', section: "指數與對數", text: "log_2 8 = ?", options: ["3","6","4","2"], answer: 0, explanation: "2^3=8，故對數為 3。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-6x+8 的最小值為何？", options: ["8","0","2","-1"], answer: 3, explanation: "配方得 (x-3)²+-1，最小值 -1。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 7、7、7、13 的平均數（四捨五入）為何？", options: ["10","7","9","11"], answer: 2, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-8x+16 的最小值為何？", options: ["16","0","1","4"], answer: 1, explanation: "配方得 (x-4)²+0，最小值 0。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 2、9、11、13 的平均數（四捨五入）為何？", options: ["9","11","7","10"], answer: 0, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 4、5、11、11 的平均數（四捨五入）為何？", options: ["10","6","9","8"], answer: 3, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-6x+13 的最小值為何？", options: ["13","7","4","5"], answer: 2, explanation: "配方得 (x-3)²+4，最小值 4。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 4、8、7、8 的平均數（四捨五入）為何？", options: ["9","7","5","8"], answer: 1, explanation: "平均約 7。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-8x+21 的最小值為何？", options: ["5","6","9","21"], answer: 0, explanation: "配方得 (x-4)²+5，最小值 5。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 6、4、12、10 的平均數（四捨五入）為何？", options: ["10","6","9","8"], answer: 3, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 8、9、11、11 的平均數（四捨五入）為何？", options: ["12","8","10","11"], answer: 2, explanation: "平均約 10。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-8x+20 的最小值為何？", options: ["20","4","8","5"], answer: 1, explanation: "配方得 (x-4)²+4，最小值 4。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 3、5、11、9 的平均數（四捨五入）為何？", options: ["7","9","8","5"], answer: 0, explanation: "平均約 7。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-10x+23 的最小值為何？", options: ["-1","23","3","-2"], answer: 3, explanation: "配方得 (x-5)²+-2，最小值 -2。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 7、4、8、8 的平均數（四捨五入）為何？", options: ["8","5","7","9"], answer: 2, explanation: "平均約 7。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 2、6、10、10 的平均數（四捨五入）為何？", options: ["9","7","5","8"], answer: 1, explanation: "平均約 7。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-8x+17 的最小值為何？", options: ["1","2","17","5"], answer: 0, explanation: "配方得 (x-4)²+1，最小值 1。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 4、4、10、12 的平均數（四捨五入）為何？", options: ["9","6","10","8"], answer: 3, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-10x+26 的最小值為何？", options: ["2","6","1","26"], answer: 2, explanation: "配方得 (x-5)²+1，最小值 1。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 4、8、6、14 的平均數（四捨五入）為何？", options: ["10","8","6","9"], answer: 1, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-12x+38 的最小值為何？", options: ["2","38","8","3"], answer: 0, explanation: "配方得 (x-6)²+2，最小值 2。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 6、10、10、14 的平均數（四捨五入）為何？", options: ["12","11","8","10"], answer: 3, explanation: "平均約 10。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 8、6、10、12 的平均數（四捨五入）為何？", options: ["11","7","9","10"], answer: 2, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 8、10、6、13 的平均數（四捨五入）為何？", options: ["11","9","7","10"], answer: 1, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 3、5、11、10 的平均數（四捨五入）為何？", options: ["7","5","8","9"], answer: 0, explanation: "平均約 7。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 5、10、10、11 的平均數（四捨五入）為何？", options: ["10","11","7","9"], answer: 3, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 7、6、10、14 的平均數（四捨五入）為何？", options: ["11","7","9","10"], answer: 2, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-12x+37 的最小值為何？", options: ["37","1","7","2"], answer: 1, explanation: "配方得 (x-6)²+1，最小值 1。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 7、9、10、11 的平均數（四捨五入）為何？", options: ["9","10","11","7"], answer: 0, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 2、5、12、13 的平均數（四捨五入）為何？", options: ["10","6","9","8"], answer: 3, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-10x+28 的最小值為何？", options: ["28","8","3","4"], answer: 2, explanation: "配方得 (x-5)²+3，最小值 3。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 4、8、12、12 的平均數（四捨五入）為何？", options: ["11","9","7","10"], answer: 1, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-12x+33 的最小值為何？", options: ["-3","3","33","-2"], answer: 0, explanation: "配方得 (x-6)²+-3，最小值 -3。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 4、5、10、14 的平均數（四捨五入）為何？", options: ["6","9","10","8"], answer: 3, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 6、7、12、11 的平均數（四捨五入）為何？", options: ["11","10","9","7"], answer: 2, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 8、5、12、13 的平均數（四捨五入）為何？", options: ["12","10","8","11"], answer: 1, explanation: "平均約 10。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 5、4、7、12 的平均數（四捨五入）為何？", options: ["7","5","8","9"], answer: 0, explanation: "平均約 7。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 7、6、10、10 的平均數（四捨五入）為何？", options: ["9","6","10","8"], answer: 3, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 2、4、11、14 的平均數（四捨五入）為何？", options: ["10","9","8","6"], answer: 2, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "解析幾何", text: "過點 (1,2) 與 (3,3) 的直線斜率為何？", options: ["1.5","0.5","2","1"], answer: 1, explanation: "斜率 = 0.5。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 4、7、11、13 的平均數（四捨五入）為何？", options: ["9","10","7","11"], answer: 0, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-6x+12 的最小值為何？", options: ["12","4","6","3"], answer: 3, explanation: "配方得 (x-3)²+3，最小值 3。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 4、10、11、11 的平均數（四捨五入）為何？", options: ["11","10","9","7"], answer: 2, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 6、6、11、9 的平均數（四捨五入）為何？", options: ["10","8","6","9"], answer: 1, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+9 的最小值為何？", options: ["5","7","9","6"], answer: 0, explanation: "配方得 (x-2)²+5，最小值 5。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 8、9、11、12 的平均數（四捨五入）為何？", options: ["12","8","11","10"], answer: 3, explanation: "平均約 10。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 8、6、9、11 的平均數（四捨五入）為何？", options: ["10","7","9","11"], answer: 2, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 3、8、11、11 的平均數（四捨五入）為何？", options: ["10","8","9","6"], answer: 1, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 5、6、11、11 的平均數（四捨五入）為何？", options: ["8","6","9","10"], answer: 0, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-6x+11 的最小值為何？", options: ["5","11","3","2"], answer: 3, explanation: "配方得 (x-3)²+2，最小值 2。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 5、10、7、14 的平均數（四捨五入）為何？", options: ["11","10","9","7"], answer: 2, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-8x+19 的最小值為何？", options: ["19","3","4","7"], answer: 1, explanation: "配方得 (x-4)²+3，最小值 3。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 7、5、11、14 的平均數（四捨五入）為何？", options: ["9","11","10","7"], answer: 0, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 2、8、11、10 的平均數（四捨五入）為何？", options: ["10","6","9","8"], answer: 3, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-6x+7 的最小值為何？", options: ["-1","1","-2","7"], answer: 2, explanation: "配方得 (x-3)²+-2，最小值 -2。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 2、5、7、13 的平均數（四捨五入）為何？", options: ["9","7","8","5"], answer: 1, explanation: "平均約 7。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-10x+30 的最小值為何？", options: ["5","6","10","30"], answer: 0, explanation: "配方得 (x-5)²+5，最小值 5。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 4、7、12、9 的平均數（四捨五入）為何？", options: ["9","6","10","8"], answer: 3, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 6、5、11、9 的平均數（四捨五入）為何？", options: ["9","6","8","10"], answer: 2, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-8x+14 的最小值為何？", options: ["14","-2","2","-1"], answer: 1, explanation: "配方得 (x-4)²+-2，最小值 -2。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 5、10、10、12 的平均數（四捨五入）為何？", options: ["9","11","7","10"], answer: 0, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 5、6、11、13 的平均數（四捨五入）為何？", options: ["10","7","11","9"], answer: 3, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 2、7、10、11 的平均數（四捨五入）為何？", options: ["9","10","8","6"], answer: 2, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-10x+29 的最小值為何？", options: ["29","4","5","9"], answer: 1, explanation: "配方得 (x-5)²+4，最小值 4。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 2、4、6、12 的平均數（四捨五入）為何？", options: ["6","4","7","8"], answer: 0, explanation: "平均約 6。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-12x+41 的最小值為何？", options: ["41","11","6","5"], answer: 3, explanation: "配方得 (x-6)²+5，最小值 5。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 4、6、10、12 的平均數（四捨五入）為何？", options: ["9","10","8","6"], answer: 2, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 6、6、6、11 的平均數（四捨五入）為何？", options: ["9","7","5","8"], answer: 1, explanation: "平均約 7。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 8、8、11、9 的平均數（四捨五入）為何？", options: ["9","11","7","10"], answer: 0, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 3、6、10、9 的平均數（四捨五入）為何？", options: ["8","9","5","7"], answer: 3, explanation: "平均約 7。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 5、9、10、14 的平均數（四捨五入）為何？", options: ["11","12","10","8"], answer: 2, explanation: "平均約 10。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-12x+40 的最小值為何？", options: ["40","4","10","5"], answer: 1, explanation: "配方得 (x-6)²+4，最小值 4。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 5、5、10、10 的平均數（四捨五入）為何？", options: ["8","10","9","6"], answer: 0, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 7、8、10、8 的平均數（四捨五入）為何？", options: ["10","6","9","8"], answer: 3, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 2、4、10、13 的平均數（四捨五入）為何？", options: ["8","5","7","9"], answer: 2, explanation: "平均約 7。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-4x+1 的最小值為何？", options: ["1","-3","-1","-2"], answer: 1, explanation: "配方得 (x-2)²+-3，最小值 -3。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 2、8、8、9 的平均數（四捨五入）為何？", options: ["7","9","5","8"], answer: 0, explanation: "平均約 7。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 4、10、10、10 的平均數（四捨五入）為何？", options: ["10","7","11","9"], answer: 3, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-12x+36 的最小值為何？", options: ["36","1","0","6"], answer: 2, explanation: "配方得 (x-6)²+0，最小值 0。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 3、10、9、10 的平均數（四捨五入）為何？", options: ["10","8","6","9"], answer: 1, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 3、7、12、11 的平均數（四捨五入）為何？", options: ["8","9","10","6"], answer: 0, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 7、7、9、9 的平均數（四捨五入）為何？", options: ["9","6","10","8"], answer: 3, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 7、10、12、13 的平均數（四捨五入）為何？", options: ["13","9","11","12"], answer: 2, explanation: "平均約 11。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 2、6、9、10 的平均數（四捨五入）為何？", options: ["5","7","8","9"], answer: 1, explanation: "平均約 7。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 4、9、9、9 的平均數（四捨五入）為何？", options: ["8","10","6","9"], answer: 0, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 6、5、9、14 的平均數（四捨五入）為何？", options: ["10","7","11","9"], answer: 3, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 6、9、7、9 的平均數（四捨五入）為何？", options: ["10","6","8","9"], answer: 2, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 8、4、9、10 的平均數（四捨五入）為何？", options: ["10","8","9","6"], answer: 1, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 3、9、9、13 的平均數（四捨五入）為何？", options: ["9","11","7","10"], answer: 0, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 3、6、7、13 的平均數（四捨五入）為何？", options: ["9","8","5","7"], answer: 3, explanation: "平均約 7。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 5、8、9、13 的平均數（四捨五入）為何？", options: ["11","10","9","7"], answer: 2, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 7、4、11、11 的平均數（四捨五入）為何？", options: ["9","8","10","6"], answer: 1, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 7、8、9、11 的平均數（四捨五入）為何？", options: ["9","11","7","10"], answer: 0, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-10x+24 的最小值為何？", options: ["0","4","24","-1"], answer: 3, explanation: "配方得 (x-5)²+-1，最小值 -1。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 2、10、12、8 的平均數（四捨五入）為何？", options: ["10","6","8","9"], answer: 2, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "二次函數", text: "f(x)=x²-6x+10 的最小值為何？", options: ["4","1","10","2"], answer: 1, explanation: "配方得 (x-3)²+1，最小值 1。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 8、10、8、9 的平均數（四捨五入）為何？", options: ["9","10","7","11"], answer: 0, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 3、6、8、12 的平均數（四捨五入）為何？", options: ["9","8","5","7"], answer: 3, explanation: "平均約 7。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 3、9、9、14 的平均數（四捨五入）為何？", options: ["11","7","9","10"], answer: 2, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 5、5、8、14 的平均數（四捨五入）為何？", options: ["6","8","9","10"], answer: 1, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 7、10、8、11 的平均數（四捨五入）為何？", options: ["9","11","7","10"], answer: 0, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 7、7、6、13 的平均數（四捨五入）為何？", options: ["9","6","10","8"], answer: 3, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 2、9、10、13 的平均數（四捨五入）為何？", options: ["7","10","9","11"], answer: 2, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 4 項為何？", options: ["9","8","4","7"], answer: 1, explanation: "a_n=1×2^(4-1)=8。", difficulty: "normal" },

  { type: 'single', section: "機率", text: "袋中紅球 4、白球 3，隨機取 1 顆為紅球的機率？", options: ["4/7","3/7","4/3","1/7"], answer: 0, explanation: "P= 4/7。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 4、5、10、9 的平均數（四捨五入）為何？", options: ["9","8","5","7"], answer: 3, explanation: "平均約 7。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 4、9、8、8 的平均數（四捨五入）為何？", options: ["9","8","7","5"], answer: 2, explanation: "平均約 7。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 6、4、11、8 的平均數（四捨五入）為何？", options: ["9","7","5","8"], answer: 1, explanation: "平均約 7。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 8、9、10、10 的平均數（四捨五入）為何？", options: ["9","11","10","7"], answer: 0, explanation: "平均約 9。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 3、8、10、11 的平均數（四捨五入）為何？", options: ["10","9","6","8"], answer: 3, explanation: "平均約 8。", difficulty: "normal" },

  { type: 'single', section: "統計", text: "資料 5、4、10、9 的平均數（四捨五入）為何？", options: ["8","5","7","9"], answer: 2, explanation: "平均約 7。", difficulty: "normal" }
];
