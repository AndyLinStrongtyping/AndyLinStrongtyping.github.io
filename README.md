# Andy Lin — Backend portfolio

正式網站：https://AndyLinStrongtyping.github.io/

純 HTML／CSS／JavaScript 的個人作品集，以持續升級的 RPG 介面呈現作品與個人責任。目前求職方向為 Junior Backend／API 開發；AMHS STK 現場排錯、Log 分析、搬送訊號判讀及主機／版本處理是既有工作經驗，與 MCS 端為電話協作。Cloud／Platform 是下一階段學習方向，不列為已完成技能。

## 網站結構

- `index.html`：頁面內容
- `portfolio.css`：樣式與響應式版面
- `portfolio.js`：作品說明與技能樹互動
- `assets/`：目前網站使用的兩張圖片
- `preview.cjs`：本機預覽工具
- `.github/workflows/pages.yml`：GitHub Pages 發布流程

## 本機預覽

執行 `node preview.cjs`，開啟 http://localhost:4173。

## 發布

推送到預設分支後，GitHub Actions 僅封裝 `index.html`、`portfolio.css`、`portfolio.js` 與 `assets/`，再發布到 GitHub Pages；也可以手動觸發。網站原始碼位於 AndyLinStrongtyping 帳號。舊版練習檔已從此網站倉庫移除，仍可從 Git 歷史追溯。
