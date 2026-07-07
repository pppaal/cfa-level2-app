# Coverage Tracker — CFA Level II (2026)

_Last updated: 2026-07-07_

This document tracks how much of the 2026 CFA Level II curriculum the study app
covers, so we can see what is filled in and what still needs work.

> 📋 The **full topic → module → LOS outline for all 10 subjects** lives in
> [`LOS.md`](./LOS.md), with a per-LOS coverage marker (✅ / 🟡 / ⬜).

---

## 1. Curriculum at a glance (2026 — official)

- **10 topic areas**, **45 learning modules**, **370 Learning Outcome Statements (LOS)** total.
- 2026 is **unchanged vs. 2025 except one LOS removed** in Quantitative Methods.
- The Level II exam is **item-set (vignette) based**.
- Counts below are parsed from the official **CFA Institute _2026 Level II Topic
  Outlines_** PDF. The full verbatim LOS list with per-module coverage is in [`LOS.md`](./LOS.md).

### Topic weights & structure (official)

| # | Topic | 2026 exam weight | Modules | LOS | ✅ modules |
|---|-------|:---:|:---:|:---:|:---:|
| 1 | Quantitative Methods | 5–10% | 7 | 39 | 5/7 |
| 2 | Economics | 5–10% | 2 | 25 | 2/2 |
| 3 | Financial Statement Analysis | 10–15% | 6 | 42 | 3/6 |
| 4 | Corporate Issuers | 5–10% | 4 | 31 | 1/4 |
| 5 | Equity Valuation | 10–15% | 6 | 75 | 3/6 |
| 6 | Fixed Income | 10–15% | 5 | 50 | 2/5 |
| 7 | Derivatives | 5–10% | 2 | 21 | 2/2 |
| 8 | Alternative Investments | 5–10% | 4 | 29 | 1/4 |
| 9 | Portfolio Management | 10–15% | 6 | 52 | 2/6 |
| 10 | Ethical & Professional Standards | 5–10% | 3 | 6 | 3/3 |
| | **Total** | **100%** | **45** | **370** | **24/45** |

> **Coverage:** all **45/45** official modules have baseline flashcard coverage;
> **24/45** also have item-set questions and/or an interactive tool (the "✅ modules"
> column). Marks are tracked at **module** granularity in `LOS.md`.
>
> **Heads-up — app has some off-syllabus groups.** A few `cards.js` module-groups
> are **not** 2026 L2 modules: Economics of Regulation, Equity "Return Concepts" &
> "Industry & Company Analysis", Fixed Income "MBS & ABS", Alternatives "Private
> Equity", PM "Trading Costs" & "Professionalism", and Ethics "GIPS". They reflect
> older curricula/adjacent material — review, retire, or re-map. (This is why the
> app shows 58 module-groups vs. the official 45.)

---

## 2. App content inventory (auto-counted)

Counted directly from `cards.js` and `exams.js` (see §5 to refresh).

| Topic | Flashcards | Module-groups | Item sets | Questions |
|-------|:---:|:---:|:---:|:---:|
| Ethics & GIPS | 42 | 10 | 2 | 9 |
| Quantitative Methods | 56 | 7 | 5 | 25 |
| Economics | 33 | 3 | 2 | 8 |
| Financial Statement Analysis | 54 | 6 | 3 | 15 |
| Corporate Issuers | 27 | 4 | 1 | 5 |
| Equity Valuation | 65 | 8 | 3 | 13 |
| Fixed Income | 54 | 6 | 2 | 10 |
| Derivatives | 34 | 2 | 2 | 9 |
| Alternative Investments | 36 | 4 | 2 | 9 |
| Portfolio Management | 45 | 8 | 2 | 10 |
| **Total** | **446** | **58** | **24** | **113** |

Plus **3 interactive tools** (under the 🧪 Interactive tab), all Quant:
Regression Lab, ML Pipeline Builder, and Data-Exploration Sorter.

---

## 3. LOS-level progress log (purpose-built lessons)

These are the lessons that have been mapped to specific LOS with dedicated
content (flashcards + item-set questions + an interactive tool).

### Quantitative Methods → Basics of Multiple Regression
- **LOS [a]** formulate a multiple regression model — Regression Lab (equation), flashcards
- **LOS [b]** interpret the estimated (partial-slope) coefficients — Regression Lab, flashcards, exam Q3 (4 questions)
- **LOS [f]** calculate the predicted value of the dependent variable — Regression Lab, exam Q3 (1 question)

### Quantitative Methods → Big Data Projects
- Big Data definition & sources (traditional vs. non-traditional) — flashcards, exam Q4
- The "V"s (Volume, Velocity, Variety, Veracity) — flashcards, exam Q4
- Variety: structured / semi-structured / unstructured — flashcards, exam Q4
- Structured vs. unstructured (text) ML workflow — flashcards, ML Pipeline Builder, exam Q4
- Structured-vs-text forecasting & hybrid model — flashcards, exam Q4

---

## 4. Gaps / TODO

- **Item-set thin spots:** Corporate Issuers has only 1 set (weight up to 10%);
  Economics, Derivatives, Alternatives, Fixed Income, Portfolio Management have 2.
- **Exam questions:** continue adding vignette item sets, prioritizing the
  higher-weight topics (FSA, Equity, Fixed Income, Portfolio Management at 10–15%).
- **LOS enumeration:** fill the "Curriculum LOS" column in §1 from the official
  2026 Topic Outlines, then compute a true covered/total LOS %.

---

## 5. How to refresh these numbers

Run from the repo root to regenerate the §2 inventory:

```bash
node -e '
const fs=require("fs"),vm=require("vm");
const s=fs.readFileSync("cards.js","utf8")+"\n"+fs.readFileSync("exams.js","utf8")+`
;(function(){let tc=0,ts=0,tq=0;for(const t of TOPICS){
  const c=CARDS[t.id]||[],m=[...new Set(c.map(x=>x.m))],
  e=(EXAMS_BY_TOPIC[t.id]||[]),q=e.reduce((a,b)=>a+b.questions.length,0);
  tc+=c.length;ts+=e.length;tq+=q;
  console.log(t.name+" | "+c.length+" cards | "+m.length+" modules | "+e.length+" sets | "+q+" Qs");}
  console.log("TOTAL | "+tc+" cards | "+ts+" sets | "+tq+" Qs");})();`;
vm.runInThisContext(s);'
```

---

## Sources

- [CFA® Program Level II exam — CFA Institute](https://www.cfainstitute.org/programs/cfa-program/candidate-resources/level-ii-exam)
- [2026 Level II Topic Outlines (Learning Outcomes) — CFA Institute PDF](https://www.cfainstitute.org/sites/default/files/docs/programs/cfa-program/2026-l2-topics-combined.pdf)
- [CFA Curriculum Changes 2026 — 300Hours](https://300hours.com/cfa-curriculum-changes-2026/)
- [Level 2 CFA Exam Topics — SOLEADEA](https://soleadea.org/cfa-level-2/topics)

_Curriculum facts (10 topics, 45 learning modules, "unchanged vs 2025 except 1
LOS removed in Quant", topic weight ranges) are from the sources above.
App inventory numbers are computed from this repository._
