/* ============================================================================
   CFA L2 study-notes — curriculum data (topics → readings → LOS → lessons)
   ----------------------------------------------------------------------------
   LOS are SUMMARIZED IN ORIGINAL WORDING (not the official CFA verbatim text)
   and are a best-effort outline to verify against the current official
   curriculum. Add a lesson = add one entry to LESSONS with its readingId + los.
   ============================================================================ */

const TOPICS = [
  {id:"ethics", name:"Ethics & Professional Standards", color:"#7A5EA6"},
  {id:"quant",  name:"Quantitative Methods",            color:"#C06A2A"},
  {id:"econ",   name:"Economics",                       color:"#2F7A6F"},
  {id:"fsa",    name:"Financial Statement Analysis",    color:"#3F7CA8"},
  {id:"corp",   name:"Corporate Issuers",               color:"#8A6D3B"},
  {id:"equity", name:"Equity Valuation",                color:"#2F8F6B"},
  {id:"fi",     name:"Fixed Income",                    color:"#B0483B"},
  {id:"deriv",  name:"Derivatives",                     color:"#5B6BB0"},
  {id:"alt",    name:"Alternative Investments",         color:"#7D8B3A"},
  {id:"pm",     name:"Portfolio Management",            color:"#2E5E8C"},
];

const READINGS = [
  // ===== Ethics & Professional Standards =====
  {id:"ethics-1", topic:"ethics", name:"Code of Ethics and Standards of Professional Conduct", los:[
    {id:"a",t:"Describe the structure of CFA Institute's Professional Conduct Program and its enforcement process"},
    {id:"b",t:"Identify the six components of the Code of Ethics and the seven Standards of Professional Conduct"},
    {id:"c",t:"Explain the ethical duties members owe to the profession, clients, employers, and markets"}]},
  {id:"ethics-2", topic:"ethics", name:"Guidance for Standards I–VII", los:[
    {id:"a",t:"Interpret how each of the seven Standards applies to given professional situations"},
    {id:"b",t:"Distinguish conduct that complies with the Standards from conduct that breaches them"},
    {id:"c",t:"Recommend practices and policies that help firms and individuals meet each Standard"},
    {id:"d",t:"Explain how the Standards address conflicts of interest, disclosure, and fair dealing"}]},
  {id:"ethics-3", topic:"ethics", name:"Application of the Code and Standards: Level II", los:[
    {id:"a",t:"Evaluate the ethics of practitioner actions in realistic Level II case scenarios"},
    {id:"b",t:"Identify which specific Standards are implicated by conduct described in a vignette"},
    {id:"c",t:"Recommend the appropriate ethical response or corrective action for a given case"}]},
  {id:"ethics-4", topic:"ethics", name:"Global Investment Performance Standards (GIPS)", los:[
    {id:"a",t:"Explain why GIPS was created, who may claim compliance, and its key objectives"},
    {id:"b",t:"Describe the scope of firm-wide compliance and the definition and role of composites"},
    {id:"c",t:"Explain the structure and major sections of the GIPS standards"},
    {id:"d",t:"Describe requirements for input data, return calculation, and composite construction"},
    {id:"e",t:"Identify the disclosure, presentation, and reporting requirements of GIPS"}]},

  // ===== Quantitative Methods =====
  {id:"quant-1", topic:"quant", name:"Basics of Multiple Regression and Underlying Assumptions", los:[
    {id:"a",t:"Explain why and when multiple regression with several independent variables is used"},
    {id:"b",t:"Describe the standard assumptions behind a multiple linear regression model"},
    {id:"c",t:"Interpret estimated slope and intercept coefficients in a multiple regression"},
    {id:"d",t:"Use scatterplots and residual plots to check whether regression assumptions hold"}]},
  {id:"quant-2", topic:"quant", name:"Evaluating Regression Model Fit and Interpreting Model Results", los:[
    {id:"a",t:"Compare adjusted R-squared with R-squared and explain the tradeoff of adding variables"},
    {id:"b",t:"Use AIC and BIC to rank and select among competing models"},
    {id:"c",t:"Build and interpret t-tests and F-tests for individual and joint coefficient significance"},
    {id:"d",t:"Test hypotheses on single coefficients and on groups of coefficients jointly"},
    {id:"e",t:"Compute and interpret predicted values and confidence intervals for a forecast"}]},
  {id:"quant-3", topic:"quant", name:"Model Misspecification", los:[
    {id:"a",t:"Describe common ways models are misspecified and their consequences for inference"},
    {id:"b",t:"Explain heteroskedasticity, how to detect it, and how to correct for it"},
    {id:"c",t:"Explain serial correlation, how to detect it, and how to correct for it"},
    {id:"d",t:"Explain multicollinearity, how to detect it, and how to address it"},
    {id:"e",t:"Describe influential data points and methods to identify outliers and leverage"}]},
  {id:"quant-4", topic:"quant", name:"Extensions of Multiple Regression", los:[
    {id:"a",t:"Describe influential observations and distinguish high-leverage points from outliers"},
    {id:"b",t:"Create and interpret dummy variables to model qualitative factors"},
    {id:"c",t:"Use interaction terms to capture combined effects of independent variables"},
    {id:"d",t:"Describe logistic regression and interpret its coefficients and odds ratios"},
    {id:"e",t:"Evaluate the fit and predictive quality of a logistic regression model"}]},
  {id:"quant-5", topic:"quant", name:"Time-Series Analysis", los:[
    {id:"a",t:"Estimate and interpret linear and log-linear trend models for a time series"},
    {id:"b",t:"Explain autoregressive models and test for serial correlation in residuals"},
    {id:"c",t:"Explain mean reversion and compute an AR model's long-run value"},
    {id:"d",t:"Describe random walks, unit roots, and tests for nonstationarity"},
    {id:"e",t:"Explain seasonality and ARCH effects and how to adjust models for them"},
    {id:"f",t:"Select an appropriate time-series model and evaluate its forecasting accuracy"}]},
  {id:"quant-6", topic:"quant", name:"Machine Learning", los:[
    {id:"a",t:"Distinguish supervised, unsupervised, and deep learning approaches"},
    {id:"b",t:"Describe overfitting and methods such as regularization to reduce it"},
    {id:"c",t:"Explain penalized regression, support vector machines, and k-nearest neighbors"},
    {id:"d",t:"Explain classification and regression trees, ensembles, and random forests"},
    {id:"e",t:"Describe unsupervised methods including clustering and dimension reduction"},
    {id:"f",t:"Describe neural networks, deep learning nets, and reinforcement learning"}]},
  {id:"quant-7", topic:"quant", name:"Big Data Projects", los:[
    {id:"a",t:"Identify the steps and characteristics of a financial data analysis project"},
    {id:"b",t:"Describe cleansing and preparation of structured and unstructured text data"},
    {id:"c",t:"Explain feature engineering and selection for model inputs"},
    {id:"d",t:"Describe model training, tuning, and evaluation of performance metrics"},
    {id:"e",t:"Interpret evaluation outputs such as confusion matrices, ROC curves, and error metrics"}]},

  // ===== Economics =====
  {id:"econ-1", topic:"econ", name:"Currency Exchange Rates: Understanding Equilibrium Value", los:[
    {id:"a",t:"Compute currency cross-rates and mark-to-market value of a forward contract"},
    {id:"b",t:"Explain forward premiums/discounts and covered interest rate parity arbitrage links"},
    {id:"c",t:"Describe international parity conditions: uncovered parity, PPP, Fisher and real-rate effects"},
    {id:"d",t:"Use parity relations to explain how expected exchange rates move over time"},
    {id:"e",t:"Describe the FX carry trade and its link to uncovered interest rate parity"},
    {id:"f",t:"Explain how balance-of-payments flows influence currency values"},
    {id:"g",t:"Analyze monetary and fiscal policy effects on rates via the Mundell-Fleming model"},
    {id:"h",t:"Link exchange rate regimes and current-account balances via flow and portfolio-balance views"},
    {id:"i",t:"Describe warning signs and characteristics of currency crises"}]},
  {id:"econ-2", topic:"econ", name:"Economic Growth", los:[
    {id:"a",t:"Compare potential vs actual GDP and why growth matters for equity/fixed-income returns"},
    {id:"b",t:"Identify preconditions that support sustained economic growth"},
    {id:"c",t:"Explain the production function and growth accounting for output sources"},
    {id:"d",t:"Distinguish capital deepening from technological progress in raising output"},
    {id:"e",t:"Assess how natural resources, labor, and demographics affect growth"},
    {id:"f",t:"Explain how trade openness and capital flows influence growth"},
    {id:"g",t:"Compare classical, neoclassical, and endogenous growth theories"},
    {id:"h",t:"Explain convergence hypotheses and their implications across economies"}]},
  {id:"econ-3", topic:"econ", name:"Economics of Regulation", los:[
    {id:"a",t:"Describe the economic rationale for regulatory intervention in markets"},
    {id:"b",t:"Explain regulatory capture, competition, and independence concepts"},
    {id:"c",t:"Classify types of regulation and the bodies that create them"},
    {id:"d",t:"Describe regulation of commerce, financial markets, and antitrust"},
    {id:"e",t:"Describe tools regulators use, including price and quantity controls"},
    {id:"f",t:"Assess the costs and benefits arising from regulation"},
    {id:"g",t:"Evaluate how specific regulations affect an industry, sector, or company"}]},

  // ===== Financial Statement Analysis =====
  {id:"fsa-1", topic:"fsa", name:"Intercorporate Investments", los:[
    {id:"a",t:"Describe how the categories of intercorporate investments are classified and reported"},
    {id:"b",t:"Explain accounting for financial assets held at fair value versus amortized cost"},
    {id:"c",t:"Analyze the equity method used for investments in associates"},
    {id:"d",t:"Compare acquisition-method accounting for business combinations and consolidation"},
    {id:"e",t:"Explain how non-controlling interest and goodwill are measured and reported"},
    {id:"f",t:"Describe the accounting for special purpose and variable interest entities"},
    {id:"g",t:"Compare how IFRS and US GAAP treat these investment categories"}]},
  {id:"fsa-2", topic:"fsa", name:"Employee Compensation: Post-Employment and Share-Based", los:[
    {id:"a",t:"Distinguish defined contribution from defined benefit pension plans and their reporting"},
    {id:"b",t:"Explain how a defined benefit obligation and net pension asset or liability are measured"},
    {id:"c",t:"Describe the pension cost components recognized in P&L versus OCI"},
    {id:"d",t:"Compare IFRS and US GAAP treatment of periodic pension and post-employment costs"},
    {id:"e",t:"Interpret key assumptions and disclosures affecting pension expense and obligations"},
    {id:"f",t:"Adjust financial statements for differences in pension and OPEB assumptions"},
    {id:"g",t:"Explain the accounting for and analysis of share-based compensation"}]},
  {id:"fsa-3", topic:"fsa", name:"Multinational Operations", los:[
    {id:"a",t:"Distinguish functional, presentation, and local currency and the relevant exchange rates"},
    {id:"b",t:"Compare the current rate and temporal methods of foreign currency translation"},
    {id:"c",t:"Analyze how each translation method affects the statements and financial ratios"},
    {id:"d",t:"Calculate the translation gain or loss and where it is reported"},
    {id:"e",t:"Explain how a subsidiary in a hyperinflationary economy is translated"},
    {id:"f",t:"Analyze the effect of multinational operations on effective tax rate and disclosures"},
    {id:"g",t:"Explain how translation choices affect the quality and comparability of results"}]},
  {id:"fsa-4", topic:"fsa", name:"Analysis of Financial Institutions", los:[
    {id:"a",t:"Describe how banks and insurers differ from other companies for analysis purposes"},
    {id:"b",t:"Explain the CAMELS framework for evaluating a bank"},
    {id:"c",t:"Analyze a bank's capital adequacy, asset quality, and liquidity"},
    {id:"d",t:"Describe factors beyond CAMELS relevant to assessing a bank"},
    {id:"e",t:"Evaluate a bank using financial and disclosure information in an example"},
    {id:"f",t:"Analyze the performance and reporting of property-casualty and life insurers"}]},
  {id:"fsa-5", topic:"fsa", name:"Evaluating Quality of Financial Reports", los:[
    {id:"a",t:"Distinguish reporting quality from earnings or results quality"},
    {id:"b",t:"Describe a spectrum ranking financial reporting from high quality to fraud"},
    {id:"c",t:"Explain conditions and motivations that lead to low-quality reporting"},
    {id:"d",t:"Describe mechanisms that discipline and constrain financial reporting quality"},
    {id:"e",t:"Identify accounting choices and warning signs that distort earnings and cash flow"},
    {id:"f",t:"Evaluate the quality of a company's earnings, cash flow, and balance sheet"},
    {id:"g",t:"Describe indicators used to assess the risk of financial reporting problems"}]},
  {id:"fsa-6", topic:"fsa", name:"Financial Statement Modeling", los:[
    {id:"a",t:"Explain the steps and objectives in building a company financial model"},
    {id:"b",t:"Forecast revenue using a top-down, bottom-up, or hybrid approach"},
    {id:"c",t:"Project operating costs, margins, and the income statement"},
    {id:"d",t:"Model the balance sheet and cash flow statement from operating drivers"},
    {id:"e",t:"Assess the effects of competition, inflation, and technology on forecasts"},
    {id:"f",t:"Explain how behavioral biases affect analyst forecasts and modeling"},
    {id:"g",t:"Build and interpret scenario and sensitivity analyses in a model"}]},

  // ===== Corporate Issuers =====
  {id:"corp-1", topic:"corp", name:"Analysis of Dividends and Share Repurchases", los:[
    {id:"a",t:"Outline competing dividend-policy theories and how each implies an effect (or none) on share value"},
    {id:"b",t:"Explain the signaling content dividend changes convey to investors"},
    {id:"c",t:"Show how agency conflicts between managers, shareholders, and bondholders shape payout policy"},
    {id:"d",t:"Identify practical factors—taxes, flotation, clientele, constraints—that drive payout decisions"},
    {id:"e",t:"Compute and read dividend coverage using earnings and free cash flow to equity"},
    {id:"f",t:"Contrast the main mechanisms firms use to buy back their own shares"},
    {id:"g",t:"Calculate how a buyback shifts EPS and book value per share"},
    {id:"h",t:"Compare buybacks versus cash dividends for their effect on shareholder wealth"}]},
  {id:"corp-2", topic:"corp", name:"Environmental, Social, and Governance (ESG) Considerations in Investment Analysis", los:[
    {id:"a",t:"Contrast how ownership and voting structures differ globally and affect governance"},
    {id:"b",t:"Analyze conflicts of interest that arise among a firm's various stakeholders"},
    {id:"c",t:"Explain how concentrated versus dispersed ownership influences governance quality"},
    {id:"d",t:"Describe methods for embedding ESG factors into equity and credit analysis"},
    {id:"e",t:"Assess how material ESG risks and opportunities feed into valuation inputs"},
    {id:"f",t:"Judge the effect of governance strength on long-run firm performance and risk"}]},
  {id:"corp-3", topic:"corp", name:"Cost of Capital: Advanced Topics", los:[
    {id:"a",t:"Explain the macro and firm-level drivers that move a company's cost of capital"},
    {id:"b",t:"Compare approaches for estimating the cost of debt for different issuers"},
    {id:"c",t:"Estimate cost of equity using CAPM, expanded CAPM, and build-up models"},
    {id:"d",t:"Derive beta and equity cost for private or thinly traded companies"},
    {id:"e",t:"Apply a country risk premium when pricing equity in emerging markets"},
    {id:"f",t:"Incorporate ESG-related risks into cost-of-capital estimates"},
    {id:"g",t:"Discuss how business and financial risk factor into required returns"}]},
  {id:"corp-4", topic:"corp", name:"Corporate Restructuring (Mergers and Acquisitions)", los:[
    {id:"a",t:"Classify restructuring types—expansion, contraction, ownership change—and their motives"},
    {id:"b",t:"Explain the preliminary screening and rationale evaluation of a deal"},
    {id:"c",t:"Apply comparable-company, comparable-transaction, and DCF valuation to a target"},
    {id:"d",t:"Estimate synergies and assess whether a transaction creates value"},
    {id:"e",t:"Model a restructuring's impact on the acquirer's financial statements"},
    {id:"f",t:"Evaluate financing choices and their effect on deal accretion or dilution"}]},

  // ===== Equity Valuation =====
  {id:"equity-1", topic:"equity", name:"Equity Valuation: Applications and Processes", los:[
    {id:"a",t:"Define value types and their uses in valuation"},
    {id:"b",t:"Explain intrinsic value and why market prices may misprice assets"},
    {id:"c",t:"Describe going-concern vs liquidation value assumptions"},
    {id:"d",t:"Describe applications of equity valuation by analysts"},
    {id:"e",t:"Outline the steps of the equity valuation process"},
    {id:"f",t:"Discuss elements of a thorough industry and competitive analysis"},
    {id:"g",t:"Contrast absolute vs relative valuation model categories"},
    {id:"h",t:"Explain broad model-selection criteria and communicating results in a report"}]},
  {id:"equity-2", topic:"equity", name:"Discounted Dividend Valuation", los:[
    {id:"a",t:"Compare dividend, free cash flow, and residual income discount models"},
    {id:"b",t:"Value equity using single- and multi-period DDM"},
    {id:"c",t:"Apply the Gordon growth model and analyze its assumptions"},
    {id:"d",t:"Estimate implied growth or required return from the Gordon model"},
    {id:"e",t:"Value common and preferred shares with constant-growth methods"},
    {id:"f",t:"Use two- and three-stage DDMs including the H-model"},
    {id:"g",t:"Estimate required return and calculate sustainable growth via PRAT"},
    {id:"h",t:"Evaluate strengths, limits, and appropriate uses of multistage DDMs"}]},
  {id:"equity-3", topic:"equity", name:"Free Cash Flow Valuation", los:[
    {id:"a",t:"Compare FCFF and FCFE approaches to valuing equity"},
    {id:"b",t:"Explain uses of FCF models and treatment of dividends vs FCF"},
    {id:"c",t:"Compute FCFF and FCFE from net income, EBIT, EBITDA, or CFO"},
    {id:"d",t:"Analyze how noncash items and working capital affect free cash flow"},
    {id:"e",t:"Evaluate effects of financing and nonoperating items on FCFF/FCFE"},
    {id:"f",t:"Forecast free cash flows using sales-based and other methods"},
    {id:"g",t:"Apply single-stage and multistage FCF valuation models"},
    {id:"h",t:"Explain sensitivity of FCF value to growth and required-return inputs"}]},
  {id:"equity-4", topic:"equity", name:"Market-Based Valuation: Price and Enterprise Value Multiples", los:[
    {id:"a",t:"Distinguish method-of-comparables from justified-fundamentals multiples"},
    {id:"b",t:"Compute and interpret P/E, P/B, P/S, and P/CF ratios"},
    {id:"c",t:"Address trailing vs forward, normalized earnings, and negative EPS issues"},
    {id:"d",t:"Derive justified multiples from fundamentals like growth and payout"},
    {id:"e",t:"Apply comparables using PEG, peer, industry, and market benchmarks"},
    {id:"f",t:"Calculate and use enterprise value multiples such as EV/EBITDA"},
    {id:"g",t:"Explain momentum indicators and their valuation use"},
    {id:"h",t:"Discuss weighting multiples and mispricing signals across stocks"}]},
  {id:"equity-5", topic:"equity", name:"Residual Income Valuation", los:[
    {id:"a",t:"Define residual income and economic and market value added"},
    {id:"b",t:"Value equity with the single- and multi-stage residual income models"},
    {id:"c",t:"Link residual income value to book value and future RI"},
    {id:"d",t:"Explain fundamentals driving residual income and justified P/B"},
    {id:"e",t:"Apply continuing-residual-income assumptions in multistage models"},
    {id:"f",t:"Compare residual income with DDM and FCF valuation approaches"},
    {id:"g",t:"Assess strengths, weaknesses, and appropriate use of RI models"},
    {id:"h",t:"Adjust accounting data for clean surplus and other RI issues"}]},
  {id:"equity-6", topic:"equity", name:"Private Company Valuation", los:[
    {id:"a",t:"Contrast public and private company valuation considerations"},
    {id:"b",t:"Describe reasons for and definitions of value in private valuation"},
    {id:"c",t:"Explain income, market, and asset-based valuation approaches"},
    {id:"d",t:"Estimate normalized earnings and cash flows for a private firm"},
    {id:"e",t:"Calculate value using capitalized cash flow and excess earnings methods"},
    {id:"f",t:"Estimate required return and discount rate for a private company"},
    {id:"g",t:"Apply market approach methods using transaction and guideline data"},
    {id:"h",t:"Explain discounts for lack of control and marketability"}]},

  // ===== Fixed Income =====
  {id:"fi-1", topic:"fi", name:"The Term Structure and Interest Rate Dynamics", los:[
    {id:"a",t:"Explain how spot, forward, and par rates relate and derive forward rates from spot rates"},
    {id:"b",t:"Describe forward pricing and forward rate models and how they link spot and forward curves"},
    {id:"c",t:"Use yield-to-maturity as a return proxy and explain riding-the-yield-curve strategies"},
    {id:"d",t:"Explain the swap rate curve, swap spreads, and why market participants use them"},
    {id:"e",t:"Describe spread measures such as Z-spread, TED spread, and Libor-OIS"},
    {id:"f",t:"Compare traditional term-structure theories: expectations, liquidity, segmentation, preferred habitat"},
    {id:"g",t:"Explain modern equilibrium and arbitrage-free term-structure models of rate dynamics"},
    {id:"h",t:"Describe yield-curve factors (level, steepness, curvature) and managing exposure to them"}]},
  {id:"fi-2", topic:"fi", name:"The Arbitrage-Free Valuation Framework", los:[
    {id:"a",t:"Explain what arbitrage means, including value additivity and dominance concepts"},
    {id:"b",t:"Value a fixed-rate option-free bond arbitrage-free using spot rates"},
    {id:"c",t:"Describe a binomial interest-rate tree and the backward-induction valuation process"},
    {id:"d",t:"Explain calibrating a binomial tree to be arbitrage-free and consistent with benchmark rates"},
    {id:"e",t:"Compute a bond's value using a calibrated binomial interest-rate tree"},
    {id:"f",t:"Describe pathwise valuation and use it to value a fixed-rate bond"},
    {id:"g",t:"Explain the Monte Carlo method for valuing path-dependent fixed-income securities"}]},
  {id:"fi-3", topic:"fi", name:"Valuation and Analysis of Bonds with Embedded Options", los:[
    {id:"a",t:"Describe fixed-income instruments containing simple and complex embedded options"},
    {id:"b",t:"Explain the value relationships between straight, callable, and putable bonds and their options"},
    {id:"c",t:"Value default-free callable and putable bonds using an interest-rate tree"},
    {id:"d",t:"Explain how interest-rate volatility and yield-curve level/shape affect embedded option value"},
    {id:"e",t:"Calculate and interpret option-adjusted spread (OAS) for a bond with options"},
    {id:"f",t:"Compute effective duration, one-sided durations, and key-rate durations for option bonds"},
    {id:"g",t:"Calculate and interpret effective convexity for bonds with embedded options"},
    {id:"h",t:"Describe convertible bond valuation, component parts, and risk-return characteristics"}]},
  {id:"fi-4", topic:"fi", name:"Credit Analysis Models", los:[
    {id:"a",t:"Explain expected exposure, loss given default, recovery rate, probability of default, and credit valuation adjustment"},
    {id:"b",t:"Explain the credit scoring and credit rating processes and their limitations"},
    {id:"c",t:"Compare structural and reduced-form models of credit risk"},
    {id:"d",t:"Value a risky bond and estimate its credit spread using the arbitrage-free framework"},
    {id:"e",t:"Interpret changes in a bond's credit spread and credit risk"},
    {id:"f",t:"Explain the term structure of credit spreads and its drivers"},
    {id:"g",t:"Describe the credit analysis approach applied to securitized debt"}]},
  {id:"fi-5", topic:"fi", name:"Credit Default Swaps", los:[
    {id:"a",t:"Describe credit default swaps and distinguish single-name, index, and tranche CDS"},
    {id:"b",t:"Explain credit events, physical and cash settlement, and CDS mechanics"},
    {id:"c",t:"Explain the principles and factors driving CDS pricing, including hazard rate and upfront payments"},
    {id:"d",t:"Describe how CDS spreads and the CDS curve are used to assess credit risk"},
    {id:"e",t:"Explain using CDS to manage or take on credit exposures"},
    {id:"f",t:"Describe basis, curve, and arbitrage trades exploiting CDS valuation differences"}]},

  // ===== Derivatives =====
  {id:"deriv-1", topic:"deriv", name:"Pricing and Valuation of Forward Commitments", los:[
    {id:"a",t:"Explain how forward and futures prices are derived from the underlying spot price and carry costs/benefits"},
    {id:"b",t:"Describe the difference between a forward price and the value of a forward contract over its life"},
    {id:"c",t:"Calculate and interpret the value of a forward or futures position at initiation, during, and at expiration"},
    {id:"d",t:"Explain how carry benefits (income) and carry costs affect pricing of forwards and futures"},
    {id:"e",t:"Describe how equity, interest rate, fixed-income, and currency forwards/futures are priced and valued"},
    {id:"f",t:"Explain why futures and forward prices can diverge given mark-to-market and rate correlation"},
    {id:"g",t:"Describe how interest rate swaps are priced by replicating them with a series of forward rate agreements"},
    {id:"h",t:"Calculate and interpret the fixed swap rate and the value of interest rate, currency, and equity swaps"}]},
  {id:"deriv-2", topic:"deriv", name:"Valuation of Contingent Claims", los:[
    {id:"a",t:"Describe and interpret the payoffs and moneyness of call and put options at expiration"},
    {id:"b",t:"Value an option using a one-period and two-period binomial model with risk-neutral probabilities"},
    {id:"c",t:"Explain the no-arbitrage replication and hedging logic underlying binomial option pricing"},
    {id:"d",t:"Describe how interest rate options are valued using a binomial lattice of forward rates"},
    {id:"e",t:"Identify the assumptions of the Black-Scholes-Merton model and interpret its option-value components"},
    {id:"f",t:"Apply the BSM model to value European options on equities, currencies, and interest rates"},
    {id:"g",t:"Interpret each option Greek (delta, gamma, theta, vega, rho) and describe delta hedging"},
    {id:"h",t:"Explain how implied volatility is derived and used in option pricing and trading"}]},

  // ===== Alternative Investments =====
  {id:"alt-1", topic:"alt", name:"Real Estate and Infrastructure", los:[
    {id:"a",t:"Classify real estate investments by debt vs equity and public vs private forms"},
    {id:"b",t:"Explain features, risks, and diversification benefits of real estate assets"},
    {id:"c",t:"Describe the main private real estate property sectors and value drivers"},
    {id:"d",t:"Apply income, cost, and sales-comparison methods to appraise property value"},
    {id:"e",t:"Calculate value using direct capitalization and discounted cash flow approaches"},
    {id:"f",t:"Compare appraisal-based and transaction-based real estate index construction"},
    {id:"g",t:"Describe infrastructure categories, forms of investment, and their risk-return traits"}]},
  {id:"alt-2", topic:"alt", name:"Investments in Real Estate Through Publicly Traded Securities", los:[
    {id:"a",t:"Describe REITs, REOCs, MBS, and other publicly traded real estate vehicles"},
    {id:"b",t:"Explain benefits and drawbacks of investing in listed real estate securities"},
    {id:"c",t:"Compare economic drivers and risks across major REIT property types"},
    {id:"d",t:"Justify use of net asset value in valuing a REIT or REOC"},
    {id:"e",t:"Value shares using FFO, AFFO, and price multiple approaches"},
    {id:"f",t:"Estimate REIT value with a discounted cash flow dividend model"}]},
  {id:"alt-3", topic:"alt", name:"Hedge Fund Strategies", los:[
    {id:"a",t:"Explain rationale for classifying hedge fund strategies into broad groups"},
    {id:"b",t:"Describe equity-related strategies including long/short and market neutral"},
    {id:"c",t:"Describe event-driven strategies such as merger and distressed investing"},
    {id:"d",t:"Describe relative value strategies like fixed-income and volatility arbitrage"},
    {id:"e",t:"Describe opportunistic macro and managed futures strategies"},
    {id:"f",t:"Explain how multi-manager strategies and fund allocation are structured"},
    {id:"g",t:"Analyze conditional risk factors and diversification effects in a portfolio"}]},
  {id:"alt-4", topic:"alt", name:"Introduction to Commodities and Commodity Derivatives", los:[
    {id:"a",t:"Compare characteristics of major commodity sectors and their life cycles"},
    {id:"b",t:"Compare spot and futures pricing and the drivers of each"},
    {id:"c",t:"Explain how storage, hedging pressure, and convenience yield shape futures curves"},
    {id:"d",t:"Describe backwardation and contango and their link to expected returns"},
    {id:"e",t:"Decompose commodity futures total return into spot, roll, and collateral yields"},
    {id:"f",t:"Contrast theories explaining commodity futures returns"},
    {id:"g",t:"Describe how commodity index construction affects investment performance"}]},
  {id:"alt-5", topic:"alt", name:"Private Equity Investments", los:[
    {id:"a",t:"Explain sources of value creation in private equity investing"},
    {id:"b",t:"Contrast buyout and venture capital investment approaches and structures"},
    {id:"c",t:"Describe how private equity funds align GP and LP interests via terms"},
    {id:"d",t:"Interpret fee structures, carried interest, clawbacks, and the J-curve"},
    {id:"e",t:"Discuss exit routes including IPO, trade sale, and secondary sale"},
    {id:"f",t:"Value target companies using DCF, comparables, and LBO methods"},
    {id:"g",t:"Evaluate private equity risk, return, and portfolio-level measures"}]},

  // ===== Portfolio Management =====
  {id:"eim", topic:"pm", name:"Economics and Investment Markets", los:[
    {id:"a",t:"Use the present-value model to explain asset prices; discount rate = real risk-free rate + expected inflation + risk premiums."},
    {id:"b",t:"Explain the inter-temporal rate of substitution (mt) and its inverse relationship with the real risk-free rate."},
    {id:"c",t:"Explain why risk aversion (concave utility) and the covariance of a payoff with mt give risky assets a premium over the risk-free rate."},
    {id:"d",t:"Explain how the real risk-free rate relates to expected real GDP growth and the volatility of GDP growth."}]},
  {id:"prr", topic:"pm", name:"Foundations · Risk & Return (review)", los:[
    {id:"a",t:"Explain the properties of the risk-free asset (σ=0, correlation=0) and the CAL/CML."},
    {id:"b",t:"Use the CAPM/SML to compute expected return and distinguish the CML (total risk) from the SML (systematic risk)."}]},
  {id:"pm-etf", topic:"pm", name:"Exchange-Traded Funds: Mechanics and Applications", los:[
    {id:"a",t:"Describe how ETF shares are created and redeemed through primary-market arbitrage with authorized participants"},
    {id:"b",t:"Explain how ETFs trade in secondary markets and how arbitrage keeps price near NAV"},
    {id:"c",t:"Describe sources of tracking error and reasons for premiums or discounts to NAV"},
    {id:"d",t:"Identify the main cost components and tax considerations of holding ETFs"},
    {id:"e",t:"Compare and evaluate ETF risks such as counterparty, fund-closure, and expectation-related risks"},
    {id:"f",t:"Describe how ETFs are used in allocation, rebalancing, and exposure-management strategies"}]},
  {id:"pm-mfm", topic:"pm", name:"Using Multifactor Models", los:[
    {id:"a",t:"Describe arbitrage pricing theory (APT), its assumptions, and the factor risk-premium structure"},
    {id:"b",t:"Calculate an asset's expected return using a multifactor model given factor sensitivities and premiums"},
    {id:"c",t:"Distinguish macroeconomic, fundamental, and statistical factor models and explain their structure"},
    {id:"d",t:"Decompose returns and explain factor exposures using a multifactor model"},
    {id:"e",t:"Explain uses of multifactor models in active management, portfolio construction, and risk analysis"}]},
  {id:"pm-mr", topic:"pm", name:"Measuring and Managing Market Risk", los:[
    {id:"a",t:"Explain value at risk (VaR) and describe its parameters and interpretation"},
    {id:"b",t:"Compare the parametric, historical simulation, and Monte Carlo methods of estimating VaR"},
    {id:"c",t:"Identify advantages, limitations, and extensions of VaR such as conditional VaR and marginal VaR"},
    {id:"d",t:"Describe sensitivity measures for equities, fixed income, and options and how they are used"},
    {id:"e",t:"Describe scenario analysis and stress testing as complements to VaR"},
    {id:"f",t:"Explain how risk measures and constraints are applied across different types of market participants"}]},
  {id:"pm-bt", topic:"pm", name:"Backtesting and Simulation", los:[
    {id:"a",t:"Describe the objectives, steps, and typical process of backtesting an investment strategy"},
    {id:"b",t:"Interpret metrics and visuals produced by a backtest of a factor-based strategy"},
    {id:"c",t:"Identify problems in backtesting such as survivorship bias, look-ahead bias, and data snooping"},
    {id:"d",t:"Explain how cross-validation and rolling-window methods reduce backtesting pitfalls"},
    {id:"e",t:"Describe historical simulation and Monte Carlo simulation and compare their use in evaluating strategies"},
    {id:"f",t:"Explain sensitivity analysis using altered return-distribution assumptions"}]},
  {id:"pm-apm", topic:"pm", name:"Analysis of Active Portfolio Management", los:[
    {id:"a",t:"Define value added (active return) and relate it to active weights relative to a benchmark"},
    {id:"b",t:"Calculate the Sharpe ratio, information ratio, and their relationship to portfolio construction"},
    {id:"c",t:"State and interpret the fundamental law of active management, including breadth and information coefficient"},
    {id:"d",t:"Explain the transfer coefficient and how constraints reduce achievable active return"},
    {id:"e",t:"Apply the fundamental law to strategies such as security selection and market timing"}]},
  {id:"pm-tc", topic:"pm", name:"Trading Costs and Electronic Markets", los:[
    {id:"a",t:"Explain the components of trading costs including explicit costs, bid-ask spread, and market impact"},
    {id:"b",t:"Calculate and interpret implementation shortfall and its cost components for a trade"},
    {id:"c",t:"Describe VWAP and other benchmarks used to measure execution cost"},
    {id:"d",t:"Describe the structure of electronic markets and types of electronic traders"},
    {id:"e",t:"Explain market fragmentation, and the risks and abusive practices associated with electronic trading"}]},
  {id:"pm-ims", topic:"pm", name:"Investment Manager Selection", los:[
    {id:"a",t:"Describe the components and objectives of a manager-selection process"},
    {id:"b",t:"Contrast Type I and Type II errors in manager hiring and firing decisions"},
    {id:"c",t:"Explain quantitative return-based and holdings-based style analysis of a manager"},
    {id:"d",t:"Describe qualitative due diligence including investment philosophy, process, people, and operations"},
    {id:"e",t:"Evaluate a manager's fee structure and its alignment with investor interests"}]},
];

