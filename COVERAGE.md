# Coverage Tracker — CFA Level II (2026)

_Last updated: 2026-07-07_

This document tracks how much of the 2026 CFA Level II curriculum the study app
covers, so we can see what is filled in and what still needs work.

---

## 1. Curriculum at a glance (2026 — official)

- **10 topic areas**, **45 learning modules** total.
- 2026 is **unchanged vs. 2025 except one LOS removed** in Quantitative Methods.
- The Level II exam is **item-set (vignette) based**.

### Topic weights & structure

| # | Topic | 2026 exam weight | App module-groups | Curriculum LOS* |
|---|-------|:---:|:---:|:---:|
| 1 | Ethical & Professional Standards | 5–10% | 10 | _verify_ |
| 2 | Quantitative Methods | 5–10% | 7 | _verify_ |
| 3 | Economics | 5–10% | 3 | _verify_ |
| 4 | Financial Statement Analysis | 10–15% | 6 | _verify_ |
| 5 | Corporate Issuers | 5–10% | 4 | _verify_ |
| 6 | Equity Valuation | 10–15% | 8 | _verify_ |
| 7 | Fixed Income | 10–15% | 6 | _verify_ |
| 8 | Derivatives | 5–10% | 2 | _verify_ |
| 9 | Alternative Investments | 5–10% | 4 | _verify_ |
| 10 | Portfolio Management | 10–15% | 8 | _verify_ |
| | **Total** | **100%** | **58** | **~150–200 (est.)** |

> **\*LOS note (honesty flag).** The exact number of Learning Outcome Statements
> per topic is published by CFA Institute in the **2026 Level II Topic Outlines**
> (see Sources). Those pages block automated fetching, so the precise per-topic
> LOS counts are **not yet reproduced here** — the "Curriculum LOS" column is
> left as _verify_ on purpose rather than filled with guessed numbers. As an
> order-of-magnitude anchor: 45 modules × ~3–5 LOS each ≈ **150–200 LOS** total.
> Drop the official numbers into the column once confirmed from the source PDF.
>
> Also note: the **App module-groups** column is *our* organizational grouping
> (the `m:` field in `cards.js`), not the official module list. It matches the
> curriculum closely for most topics (e.g., Quant = 7), but Ethics is split by
> Standard (10 groups) where the curriculum groups it more coarsely — so 58 ≠ 45.

---

## 2. App content inventory (auto-counted)

Counted directly from `cards.js` and `exams.js` (see §5 to refresh).

| Topic | Flashcards | Module-groups | Item sets | Questions |
|-------|:---:|:---:|:---:|:---:|
| Ethics & GIPS | 42 | 10 | 2 | 9 |
| Quantitative Methods | 50 | 7 | 4 | 19 |
| Economics | 33 | 3 | 2 | 8 |
| Financial Statement Analysis | 54 | 6 | 3 | 15 |
| Corporate Issuers | 27 | 4 | 1 | 5 |
| Equity Valuation | 65 | 8 | 3 | 13 |
| Fixed Income | 54 | 6 | 2 | 10 |
| Derivatives | 34 | 2 | 2 | 9 |
| Alternative Investments | 36 | 4 | 2 | 9 |
| Portfolio Management | 45 | 8 | 2 | 10 |
| **Total** | **440** | **58** | **23** | **107** |

Plus **2 interactive tools** (under the 🧪 Interactive tab), both Quant:
Regression Lab and ML Pipeline Builder.

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
