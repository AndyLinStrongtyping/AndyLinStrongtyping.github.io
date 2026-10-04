const skills = {
  backend: ['UNLOCKED / 已實作', 'Backend', 'Node.js、Express、REST API、JWT、Catalog API 與搜尋。', 'node-js-final-2026', 'FitConnect API 與測試'],
  data: ['UNLOCKED / 已實作', 'Data', 'PostgreSQL、TypeORM、關聯資料模型、migration 與 seeder。資料庫模型來自課程延伸練習；FitConnect 另展示預約交易與 pessimistic lock。', 'node-js-week8-2026', '課程延伸練習的資料模型、migration 與測試'],
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
  if (button.dataset.skill === 'data') {
    const heading = document.createElement('h4'); heading.textContent = '直接查看資料庫實作'; panel.append(heading);
    const list = document.createElement('ul'); list.className = 'evidence-links';
    const proofs = [
      ['關聯模型：Course 對 User / Skill 的 foreign key', 'https://github.com/AndyLinStrongtyping/node-js-week8-2026/blob/main/livefit/entities/course.js'],
      ['Schema 版本：migration 的 up / down', 'https://github.com/AndyLinStrongtyping/node-js-week8-2026/blob/main/livefit/db/migrations/1785567756575-FixColumns.js'],
      ['測試資料：可重複執行的 seeder', 'https://github.com/AndyLinStrongtyping/node-js-week8-2026/blob/main/livefit/db/seed.js'],
      ['整合測試：constraint、FK、JOIN 與重跑 seed', 'https://github.com/AndyLinStrongtyping/node-js-week8-2026/blob/main/livefit/test/spec.test.js'],
      ['實際應用：FitConnect 預約交易與 pessimistic lock', 'https://github.com/AndyLinStrongtyping/node-js-final-2026/blob/main/backend/services/booking-service.js'],
      ['驗證紀錄：PostgreSQL 兩組自動測試通過', 'https://github.com/AndyLinStrongtyping/node-js-week8-2026/actions/runs/37167410600']
    ];
    for (const [label, href] of proofs) {
      const item = document.createElement('li'); const anchor = document.createElement('a');
      anchor.href = href; anchor.textContent = label + ' ↗'; item.append(anchor); list.append(item);
    }
    panel.append(list);
  }
}));
document.getElementById('print').addEventListener('click', () => window.print());
let printState = [];
window.addEventListener('beforeprint', () => { printState = [...document.querySelectorAll('details')].map(item => item.open); document.querySelectorAll('details').forEach(item => item.open = true); });
window.addEventListener('afterprint', () => document.querySelectorAll('details').forEach((item, index) => item.open = printState[index]));