// ── lessons (readingId + covered LOS). Add a lesson = one entry here. ──
const LESSONS = [
  {readingId:"eim", title:"Real Risk-Free Rate", en:"The pure reward for waiting",
   file:"econ-real-risk-free-rate.html", los:["a","b","c","d"]},
  {readingId:"prr", title:"Risk-Free Rate in the CAL / CML / CAPM", en:"Baseline of portfolio theory",
   file:"pm-risk-free-rate.html", los:["a","b"]},
  {readingId:"pm-etf", title:"Exchange-Traded Funds: Mechanics & Applications", en:"Creation/redemption & NAV arbitrage",
   file:"pm-etf.html", los:["a","b","c","d","e","f"]},
  {readingId:"pm-mfm", title:"Using Multifactor Models", en:"APT, factor models & attribution",
   file:"pm-mfm.html", los:["a","b","c","d","e"]},
  {readingId:"pm-mr", title:"Measuring & Managing Market Risk", en:"VaR, sensitivities & stress testing",
   file:"pm-mr.html", los:["a","b","c","d","e","f"]},
  {readingId:"pm-bt", title:"Backtesting & Simulation", en:"Biases, cross-validation & simulation",
   file:"pm-bt.html", los:["a","b","c","d","e","f"]},
  {readingId:"pm-apm", title:"Analysis of Active Portfolio Management", en:"Value added & the fundamental law",
   file:"pm-apm.html", los:["a","b","c","d","e"]},
  {readingId:"pm-tc", title:"Trading Costs & Electronic Markets", en:"Implementation shortfall & venues",
   file:"pm-tc.html", los:["a","b","c","d","e"]},
  {readingId:"pm-ims", title:"Investment Manager Selection", en:"Type I/II errors & due diligence",
   file:"pm-ims.html", los:["a","b","c","d","e"]},
];
