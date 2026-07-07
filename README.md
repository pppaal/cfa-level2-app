# CFA Level 2 Study App (2026)

Single-page web app for CFA Level 2 exam prep. No build step — open `index.html` in any browser.

## Features

**📚 Flashcards** — 461 cards across all 10 topics, organized by module
- Click / `Space` to flip
- `←` `→` to navigate
- `K` mark as known, `D` don't know
- `S` shuffle
- Filter: all / unknown only / known only
- Progress saved in `localStorage`
- Dark / light theme

**📝 Exam Practice** — 37 item sets, ~180 original practice questions in CFA vignette + MCQ format
- Read vignette → answer A/B/C → instant feedback + detailed explanation
- Score tracked per item set
- All calculations Python-verified

**🧪 Interactive** — hands-on Quant demos, organized by learning outcome

- *Regression Lab* — Simple vs. Multiple linear regression
  - Toggle between a simple (1-variable) and multiple (2-variable) model
  - Sliders for the independent variables update the least-squares equation, coefficient interpretation, and predicted value live
  - Split by LOS: [a] formulate the model, [b] interpret partial-slope coefficients, [f] calculate the predicted value
- *ML Pipeline Builder* — order the machine-learning workflow steps
  - Drag or click steps into the correct order for the structured-data and unstructured-text pipelines
  - Check answers with per-step ✓/✗ feedback and a score
- *Data-Exploration Sorter* — classify techniques into EDA / feature selection / feature engineering
  - Drag or tap each technique (histogram, chi-square, one-hot encoding, n-grams, …) into its category
  - Check answers with per-chip ✓/✗ feedback and a score
- Settings persist in `localStorage`

**📋 LOS Search** — search the official 2026 Level II Learning Outcome Statements
- All 370 verbatim LOS (10 topics, 45 modules), parsed from the CFA Institute 2026 Topic Outlines
- Live keyword search across LOS text, module, and topic names, with match highlighting
- Collapsible topic sections; each module shows a coverage badge (✓ covered / ~ flashcards / – not yet) mapping it to app content

## Topics (2026 curriculum)

| Topic | Cards | Item sets |
|---|---|---|
| Ethics & GIPS | 42 | 2 |
| Quantitative Methods | 71 | 18 |
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
- `los.js` — official 2026 Level II LOS (for LOS Search), with per-module coverage marks

## Usage

Open `index.html` directly in a browser. All progress persists via `localStorage`. No server required.

## Disclaimer

All content is original, written in the CFA exam style but **not reproduced from CFA Institute exams** (which are copyrighted). Use alongside official CFA curriculum materials. CFA® and Chartered Financial Analyst® are trademarks of CFA Institute.
