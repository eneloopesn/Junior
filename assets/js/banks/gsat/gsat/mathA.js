window.QuestionBanks = window.QuestionBanks || {};
window.QuestionBanks.gsat = window.QuestionBanks.gsat || {};
window.QuestionBanks.gsat.mathA = [
  { type: 'non-choice', section: "非選擇題", text: "已知 f(x) = x² - 4x + 5，(1) 將 f(x) 配方；(2) 求最小值及發生時的 x 值。 #2136696655-nc0", answerText: "<p><strong>解：</strong></p><p>f(x) = (x-2)² + 1</p><p>最小值 1，在 x = 2 時發生。</p>", explanation: "二次函數配方後可讀出頂點坐標。" },

  { type: 'non-choice', section: "非選擇題", text: "等差數列首項 2、公差 4，(1) 求第 5 項；(2) 求前 5 項和。 #2136696655-nc1", answerText: "<p><strong>解：</strong></p><p>第 5 項 = 18</p><p>前 5 項和 = 5(2+18)/2 = 50</p>", explanation: "等差數列一般項與求和公式。" },

  { type: 'single', section: "排列組合", text: "4 個不同物品排成一列，共有幾種排法？ #2136696655-0", options: ["12","24","20","28"], answer: 1, explanation: "4! = 24。" },

  { type: 'single', section: "統計", text: "資料 8、7、7、12 的平均數為何？ #2136696655-1", options: ["9","10","11","7"], answer: 0, explanation: "平均 = (8+7+7+12)/4 = 9。" },

  { type: 'single', section: "指數與對數", text: "log_2 8 = ? #2136696655-2", options: ["6","4","2","3"], answer: 3, explanation: "因 2^3=8，故 log_28=3。" },

  { type: 'single', section: "三角", text: "已知 sin θ = 5/13，且 θ 為第一象限角，則 cos θ = ? #2136696655-3", options: ["5/12","13/12","12/13","5/13"], answer: 2, explanation: "cos θ = √(1-sin²θ) = 12/13。" },

  { type: 'single', section: "圓", text: "圓 x² + y² = 16 的半徑為何？ #2136696655-4", options: ["8","4","5","16"], answer: 1, explanation: "x²+y²=r²，半徑 r=4。" },

  { type: 'single', section: "排列組合", text: "從 8 人中選 2 人組成隊伍，有幾種選法？ #2136696655-5", options: ["28","10","36","16"], answer: 0, explanation: "C(8,2) = 28。" },

  { type: 'single', section: "指數與對數", text: "化簡 2^1 = ? #2136696655-6", options: ["4","2","1","2"], answer: 3, explanation: "2^1 = 2。" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 3，第 5 項為何？ #2136696655-7", options: ["16","10","13","16"], answer: 2, explanation: "a_5 = 1 + (5-1)×3 = 13。" },

  { type: 'single', section: "三角", text: "若 cos x = √3/2 且 0° < x < 90°，則 x = ?（度） #2136696655-8", options: ["90","30","60","45"], answer: 1, explanation: "cos 30° = √3/2，故 x = 30°。" },

  { type: 'single', section: "向量", text: "向量 a = (1, 1)，則 |a| = ? #2136696655-9", options: ["1","2","0","2"], answer: 0, explanation: "|a| = √(1²+1²) = 1。" },

  { type: 'single', section: "機率", text: "袋中有紅球 2 顆、白球 3 顆，隨機取 1 顆，取到紅球的機率為何？ #2136696655-10", options: ["3/5","1/5","2/3","2/5"], answer: 3, explanation: "P(紅) = 2/(2+3) = 2/5。" },

  { type: 'single', section: "指數與對數", text: "若 3^(2x-1) = 3，則 x = ? #2136696655-11", options: ["2","3","1","0"], answer: 2, explanation: "3^(2x-1)=3^1，故 2x-1=1，x=1。" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 3 項為何？ #2136696655-12", options: ["6","4","2","5"], answer: 1, explanation: "a_3 = 1×2^2 = 4。" },

  { type: 'single', section: "二次函數", text: "f(x) = x² - 12x + 37 的最小值為何？ #2136696655-13", options: ["1","37","7","2"], answer: 0, explanation: "配方得 f(x)=(x-6)²+1，最小值為 1。" },

  { type: 'single', section: "排列組合", text: "4 個不同物品排成一列，共有幾種排法？ #2136696655-14", options: ["28","20","12","24"], answer: 3, explanation: "4! = 24。" },

  { type: 'single', section: "統計", text: "資料 6、6、12、14 的平均數為何？ #2136696655-15", options: ["12","11","10","8"], answer: 2, explanation: "平均 = (6+6+12+14)/4 = 10。" },

  { type: 'single', section: "指數與對數", text: "log_2 16 = ? #2136696655-16", options: ["8","4","3","5"], answer: 1, explanation: "因 2^4=16，故 log_216=4。" },

  { type: 'single', section: "三角", text: "已知 sin θ = 3/5，且 θ 為第一象限角，則 cos θ = ? #2136696655-17", options: ["4/5","3/5","3/4","5/4"], answer: 0, explanation: "cos θ = √(1-sin²θ) = 4/5。" },

  { type: 'single', section: "圓", text: "圓 x² + y² = 36 的半徑為何？ #2136696655-18", options: ["12","36","7","6"], answer: 3, explanation: "x²+y²=r²，半徑 r=6。" },

  { type: 'single', section: "排列組合", text: "從 7 人中選 2 人組成隊伍，有幾種選法？ #2136696655-19", options: ["14","9","21","28"], answer: 2, explanation: "C(7,2) = 21。" },

  { type: 'single', section: "指數與對數", text: "化簡 2^1 = ? #2136696655-20", options: ["2","2","1","4"], answer: 1, explanation: "2^1 = 2。" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 5，第 5 項為何？ #2136696655-21", options: ["21","26","26","16"], answer: 0, explanation: "a_5 = 1 + (5-1)×5 = 21。" },

  { type: 'single', section: "三角", text: "若 cos x = √3/2 且 0° < x < 90°，則 x = ?（度） #2136696655-22", options: ["90","45","60","30"], answer: 3, explanation: "cos 30° = √3/2，故 x = 30°。" },

  { type: 'single', section: "向量", text: "向量 a = (1, 1)，則 |a| = ? #2136696655-23", options: ["2","0","1","2"], answer: 2, explanation: "|a| = √(1²+1²) = 1。" },

  { type: 'single', section: "機率", text: "袋中有紅球 2 顆、白球 4 顆，隨機取 1 顆，取到紅球的機率為何？ #2136696655-24", options: ["1/6","2/6","4/6","2/4"], answer: 1, explanation: "P(紅) = 2/(2+4) = 2/6。" },

  { type: 'single', section: "指數與對數", text: "若 3^(2x-1) = 2187，則 x = ? #2136696655-25", options: ["4","6","3","5"], answer: 0, explanation: "3^(2x-1)=3^7，故 2x-1=7，x=4。" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 3 項為何？ #2136696655-26", options: ["5","2","6","4"], answer: 3, explanation: "a_3 = 1×2^2 = 4。" },

  { type: 'single', section: "二次函數", text: "f(x) = x² - 6x + 7 的最小值為何？ #2136696655-27", options: ["-1","1","-2","7"], answer: 2, explanation: "配方得 f(x)=(x-3)²+-2，最小值為 -2。" },

  { type: 'single', section: "排列組合", text: "4 個不同物品排成一列，共有幾種排法？ #2136696655-28", options: ["28","24","20","12"], answer: 1, explanation: "4! = 24。" },

  { type: 'single', section: "統計", text: "資料 3、7、11、9 的平均數為何？ #2136696655-29", options: ["8","9","6","10"], answer: 0, explanation: "平均 = (3+7+11+9)/4 = 8。" },

  { type: 'single', section: "指數與對數", text: "log_2 8 = ? #2136696655-30", options: ["6","4","2","3"], answer: 3, explanation: "因 2^3=8，故 log_28=3。" },

  { type: 'single', section: "三角", text: "已知 sin θ = 3/5，且 θ 為第一象限角，則 cos θ = ? #2136696655-31", options: ["5/4","3/4","4/5","3/5"], answer: 2, explanation: "cos θ = √(1-sin²θ) = 4/5。" },

  { type: 'single', section: "圓", text: "圓 x² + y² = 16 的半徑為何？ #2136696655-32", options: ["5","4","16","8"], answer: 1, explanation: "x²+y²=r²，半徑 r=4。" },

  { type: 'single', section: "排列組合", text: "從 9 人中選 2 人組成隊伍，有幾種選法？ #2136696655-33", options: ["36","11","45","18"], answer: 0, explanation: "C(9,2) = 36。" },

  { type: 'single', section: "指數與對數", text: "化簡 2^1 = ? #2136696655-34", options: ["4","2","1","2"], answer: 3, explanation: "2^1 = 2。" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 6，第 5 項為何？ #2136696655-35", options: ["31","19","25","31"], answer: 2, explanation: "a_5 = 1 + (5-1)×6 = 25。" },

  { type: 'single', section: "三角", text: "若 cos x = √3/2 且 0° < x < 90°，則 x = ?（度） #2136696655-36", options: ["60","30","90","45"], answer: 1, explanation: "cos 30° = √3/2，故 x = 30°。" },

  { type: 'single', section: "向量", text: "向量 a = (1, 1)，則 |a| = ? #2136696655-37", options: ["1","0","2","2"], answer: 0, explanation: "|a| = √(1²+1²) = 1。" },

  { type: 'single', section: "機率", text: "袋中有紅球 2 顆、白球 4 顆，隨機取 1 顆，取到紅球的機率為何？ #2136696655-38", options: ["4/6","1/6","2/4","2/6"], answer: 3, explanation: "P(紅) = 2/(2+4) = 2/6。" },

  { type: 'single', section: "指數與對數", text: "若 2^(2x-1) = 128，則 x = ? #2136696655-39", options: ["5","6","4","3"], answer: 2, explanation: "2^(2x-1)=2^7，故 2x-1=7，x=4。" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 3 項為何？ #2136696655-40", options: ["2","4","6","5"], answer: 1, explanation: "a_3 = 1×2^2 = 4。" },

  { type: 'single', section: "二次函數", text: "f(x) = x² - 6x + 13 的最小值為何？ #2136696655-41", options: ["4","13","7","5"], answer: 0, explanation: "配方得 f(x)=(x-3)²+4，最小值為 4。" },

  { type: 'single', section: "排列組合", text: "4 個不同物品排成一列，共有幾種排法？ #2136696655-42", options: ["28","12","20","24"], answer: 3, explanation: "4! = 24。" },

  { type: 'single', section: "統計", text: "資料 7、8、7、9 的平均數為何？ #2136696655-43", options: ["10","6","8","9"], answer: 2, explanation: "平均 = (7+8+7+9)/4 = 8。" },

  { type: 'single', section: "指數與對數", text: "log_2 4 = ? #2136696655-44", options: ["1","2","4","3"], answer: 1, explanation: "因 2^2=4，故 log_24=2。" },

  { type: 'single', section: "三角", text: "已知 sin θ = 8/17，且 θ 為第一象限角，則 cos θ = ? #2136696655-45", options: ["15/17","8/17","17/15","8/15"], answer: 0, explanation: "cos θ = √(1-sin²θ) = 15/17。" },

  { type: 'single', section: "圓", text: "圓 x² + y² = 16 的半徑為何？ #2136696655-46", options: ["8","5","16","4"], answer: 3, explanation: "x²+y²=r²，半徑 r=4。" },

  { type: 'single', section: "排列組合", text: "從 9 人中選 2 人組成隊伍，有幾種選法？ #2136696655-47", options: ["11","18","36","45"], answer: 2, explanation: "C(9,2) = 36。" },

  { type: 'single', section: "指數與對數", text: "化簡 2^1 = ? #2136696655-48", options: ["2","2","1","4"], answer: 1, explanation: "2^1 = 2。" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 4，第 5 項為何？ #2136696655-49", options: ["17","21","13","21"], answer: 0, explanation: "a_5 = 1 + (5-1)×4 = 17。" },

  { type: 'single', section: "三角", text: "若 cos x = √3/2 且 0° < x < 90°，則 x = ?（度） #2136696655-50", options: ["90","45","60","30"], answer: 3, explanation: "cos 30° = √3/2，故 x = 30°。" },

  { type: 'single', section: "向量", text: "向量 a = (1, 1)，則 |a| = ? #2136696655-51", options: ["2","0","1","2"], answer: 2, explanation: "|a| = √(1²+1²) = 1。" },

  { type: 'single', section: "機率", text: "袋中有紅球 2 顆、白球 4 顆，隨機取 1 顆，取到紅球的機率為何？ #2136696655-52", options: ["4/6","2/6","1/6","2/4"], answer: 1, explanation: "P(紅) = 2/(2+4) = 2/6。" },

  { type: 'single', section: "指數與對數", text: "若 5^(2x-1) = 5，則 x = ? #2136696655-53", options: ["1","2","0","3"], answer: 0, explanation: "5^(2x-1)=5^1，故 2x-1=1，x=1。" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 3 項為何？ #2136696655-54", options: ["5","2","6","4"], answer: 3, explanation: "a_3 = 1×2^2 = 4。" },

  { type: 'single', section: "二次函數", text: "f(x) = x² - 10x + 29 的最小值為何？ #2136696655-55", options: ["5","9","4","29"], answer: 2, explanation: "配方得 f(x)=(x-5)²+4，最小值為 4。" },

  { type: 'single', section: "排列組合", text: "4 個不同物品排成一列，共有幾種排法？ #2136696655-56", options: ["12","24","20","28"], answer: 1, explanation: "4! = 24。" },

  { type: 'single', section: "統計", text: "資料 8、8、8、14 的平均數為何？ #2136696655-57", options: ["10","12","8","11"], answer: 0, explanation: "平均 = (8+8+8+14)/4 = 10。" },

  { type: 'single', section: "指數與對數", text: "log_10 100 = ? #2136696655-58", options: ["1","4","3","2"], answer: 3, explanation: "因 10^2=100，故 log_10100=2。" },

  { type: 'single', section: "三角", text: "已知 sin θ = 3/5，且 θ 為第一象限角，則 cos θ = ? #2136696655-59", options: ["3/5","5/4","4/5","3/4"], answer: 2, explanation: "cos θ = √(1-sin²θ) = 4/5。" },

  { type: 'single', section: "圓", text: "圓 x² + y² = 36 的半徑為何？ #2136696655-60", options: ["12","6","7","36"], answer: 1, explanation: "x²+y²=r²，半徑 r=6。" },

  { type: 'single', section: "排列組合", text: "從 8 人中選 2 人組成隊伍，有幾種選法？ #2136696655-61", options: ["28","10","36","16"], answer: 0, explanation: "C(8,2) = 28。" },

  { type: 'single', section: "指數與對數", text: "化簡 2^1 = ? #2136696655-62", options: ["1","4","2","2"], answer: 3, explanation: "2^1 = 2。" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 2，第 5 項為何？ #2136696655-63", options: ["11","7","9","11"], answer: 2, explanation: "a_5 = 1 + (5-1)×2 = 9。" },

  { type: 'single', section: "三角", text: "若 cos x = √3/2 且 0° < x < 90°，則 x = ?（度） #2136696655-64", options: ["60","30","90","45"], answer: 1, explanation: "cos 30° = √3/2，故 x = 30°。" },

  { type: 'single', section: "向量", text: "向量 a = (1, 1)，則 |a| = ? #2136696655-65", options: ["1","0","2","2"], answer: 0, explanation: "|a| = √(1²+1²) = 1。" },

  { type: 'single', section: "機率", text: "袋中有紅球 2 顆、白球 2 顆，隨機取 1 顆，取到紅球的機率為何？ #2136696655-66", options: ["2/4","2/2","1/4","2/4"], answer: 3, explanation: "P(紅) = 2/(2+2) = 2/4。" },

  { type: 'single', section: "指數與對數", text: "若 3^(2x-1) = 3，則 x = ? #2136696655-67", options: ["3","2","1","0"], answer: 2, explanation: "3^(2x-1)=3^1，故 2x-1=1，x=1。" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 3，第 3 項為何？ #2136696655-68", options: ["10","9","3","9"], answer: 1, explanation: "a_3 = 1×3^2 = 9。" },

  { type: 'single', section: "二次函數", text: "f(x) = x² - 4x + 6 的最小值為何？ #2136696655-69", options: ["2","3","4","6"], answer: 0, explanation: "配方得 f(x)=(x-2)²+2，最小值為 2。" },

  { type: 'single', section: "排列組合", text: "4 個不同物品排成一列，共有幾種排法？ #2136696655-70", options: ["28","20","12","24"], answer: 3, explanation: "4! = 24。" },

  { type: 'single', section: "統計", text: "資料 7、4、8、8 的平均數為何？ #2136696655-71", options: ["8","9","7","5"], answer: 2, explanation: "平均 = (7+4+8+8)/4 = 7。" },

  { type: 'single', section: "指數與對數", text: "log_3 27 = ? #2136696655-72", options: ["6","3","2","4"], answer: 1, explanation: "因 3^3=27，故 log_327=3。" },

  { type: 'single', section: "三角", text: "已知 sin θ = 5/13，且 θ 為第一象限角，則 cos θ = ? #2136696655-73", options: ["12/13","5/12","13/12","5/13"], answer: 0, explanation: "cos θ = √(1-sin²θ) = 12/13。" },

  { type: 'single', section: "圓", text: "圓 x² + y² = 4 的半徑為何？ #2136696655-74", options: ["4","3","4","2"], answer: 3, explanation: "x²+y²=r²，半徑 r=2。" },

  { type: 'single', section: "排列組合", text: "從 9 人中選 2 人組成隊伍，有幾種選法？ #2136696655-75", options: ["45","11","36","18"], answer: 2, explanation: "C(9,2) = 36。" },

  { type: 'single', section: "指數與對數", text: "化簡 2^1 = ? #2136696655-76", options: ["4","2","1","2"], answer: 1, explanation: "2^1 = 2。" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 3，第 5 項為何？ #2136696655-77", options: ["13","16","16","10"], answer: 0, explanation: "a_5 = 1 + (5-1)×3 = 13。" },

  { type: 'single', section: "三角", text: "若 cos x = √3/2 且 0° < x < 90°，則 x = ?（度） #2136696655-78", options: ["45","90","60","30"], answer: 3, explanation: "cos 30° = √3/2，故 x = 30°。" },

  { type: 'single', section: "向量", text: "向量 a = (3, 1)，則 |a| = ? #2136696655-79", options: ["4","2","3","4"], answer: 2, explanation: "|a| = √(3²+1²) = 3。" },

  { type: 'single', section: "機率", text: "袋中有紅球 2 顆、白球 2 顆，隨機取 1 顆，取到紅球的機率為何？ #2136696655-80", options: ["2/4","2/4","2/2","1/4"], answer: 1, explanation: "P(紅) = 2/(2+2) = 2/4。" },

  { type: 'single', section: "指數與對數", text: "若 2^(2x-1) = 32，則 x = ? #2136696655-81", options: ["3","4","2","5"], answer: 0, explanation: "2^(2x-1)=2^5，故 2x-1=5，x=3。" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 3 項為何？ #2136696655-82", options: ["2","6","5","4"], answer: 3, explanation: "a_3 = 1×2^2 = 4。" },

  { type: 'single', section: "二次函數", text: "f(x) = x² - 10x + 27 的最小值為何？ #2136696655-83", options: ["3","7","2","27"], answer: 2, explanation: "配方得 f(x)=(x-5)²+2，最小值為 2。" },

  { type: 'single', section: "排列組合", text: "4 個不同物品排成一列，共有幾種排法？ #2136696655-84", options: ["12","24","28","20"], answer: 1, explanation: "4! = 24。" },

  { type: 'single', section: "統計", text: "資料 4、6、8、10 的平均數為何？ #2136696655-85", options: ["7","5","8","9"], answer: 0, explanation: "平均 = (4+6+8+10)/4 = 7。" },

  { type: 'single', section: "指數與對數", text: "log_2 16 = ? #2136696655-86", options: ["8","3","5","4"], answer: 3, explanation: "因 2^4=16，故 log_216=4。" },

  { type: 'single', section: "三角", text: "已知 sin θ = 3/5，且 θ 為第一象限角，則 cos θ = ? #2136696655-87", options: ["3/4","3/5","4/5","5/4"], answer: 2, explanation: "cos θ = √(1-sin²θ) = 4/5。" },

  { type: 'single', section: "圓", text: "圓 x² + y² = 4 的半徑為何？ #2136696655-88", options: ["4","2","3","4"], answer: 1, explanation: "x²+y²=r²，半徑 r=2。" },

  { type: 'single', section: "排列組合", text: "從 10 人中選 2 人組成隊伍，有幾種選法？ #2136696655-89", options: ["45","55","20","12"], answer: 0, explanation: "C(10,2) = 45。" },

  { type: 'single', section: "指數與對數", text: "化簡 2^1 = ? #2136696655-90", options: ["4","2","1","2"], answer: 3, explanation: "2^1 = 2。" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 2，第 5 項為何？ #2136696655-91", options: ["11","7","9","11"], answer: 2, explanation: "a_5 = 1 + (5-1)×2 = 9。" },

  { type: 'single', section: "三角", text: "若 cos x = √3/2 且 0° < x < 90°，則 x = ?（度） #2136696655-92", options: ["60","30","45","90"], answer: 1, explanation: "cos 30° = √3/2，故 x = 30°。" },

  { type: 'single', section: "向量", text: "向量 a = (5, 1)，則 |a| = ? #2136696655-93", options: ["5","6","6","4"], answer: 0, explanation: "|a| = √(5²+1²) = 5。" },

  { type: 'single', section: "機率", text: "袋中有紅球 2 顆、白球 4 顆，隨機取 1 顆，取到紅球的機率為何？ #2136696655-94", options: ["2/4","1/6","4/6","2/6"], answer: 3, explanation: "P(紅) = 2/(2+4) = 2/6。" },

  { type: 'single', section: "指數與對數", text: "若 2^(2x-1) = 2，則 x = ? #2136696655-95", options: ["2","3","1","0"], answer: 2, explanation: "2^(2x-1)=2^1，故 2x-1=1，x=1。" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 3 項為何？ #2136696655-96", options: ["5","4","2","6"], answer: 1, explanation: "a_3 = 1×2^2 = 4。" },

  { type: 'single', section: "二次函數", text: "f(x) = x² - 10x + 30 的最小值為何？ #2136696655-97", options: ["5","6","10","30"], answer: 0, explanation: "配方得 f(x)=(x-5)²+5，最小值為 5。" },

  { type: 'single', section: "排列組合", text: "4 個不同物品排成一列，共有幾種排法？ #2136696655-98", options: ["28","20","12","24"], answer: 3, explanation: "4! = 24。" },

  { type: 'single', section: "統計", text: "資料 2、9、8、10 的平均數為何？ #2136696655-99", options: ["9","8","7","5"], answer: 2, explanation: "平均 = (2+9+8+10)/4 = 7。" },

  { type: 'single', section: "指數與對數", text: "log_3 81 = ? #2136696655-100", options: ["5","4","8","3"], answer: 1, explanation: "因 3^4=81，故 log_381=4。" },

  { type: 'single', section: "三角", text: "已知 sin θ = 3/5，且 θ 為第一象限角，則 cos θ = ? #2136696655-101", options: ["4/5","3/5","3/4","5/4"], answer: 0, explanation: "cos θ = √(1-sin²θ) = 4/5。" },

  { type: 'single', section: "圓", text: "圓 x² + y² = 4 的半徑為何？ #2136696655-102", options: ["4","3","4","2"], answer: 3, explanation: "x²+y²=r²，半徑 r=2。" },

  { type: 'single', section: "排列組合", text: "從 9 人中選 2 人組成隊伍，有幾種選法？ #2136696655-103", options: ["45","18","36","11"], answer: 2, explanation: "C(9,2) = 36。" },

  { type: 'single', section: "指數與對數", text: "化簡 2^1 = ? #2136696655-104", options: ["4","2","2","1"], answer: 1, explanation: "2^1 = 2。" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 3，第 5 項為何？ #2136696655-105", options: ["13","16","16","10"], answer: 0, explanation: "a_5 = 1 + (5-1)×3 = 13。" },

  { type: 'single', section: "三角", text: "若 cos x = √3/2 且 0° < x < 90°，則 x = ?（度） #2136696655-106", options: ["90","45","60","30"], answer: 3, explanation: "cos 30° = √3/2，故 x = 30°。" },

  { type: 'single', section: "向量", text: "向量 a = (1, 1)，則 |a| = ? #2136696655-107", options: ["2","2","1","0"], answer: 2, explanation: "|a| = √(1²+1²) = 1。" },

  { type: 'single', section: "機率", text: "袋中有紅球 2 顆、白球 4 顆，隨機取 1 顆，取到紅球的機率為何？ #2136696655-108", options: ["4/6","2/6","1/6","2/4"], answer: 1, explanation: "P(紅) = 2/(2+4) = 2/6。" },

  { type: 'single', section: "指數與對數", text: "若 2^(2x-1) = 512，則 x = ? #2136696655-109", options: ["5","7","6","4"], answer: 0, explanation: "2^(2x-1)=2^9，故 2x-1=9，x=5。" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 3 項為何？ #2136696655-110", options: ["6","2","5","4"], answer: 3, explanation: "a_3 = 1×2^2 = 4。" },

  { type: 'single', section: "二次函數", text: "f(x) = x² - 10x + 24 的最小值為何？ #2136696655-111", options: ["0","4","-1","24"], answer: 2, explanation: "配方得 f(x)=(x-5)²+-1，最小值為 -1。" },

  { type: 'single', section: "排列組合", text: "4 個不同物品排成一列，共有幾種排法？ #2136696655-112", options: ["12","24","28","20"], answer: 1, explanation: "4! = 24。" },

  { type: 'single', section: "統計", text: "資料 2、9、11、12 的平均數為何？ #2136696655-113", options: ["9","11","7","10"], answer: 0, explanation: "平均 = (2+9+11+12)/4 = 9。" },

  { type: 'single', section: "指數與對數", text: "log_2 8 = ? #2136696655-114", options: ["4","6","2","3"], answer: 3, explanation: "因 2^3=8，故 log_28=3。" },

  { type: 'single', section: "三角", text: "已知 sin θ = 5/13，且 θ 為第一象限角，則 cos θ = ? #2136696655-115", options: ["5/13","13/12","12/13","5/12"], answer: 2, explanation: "cos θ = √(1-sin²θ) = 12/13。" },

  { type: 'single', section: "圓", text: "圓 x² + y² = 16 的半徑為何？ #2136696655-116", options: ["5","4","16","8"], answer: 1, explanation: "x²+y²=r²，半徑 r=4。" },

  { type: 'single', section: "排列組合", text: "從 8 人中選 2 人組成隊伍，有幾種選法？ #2136696655-117", options: ["28","10","16","36"], answer: 0, explanation: "C(8,2) = 28。" },

  { type: 'single', section: "指數與對數", text: "化簡 2^1 = ? #2136696655-118", options: ["2","1","4","2"], answer: 3, explanation: "2^1 = 2。" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 5，第 5 項為何？ #2136696655-119", options: ["26","16","21","26"], answer: 2, explanation: "a_5 = 1 + (5-1)×5 = 21。" },

  { type: 'single', section: "三角", text: "若 cos x = √3/2 且 0° < x < 90°，則 x = ?（度） #2136696655-120", options: ["60","30","90","45"], answer: 1, explanation: "cos 30° = √3/2，故 x = 30°。" },

  { type: 'single', section: "向量", text: "向量 a = (5, 1)，則 |a| = ? #2136696655-121", options: ["5","4","6","6"], answer: 0, explanation: "|a| = √(5²+1²) = 5。" },

  { type: 'single', section: "機率", text: "袋中有紅球 2 顆、白球 3 顆，隨機取 1 顆，取到紅球的機率為何？ #2136696655-122", options: ["1/5","2/3","3/5","2/5"], answer: 3, explanation: "P(紅) = 2/(2+3) = 2/5。" },

  { type: 'single', section: "指數與對數", text: "若 2^(2x-1) = 128，則 x = ? #2136696655-123", options: ["3","6","4","5"], answer: 2, explanation: "2^(2x-1)=2^7，故 2x-1=7，x=4。" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 3 項為何？ #2136696655-124", options: ["2","4","6","5"], answer: 1, explanation: "a_3 = 1×2^2 = 4。" },

  { type: 'single', section: "二次函數", text: "f(x) = x² - 6x + 7 的最小值為何？ #2136696655-125", options: ["-2","-1","1","7"], answer: 0, explanation: "配方得 f(x)=(x-3)²+-2，最小值為 -2。" },

  { type: 'single', section: "排列組合", text: "4 個不同物品排成一列，共有幾種排法？ #2136696655-126", options: ["28","12","20","24"], answer: 3, explanation: "4! = 24。" },

  { type: 'single', section: "統計", text: "資料 8、7、12、12 的平均數為何？ #2136696655-127", options: ["12","8","10","11"], answer: 2, explanation: "平均 = (8+7+12+12)/4 = 10。" },

  { type: 'single', section: "指數與對數", text: "log_10 10000 = ? #2136696655-128", options: ["5","4","3","8"], answer: 1, explanation: "因 10^4=10000，故 log_1010000=4。" },

  { type: 'single', section: "三角", text: "已知 sin θ = 8/17，且 θ 為第一象限角，則 cos θ = ? #2136696655-129", options: ["15/17","8/17","8/15","17/15"], answer: 0, explanation: "cos θ = √(1-sin²θ) = 15/17。" },

  { type: 'single', section: "圓", text: "圓 x² + y² = 16 的半徑為何？ #2136696655-130", options: ["16","5","8","4"], answer: 3, explanation: "x²+y²=r²，半徑 r=4。" },

  { type: 'single', section: "排列組合", text: "從 8 人中選 2 人組成隊伍，有幾種選法？ #2136696655-131", options: ["10","16","28","36"], answer: 2, explanation: "C(8,2) = 28。" },

  { type: 'single', section: "指數與對數", text: "化簡 2^1 = ? #2136696655-132", options: ["2","2","1","4"], answer: 1, explanation: "2^1 = 2。" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 4，第 5 項為何？ #2136696655-133", options: ["17","21","21","13"], answer: 0, explanation: "a_5 = 1 + (5-1)×4 = 17。" },

  { type: 'single', section: "三角", text: "若 cos x = √3/2 且 0° < x < 90°，則 x = ?（度） #2136696655-134", options: ["60","45","90","30"], answer: 3, explanation: "cos 30° = √3/2，故 x = 30°。" },

  { type: 'single', section: "向量", text: "向量 a = (5, 1)，則 |a| = ? #2136696655-135", options: ["4","6","5","6"], answer: 2, explanation: "|a| = √(5²+1²) = 5。" },

  { type: 'single', section: "機率", text: "袋中有紅球 2 顆、白球 2 顆，隨機取 1 顆，取到紅球的機率為何？ #2136696655-136", options: ["2/4","2/4","1/4","2/2"], answer: 1, explanation: "P(紅) = 2/(2+2) = 2/4。" },

  { type: 'single', section: "指數與對數", text: "若 3^(2x-1) = 27，則 x = ? #2136696655-137", options: ["2","4","3","1"], answer: 0, explanation: "3^(2x-1)=3^3，故 2x-1=3，x=2。" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 3 項為何？ #2136696655-138", options: ["5","2","6","4"], answer: 3, explanation: "a_3 = 1×2^2 = 4。" },

  { type: 'single', section: "二次函數", text: "f(x) = x² - 12x + 36 的最小值為何？ #2136696655-139", options: ["1","6","0","36"], answer: 2, explanation: "配方得 f(x)=(x-6)²+0，最小值為 0。" },

  { type: 'single', section: "排列組合", text: "4 個不同物品排成一列，共有幾種排法？ #2136696655-140", options: ["12","24","28","20"], answer: 1, explanation: "4! = 24。" },

  { type: 'single', section: "統計", text: "資料 4、8、8、13 的平均數為何？ #2136696655-141", options: ["8","10","6","9"], answer: 0, explanation: "平均 = (4+8+8+13)/4 = 8。" },

  { type: 'single', section: "指數與對數", text: "log_10 10000 = ? #2136696655-142", options: ["5","3","8","4"], answer: 3, explanation: "因 10^4=10000，故 log_1010000=4。" },

  { type: 'single', section: "三角", text: "已知 sin θ = 5/13，且 θ 為第一象限角，則 cos θ = ? #2136696655-143", options: ["5/13","13/12","12/13","5/12"], answer: 2, explanation: "cos θ = √(1-sin²θ) = 12/13。" },

  { type: 'single', section: "圓", text: "圓 x² + y² = 16 的半徑為何？ #2136696655-144", options: ["5","4","16","8"], answer: 1, explanation: "x²+y²=r²，半徑 r=4。" },

  { type: 'single', section: "排列組合", text: "從 6 人中選 2 人組成隊伍，有幾種選法？ #2136696655-145", options: ["15","21","12","8"], answer: 0, explanation: "C(6,2) = 15。" },

  { type: 'single', section: "指數與對數", text: "化簡 2^1 = ? #2136696655-146", options: ["1","4","2","2"], answer: 3, explanation: "2^1 = 2。" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 6，第 5 項為何？ #2136696655-147", options: ["19","31","25","31"], answer: 2, explanation: "a_5 = 1 + (5-1)×6 = 25。" },

  { type: 'single', section: "三角", text: "若 cos x = √3/2 且 0° < x < 90°，則 x = ?（度） #2136696655-148", options: ["60","30","45","90"], answer: 1, explanation: "cos 30° = √3/2，故 x = 30°。" },

  { type: 'single', section: "向量", text: "向量 a = (3, 1)，則 |a| = ? #2136696655-149", options: ["3","4","4","2"], answer: 0, explanation: "|a| = √(3²+1²) = 3。" },

  { type: 'single', section: "機率", text: "袋中有紅球 2 顆、白球 2 顆，隨機取 1 顆，取到紅球的機率為何？ #2136696655-150", options: ["2/4","2/2","1/4","2/4"], answer: 3, explanation: "P(紅) = 2/(2+2) = 2/4。" },

  { type: 'single', section: "指數與對數", text: "若 5^(2x-1) = 1953125，則 x = ? #2136696655-151", options: ["7","4","5","6"], answer: 2, explanation: "5^(2x-1)=5^9，故 2x-1=9，x=5。" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 3 項為何？ #2136696655-152", options: ["6","4","5","2"], answer: 1, explanation: "a_3 = 1×2^2 = 4。" },

  { type: 'single', section: "二次函數", text: "f(x) = x² - 12x + 37 的最小值為何？ #2136696655-153", options: ["1","2","37","7"], answer: 0, explanation: "配方得 f(x)=(x-6)²+1，最小值為 1。" },

  { type: 'single', section: "排列組合", text: "4 個不同物品排成一列，共有幾種排法？ #2136696655-154", options: ["28","20","12","24"], answer: 3, explanation: "4! = 24。" },

  { type: 'single', section: "統計", text: "資料 7、9、9、8 的平均數為何？ #2136696655-155", options: ["9","6","8","10"], answer: 2, explanation: "平均 = (7+9+9+8)/4 = 8。" },

  { type: 'single', section: "指數與對數", text: "log_10 1000 = ? #2136696655-156", options: ["2","3","6","4"], answer: 1, explanation: "因 10^3=1000，故 log_101000=3。" },

  { type: 'single', section: "三角", text: "已知 sin θ = 3/5，且 θ 為第一象限角，則 cos θ = ? #2136696655-157", options: ["4/5","3/4","5/4","3/5"], answer: 0, explanation: "cos θ = √(1-sin²θ) = 4/5。" },

  { type: 'single', section: "圓", text: "圓 x² + y² = 4 的半徑為何？ #2136696655-158", options: ["4","4","3","2"], answer: 3, explanation: "x²+y²=r²，半徑 r=2。" },

  { type: 'single', section: "排列組合", text: "從 7 人中選 2 人組成隊伍，有幾種選法？ #2136696655-159", options: ["9","14","21","28"], answer: 2, explanation: "C(7,2) = 21。" },

  { type: 'single', section: "指數與對數", text: "化簡 2^1 = ? #2136696655-160", options: ["2","2","1","4"], answer: 1, explanation: "2^1 = 2。" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 6，第 5 項為何？ #2136696655-161", options: ["25","31","19","31"], answer: 0, explanation: "a_5 = 1 + (5-1)×6 = 25。" },

  { type: 'single', section: "三角", text: "若 cos x = √3/2 且 0° < x < 90°，則 x = ?（度） #2136696655-162", options: ["90","45","60","30"], answer: 3, explanation: "cos 30° = √3/2，故 x = 30°。" },

  { type: 'single', section: "向量", text: "向量 a = (3, 1)，則 |a| = ? #2136696655-163", options: ["4","2","3","4"], answer: 2, explanation: "|a| = √(3²+1²) = 3。" },

  { type: 'single', section: "機率", text: "袋中有紅球 2 顆、白球 3 顆，隨機取 1 顆，取到紅球的機率為何？ #2136696655-164", options: ["3/5","2/5","2/3","1/5"], answer: 1, explanation: "P(紅) = 2/(2+3) = 2/5。" },

  { type: 'single', section: "指數與對數", text: "若 2^(2x-1) = 8，則 x = ? #2136696655-165", options: ["2","4","3","1"], answer: 0, explanation: "2^(2x-1)=2^3，故 2x-1=3，x=2。" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 3 項為何？ #2136696655-166", options: ["5","6","2","4"], answer: 3, explanation: "a_3 = 1×2^2 = 4。" },

  { type: 'single', section: "二次函數", text: "f(x) = x² - 4x + 9 的最小值為何？ #2136696655-167", options: ["6","7","5","9"], answer: 2, explanation: "配方得 f(x)=(x-2)²+5，最小值為 5。" },

  { type: 'single', section: "排列組合", text: "4 個不同物品排成一列，共有幾種排法？ #2136696655-168", options: ["28","24","12","20"], answer: 1, explanation: "4! = 24。" },

  { type: 'single', section: "統計", text: "資料 5、4、10、10 的平均數為何？ #2136696655-169", options: ["7","5","8","9"], answer: 0, explanation: "平均 = (5+4+10+10)/4 = 7。" },

  { type: 'single', section: "指數與對數", text: "log_3 81 = ? #2136696655-170", options: ["8","3","5","4"], answer: 3, explanation: "因 3^4=81，故 log_381=4。" },

  { type: 'single', section: "三角", text: "已知 sin θ = 5/13，且 θ 為第一象限角，則 cos θ = ? #2136696655-171", options: ["5/13","5/12","12/13","13/12"], answer: 2, explanation: "cos θ = √(1-sin²θ) = 12/13。" },

  { type: 'single', section: "圓", text: "圓 x² + y² = 4 的半徑為何？ #2136696655-172", options: ["4","2","3","4"], answer: 1, explanation: "x²+y²=r²，半徑 r=2。" },

  { type: 'single', section: "排列組合", text: "從 10 人中選 2 人組成隊伍，有幾種選法？ #2136696655-173", options: ["45","12","20","55"], answer: 0, explanation: "C(10,2) = 45。" },

  { type: 'single', section: "指數與對數", text: "化簡 2^1 = ? #2136696655-174", options: ["4","1","2","2"], answer: 3, explanation: "2^1 = 2。" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 2，第 5 項為何？ #2136696655-175", options: ["7","11","9","11"], answer: 2, explanation: "a_5 = 1 + (5-1)×2 = 9。" },

  { type: 'single', section: "三角", text: "若 cos x = √3/2 且 0° < x < 90°，則 x = ?（度） #2136696655-176", options: ["60","30","90","45"], answer: 1, explanation: "cos 30° = √3/2，故 x = 30°。" },

  { type: 'single', section: "向量", text: "向量 a = (1, 1)，則 |a| = ? #2136696655-177", options: ["1","0","2","2"], answer: 0, explanation: "|a| = √(1²+1²) = 1。" },

  { type: 'single', section: "機率", text: "袋中有紅球 2 顆、白球 4 顆，隨機取 1 顆，取到紅球的機率為何？ #2136696655-178", options: ["4/6","2/4","1/6","2/6"], answer: 3, explanation: "P(紅) = 2/(2+4) = 2/6。" },

  { type: 'single', section: "指數與對數", text: "若 5^(2x-1) = 78125，則 x = ? #2136696655-179", options: ["6","3","4","5"], answer: 2, explanation: "5^(2x-1)=5^7，故 2x-1=7，x=4。" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 3 項為何？ #2136696655-180", options: ["5","4","6","2"], answer: 1, explanation: "a_3 = 1×2^2 = 4。" },

  { type: 'single', section: "二次函數", text: "f(x) = x² - 10x + 29 的最小值為何？ #2136696655-181", options: ["4","29","9","5"], answer: 0, explanation: "配方得 f(x)=(x-5)²+4，最小值為 4。" },

  { type: 'single', section: "排列組合", text: "4 個不同物品排成一列，共有幾種排法？ #2136696655-182", options: ["20","12","28","24"], answer: 3, explanation: "4! = 24。" },

  { type: 'single', section: "統計", text: "資料 4、5、10、10 的平均數為何？ #2136696655-183", options: ["9","5","7","8"], answer: 2, explanation: "平均 = (4+5+10+10)/4 = 7。" },

  { type: 'single', section: "指數與對數", text: "log_10 1000 = ? #2136696655-184", options: ["6","3","2","4"], answer: 1, explanation: "因 10^3=1000，故 log_101000=3。" },

  { type: 'single', section: "三角", text: "已知 sin θ = 8/17，且 θ 為第一象限角，則 cos θ = ? #2136696655-185", options: ["15/17","8/17","17/15","8/15"], answer: 0, explanation: "cos θ = √(1-sin²θ) = 15/17。" },

  { type: 'single', section: "圓", text: "圓 x² + y² = 4 的半徑為何？ #2136696655-186", options: ["4","3","4","2"], answer: 3, explanation: "x²+y²=r²，半徑 r=2。" },

  { type: 'single', section: "排列組合", text: "從 8 人中選 2 人組成隊伍，有幾種選法？ #2136696655-187", options: ["36","10","28","16"], answer: 2, explanation: "C(8,2) = 28。" },

  { type: 'single', section: "指數與對數", text: "化簡 2^1 = ? #2136696655-188", options: ["1","2","2","4"], answer: 1, explanation: "2^1 = 2。" },

  { type: 'single', section: "數列", text: "等差數列首項 1，公差 4，第 5 項為何？ #2136696655-189", options: ["17","21","13","21"], answer: 0, explanation: "a_5 = 1 + (5-1)×4 = 17。" },

  { type: 'single', section: "三角", text: "若 cos x = √3/2 且 0° < x < 90°，則 x = ?（度） #2136696655-190", options: ["90","60","45","30"], answer: 3, explanation: "cos 30° = √3/2，故 x = 30°。" },

  { type: 'single', section: "向量", text: "向量 a = (1, 1)，則 |a| = ? #2136696655-191", options: ["2","2","1","0"], answer: 2, explanation: "|a| = √(1²+1²) = 1。" },

  { type: 'single', section: "機率", text: "袋中有紅球 2 顆、白球 2 顆，隨機取 1 顆，取到紅球的機率為何？ #2136696655-192", options: ["1/4","2/4","2/2","2/4"], answer: 1, explanation: "P(紅) = 2/(2+2) = 2/4。" },

  { type: 'single', section: "指數與對數", text: "若 5^(2x-1) = 125，則 x = ? #2136696655-193", options: ["2","4","3","1"], answer: 0, explanation: "5^(2x-1)=5^3，故 2x-1=3，x=2。" },

  { type: 'single', section: "數列", text: "等比數列首項 1，公比 2，第 3 項為何？ #2136696655-194", options: ["6","2","5","4"], answer: 3, explanation: "a_3 = 1×2^2 = 4。" },

  { type: 'single', section: "二次函數", text: "f(x) = x² - 8x + 13 的最小值為何？ #2136696655-195", options: ["-2","1","-3","13"], answer: 2, explanation: "配方得 f(x)=(x-4)²+-3，最小值為 -3。" },

  { type: 'single', section: "排列組合", text: "4 個不同物品排成一列，共有幾種排法？ #2136696655-196", options: ["28","24","12","20"], answer: 1, explanation: "4! = 24。" },

  { type: 'single', section: "統計", text: "資料 3、6、12、13 的平均數為何？ #2136696655-197", options: ["9","10","7","11"], answer: 0, explanation: "平均 = (3+6+12+13)/4 = 9。" }
];
