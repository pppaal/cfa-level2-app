// CFA Level 2 — Item Set (Vignette + MCQ) Practice Questions — 2026
// Format mirrors actual CFA exam: vignette + 4-6 MCQs.
// NOTE: These are original practice questions written in CFA exam style.
// They are NOT actual CFA Institute exam questions (copyrighted).

const EXAMS = [
  // =============================================================
  // ETHICS
  // =============================================================
  {
    id: "E1", topic: "ethics",
    title: "Analyst Independence & MNPI",
    vignette: `Sarah Chen, CFA, is a senior sell-side research analyst covering the semiconductor sector at Highland Securities. She recently initiated coverage on SiliconWave Corp. with a "Buy" rating and a $85 price target (current price: $72).

Three events occur during the quarter:

(1) SiliconWave's IR director invites Chen on an all-expenses-paid factory tour in Taiwan (estimated value: $8,500), saying "we'd love for you to see our new fab firsthand." Chen accepts without notifying her firm's compliance department.

(2) During a meeting with the CFO at the factory, the CFO mentions, "Between us, we're about to lose our largest customer — Dragon Electronics. It's not public yet. They're shifting to our competitor. This will materially affect next quarter's guidance." Chen doesn't trade but mentions in her next research note: "Channel checks suggest potential customer concentration risk at SiliconWave" and downgrades to "Hold."

(3) Chen's personal brokerage account holds SiliconWave shares purchased six months ago, before coverage initiation. She has not disclosed this to her employer.`,
    questions: [
      {
        q: "Chen's acceptance of the factory tour MOST likely violates which Standard?",
        c: ["A. Standard I(B) Independence and Objectivity only.",
            "B. Standard IV(A) Loyalty and Standard I(B) Independence and Objectivity.",
            "C. No standard — travel to issuer facilities is permitted."],
        a: 1,
        e: "B is correct. Accepting the $8,500 travel package from an issuer she covers creates a perceived or real conflict of independence (I(B)). Additionally, failing to disclose this to her employer violates IV(A) Loyalty to Employer — her firm's compliance must be notified of any benefits received from covered issuers. Modest token gifts are permitted; a $8,500 package is well beyond a token. Recommended: pay her own way when practical."
      },
      {
        q: "By incorporating the CFO's statement into her research note, Chen MOST likely:",
        c: ["A. Did not violate any Standard, because she did not trade on the information.",
            "B. Violated Standard II(A) Material Nonpublic Information.",
            "C. Complied with Standard V(A) because she had a reasonable basis for the downgrade."],
        a: 1,
        e: "B is correct. The CFO's statement about losing Dragon Electronics is both material (would affect price / reasonable investor) and nonpublic (not disseminated). Chen 'caused others to act' on MNPI by including the content — even phrased as 'channel checks' — in research distributed to clients. Whether she traded personally is irrelevant to II(A); the standard prohibits acting OR causing others to act on MNPI. Mosaic theory doesn't apply because the CFO's statement alone is material nonpublic."
      },
      {
        q: "Regarding Chen's personal SiliconWave holdings, she MUST:",
        c: ["A. Immediately sell the shares because research analysts cannot hold stocks they cover.",
            "B. Disclose the holding to her employer and clients, and give client transactions priority over any personal trades.",
            "C. Hold the shares for a minimum of one year after coverage initiation."],
        a: 1,
        e: "B is correct. Standard VI(A) Disclosure of Conflicts requires disclosing ownership interests to employer and to clients (in research). Standard VI(B) Priority of Transactions requires client trades come before personal. The CFA Standards don't prohibit analysts from holding covered stocks (firm policy may), nor impose mandatory holding periods."
      },
      {
        q: "To address the MNPI issue going forward, Chen's firm SHOULD implement all of the following EXCEPT:",
        c: ["A. Restricting Chen from publishing on SiliconWave until the information is publicly disclosed.",
            "B. Adding SiliconWave to the restricted trading list firm-wide.",
            "C. Having Chen confirm in writing that she will personally decide when information becomes 'public enough' to include in research."],
        a: 2,
        e: "C is correct because it is NOT an appropriate remedy — the determination of whether information is public cannot rest with the analyst who received the MNPI. A and B are appropriate firewall/restricted list controls. Information is 'public' only when widely disseminated (press release, earnings call, 8-K filing)."
      }
    ]
  },
  {
    id: "E2", topic: "ethics",
    title: "GIPS Compliance",
    vignette: `Pacific Capital Management (PCM) is a mid-sized U.S. asset manager claiming GIPS compliance. Its compliance report for the year 2025 includes the following elements:

• Firm definition: "Pacific Capital Management's Institutional Equity Division" (PCM also has a retail mutual fund division and a separate real estate PE arm, both excluded from the claim).
• Compliance statement: "PCM's Institutional Equity Division has prepared this report in compliance with the GIPS standards in all material respects."
• Composite: "U.S. Large-Cap Growth Composite" — includes 18 portfolios (14 fee-paying discretionary, 2 fee-paying non-discretionary, 2 non-fee-paying).
• Returns: Time-weighted monthly; presented gross-of-fees only.
• Track record: 3 years of compliant performance, 2023-2025; PCM started the composite in 2018.
• Verification: Not performed.`,
    questions: [
      {
        q: "PCM's firm definition is MOST likely:",
        c: ["A. Compliant with GIPS because a firm may define itself as any distinct division.",
            "B. Non-compliant because GIPS applies firm-wide to all investment management activities.",
            "C. Compliant only if the real estate PE arm is separately SEC-registered."],
        a: 1,
        e: "B is correct. GIPS compliance must be claimed on a firm-wide basis. The firm definition must capture ALL asset management activities under a common brand, marketing, or organizational structure — excluding the retail fund and real estate divisions to avoid showing them is not permitted if they are part of the same management entity. Only truly distinct business entities can be separately defined."
      },
      {
        q: "The composite construction is MOST likely non-compliant because:",
        c: ["A. The non-discretionary portfolios should not be included.",
            "B. Non-fee-paying portfolios cannot be included.",
            "C. 18 portfolios is below the minimum required composite size."],
        a: 0,
        e: "A is correct. Non-discretionary portfolios MUST be excluded from composites. Only fee-paying discretionary portfolios are required to be included; non-fee-paying may be included with appropriate disclosure. There is no minimum # of portfolios required by GIPS (though single-portfolio composites must be disclosed as such)."
      },
      {
        q: "PCM's compliance statement is:",
        c: ["A. Acceptable as written.",
            "B. Non-compliant because GIPS requires the verbatim compliance statement with no modifications such as 'in all material respects'.",
            "C. Non-compliant because it should claim GIPS 2020 specifically."],
        a: 1,
        e: "B is correct. The GIPS compliance statement is prescribed and must be used verbatim: '[Firm name] claims compliance with the Global Investment Performance Standards (GIPS®) and has prepared and presented this report in compliance with the GIPS standards.' No qualifiers like 'in all material respects' permitted — compliance is all-or-nothing."
      },
      {
        q: "Regarding returns presentation, PCM:",
        c: ["A. Complies because gross-of-fees time-weighted returns are standard.",
            "B. Must present net-of-fees returns in addition to gross; presenting only gross is non-compliant for most composites.",
            "C. Must use money-weighted returns for equity composites."],
        a: 1,
        e: "B is correct. GIPS requires net-of-fees returns be presented (gross may also be shown). For typical equity composites, time-weighted returns are required. Money-weighted is required only for strategies where the firm controls cash flows (closed-end, committed-capital private market vehicles)."
      },
      {
        q: "Regarding the 3-year track record, PCM must:",
        c: ["A. Present since-inception (2018), building up to 10 years.",
            "B. Present a minimum of 5 years, building up to 10 years — 3 years is insufficient.",
            "C. Present only the most recent year."],
        a: 1,
        e: "B is correct. GIPS requires minimum 5 years of compliant performance (or since inception if shorter than 5), building up to at least 10 years. 3 years is inadequate. Note: PCM started the composite in 2018, so it should present 2018-2025 (8 years)."
      }
    ]
  },

  // =============================================================
  // QUANTITATIVE METHODS
  // =============================================================
  {
    id: "Q1", topic: "quant",
    title: "Multiple Regression: Retail Sales Model",
    vignette: `An analyst builds a model to predict monthly same-store sales growth (%) for a retailer using three independent variables: consumer confidence index change (CCI), unemployment rate change (UE), and promotional discount % (PROMO). Regression output using 60 monthly observations:

Coefficient     Estimate     SE        t-stat
Intercept       0.421       0.310     1.358
CCI             0.185       0.042     4.405
UE             -1.320       0.510    -2.588
PROMO           0.095       0.088     1.080

ANOVA:
SS Regression: 124.2
SS Error:       98.5
SS Total:      222.7

Residual analysis shows:
• Breusch-Pagan test χ² = 12.4 (p-value = 0.006)
• Durbin-Watson statistic = 1.95
• Correlation matrix shows CCI and UE have a -0.78 correlation

The analyst reports R² of 0.558 and an F-statistic of 23.5.`,
    questions: [
      {
        q: "At the 5% significance level, the coefficient(s) that are statistically significant (given n=60, k=3, critical t ≈ 2.00):",
        c: ["A. CCI only.",
            "B. CCI and UE.",
            "C. CCI, UE, and PROMO."],
        a: 1,
        e: "B is correct. With df = 60 - 3 - 1 = 56 and α = 5% two-tailed, critical t ≈ 2.00. |t-stat| CCI = 4.405 (significant), UE = 2.588 (significant), PROMO = 1.080 (not significant), Intercept = 1.358 (not significant)."
      },
      {
        q: "The Breusch-Pagan test result MOST likely indicates:",
        c: ["A. Serial correlation in the residuals.",
            "B. Heteroskedasticity in the residuals.",
            "C. Multicollinearity among independent variables."],
        a: 1,
        e: "B is correct. The Breusch-Pagan test is a test for CONDITIONAL HETEROSKEDASTICITY (H₀: homoskedasticity). With p-value = 0.006 < 0.05, reject H₀ — evidence of heteroskedasticity. Serial correlation is tested by DW (1.95, close to 2, no issue). Multicollinearity is assessed via VIF / correlation matrix."
      },
      {
        q: "The PRIMARY effect of the detected heteroskedasticity is that:",
        c: ["A. Coefficient estimates become biased and inconsistent.",
            "B. Standard errors are biased, leading to potentially invalid t-tests.",
            "C. R² becomes inflated and unreliable."],
        a: 1,
        e: "B is correct. Heteroskedasticity does NOT bias the coefficient estimates (they remain unbiased/consistent) but biases the standard errors, typically understating them and leading to inflated t-stats and false rejections. Fix: robust (White/heteroskedasticity-consistent) standard errors."
      },
      {
        q: "The -0.78 correlation between CCI and UE suggests:",
        c: ["A. Serial correlation — apply Newey-West standard errors.",
            "B. Heteroskedasticity — apply White standard errors.",
            "C. Multicollinearity — consider removing one of the variables."],
        a: 2,
        e: "C is correct. High pairwise correlation (|r| = 0.78) between two independent variables indicates multicollinearity. Symptoms include inflated SEs and possible counterintuitive signs. Durbin-Watson does not detect this. Remedies include removing redundant variables or combining them into an index."
      },
      {
        q: "The F-statistic of 23.5 (critical F ≈ 2.76 at α=5%, df₁=3, df₂=56) indicates:",
        c: ["A. At least one slope coefficient is statistically different from zero.",
            "B. All three slope coefficients are jointly equal to zero.",
            "C. The model exhibits no multicollinearity."],
        a: 0,
        e: "A is correct. The F-test has H₀: b₁ = b₂ = b₃ = 0 (all slopes zero). F = 23.5 > 2.76, so reject H₀ — at least one slope is significantly different from zero. The F-test does not address multicollinearity."
      }
    ]
  },
  {
    id: "Q2", topic: "quant",
    title: "Time Series: Estimating an AR(1)",
    vignette: `An analyst fits an AR(1) model to quarterly log real GDP growth for a developed economy over 80 observations:

    yₜ = 0.42 + 0.68 yₜ₋₁ + εₜ
    (SE: intercept = 0.15; slope = 0.09)

Residual diagnostics:
• Autocorrelations at lags 1, 2, 3, 4: (0.03, -0.04, 0.02, 0.25)
• Breusch-Pagan: not significant
• Dickey-Fuller test on yₜ: t-stat = -4.1 (critical value at 5% = -2.87)`,
    questions: [
      {
        q: "Based on the Dickey-Fuller test result, the analyst should conclude that yₜ is:",
        c: ["A. Non-stationary; use first differences.",
            "B. Covariance stationary; the AR(1) model is appropriate.",
            "C. Stationary but serially correlated."],
        a: 1,
        e: "B is correct. Dickey-Fuller H₀: unit root (non-stationary). Test stat -4.1 is MORE NEGATIVE than critical -2.87, so reject H₀ → series is covariance stationary. AR(1) is appropriate from a stationarity standpoint."
      },
      {
        q: "The mean-reverting level of this AR(1) process is approximately:",
        c: ["A. 0.62",
            "B. 1.31",
            "C. 2.14"],
        a: 1,
        e: "B is correct. Mean-reverting level = b₀ / (1 - b₁) = 0.42 / (1 - 0.68) = 0.42 / 0.32 = 1.3125. If current yₜ above this level, expected to decrease; below, expected to increase."
      },
      {
        q: "The residual autocorrelation at lag 4 of 0.25 is MOST likely significant (critical ≈ 1/√80 × 1.96 ≈ 0.22 — two-tailed at 5%). This suggests:",
        c: ["A. The model is adequate; residuals are white noise.",
            "B. Seasonality; consider adding a lag-4 seasonal term.",
            "C. ARCH effects; estimate a GARCH model."],
        a: 1,
        e: "B is correct. Quarterly data with significant residual autocorrelation at lag 4 (0.25 > 0.22) indicates seasonal effects. Add a seasonal lag: yₜ = b₀ + b₁yₜ₋₁ + b₂yₜ₋₄ + εₜ. ARCH tests the squared residuals for conditional heteroskedasticity — different test."
      },
      {
        q: "If the series yₜ had exhibited b₁ = 1 (unit root), the appropriate correction would be to:",
        c: ["A. Use a linear trend model.",
            "B. Model first differences: Δyₜ = yₜ - yₜ₋₁.",
            "C. Use a moving-average model."],
        a: 1,
        e: "B is correct. A unit-root (random walk) process is rendered stationary by first-differencing. Δyₜ = εₜ for a simple random walk. Trend models do not fix non-stationarity from a unit root; they address deterministic trends only."
      }
    ]
  },
  {
    id: "Q3", topic: "quant",
    title: "Multiple Regression: Interpreting Coefficients & Predicting",
    vignette: `An analyst studies how executive year-end bonuses (measured in months of salary) relate to firm performance. The dependent variable is the bonus in months (Y). Two independent variables are considered:

• X₁ = company profit, in $ millions
• X₂ = company stock price gain over the year, expressed as a decimal (e.g., an 18% gain is entered as 0.18)

The analyst first estimates a simple regression using only profit, then a multiple regression adding stock price gain. Both are fit by ordinary least squares (the least squares method), which chooses coefficients that minimize the sum of squared residuals.

Simple model:    Ŷ = 1.14 + 0.30·X₁
Multiple model:  Ŷ = 0.95 + 0.20·X₁ + 6.00·X₂

The analyst notes that profit and stock price gain are positively correlated across the firms in the sample.`,
    questions: [
      {
        q: "[LOS b · Interpret coefficients] In the MULTIPLE regression model, the partial slope coefficient on profit (b̂₁ = 0.20) is BEST interpreted as: for each additional $1 million of profit, the predicted bonus increases by 0.20 months,",
        c: ["A. without any conditions on the other variables.",
            "B. holding the company's stock price gain constant.",
            "C. only when the stock price gain is also increasing."],
        a: 1,
        e: "B is correct. In multiple regression, each slope is a PARTIAL slope coefficient: it measures the change in Y for a one-unit change in that independent variable while holding all other independent variables constant. So b̂₁ = 0.20 means a $1M rise in profit predicts a 0.20-month higher bonus, holding stock price gain fixed. A ignores the 'holding others constant' condition (that is the simple-regression interpretation). C misstates the condition — the other variable is held fixed, not required to move."
      },
      {
        q: "[LOS f · Calculate predicted value] Using the multiple model, the predicted bonus for a firm with profit of $8.0M and a stock price gain of 18% is CLOSEST to:",
        c: ["A. 2.55 months.",
            "B. 3.63 months.",
            "C. 4.14 months."],
        a: 1,
        e: "B is correct. Substitute X₁ = 8.0 and X₂ = 0.18 (18% as a decimal): Ŷ = 0.95 + 0.20(8.0) + 6.00(0.18) = 0.95 + 1.60 + 1.08 = 3.63 months. Choice C (4.14) is the SIMPLE model's prediction at X₁ = 10 (1.14 + 0.30×10), not this case. A omits the stock-gain term."
      },
      {
        q: "[LOS b · Interpret coefficients] The intercept in the multiple model (b̂₀ = 0.95) represents the predicted bonus when:",
        c: ["A. profit equals its sample average and stock gain is zero.",
            "B. both profit and stock price gain equal zero.",
            "C. profit equals zero, regardless of stock price gain."],
        a: 1,
        e: "B is correct. The intercept is the predicted value of the dependent variable when ALL independent variables equal zero — here, when both profit (X₁) and stock price gain (X₂) are zero, the predicted bonus is 0.95 months. C is wrong because in a multiple regression the intercept requires every X (not just profit) to be zero."
      },
      {
        q: "[LOS b · Interpret coefficients] The coefficient on profit falls from 0.30 in the simple model to 0.20 in the multiple model. The MOST likely reason is that:",
        c: ["A. adding a variable always reduces every other coefficient by construction.",
            "B. profit and stock price gain are correlated, so the simple model's slope partly captured stock gain's effect; the multiple model isolates profit's partial effect.",
            "C. the multiple model violates the least squares criterion."],
        a: 1,
        e: "B is correct. Because profit and stock price gain are positively correlated, the simple regression's 0.30 slope on profit absorbed some of the influence that actually belongs to stock price gain (an omitted-variable effect). When stock gain is added, the model separates the two, and profit's partial slope drops to 0.20. The intercept shifts (1.14 → 0.95) for the same reason. A is false — coefficients can rise, fall, or change sign. C is false — both models are estimated by least squares."
      },
      {
        q: "[LOS b · Interpret coefficients] Because X₂ is entered as a decimal, a coefficient of 6.00 on stock price gain means that a 1 percentage point (0.01) increase in the stock price gain, holding profit constant, changes the predicted bonus by:",
        c: ["A. 6.00 months.",
            "B. 0.60 months.",
            "C. 0.06 months."],
        a: 2,
        e: "C is correct. A one-unit change in X₂ means a change of 1.00 in the decimal (i.e., a 100 percentage-point move), which would move the bonus by 6.00 months. A 1 percentage point move is only 0.01 in decimal terms, so the effect is 6.00 × 0.01 = 0.06 months, holding profit constant. This highlights why the units of each independent variable matter when interpreting slope coefficients."
      }
    ]
  },

  // =============================================================
  // ECONOMICS
  // =============================================================
  {
    id: "EC1", topic: "econ",
    title: "FX Carry Trade & Parity",
    vignette: `A global macro fund considers a carry trade. The following rates are observed:

• Spot USD/JPY: 148.50 (1 USD = 148.50 JPY)
• 1-year USD interest rate: 5.20%
• 1-year JPY interest rate: 0.20%
• 1-year USD/JPY forward rate: 141.45

The fund plans to borrow JPY, convert to USD, and invest in USD at 5.20% for 1 year.`,
    questions: [
      {
        q: "The 1-year USD/JPY forward premium or discount on the USD is:",
        c: ["A. USD at a premium of about 5.0%.",
            "B. USD at a discount of about 4.75%.",
            "C. USD at a premium of about 4.75%."],
        a: 1,
        e: "B is correct. Forward/Spot = 141.45/148.50 = 0.9525 → USD is worth FEWER JPY forward → USD at forward DISCOUNT. % change = (141.45 - 148.50)/148.50 = -4.75%. Currency with HIGHER interest rate (USD at 5.20%) trades at forward discount — consistent with CIRP."
      },
      {
        q: "Covered interest rate parity (CIRP) check — does the forward rate equal the no-arbitrage forward?",
        c: ["A. Yes; CIRP holds (no arbitrage).",
            "B. No; the USD is overvalued in the forward market.",
            "C. No; the JPY is overvalued in the forward market."],
        a: 0,
        e: "A is correct. CIRP: F/S = (1 + r_JPY)/(1 + r_USD) = 1.002/1.052 = 0.9525. So F = 148.50 × 0.9525 = 141.45 — matches observed forward. CIRP holds; no arbitrage."
      },
      {
        q: "If the fund executes the uncovered carry trade (borrow JPY, invest USD, NO forward hedge) and UIRP holds:",
        c: ["A. Expected profit is approximately 5% (interest differential).",
            "B. Expected profit is zero because JPY is expected to appreciate by the interest differential.",
            "C. Expected profit equals the JPY interest rate."],
        a: 1,
        e: "B is correct. Under UIRP, the high-rate currency is expected to depreciate enough to offset the rate differential. E(%ΔS) = r_JPY - r_USD = -5.0% — USD expected to depreciate 5% (= JPY appreciate 5%), eliminating expected profit. Carry trades profit when UIRP does NOT hold short-term (empirically common)."
      },
      {
        q: "Historical evidence shows carry trades have:",
        c: ["A. Symmetric return distributions with normal tails.",
            "B. Negatively skewed returns with fat left tails ('crash risk').",
            "C. Positively skewed returns with occasional large gains."],
        a: 1,
        e: "B is correct. Classic carry trade P&L shows persistent small gains interrupted by occasional large losses during market stress (when high-rate currencies suddenly depreciate — risk-off crashes). Negative skew + fat left tail. UIRP fails most of the time short-term but reasserts in crashes."
      }
    ]
  },
  {
    id: "EC2", topic: "econ",
    title: "Growth Accounting & Solow Model",
    vignette: `Country X has the following characteristics over 2020-2025:

• GDP growth (real): 3.2% per year
• Labor force growth: 0.8% per year
• Capital stock growth: 4.5% per year
• Labor's share of income (1-α): 0.65
• Capital's share (α): 0.35

The economy is in its steady state as per the neoclassical Solow model. A policymaker proposes an increase in the national saving rate from 20% to 28% of GDP.`,
    questions: [
      {
        q: "Using growth accounting, total factor productivity (TFP) growth was approximately:",
        c: ["A. 1.12%",
            "B. 1.58%",
            "C. 2.40%"],
        a: 0,
        e: "A is correct. Growth accounting: ΔY/Y = ΔA/A + α × ΔK/K + (1-α) × ΔL/L.  3.2 = ΔA/A + 0.35 × 4.5 + 0.65 × 0.8 = ΔA/A + 1.575 + 0.52 = ΔA/A + 2.095.  ΔA/A = 3.2 - 2.095 ≈ 1.1%."
      },
      {
        q: "In the Solow model steady state, per-capita output growth equals:",
        c: ["A. Zero, since capital per worker is constant.",
            "B. The rate of labor-augmenting technological progress.",
            "C. The national saving rate times the capital share."],
        a: 1,
        e: "B is correct. In Solow steady state, per-capita output grows at the rate of labor-augmenting technological progress (g). Saving rate affects the LEVEL of per-capita capital/output but NOT the long-run growth rate in per-capita terms. Total GDP growth = n + g."
      },
      {
        q: "According to the Solow model, raising the saving rate from 20% to 28% will:",
        c: ["A. Permanently increase the long-run per-capita GDP growth rate.",
            "B. Temporarily increase the per-capita GDP growth rate as the economy transitions to a higher steady-state level.",
            "C. Have no effect on per-capita GDP at any horizon."],
        a: 1,
        e: "B is correct. Higher saving rate → higher steady-state capital per worker → higher steady-state output per worker. During transition, growth accelerates; once new steady state reached, per-capita growth returns to the tech progress rate. Levels permanently higher; growth rate only temporarily higher."
      },
      {
        q: "An endogenous growth model (e.g., Romer) would differ from Solow by predicting that an increase in the saving rate would:",
        c: ["A. Have no permanent effect on growth (same as Solow).",
            "B. Permanently raise the long-run growth rate via R&D/knowledge accumulation.",
            "C. Lower long-run growth through diminishing returns."],
        a: 1,
        e: "B is correct. Endogenous growth theories (Romer, Lucas) feature constant or increasing returns to broad capital (including knowledge/human capital). Saving rate → more investment in innovation/human capital → permanently higher growth rate. No convergence to a steady state of no growth."
      }
    ]
  },

  // =============================================================
  // FSA
  // =============================================================
  {
    id: "F1", topic: "fsa",
    title: "Equity Method & Business Combination",
    vignette: `On January 1, 2025, Alpha Corp. acquired 30% of Beta Inc. for $450 million in cash. At the acquisition date:

• Beta's book value of net assets: $1,200 million.
• Fair value of Beta's net identifiable assets: $1,350 million. Excess over book allocated entirely to inventory (turns over in 2025) and to a patent with 10-year remaining life, split $50M inventory / $100M patent.

During 2025:
• Beta's net income: $120 million
• Beta's dividends declared and paid: $40 million

At year-end 2025, Alpha also acquired 100% of Gamma LLC for $800 million cash. FV of Gamma's identifiable net assets = $680 million; full-goodwill method elected.`,
    questions: [
      {
        q: "At acquisition, the implicit goodwill in Alpha's investment in Beta is:",
        c: ["A. $45 million",
            "B. $50 million (30% of Beta's book value differential).",
            "C. $450 million minus 30% × book value = $90 million."],
        a: 0,
        e: "A is correct. Goodwill = Purchase price - 30% × FV of net identifiable assets = $450M - (0.30 × $1,350M) = $450M - $405M = $45M. Not shown separately; embedded in the investment account."
      },
      {
        q: "Alpha's 2025 equity-method income from Beta is approximately:",
        c: ["A. $36 million",
            "B. $18 million",
            "C. $24 million"],
        a: 1,
        e: "B is correct. Share of NI = 30% × $120M = $36M.  Less amortization of excess: Inventory $50M × 30% = $15M (fully realized in 2025 since inventory sold). Patent $100M × 30% / 10 years = $3M amortization. Total amortization = $15M + $3M = $18M.  Equity income = $36M - $18M = $18M."
      },
      {
        q: "The year-end 2025 carrying value of Alpha's investment in Beta is:",
        c: ["A. $456 million",
            "B. $450 million",
            "C. $468 million"],
        a: 0,
        e: "A is correct. Investment = $450M (cost) + $18M (equity income) - $12M (div received = 30% × $40M) = $456M. Dividends reduce investment, not equity income."
      },
      {
        q: "Goodwill recognized on the Gamma acquisition (100% acquisition) is:",
        c: ["A. $80 million",
            "B. $100 million",
            "C. $120 million"],
        a: 2,
        e: "C is correct. 100% acquisition: goodwill = purchase price - FV of net identifiable assets = $800M - $680M = $120M. Since Alpha owns 100%, there's no NCI; full and partial goodwill are identical here."
      },
      {
        q: "If Gamma's fair value (as a cash-generating unit) falls to $700 million in 2026 with carrying value $780M and identifiable assets valued at $640M, under IFRS goodwill impairment is:",
        c: ["A. $80 million",
            "B. $100 million",
            "C. $40 million"],
        a: 0,
        e: "A is correct. IFRS one-step: impairment = Carrying - Recoverable = $780 - $700 = $80M. Allocated first to goodwill (capped at goodwill balance $120M). US GAAP (2017 simplified) same answer here. Note: IFRS impairment at CGU; US GAAP at reporting unit level. Impairment is not reversible for goodwill."
      }
    ]
  },
  {
    id: "F2", topic: "fsa",
    title: "Defined Benefit Pension — IFRS vs US GAAP",
    vignette: `Zenith Manufacturing offers a defined benefit pension plan. Plan data for fiscal 2025:

• Opening PBO: $800M; Opening plan assets (FV): $720M
• Service cost: $45M
• Discount rate used for interest cost: 4.5%
• Actual return on plan assets: $65M (9.0% of opening assets)
• Expected return on plan assets (US GAAP): 7.0% of opening assets
• Benefits paid: $50M
• Employer contributions: $60M
• Actuarial loss during the year: $15M (due to increased mortality assumption)
• No past service cost, no plan amendments.`,
    questions: [
      {
        q: "The year-end PBO is:",
        c: ["A. $831 million",
            "B. $846 million",
            "C. $861 million"],
        a: 1,
        e: "B is correct. Year-end PBO = Opening + Service cost + Interest cost - Benefits paid + Actuarial loss = 800 + 45 + (0.045 × 800) - 50 + 15 = 800 + 45 + 36 - 50 + 15 = $846M."
      },
      {
        q: "The year-end plan assets (FV) are:",
        c: ["A. $795 million",
            "B. $810 million",
            "C. $780 million"],
        a: 0,
        e: "A is correct. Year-end plan assets = Opening + Actual return + Employer contributions - Benefits paid = 720 + 65 + 60 - 50 = $795M."
      },
      {
        q: "Under IFRS, the periodic pension cost recognized in P&L for 2025 is:",
        c: ["A. $45M (service cost only)",
            "B. $48.6M (service cost + net interest on net liability)",
            "C. $77.6M (service + interest - actual return)"],
        a: 1,
        e: "B is correct. IFRS P&L: Service cost + Net interest on net pension liability. Net interest = discount rate × opening net liability = 4.5% × (800 - 720) = 4.5% × 80 = $3.6M. P&L total = $45M + $3.6M = $48.6M. Remeasurements (actuarial G/L & return above discount rate) → OCI, NOT P&L."
      },
      {
        q: "Under US GAAP, the pension cost recognized in P&L for 2025 is (ignore amortization of prior G/L balances):",
        c: ["A. $45M",
            "B. $30.6M",
            "C. $48.6M"],
        a: 1,
        e: "B is correct. US GAAP P&L = Service + Interest - Expected return + Amortization of past service cost + Amortization of actuarial G/L. Service = 45. Interest = 4.5% × 800 = 36. Expected return = 7% × 720 = 50.4. No past service; amortization of actuarial G/L = 0 (corridor, assuming within 10% threshold). P&L = 45 + 36 - 50.4 = $30.6M."
      },
      {
        q: "The TOTAL economic pension cost for 2025 (equivalent under both standards, excluding contributions) is:",
        c: ["A. $31 million",
            "B. $41 million",
            "C. $48.6 million"],
        a: 0,
        e: "A is correct. Economic cost = Service cost + Interest cost − Actual return on assets + Actuarial loss + Past service cost = 45 + 36 − 65 + 15 + 0 = $31M. Equivalent: Change in Net Pension Liability + Contributions = [(846 − 795) − (800 − 720)] + 60 = (51 − 80) + 60 = $31M. IFRS and US GAAP differ in how this is split between P&L and OCI but the economic total is the same."
      }
    ]
  },
  {
    id: "F3", topic: "fsa",
    title: "Multinational Operations: Translation vs Remeasurement",
    vignette: `Nordic Industries, a U.S. parent (reporting currency USD), has a foreign subsidiary operating in country X with local currency LC.

Subsidiary data (in LC millions), year 2025:
• Revenues: LC 2,000
• COGS: LC 1,200 (inventory purchased mid-year)
• Depreciation: LC 100 (fixed assets purchased when LC/USD was 1.10)
• Other operating expenses: LC 400 (evenly through year)
• Net income: LC 300

Exchange rates (USD per LC):
• Beginning of 2025: 1.10
• Average 2025: 1.18
• Mid-year 2025: 1.16
• End of 2025: 1.25

Management must determine whether to use the current rate method (translation) or the temporal method (remeasurement).`,
    questions: [
      {
        q: "If the subsidiary's functional currency is its local currency, Nordic should use:",
        c: ["A. The current rate method; translation gain/loss goes to OCI (CTA).",
            "B. The temporal method; remeasurement gain/loss goes to P&L.",
            "C. The current rate method; translation gain/loss goes to P&L."],
        a: 0,
        e: "A is correct. Functional currency = local LC → current rate (translation) method. All BS items at current rate (except equity at historical); all IS items at average. CTA accumulates in OCI, not P&L. Released on disposal."
      },
      {
        q: "Using the current rate method, translated revenues in USD for 2025 are:",
        c: ["A. $2,200M (@ beginning rate)",
            "B. $2,360M (@ average rate)",
            "C. $2,500M (@ ending rate)"],
        a: 1,
        e: "B is correct. Under current rate method, revenues (and other IS items) are translated at the AVERAGE rate: LC 2,000 × 1.18 = $2,360M."
      },
      {
        q: "Using the temporal method (functional = USD), depreciation expense translated into USD is:",
        c: ["A. $110M (@ historical rate 1.10)",
            "B. $118M (@ average rate 1.18)",
            "C. $125M (@ ending rate 1.25)"],
        a: 0,
        e: "A is correct. Under temporal method, depreciation is translated at the HISTORICAL rate corresponding to when the asset was acquired (1.10). This maintains matching with the historical-cost fixed asset. Non-monetary items (inventory, PP&E, depreciation, COGS) at historical; monetary items at current."
      },
      {
        q: "Under the current rate method, the translation adjustment (CTA) for the year depends primarily on:",
        c: ["A. Depreciation and COGS items (historical vs. average rate differentials).",
            "B. Beginning net asset exposure and change in exchange rate during the year.",
            "C. Employer contributions and actuarial assumptions."],
        a: 1,
        e: "B is correct. CTA under current rate method arises from translating net assets at different rates and primarily reflects the change in exchange rate applied to the opening net asset position plus flows during the year at different rates. Not the historical-vs-average differentials (that's temporal method remeasurement G/L drivers)."
      },
      {
        q: "In a highly inflationary economy, US GAAP requires treatment as if functional currency were the parent's — i.e., temporal method. Under IFRS, the treatment is:",
        c: ["A. Same — use temporal method directly.",
            "B. Restate foreign financials for inflation, then translate at current rate.",
            "C. Disregard hyperinflation; use current rate method on nominal figures."],
        a: 1,
        e: "B is correct. IFRS (IAS 29): restate local-currency FS using a general price index to reflect current purchasing power, THEN translate at the CURRENT (year-end) rate. US GAAP simply applies temporal method (as if parent is functional). Different mechanics → different results."
      }
    ]
  },

  // =============================================================
  // CORPORATE ISSUERS
  // =============================================================
  {
    id: "C1", topic: "corp",
    title: "Cost of Capital — Private Firm via Pure-Play",
    vignette: `Emerald Tech is a private software company. An analyst must estimate its cost of equity for a valuation. Data:

Comparable public firms (software SaaS):
• Comp 1: levered β = 1.45, D/E = 0.25
• Comp 2: levered β = 1.60, D/E = 0.40
• Comp 3: levered β = 1.30, D/E = 0.15

Tax rate (all firms and Emerald): 25%.
Emerald's target D/E = 0.50.
Risk-free rate: 3.8%.
Developed-market equity risk premium: 5.5%.
Emerald operates in an emerging market; sovereign bond yield spread = 3.0%; ratio of σ(equity index) / σ(sovereign bond) = 1.4.`,
    questions: [
      {
        q: "The unlevered β for Comp 2 is closest to:",
        c: ["A. 1.16",
            "B. 1.23",
            "C. 1.28"],
        a: 1,
        e: "B is correct. Unlevered β = βL / [1 + (1 - t)(D/E)] = 1.60 / [1 + (0.75)(0.40)] = 1.60 / 1.30 = 1.231."
      },
      {
        q: "The average unlevered β across the three comps is closest to:",
        c: ["A. 1.18",
            "B. 1.23",
            "C. 1.45"],
        a: 1,
        e: "B is correct. βu(1) = 1.45/[1+0.75×0.25] = 1.45/1.1875 = 1.221. βu(2) = 1.60/1.30 = 1.231. βu(3) = 1.30/[1+0.75×0.15] = 1.30/1.1125 = 1.169. Average ≈ 1.207 ≈ 1.21 (closest to 1.23)."
      },
      {
        q: "Relevered β for Emerald (using avg unlevered β ≈ 1.21, target D/E = 0.50) is closest to:",
        c: ["A. 1.21",
            "B. 1.46",
            "C. 1.66"],
        a: 2,
        e: "C is correct. βL = βu × [1 + (1−t)(D/E)] = 1.21 × [1 + 0.75 × 0.50] = 1.21 × 1.375 = 1.664 ≈ 1.66. Emerald's leverage is HIGHER than the average comparable, so its relevered β exceeds the average unlevered β."
      },
      {
        q: "The country risk premium (CRP) for the emerging market is:",
        c: ["A. 3.0%",
            "B. 3.5%",
            "C. 4.2%"],
        a: 2,
        e: "C is correct. CRP = sovereign yield spread × (σ_equity / σ_bonds) = 3.0% × 1.4 = 4.2%."
      },
      {
        q: "Emerald's cost of equity (using relevered β ≈ 1.66, developed ERP 5.5%, CRP 4.2%) is closest to:",
        c: ["A. 12.9%",
            "B. 16.9%",
            "C. 20.9%"],
        a: 2,
        e: "C is correct. re = rf + β × (ERP_developed + CRP) = 3.8% + 1.66 × (5.5% + 4.2%) = 3.8% + 1.66 × 9.7% = 3.8% + 16.1% = 19.9% ≈ 20%. Closest to 20.9%. CRP added to developed ERP to capture emerging market equity risk."
      }
    ]
  },

  // =============================================================
  // EQUITY
  // =============================================================
  {
    id: "EQ1", topic: "equity",
    title: "DDM — Gordon, Two-Stage, H-Model",
    vignette: `Delta Beverages (a consumer staples firm) currently pays an annual dividend of $2.40. An analyst gathers the following:

• Required return on equity (r): 9.0%
• Current stock price: $50
• Return on equity (ROE): 15%
• Payout ratio: 40% (constant going forward)
• Expected near-term growth: 10% per year for 5 years
• Expected long-term (terminal) growth: 4.0% per year
• Current book value per share: $24

The analyst considers Gordon, two-stage, and H-model approaches.`,
    questions: [
      {
        q: "The firm's sustainable growth rate (g = b × ROE) is:",
        c: ["A. 4.0%",
            "B. 6.0%",
            "C. 9.0%"],
        a: 2,
        e: "C is correct. g = b × ROE where b = retention ratio = 1 - payout = 1 - 0.40 = 0.60. g = 0.60 × 15% = 9.0%. Note: this 9.0% is the theoretical maximum sustainable growth rate — the analyst's assumed long-term stable growth of 4% is below this and thus more conservative."
      },
      {
        q: "Using the Gordon Growth Model with long-term growth 4.0%, the intrinsic value per share is:",
        c: ["A. $48.00",
            "B. $49.92",
            "C. $60.00"],
        a: 1,
        e: "B is correct. V₀ = D₁/(r-g) = D₀(1+g)/(r-g) = 2.40 × 1.04 / (0.09 - 0.04) = 2.496 / 0.05 = $49.92."
      },
      {
        q: "Using a two-stage DDM with 10% growth for 5 years then 4% stable growth forever, the approximate value is:",
        c: ["A. $56",
            "B. $61",
            "C. $70"],
        a: 1,
        e: "B is correct. PV of high-growth dividends (years 1-5) at 10% g: D1=2.64, D2=2.904, D3=3.194, D4=3.514, D5=3.865. PVs @ 9%: 2.422, 2.445, 2.467, 2.490, 2.513 ≈ 12.34. Terminal value at end yr 5 = D6/(r-gL) = 3.865×1.04/0.05 = 80.39. PV of terminal = 80.39/1.09⁵ = 80.39/1.539 = 52.24. Total = 12.34 + 52.24 ≈ 64.58. Closest to B ($61)."
      },
      {
        q: "The H-model with H = 3 (half-life of decline from 10% to 4%) gives approximately:",
        c: ["A. $52.00",
            "B. $52.82",
            "C. $59.90"],
        a: 2,
        e: "C is correct. V₀ = D₀[(1+g_L)/(r-g_L)] + D₀[H(g_S - g_L)/(r - g_L)] = 2.40[1.04/0.05] + 2.40[3 × (0.10 - 0.04)/0.05] = 2.40 × 20.8 + 2.40 × 3.6 = 49.92 + 8.64 = $58.56 ≈ $59.90 (closest). H-model captures gradual linear decay of growth."
      },
      {
        q: "Given the current price $50 and the GGM value $49.92, the implied long-term growth rate (from price) is closest to:",
        c: ["A. 3.96%",
            "B. 4.12%",
            "C. 5.00%"],
        a: 0,
        e: "A is correct. Implied g = r - D₁/P = 9% - 2.496/50 = 9% - 4.99% = 4.01% ≈ 3.96%. Market implies slightly lower LT growth than 4% — stock modestly overvalued relative to analyst's g assumption."
      }
    ]
  },
  {
    id: "EQ2", topic: "equity",
    title: "FCFE Valuation & Sustainability",
    vignette: `Continental Foods reports the following for 2025 ($M):

• Net income: 180
• Depreciation & amortization: 85
• Capital expenditures: 140
• Change in working capital (increase): 30
• Net borrowing (new debt - repayments): 25
• Interest expense: 40 (tax rate 25%)
• Shares outstanding: 100M
• Required return on equity: 10%
• Expected FCFE growth: 12% per year for 3 years, then stable 4%

Current dividend per share: $0.80 (total dividends $80M).`,
    questions: [
      {
        q: "FCFE for 2025 is:",
        c: ["A. $90 million",
            "B. $120 million",
            "C. $150 million"],
        a: 1,
        e: "B is correct. FCFE = NI + NCC - FCInv - WCInv + Net borrowing = 180 + 85 - 140 - 30 + 25 = $120M. Per share: $1.20. Firm currently pays out $80M as dividends (67% of FCFE)."
      },
      {
        q: "FCFF for 2025 (from the data) is:",
        c: ["A. $120 million",
            "B. $125 million",
            "C. $175 million"],
        a: 1,
        e: "B is correct. FCFF = FCFE + Int(1-t) - Net borrowing = 120 + 40×0.75 - 25 = 120 + 30 - 25 = $125M. Alternatively: FCFF = NI + NCC + Int(1-t) - FCInv - WCInv = 180 + 85 + 30 - 140 - 30 = $125M."
      },
      {
        q: "Per-share value using two-stage FCFE model (12% for 3 years, then 4% stable) is approximately:",
        c: ["A. $17.70",
            "B. $25.20",
            "C. $26.90"],
        a: 1,
        e: "B is correct. FCFE₀ = $1.20/share. FCFE₁ = 1.344, FCFE₂ = 1.505, FCFE₃ = 1.685. PVs @ 10%: 1.222, 1.244, 1.266 ≈ 3.73. TV at end yr 3 = 1.685 × 1.04 / (0.10 - 0.04) = 1.752/0.06 = 29.21. PV of TV = 29.21/1.1³ = 29.21/1.331 = 21.95. Total = 3.73 + 21.95 ≈ $25.68 ≈ $25.20."
      },
      {
        q: "A key advantage of FCFE over DDM for valuing Continental Foods is that:",
        c: ["A. FCFE captures the firm's entire debt-service capacity.",
            "B. FCFE is based on cash available to equity holders regardless of dividend policy, useful since dividends (67% of FCFE) don't fully reflect equity's cash-generating ability.",
            "C. FCFE is less sensitive to terminal value assumptions."],
        a: 1,
        e: "B is correct. FCFE values the cash available to equity holders; DDM values only dividends. When dividends differ meaningfully from FCFE (firm retains ~33% of FCFE here), DDM undervalues. FCFE is equity-holder-perspective cash flow; appropriate when dividend policy doesn't align with CF generation."
      }
    ]
  },
  {
    id: "EQ3", topic: "equity",
    title: "Residual Income Valuation",
    vignette: `Crescent Financial is a mature US bank holding company. Current data:

• Current book value per share (B₀): $45
• ROE: 13% (expected to continue for 4 years, then decline linearly to equal cost of equity by year 8)
• Cost of equity (r): 10%
• Payout ratio: 40%, stable
• Persistence factor for continuing RI beyond year 4: ω = 0.5

Per share forecasts:
Year:      1      2       3       4
EPS:     5.85   6.38    6.96    7.59
Dividend: 2.34   2.55    2.78    3.04
Book:    48.51  52.33   56.52  61.08  (beginning of each year)`,
    questions: [
      {
        q: "Residual income per share in year 1 is closest to:",
        c: ["A. $1.35",
            "B. $1.32",
            "C. $0.90"],
        a: 0,
        e: "A is correct. RI₁ = EPS₁ - r × B₀ = 5.85 - 0.10 × 45 = 5.85 - 4.50 = $1.35. Alternatively = (ROE - r) × B₀ = (0.13 - 0.10) × 45 = $1.35."
      },
      {
        q: "Using the single-stage RI model assuming ROE=13%, r=10%, g = retention × ROE = 0.60 × 0.13 = 7.8% forever, the implied value per share is:",
        c: ["A. $61.36",
            "B. $106.36",
            "C. $151.36"],
        a: 1,
        e: "B is correct. V₀ = B₀ + [(ROE − r)/(r − g)] × B₀ = 45 + [(0.13 − 0.10)/(0.10 − 0.078)] × 45 = 45 + (0.03/0.022) × 45 = 45 + 1.3636 × 45 = 45 + 61.36 = $106.36. Note: Option A ($61.36) is only the PV of future residual income added to book value — you must include current book value B₀."
      },
      {
        q: "Using multistage RI with 4 years of explicit RI forecast and continuing RI based on ω = 0.5, the continuing residual income value at end of year 4 is given by RI₅/(1+r-ω). With RI₄ = (0.13-0.10) × 56.52 = $1.696 — WAIT, using the correct Book value at start of yr 4 of $56.52: RI₄ = EPS₄ - r × B₃ = 7.59 - 0.10 × 56.52 = 7.59 - 5.652 = $1.938. Continuing RI = ω × RI₄ / (1 + r - ω). The value is closest to:",
        c: ["A. $1.62",
            "B. $3.23",
            "C. $16.15"],
        a: 0,
        e: "A is correct. Continuing RI at end of year 4 = ω × RI₄ / (1 + r - ω) = 0.5 × 1.938 / (1 + 0.10 - 0.5) = 0.969/0.60 = $1.615 ≈ $1.62. This is the PV at end of year 4 of all subsequent residual incomes, accounting for gradual fade."
      },
      {
        q: "The RI model is particularly USEFUL compared to DDM/FCFE when:",
        c: ["A. The firm does not pay dividends and has negative near-term FCFE.",
            "B. Terminal value dominates total DCF value.",
            "C. Clean surplus relation is strictly violated."],
        a: 0,
        e: "A is correct. RI model anchors value in current book value (recognized today) + PV of future RI — most value recognized upfront, less dependence on terminal value or dividend assumptions. Ideal for non-dividend payers and negative near-term FCFE (tech/growth). Clean surplus violation is a WEAKNESS of RI, not strength. B is when RI is MORE useful (less dependence on TV)."
      }
    ]
  },

  // =============================================================
  // FIXED INCOME
  // =============================================================
  {
    id: "FI1", topic: "fi",
    title: "Term Structure & Forward Rates",
    vignette: `A bond analyst observes the following zero-coupon (spot) yields on a default-risk-free government curve:

Maturity     Spot Rate
1 year       3.00%
2 years      3.50%
3 years      4.00%
4 years      4.25%
5 years      4.40%

All rates are annualized, compounded annually.`,
    questions: [
      {
        q: "The 1-year forward rate 1 year from now [f(1,1)] is closest to:",
        c: ["A. 3.50%",
            "B. 4.00%",
            "C. 4.25%"],
        a: 1,
        e: "B is correct. (1+S₂)² = (1+S₁)(1+f(1,1)).  (1.035)² = 1.03 × (1+f).  1.071225 = 1.03(1+f).  1+f = 1.04002.  f(1,1) = 4.00%."
      },
      {
        q: "The 2-year forward rate 3 years from now [f(3,2)] is closest to:",
        c: ["A. 4.50%",
            "B. 4.95%",
            "C. 5.20%"],
        a: 1,
        e: "B is correct. (1+S₅)⁵ = (1+S₃)³(1+f(3,2))².  (1.044)⁵ = (1.04)³(1+f)².  (1.044)⁵ = 1.2401. (1.04)³ = 1.1249. (1+f)² = 1.2401/1.1249 = 1.1024. 1+f = √1.1024 = 1.0499. f = 4.99% ≈ 4.95%."
      },
      {
        q: "A 3-year 5% annual-pay coupon bond (par $1,000) priced using arbitrage-free spot rates is closest to:",
        c: ["A. $1,028",
            "B. $1,029",
            "C. $1,050"],
        a: 1,
        e: "B is correct. Price = 50/1.03 + 50/1.035² + 1050/1.04³ = 48.54 + 46.69 + 933.46 = $1,028.69 ≈ $1,029. Using YTM would give different result; spot-rate discount is arbitrage-free."
      },
      {
        q: "Under the pure expectations hypothesis, the upward-sloping curve implies that market participants expect:",
        c: ["A. Short-term interest rates to rise.",
            "B. Short-term interest rates to fall.",
            "C. Short-term interest rates to remain constant."],
        a: 0,
        e: "A is correct. Under pure expectations, the forward rate = expected future spot rate. Since forwards rise above current short rate (f(1,1)=4.00% > S₁=3.00%), market expects rising short rates. Liquidity preference theory suggests forwards overstate expected rates (premium), so interpretation caveated."
      },
      {
        q: "Riding (rolling down) the yield curve is MOST profitable when:",
        c: ["A. The curve is steeply upward-sloping and remains stable.",
            "B. The curve is flat.",
            "C. Interest rates rise across all maturities."],
        a: 0,
        e: "A is correct. The roll-down strategy buys a longer bond and holds it for shorter period, benefiting as it rolls toward lower yields (higher prices) on the steep curve — PROVIDED the curve stays put. Flat curve → no roll gain. Rising rates destroy the strategy (price losses)."
      }
    ]
  },
  {
    id: "FI2", topic: "fi",
    title: "Callable Bond & OAS",
    vignette: `A 5-year 6%-coupon bond (annual coupons, par $100) is callable at par starting year 2 (European-style, exercisable once at year 2 only). Current benchmark spot rates (1-year):

A binomial interest rate tree (calibrated to the benchmark) produces these interest rates:

Year 0: 3.00% (1-period rate)
Year 1: up = 4.50%, down = 3.00%
Year 2: uu = 5.25%, ud = 3.75%, dd = 2.75%
And so on.

Using the tree, the analyst values:
• Straight (non-callable) bond = $105.80
• Callable bond = $103.40
• Market price = $102.00`,
    questions: [
      {
        q: "The value of the embedded call option is:",
        c: ["A. $1.40",
            "B. $2.40",
            "C. $3.80"],
        a: 1,
        e: "B is correct. V_callable = V_straight - V_call → V_call = V_straight - V_callable = $105.80 - $103.40 = $2.40. The call is owned by the ISSUER, reducing bondholder value."
      },
      {
        q: "If interest rate volatility increases, the value of the callable bond will MOST likely:",
        c: ["A. Increase, because straight bond value rises.",
            "B. Decrease, because call option value rises.",
            "C. Remain unchanged."],
        a: 1,
        e: "B is correct. ↑ vol → ↑ call option value (both the call value and Straight bond value are affected, but the net effect is that callable bond = Straight - Call decreases as Call value rises disproportionately). For a callable bond, higher vol HURTS bondholders."
      },
      {
        q: "Given Z-spread = 80 bp and call option value = 30 bp (in OAS-spread terms), the OAS is:",
        c: ["A. 50 bp",
            "B. 80 bp",
            "C. 110 bp"],
        a: 0,
        e: "A is correct. OAS = Z-spread - option value (in bp) = 80 - 30 = 50 bp. OAS reflects credit + liquidity (pure spread after stripping option effect). For callable: OAS < Z-spread because option costs bondholder."
      },
      {
        q: "Callable bonds exhibit negative effective convexity:",
        c: ["A. At all yield levels.",
            "B. At low yield levels (when rates fall, call becomes more likely).",
            "C. At high yield levels (when call is deeply out-of-money)."],
        a: 1,
        e: "B is correct. When rates fall sufficiently, callable bond price is capped near call price → further rate decline doesn't push price up as much (price compression). This creates negative convexity at low yields. At high yields (call OTM), callable behaves like straight bond (positive convexity)."
      },
      {
        q: "For a putable bond (investor holds put), higher interest rate volatility:",
        c: ["A. Increases the putable bond's value.",
            "B. Decreases the putable bond's value.",
            "C. Has no effect."],
        a: 0,
        e: "A is correct. V_putable = V_straight + V_put. Higher vol → higher put value → higher putable bond value. Puts held by investors increase in value with volatility. (Opposite direction from callable.)"
      }
    ]
  },

  // =============================================================
  // DERIVATIVES
  // =============================================================
  {
    id: "D1", topic: "deriv",
    title: "Forward Commitments: Stock Forward & Swap",
    vignette: `An analyst examines derivatives involving Globetex Inc. stock and an interest rate swap.

Stock data:
• Globetex current price (S₀): $80
• Expected dividends: $1.50 at t = 0.25, $1.50 at t = 0.75 (during next year)
• Risk-free rate (continuously compounded): 4%

Swap data:
• 2-year plain-vanilla interest rate swap, annual payments, notional $10M
• Current spot rates (annual): Z(1) = 0.9615, Z(2) = 0.9180
• Six months later, new Z(0.5) = 0.9803, Z(1.5) = 0.9320 (new rates effective)`,
    questions: [
      {
        q: "The 1-year forward price on Globetex is closest to:",
        c: ["A. $80.00",
            "B. $80.26",
            "C. $83.26"],
        a: 1,
        e: "B is correct. F₀(T) = [S₀ - PV(divs)] × e^(rT) = [80 - 1.50e^(-0.04×0.25) - 1.50e^(-0.04×0.75)] × e^(0.04×1) = [80 - 1.485 - 1.456] × 1.0408 = [77.059] × 1.0408 = $80.20 ≈ $80.26. Dividends reduce forward price (holder misses divs)."
      },
      {
        q: "After 6 months (t=0.5), if stock price = $85 (no dividends yet paid; next div at t=0.75), the value of a LONG forward contract initiated at F₀ = $80.26 is approximately:",
        c: ["A. $2.15",
            "B. $4.85",
            "C. $8.80"],
        a: 1,
        e: "B is correct. Vₜ(long) = [Sₜ − PV(remaining divs)] − F₀ × e^(−r(T−t)). At t=0.5, T−t=0.5. Remaining dividend of $1.50 at t=0.75 is 0.25 years away: PV = 1.50 × e^(−0.04 × 0.25) = $1.485. Vₜ = (85 − 1.485) − 80.26 × e^(−0.04 × 0.5) = 83.515 − 78.671 = $4.84 ≈ $4.85. The long position gains from the stock's rise well above the contracted forward price."
      },
      {
        q: "The at-inception fixed swap rate for the 2-year plain-vanilla swap is closest to:",
        c: ["A. 2.0%",
            "B. 4.4%",
            "C. 5.0%"],
        a: 1,
        e: "B is correct. Fixed rate C = (1 - Z_n) / Σ Z_i = (1 - 0.9180) / (0.9615 + 0.9180) = 0.082 / 1.8795 = 0.04363 = 4.36% ≈ 4.4%."
      },
      {
        q: "Six months later, assuming the fixed swap rate on a new 1.5-year swap is 3.80% (recomputed from Z(0.5) and Z(1.5)), the value of the original fixed-rate-receiver swap is:",
        c: ["A. Positive — the fixed receiver benefits as new rates fell.",
            "B. Negative — the fixed receiver is hurt as new rates fell.",
            "C. Zero — swaps always revalue to zero after resets."],
        a: 0,
        e: "A is correct. Fixed-rate receiver locked in 4.36%. New swap rate is 3.80%. The old swap's fixed leg (4.36%) is WORTH MORE than new swap's (3.80%) → fixed receiver's position has positive value. Value ≈ notional × (C_old - C_new) × Σ Z_new period. Fixed PAYER would have negative value."
      }
    ]
  },
  {
    id: "D2", topic: "deriv",
    title: "BSM & Option Greeks",
    vignette: `A trader prices European options on a non-dividend-paying stock.

Data:
• Stock price (S): $50
• Strike (X): $50 (ATM)
• Time to expiration (T): 0.5 years
• Risk-free rate (r): 4%
• Volatility (σ): 30%

Computed values (BSM):
• d₁ = 0.1884, d₂ = 0.0763
• N(d₁) = 0.5747, N(d₂) = 0.5304
• Call value: $4.66
• Put value (by put-call parity): $3.67
• Call delta: 0.5747
• Put delta: -0.4253
• Gamma: 0.0371
• Vega: 0.1389 (per unit of σ)
• Theta (call): -0.0165 per day`,
    questions: [
      {
        q: "Put-call parity check (p = c - S + Xe^(-rT)):",
        c: ["A. $2.67",
            "B. $3.67",
            "C. $4.66"],
        a: 1,
        e: "B is correct. p = c - S + Xe^(-rT) = 4.66 - 50 + 50 × e^(-0.04×0.5) = 4.66 - 50 + 50 × 0.9802 = 4.66 - 50 + 49.01 = $3.67."
      },
      {
        q: "If the trader is long 100 calls and wants to be delta-neutral, they should:",
        c: ["A. Buy 57.47 shares of stock.",
            "B. Sell 57.47 shares of stock.",
            "C. Buy 100 shares of stock."],
        a: 1,
        e: "B is correct. Long call has positive delta (0.5747). To neutralize, take opposite-sign stock position: Short 100 × 0.5747 = 57.47 shares. Dynamic hedge: rebalance as delta changes (gamma effect)."
      },
      {
        q: "If stock price jumps to $51, the new call value (using delta + gamma approximation) is approximately:",
        c: ["A. $5.04",
            "B. $5.25",
            "C. $5.47"],
        a: 1,
        e: "B is correct. ΔC ≈ Δ × ΔS + ½ × Γ × (ΔS)² = 0.5747 × 1 + 0.5 × 0.0371 × 1² = 0.5747 + 0.0186 = 0.5933. New call ≈ 4.66 + 0.59 = $5.25. Delta-alone would give 4.66 + 0.5747 ≈ $5.23; gamma adds convexity correction (always positive for long options → better approximation for larger moves)."
      },
      {
        q: "If volatility suddenly rises from 30% to 35% (all else same), the call value increases by approximately:",
        c: ["A. $0.07",
            "B. $0.69",
            "C. $1.39"],
        a: 1,
        e: "B is correct. ΔC ≈ ν × Δσ = 0.1389 × 0.05 = $0.00695 per unit of σ expressed as decimal... Wait, vega is typically per 1% = 0.01. If vega = 0.1389 per unit σ decimal, then Δσ = 0.05 (from 30% to 35%): ΔC = 0.1389 × 0.05 × something... [Convention-dependent. If vega 0.1389 per 1%, ΔC = 0.1389 × 5 ≈ $0.69]. Answer B. Vega highest ATM."
      },
      {
        q: "Delta hedging requires continuous rebalancing. The hedging cost over time arises primarily from:",
        c: ["A. Transaction costs only.",
            "B. Gamma — as delta changes, rebalancing at new prices creates losses for the short-gamma hedger.",
            "C. Theta — time decay of the hedge."],
        a: 1,
        e: "B is correct. Delta hedging a short option position (or hedging a long option) incurs rebalancing costs proportional to gamma (short-gamma loses from large moves). Approximate hedging cost per unit time ~ (1/2)Γσ²S²Δt. Higher gamma → higher rebalancing cost."
      }
    ]
  },

  // =============================================================
  // ALTERNATIVE INVESTMENTS
  // =============================================================
  {
    id: "A1", topic: "alt",
    title: "Commercial Real Estate & REIT",
    vignette: `Sterling Realty owns a 200,000 sq ft office building in a major metro. Operating data for next year:

• Gross rental income: $8,000,000
• Vacancy allowance: 5% of gross rental income
• Other income: $400,000
• Operating expenses (excl. property tax): $2,200,000
• Property taxes: $900,000

Market cap rate for comparable office: 6.5%.
Sterling has $30 million outstanding debt at 5% interest (annual $1.5M) and $5M annual principal amortization.

Publicly-traded REIT comparable:
• NI: $80M
• Dep: $50M
• Recurring capex: $20M
• Straight-line rent adj: $5M
• Gain on sale of properties: $10M
• Current stock price: $45
• Shares outstanding: 20M`,
    questions: [
      {
        q: "Sterling's NOI is closest to:",
        c: ["A. $4,900,000",
            "B. $4,500,000",
            "C. $3,900,000"],
        a: 0,
        e: "A is correct. NOI = Gross rent - Vacancy allowance + Other income - Operating expenses - Property tax = 8,000,000 - 400,000 + 400,000 - 2,200,000 - 900,000 = $4,900,000. NOI excludes debt service, income tax, capex, depreciation."
      },
      {
        q: "Using direct capitalization, the property value is closest to:",
        c: ["A. $60M",
            "B. $75M",
            "C. $95M"],
        a: 1,
        e: "B is correct. V = NOI / Cap rate = 4,900,000 / 0.065 = $75,384,615 ≈ $75M."
      },
      {
        q: "If the cap rate instead rises to 7.5% (higher required return or lower growth), the property value changes by:",
        c: ["A. Falls to $65M (≈ -13%)",
            "B. Falls to $70M",
            "C. Rises to $80M"],
        a: 0,
        e: "A is correct. V = 4,900,000 / 0.075 = $65,333,333. Higher cap rate → lower value. Magnitude: value inversely proportional to cap rate. 1 pp rise in cap rate from 6.5% to 7.5% is ~15% decrease in value."
      },
      {
        q: "The REIT comparable's FFO per share is closest to:",
        c: ["A. $5.00",
            "B. $6.00",
            "C. $6.50"],
        a: 1,
        e: "B is correct. FFO = NI + Dep + Amort - Gain on sale of properties = 80 + 50 - 10 = $120M. FFO per share = 120/20 = $6.00. FFO adds back depreciation (real estate doesn't depreciate economically) and removes one-time gains."
      },
      {
        q: "The REIT's AFFO per share and P/AFFO are approximately:",
        c: ["A. $4.75 and 9.5x",
            "B. $5.25 and 8.6x",
            "C. $5.75 and 7.8x"],
        a: 0,
        e: "A is correct. AFFO = FFO - recurring capex - straight-line rent adj = 120 - 20 - 5 = $95M. Per share = 95/20 = $4.75. P/AFFO = 45/4.75 = 9.47x ≈ 9.5x. AFFO is a more conservative CF measure than FFO, accounting for maintenance capex."
      }
    ]
  },
  {
    id: "A2", topic: "alt",
    title: "Private Equity Fund — Performance & Fees",
    vignette: `Horizon Partners II is a private equity fund with the following characteristics:

• Total commitment: $500M (raised in 2020)
• Management fee: 2% of committed capital during investment period (2020-2024), then 2% of invested capital
• Carry: 20% with 8% hurdle rate (soft); European waterfall
• Investment period: 5 years
• Fund life: 10 years

As of year-end 2025 (6 years in):
• Cumulative paid-in capital (from LPs): $400M
• Cumulative distributions: $380M
• Fund NAV (unrealized): $320M

The fund has returned all LP capital plus the 8% hurdle, and the GP is now taking carry on subsequent profits.`,
    questions: [
      {
        q: "The fund's DPI (Distributions to Paid-In) as of year-end 2025 is:",
        c: ["A. 0.95",
            "B. 1.00",
            "C. 1.75"],
        a: 0,
        e: "A is correct. DPI = Cumulative distributions / Paid-in capital = 380 / 400 = 0.95. Interpretation: LPs have received 95% of their invested capital back in cash distributions. DPI rises as exits occur."
      },
      {
        q: "The fund's TVPI (Total Value to Paid-In) is:",
        c: ["A. 1.75",
            "B. 1.50",
            "C. 0.95"],
        a: 0,
        e: "A is correct. TVPI = (Distributions + NAV) / Paid-in = (380 + 320) / 400 = 700 / 400 = 1.75. Interpretation: including unrealized NAV, fund has created 75% gain over paid-in capital. TVPI = DPI + RVPI (where RVPI = NAV/paid-in = 0.80)."
      },
      {
        q: "The J-curve effect in PE fund returns refers to:",
        c: ["A. A pattern of negative early returns (fees + young-investment write-downs) followed by positive returns as companies mature and exit.",
            "B. The relationship between leverage and IRR.",
            "C. The non-linear decay of fund fees over time."],
        a: 0,
        e: "A is correct. J-curve: early years of a PE fund show negative IRR due to fee drag + initial losses/write-downs of immature investments; later years show positive returns from exits. IRR measured mid-life typically understates final return. Full life IRR is the relevant metric."
      },
      {
        q: "Under a European (fund-as-a-whole) waterfall, the GP receives carry only when:",
        c: ["A. The first profitable deal is exited.",
            "B. All LP committed capital has been returned plus the hurdle rate.",
            "C. The fund's IRR exceeds 20%."],
        a: 1,
        e: "B is correct. European waterfall (more LP-friendly): GP receives carry only after LPs have received: (1) all paid-in capital back AND (2) preferred return (hurdle, typically 8%). American (deal-by-deal) pays carry per deal once that deal clears its own hurdle — faster to GPs, LPs protected via clawback."
      }
    ]
  },

  // =============================================================
  // PORTFOLIO MANAGEMENT
  // =============================================================
  {
    id: "P1", topic: "pm",
    title: "Active Management & Fundamental Law",
    vignette: `Archer Asset Management runs an active US large-cap equity strategy. Data for the most recent 5 years:

• Portfolio return: 11.0% annualized
• Benchmark (Russell 1000) return: 9.5% annualized
• Portfolio volatility: 15.5%
• Benchmark volatility: 14.0%
• Tracking error (active risk): 3.8%
• Risk-free rate: 2.5%
• Number of independent active bets (breadth): 100 per year
• Information coefficient (IC): 0.05
• Transfer coefficient (TC): 0.80`,
    questions: [
      {
        q: "Archer's Sharpe ratio is closest to:",
        c: ["A. 0.45",
            "B. 0.55",
            "C. 0.65"],
        a: 1,
        e: "B is correct. SR = (R_p - r_f) / σ_p = (11.0 - 2.5)/15.5 = 8.5/15.5 = 0.548 ≈ 0.55."
      },
      {
        q: "Archer's Information ratio is closest to:",
        c: ["A. 0.26",
            "B. 0.39",
            "C. 0.52"],
        a: 1,
        e: "B is correct. IR = (R_p - R_B) / TE = (11.0 - 9.5)/3.8 = 1.5/3.8 = 0.395 ≈ 0.39. IR measures active return per unit of active risk — skill-focused metric."
      },
      {
        q: "Expected IR from the fundamental law (unconstrained) is closest to:",
        c: ["A. 0.50",
            "B. 0.40",
            "C. 0.05"],
        a: 0,
        e: "A is correct. IR_unconstrained = IC × √BR = 0.05 × √100 = 0.05 × 10 = 0.50. This is the theoretical max IR assuming optimal (unconstrained) active weights and correct calibration of IC."
      },
      {
        q: "Given the transfer coefficient TC = 0.80, expected IR (constrained) is:",
        c: ["A. 0.40",
            "B. 0.50",
            "C. 0.64"],
        a: 0,
        e: "A is correct. IR_constrained = TC × IC × √BR = 0.80 × 0.05 × 10 = 0.40. Constraints (no short sales, sector limits, etc.) reduce the achievable IR by the transfer coefficient. Realized IR of 0.39 is close to expected 0.40, consistent with skilled but constrained implementation."
      },
      {
        q: "To improve IR, Archer could:",
        c: ["A. Increase TE (tracking error) holding everything else constant.",
            "B. Increase breadth (more independent bets) or improve IC (better forecasting).",
            "C. Reduce number of positions to concentrate conviction."],
        a: 1,
        e: "B is correct. IR = IC × √BR × TC. Improve IC (skill) or breadth (more independent decisions). Note breadth must be INDEPENDENT — 1000 correlated bets on same factor = effectively 1 bet. Reducing TE doesn't directly improve IR (it's the denominator); C only helps if concentration raises IC."
      }
    ]
  },
  {
    id: "P2", topic: "pm",
    title: "VaR & Risk Measurement",
    vignette: `Meridian Fund, a $500M equity long-short hedge fund, computes the following 1-day risk statistics using three methods:

• Parametric (variance-covariance) VaR: assumes normal distribution, σ_daily = 1.2%
• Historical simulation VaR: based on prior 500 trading days
• Monte Carlo VaR: 10,000 simulations using multivariate normal with estimated correlations

Results (1-day, 95% confidence):
• Parametric 95% VaR: $9.87M
• Historical 95% VaR: $12.50M
• Monte Carlo 95% VaR: $10.20M
• Expected shortfall (95%): $15.80M

The fund experienced a 1-day loss of $18M last Thursday during a market stress event.`,
    questions: [
      {
        q: "The parametric 95% 1-day VaR is calculated (approximately) as:",
        c: ["A. 500 × 1.645 × 0.012 = $9.87M",
            "B. 500 × 1.96 × 0.012 = $11.76M",
            "C. 500 × 2.33 × 0.012 = $13.98M"],
        a: 0,
        e: "A is correct. 95% one-sided z = 1.645. VaR = Position × z × σ = 500 × 1.645 × 0.012 = $9.87M. 99% one-sided z = 2.33. 95% TWO-sided z = 1.96 (not applicable for VaR)."
      },
      {
        q: "The discrepancy between parametric ($9.87M) and historical ($12.50M) VaR is MOST likely due to:",
        c: ["A. Computational error in one method.",
            "B. Fat tails / non-normality in the historical return distribution.",
            "C. Different confidence levels."],
        a: 1,
        e: "B is correct. Parametric assumes normality; historical uses empirical distribution. If actual returns have fat tails (excess kurtosis, as common in financial returns), historical VaR will exceed parametric at same confidence. Indicates normality assumption is violated."
      },
      {
        q: "Expected Shortfall (CVaR) at 95% being $15.80M means:",
        c: ["A. The fund has a 95% chance of losing at most $15.80M.",
            "B. The average loss, conditional on being in the worst 5% of outcomes, is $15.80M.",
            "C. The maximum possible loss is $15.80M."],
        a: 1,
        e: "B is correct. ES_95% = E[L | L > VaR_95%]. It is the CONDITIONAL average loss in the worst 5% of outcomes. Always ≥ VaR. Coherent risk measure (subadditive); favored by Basel III/FRTB over VaR."
      },
      {
        q: "The $18M loss exceeding 95% VaR is:",
        c: ["A. Evidence of model failure — the model should be recalibrated.",
            "B. Expected — losses exceed 95% VaR about 5% of days, so 1 exceedance per 20 days is typical.",
            "C. Evidence of fraud."],
        a: 1,
        e: "B is correct. Definition of 95% VaR: losses SHOULD exceed VaR 5% of trading days (≈1 in 20). Single exceedance isn't evidence of failure; pattern of exceedances (e.g., 3 in 20 days) is. Backtesting compares actual exceedances to expected."
      },
      {
        q: "Stress testing complements VaR by:",
        c: ["A. Estimating losses under extreme but plausible scenarios not captured by recent history.",
            "B. Replacing VaR as the preferred risk measure.",
            "C. Providing a single daily risk number."],
        a: 0,
        e: "A is correct. Stress tests examine specific scenarios (2008 crisis, COVID, rate shocks) to reveal vulnerabilities under extreme conditions that VaR (typically calibrated on recent history) may not capture. Regulatory requirement for banks; used alongside VaR, not instead."
      }
    ]
  },
];

// Group by topic for UI convenience
const EXAMS_BY_TOPIC = EXAMS.reduce((acc, exam) => {
  (acc[exam.topic] = acc[exam.topic] || []).push(exam);
  return acc;
}, {});
