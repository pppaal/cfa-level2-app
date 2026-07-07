# CFA Level 2 Study App (2026)

Single-page web app for CFA Level 2 exam prep. No build step — open `index.html` in any browser.

## Features

**📚 Flashcards** — 435 cards across all 10 topics, organized by module
- Click / `Space` to flip
- `←` `→` to navigate
- `K` mark as known, `D` don't know
- `S` shuffle
- Filter: all / unknown only / known only
- Progress saved in `localStorage`
- Dark / light theme

**📝 Exam Practice** — 22 item sets, ~110 original practice questions in CFA vignette + MCQ format
- Read vignette → answer A/B/C → instant feedback + detailed explanation
- Score tracked per item set
- All calculations Python-verified

**🧮 Regression Lab** — interactive Simple vs. Multiple linear regression demo (Quant)
- Toggle between a simple (1-variable) and multiple (2-variable) model
- Drag sliders for the independent variables and watch the least-squares equation, coefficient interpretation, and predicted value update live
- Illustrates partial slope coefficients (holding other variables constant) and why coefficients change when a correlated variable is added
- Settings persist in `localStorage`

## Topics (2026 curriculum)

| Topic | Cards | Item sets |
|---|---|---|
| Ethics & GIPS | 42 | 2 |
| Quantitative Methods | 45 | 3 |
| Economics | 33 | 2 |
| Financial Statement Analysis | 54 | 3 |
| Corporate Issuers | 27 | 1 |
| Equity Valuation | 65 | 3 |
| Fixed Income | 54 | 2 |
| Derivatives | 34 | 2 |
| Alternative Investments | 36 | 2 |
| Portfolio Management | 45 | 2 |

## Files

- `index.html` — UI + logic + CSS (single file)
- `cards.js` — flashcard data
- `exams.js` — item set practice questions + explanations

## Usage

Open `index.html` directly in a browser. All progress persists via `localStorage`. No server required.

## Disclaimer

All content is original, written in the CFA exam style but **not reproduced from CFA Institute exams** (which are copyrighted). Use alongside official CFA curriculum materials. CFA® and Chartered Financial Analyst® are trademarks of CFA Institute.
