window.QuestionBanks = window.QuestionBanks || {};
window.QuestionBanks.math = [
  // ===== 代數 =====
  { type: 'single', section: '代數', text: '若 x + 5 = 12，則 x = ?', options: ['5', '6', '7', '8'], answer: 2, explanation: 'x = 12 - 5 = 7。' },
  { type: 'single', section: '代數', text: '化簡 3x + 2x - x = ?', options: ['3x', '4x', '5x', '6x'], answer: 1, explanation: '3x + 2x - x = 4x。' },
  { type: 'single', section: '代數', text: '若 2x - 3 = 7，則 x = ?', options: ['3', '4', '5', '6'], answer: 2, explanation: '2x = 10，x = 5。' },
  { type: 'single', section: '代數', text: '展開 (x + 2)(x + 3) = ?', options: ['x² + 5x + 6', 'x² + 6x + 5', 'x² + 5x + 5', 'x² + 6x + 6'], answer: 0, explanation: '(x+2)(x+3) = x² + 3x + 2x + 6 = x² + 5x + 6。' },
  { type: 'single', section: '代數', text: '因式分解 x² - 9 = ?', options: ['(x+3)(x-3)', '(x+9)(x-9)', '(x+3)²', '(x-3)²'], answer: 0, explanation: 'x² - 9 = (x+3)(x-3)，平方差公式。' },
  { type: 'single', section: '代數', text: '若 y = 2x + 1，當 x = 3 時，y = ?', options: ['5', '6', '7', '8'], answer: 2, explanation: 'y = 2×3 + 1 = 7。' },
  { type: 'single', section: '代數', text: '解一元一次方程式 5x = 15，x = ?', options: ['2', '3', '4', '5'], answer: 1, explanation: 'x = 15 ÷ 5 = 3。' },
  { type: 'single', section: '代數', text: '若 a:b = 2:3，且 a = 8，則 b = ?', options: ['10', '12', '14', '16'], answer: 1, explanation: '8:b = 2:3，b = 8×3÷2 = 12。' },
  { type: 'single', section: '代數', text: '化簡 √48 = ?', options: ['4√3', '6√2', '2√12', '8√3'], answer: 0, explanation: '√48 = √(16×3) = 4√3。' },
  { type: 'single', section: '代數', text: '若 x² = 16，則 x = ?', options: ['4', '-4', '±4', '8'], answer: 2, explanation: 'x² = 16，x = ±4。' },
  { type: 'single', section: '代數', text: '某數的 3 倍減 5 等於 16，此數為何？', options: ['5', '6', '7', '8'], answer: 2, explanation: '3x - 5 = 16，3x = 21，x = 7。' },
  { type: 'single', section: '代數', text: '化簡 (2x²)³ = ?', options: ['6x⁶', '8x⁶', '6x⁵', '8x⁵'], answer: 1, explanation: '(2x²)³ = 8x⁶。' },

  // ===== 幾何 =====
  { type: 'single', section: '幾何', text: '三角形內角和為多少度？', options: ['90°', '180°', '270°', '360°'], answer: 1, explanation: '三角形內角和為 180°。' },
  { type: 'single', section: '幾何', text: '正方形的對角線互相？', options: ['平行', '垂直且平分', '不相交', '長度不等'], answer: 1, explanation: '正方形對角線互相垂直平分。' },
  { type: 'single', section: '幾何', text: '圓周長公式為？（r 為半徑）', options: ['πr', '2πr', 'πr²', '4πr'], answer: 1, explanation: '圓周長 C = 2πr。' },
  { type: 'single', section: '幾何', text: '底為 6、高為 4 的三角形面積為？', options: ['10', '12', '14', '24'], answer: 1, explanation: '面積 = ½ × 6 × 4 = 12。' },
  { type: 'single', section: '幾何', text: '兩平行線被一橫截線所截，同位角關係為？', options: ['相等', '互補', '互餘', '無關係'], answer: 0, explanation: '平行線同位角相等。' },
  { type: 'single', section: '幾何', text: '長 5、寬 3 的長方形面積為？', options: ['8', '15', '16', '30'], answer: 1, explanation: '面積 = 5 × 3 = 15。' },
  { type: 'single', section: '幾何', text: '直角三角形兩股長 3、4，斜邊長為？', options: ['5', '6', '7', '8'], answer: 0, explanation: '勾股定理：√(3²+4²) = 5。' },
  { type: 'single', section: '幾何', text: '半徑為 3 的圓面積為？（π 取 3.14）', options: ['9.42', '18.84', '28.26', '37.68'], answer: 2, explanation: '面積 = πr² = 3.14 × 9 = 28.26。' },
  { type: 'single', section: '幾何', text: '正六邊形可分割成幾個正三角形？', options: ['4', '5', '6', '8'], answer: 2, explanation: '正六邊形可分割成 6 個正三角形。' },
  { type: 'single', section: '幾何', text: '等腰三角形兩底角有何關係？', options: ['相等', '互補', '互餘', '無關係'], answer: 0, explanation: '等腰三角形兩底角相等。' },
  { type: 'single', section: '幾何', text: '立方體邊長 2，體積為？', options: ['4', '6', '8', '12'], answer: 2, explanation: '體積 = 2³ = 8。' },
  { type: 'single', section: '幾何', text: '梯形上底 3、下底 7、高 4，面積為？', options: ['16', '18', '20', '24'], answer: 2, explanation: '面積 = ½(3+7)×4 = 20。' },

  // ===== 統計 =====
  { type: 'single', section: '統計', text: '數據 2, 4, 4, 6, 8 的中位數為？', options: ['4', '5', '6', '8'], answer: 0, explanation: '排序後中間值為 4。' },
  { type: 'single', section: '統計', text: '數據 3, 5, 5, 5, 7 的眾數為？', options: ['3', '5', '7', '5 和 7'], answer: 1, explanation: '出現次數最多的是 5。' },
  { type: 'single', section: '統計', text: '數據 2, 4, 6 的平均數為？', options: ['3', '4', '5', '6'], answer: 1, explanation: '(2+4+6)÷3 = 4。' },
  { type: 'single', section: '統計', text: '擲一公正骰子，出現偶數的機率為？', options: ['1/6', '1/3', '1/2', '2/3'], answer: 2, explanation: '偶數 2,4,6 共 3 種，機率 3/6 = 1/2。' },
  { type: 'single', section: '統計', text: '某班 30 人中 12 人戴眼鏡，戴眼鏡比例為？', options: ['30%', '40%', '50%', '60%'], answer: 1, explanation: '12÷30 = 0.4 = 40%。' },
  { type: 'single', section: '統計', text: '全距 = 最大值 - 最小值，數據 5, 8, 3, 10, 6 的全距為？', options: ['5', '6', '7', '8'], answer: 2, explanation: '10 - 3 = 7。' },
  { type: 'single', section: '統計', text: '袋中有 3 紅 2 藍球，隨機取一球為紅球的機率？', options: ['2/5', '3/5', '1/2', '3/10'], answer: 1, explanation: '3/(3+2) = 3/5。' },
  { type: 'single', section: '統計', text: '莖葉圖中，莖 2、葉 3,5,7 表示的數據不包括？', options: ['23', '25', '27', '32'], answer: 3, explanation: '莖 2 表示 20 幾，不含 32。' },
  { type: 'single', section: '統計', text: '某次考試平均 75 分，小華 80 分，他的得分與平均差為？', options: ['+5', '-5', '+80', '-75'], answer: 0, explanation: '80 - 75 = +5。' },
  { type: 'single', section: '統計', text: '擲兩枚硬幣，至少一正面機率為？', options: ['1/4', '1/2', '3/4', '1'], answer: 2, explanation: '至少一正：3/4（正正、正反、反正）。' },
  { type: 'single', section: '統計', text: '長條圖主要用來表示？', options: ['數據的分布與比較', '趨勢變化', '比例關係', '因果關係'], answer: 0, explanation: '長條圖用於比較各類別數量。' },

  // ===== 非選擇題 =====
  {
    type: 'non-choice', section: '非選擇題',
    text: '小華有若干元，買 3 本筆記本後剩下 24 元；若買 5 本筆記本則剩下 8 元。請問每本筆記本多少元？小華原本有多少元？',
    answerText: '<p>設每本筆記本 x 元，小華原有 y 元。</p><p>3x + 24 = y ……①</p><p>5x + 8 = y ……②</p><p>① - ②：-2x + 16 = 0，x = 8</p><p>代入①：y = 3×8 + 24 = 48</p><p>答：每本筆記本 8 元，小華原本有 48 元。</p>',
    explanation: '設未知數列二元一次方程式求解。'
  },
  {
    type: 'non-choice', section: '非選擇題',
    text: '如圖，△ABC 中，∠A = 50°，∠B = 70°，求 ∠C 的度數。並說明理由。',
    answerText: '<p>∠A + ∠B + ∠C = 180°（三角形內角和）</p><p>50° + 70° + ∠C = 180°</p><p>∠C = 180° - 120° = 60°</p><p>答：∠C = 60°，因三角形內角和為 180°。</p>',
    explanation: '利用三角形內角和定理。'
  },
  {
    type: 'non-choice', section: '非選擇題',
    text: '因式分解 x² + 6x + 9。',
    answerText: '<p>x² + 6x + 9</p><p>= x² + 2·x·3 + 3²</p><p>= (x + 3)²</p><p>答：(x + 3)²</p>',
    explanation: '完全平方公式 a² + 2ab + b² = (a+b)²。'
  },
  {
    type: 'non-choice', section: '非選擇題',
    text: '某班 40 人數學成績如下：60分 5人、70分 10人、80分 15人、90分 10人。求此班數學成績的平均數。',
    answerText: '<p>總分 = 60×5 + 70×10 + 80×15 + 90×10</p><p>= 300 + 700 + 1200 + 900 = 3100</p><p>平均數 = 3100 ÷ 40 = 77.5</p><p>答：平均數為 77.5 分。</p>',
    explanation: '加權平均：總分÷總人數。'
  },
  {
    type: 'non-choice', section: '非選擇題',
    text: '長方形長 12 公分、寬 8 公分，求其周長與面積。',
    answerText: '<p>周長 = 2×(12+8) = 2×20 = 40（公分）</p><p>面積 = 12×8 = 96（平方公分）</p><p>答：周長 40 公分，面積 96 平方公分。</p>',
    explanation: '長方形周長 = 2(長+寬)，面積 = 長×寬。'
  },
  {
    type: 'non-choice', section: '非選擇題',
    text: '解一元一次方程式：3(x - 2) = 2x + 4。',
    answerText: '<p>3(x - 2) = 2x + 4</p><p>3x - 6 = 2x + 4</p><p>3x - 2x = 4 + 6</p><p>x = 10</p><p>答：x = 10</p>',
    explanation: '先去括號再移項合併。'
  },
  {
    type: 'non-choice', section: '非選擇題',
    text: '直角三角形兩股長分別為 5 公分、12 公分，求斜邊長。',
    answerText: '<p>設斜邊為 c，由勾股定理：</p><p>c² = 5² + 12² = 25 + 144 = 169</p><p>c = √169 = 13</p><p>答：斜邊長 13 公分。</p>',
    explanation: '勾股定理 a² + b² = c²。'
  },
  {
    type: 'non-choice', section: '非選擇題',
    text: '袋中有 4 個紅球、3 個白球，隨機取出 2 球（不放回），求兩球皆為紅球的機率。',
    answerText: '<p>總取法：C(7,2) = 21</p><p>兩紅取法：C(4,2) = 6</p><p>機率 = 6/21 = 2/7</p><p>答：機率為 2/7。</p>',
    explanation: '組合數計算不放回取樣機率。'
  }
];
