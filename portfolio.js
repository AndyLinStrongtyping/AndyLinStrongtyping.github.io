const skills = {
  backend: ['UNLOCKED / 已實作', 'Backend', 'Node.js、Express、REST API、JWT、Catalog API 與搜尋。', 'node-js-final-2026', 'FitConnect API 與測試'],
  data: ['UNLOCKED / 已實作', 'Data', 'PostgreSQL、TypeORM、預約交易與 pessimistic lock，關注併發下的資料一致性。', 'node-js-final-2026', 'FitConnect 交易與資料存取'],
  delivery: ['UNLOCKED / 已實作', 'Delivery', 'Docker Compose、GitHub Actions、健康檢查 SHA 與 smoke test，讓環境與版本可追溯。', 'stellar-archive-backend', 'Stellar Backend 個人追加與 CI'],
  cloud: ['NEXT QUEST / 下一步學習', 'Cloud / Production', 'AWS、雲端部署與 observability 是下一階段的學習方向；目前不作為既有工作經驗或已完成技能。', null, null]
};
document.querySelectorAll('[data-skill]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-skill]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  const [status, title, description, repo, evidence] = skills[button.dataset.skill];
  const panel = document.getElementById('skill-panel');
  panel.replaceChildren();
  for (const [tag, value, className] of [['p', status, 'eyebrow'], ['h3', title, ''], ['p', description, '']]) {
    const element = document.createElement(tag); element.textContent = value; element.className = className; panel.append(element);
  }
  if (repo) { const link = document.createElement('a'); link.href = 'https://github.com/AndyLinStrongtyping/' + repo; link.textContent = '證據：' + evidence + ' ↗'; panel.append(link); }
}));
document.getElementById('print').addEventListener('click', () => window.print());
let printState = [];
window.addEventListener('beforeprint', () => { printState = [...document.querySelectorAll('details')].map(item => item.open); document.querySelectorAll('details').forEach(item => item.open = true); });
window.addEventListener('afterprint', () => document.querySelectorAll('details').forEach((item, index) => item.open = printState[index]));
