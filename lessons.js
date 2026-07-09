// CFA Level II — Lesson write-ups per subject → module.
// Keyed by "topicId::Module name" (must match the `m` field used in cards.js).
// Each value is rich HTML shown at the top of a topic's lesson page, above the
// detailed note cards. Quant modules are authored to slide depth; other modules
// rely on their note cards (generated from flashcards) until slide content lands.

const LESSON_INTROS = {

  "quant::Basics of Multiple Regression": `
    <p><strong>Multiple linear regression</strong> extends simple regression by explaining a dependent
    variable <em>Y</em> with two or more independent variables. It is the workhorse for investment
    problems such as forecasting returns, explaining valuation multiples, or modelling risk exposures.</p>
    <h4>The model</h4>
    <p class="eq">Yᵢ = b₀ + b₁X₁ᵢ + b₂X₂ᵢ + … + bₖXₖᵢ + εᵢ</p>
    <p>Coefficients are estimated by the <strong>least squares method</strong>, choosing b̂₀…b̂ₖ to minimize the
    sum of squared residuals Σεᵢ² = Σ(Yᵢ − Ŷᵢ)². The estimated equation is
    Ŷᵢ = b̂₀ + b̂₁X₁ᵢ + … + b̂ₖXₖᵢ. With k = 1 the model is a line; k = 2 a plane; k &gt; 2 a hyperplane.</p>
    <h4>Interpreting the coefficients (partial slopes)</h4>
    <ul>
      <li><strong>Intercept b̂₀</strong>: predicted Y when <em>all</em> X's are zero.</li>
      <li><strong>Slope b̂ⱼ</strong>: the change in Y for a one-unit change in Xⱼ, <em>holding all other
      independent variables constant</em> — a <em>partial</em> effect. Adding a correlated variable changes
      the other coefficients because the model now isolates each variable's own contribution.</li>
    </ul>
    <h4>Worked example — executive bonus</h4>
    <p>Y = bonus (months). X₁ = profit ($M), X₂ = stock-price gain (decimal).
    Simple: Ŷ = 1.14 + 0.30·X₁. Multiple: Ŷ = 0.95 + 0.20·X₁ + 6.0·X₂. For X₁ = 8, X₂ = 0.18:
    Ŷ = 0.95 + 0.20(8) + 6.0(0.18) = <strong>3.63 months</strong>. Try it in the interactive Regression Lab.</p>
    <h4>Assumptions (OLS)</h4>
    <p>Linear in parameters; no perfect multicollinearity; E(ε|X)=0; homoskedastic errors; no serial
    correlation; errors normally distributed. Residual plots help spot violations.</p>`,

  "quant::Evaluating Model Fit": `
    <p>Once a model is estimated, judge how well it explains Y and whether the coefficients matter.</p>
    <h4>Goodness of fit</h4>
    <ul>
      <li><strong>R²</strong> = SSR/SST — proportion of variation explained; always rises when regressors are added.</li>
      <li><strong>Adjusted R²</strong> = 1 − [(n−1)/(n−k−1)]·(1−R²) — penalizes extra regressors; can fall.</li>
      <li><strong>AIC / BIC</strong> — information criteria; lower is better (BIC penalizes complexity more).</li>
    </ul>
    <h4>Hypothesis tests</h4>
    <p>Individual coefficient: t = (b̂ⱼ − bⱼ)/SE(b̂ⱼ), df = n − k − 1. Joint significance of all slopes:
    the <strong>F-test</strong>, F = MSR/MSE = (SSR/k)/(SSE/(n−k−1)); a general linear F-test handles a
    subset of restrictions. The <strong>ANOVA</strong> table decomposes SST = SSR + SSE.</p>`,

  "quant::Model Misspecification": `
    <p>Even a well-fit model can violate its assumptions. Three classic problems and their fixes:</p>
    <ul>
      <li><strong>Heteroskedasticity</strong> (non-constant error variance): coefficients stay unbiased but
      standard errors are biased → unreliable t-tests. Detect with Breusch–Pagan; fix with robust
      (White) standard errors.</li>
      <li><strong>Serial correlation</strong> (correlated errors): biases standard errors (positive SC inflates
      t-stats). Detect with Durbin–Watson / Breusch–Godfrey; fix with Newey–West standard errors.</li>
      <li><strong>Multicollinearity</strong> (correlated X's): high R² &amp; F but low individual t-stats; check
      VIF (&gt;5–10 concerning). Fix by dropping/combining variables. Durbin–Watson does <em>not</em> detect it.</li>
    </ul>
    <p>Other errors: omitted variables (biased if correlated with included X's), wrong functional form,
    measurement error, and using non-stationary time-series variables.</p>`,

  "quant::Extensions of Multiple Regression": `
    <p>Extensions let regression handle qualitative inputs, influential points, and binary outcomes.</p>
    <ul>
      <li><strong>Dummy (indicator) variables</strong>: 0/1 variables for categories; use n−1 dummies for n
      categories (else the dummy-variable trap). Intercept dummies shift the level; interaction (slope)
      dummies change the slope for a group.</li>
      <li><strong>Influence analysis</strong>: detect influential observations (high leverage / large residuals)
      using measures such as Cook's distance and studentized residuals.</li>
      <li><strong>Logistic (logit) regression</strong>: models the probability of a binary outcome via the
      log-odds, ln[p/(1−p)] = b₀ + b₁X₁ + …; estimated by maximum likelihood (not OLS). A coefficient is the
      change in log-odds per unit X; fit is judged with pseudo-R² and the likelihood-ratio test.</li>
    </ul>`,

  "quant::Time-Series Analysis": `
    <p>Time-series models forecast a variable from its own past (trend or lagged values). The six lessons
    below build from simple trends to autoregressive models and their diagnostics.</p>
    <h4>1 · Trend models</h4>
    <p><strong>Linear</strong>: yₜ = b₀ + b₁t + εₜ (constant amount per period). <strong>Log-linear</strong>:
    ln(yₜ) = b₀ + b₁t + εₜ for series growing at a constant <em>rate</em> (exponential, e.g. revenue).
    Their well-known limitation is <strong>serial correlation</strong> of residuals (Durbin–Watson), which
    biases inference — a cue to move to an AR model.</p>
    <h4>2 · Autoregressive (AR) models</h4>
    <p>AR(1): yₜ = b₀ + b₁yₜ₋₁ + εₜ. Forecast with the <strong>chain rule</strong>: ŷₜ₊₁ = b̂₀ + b̂₁yₜ, then
    ŷₜ₊₂ = b̂₀ + b̂₁ŷₜ₊₁ (errors accumulate). <strong>Mean-reverting level</strong> = b₀/(1−b₁): above it, the
    series is expected to fall. Test specification with t-tests on residual autocorrelations (Durbin–Watson
    is <em>not</em> valid for AR). Compare models by lowest out-of-sample <strong>RMSE</strong>.</p>
    <h4>3 · Covariance stationarity</h4>
    <p>Required for AR validity: constant &amp; finite mean, variance, and covariance at each lag. For AR(1)
    this holds when |b₁| &lt; 1.</p>
    <h4>4 · Random walk &amp; unit root</h4>
    <p>If b₁ = 1 the series is a <strong>random walk</strong> (unit root): yₜ = yₜ₋₁ + εₜ; the mean-reverting
    level b₀/(1−b₁) is undefined and the series is non-stationary. You can't ordinary-t-test b₁ = 1 — use the
    <strong>Dickey–Fuller</strong> test on the transformed equation yₜ − yₜ₋₁ = b₀ + (b₁−1)yₜ₋₁ + εₜ
    (H₀: b₁−1 = 0). Cure a unit root by <strong>first differencing</strong> (zₜ = yₜ − yₜ₋₁).</p>
    <h4>5 · Seasonality</h4>
    <p>A significant residual autocorrelation at the seasonal lag (lag 4 quarterly, lag 12 monthly) signals a
    misspecified model; add a <strong>seasonal lag</strong> term (e.g. + c₂yₜ₋₄).</p>
    <h4>6 · ARCH &amp; regression with two series</h4>
    <p><strong>ARCH</strong>: error variance depends on past squared errors; test ε̂²ₜ = a₀ + a₁ε̂²ₜ₋₁; a
    significant a₁ means unreliable standard errors and lets you forecast variance
    (σ̂²ₜ₊₁ = a₀ + a₁ε̂²ₜ). Regressing one time series on another requires <strong>both</strong> to be
    stationary — or, if both have a unit root, to be <strong>cointegrated</strong> (Engle–Granger test on the
    residuals).</p>`,

  "quant::Machine Learning": `
    <p>Machine learning (ML) finds patterns directly from data, handling many variables and non-linearities
    without a pre-specified functional form. Five lessons: types, overfitting, and the supervised /
    unsupervised / neural-network algorithm families.</p>
    <h4>1 · Types</h4>
    <p><strong>Supervised</strong> uses labeled data (a target Y): regression (continuous Y) vs classification
    (categorical Y). <strong>Unsupervised</strong> has no target: clustering and dimension reduction.
    <strong>Deep learning</strong> and <strong>reinforcement learning</strong> handle the most complex tasks.</p>
    <h4>2 · Overfitting</h4>
    <p>Total error = <strong>bias</strong> (in-sample, underfitting) + <strong>variance</strong> (out-of-sample,
    overfitting) + <strong>base</strong> (irreducible noise). Overfit models memorize noise and fail to
    generalize. Control it with complexity reduction (a penalty per feature) and <strong>k-fold
    cross-validation</strong>.</p>
    <h4>3 · Supervised algorithms</h4>
    <ul>
      <li><strong>Penalized regression / LASSO</strong>: penalty λΣ|bⱼ| shrinks weak coefficients to zero →
      parsimonious feature selection.</li>
      <li><strong>SVM</strong>: max-margin linear classifier; support vectors are the points nearest the
      boundary; soft margin penalizes misclassifications.</li>
      <li><strong>KNN</strong>: classify by the k nearest neighbors; k too small = noisy, too large = diluted;
      sensitive to feature scaling.</li>
      <li><strong>CART</strong>: interpretable binary decision tree; limit depth/nodes to avoid overfitting.</li>
      <li><strong>Ensembles / random forest</strong>: bagging of many trees on bootstrap samples with random
      feature subsets → lower variance (but a black box).</li>
    </ul>
    <h4>4 · Unsupervised algorithms</h4>
    <ul>
      <li><strong>PCA</strong>: compress correlated features into a few uncorrelated principal components
      (eigenvalue = variance explained; keep ~85–95%).</li>
      <li><strong>K-means</strong>: partition into k clusters (k chosen in advance).</li>
      <li><strong>Hierarchical clustering</strong>: agglomerative/divisive; no k needed up front.</li>
    </ul>
    <h4>5 · Neural networks</h4>
    <p>Nodes in input → hidden → output layers; each node does a weighted sum then a non-linear activation.
    Forward propagation predicts; backward propagation adjusts weights from the error. <strong>Deep learning</strong>
    stacks many hidden layers. <strong>Reinforcement learning</strong> trains an agent to maximize a reward.</p>`,

  "quant::Big Data Projects": `
    <p>Big Data — all potentially useful information in the economy — powers modern financial forecasting.
    Four lessons cover the end-to-end ML project on structured and unstructured (text) data.</p>
    <h4>Big Data &amp; the "V"s</h4>
    <p><strong>Volume</strong> (size), <strong>Velocity</strong> (speed / latency), <strong>Variety</strong>
    (structured / semi-structured / unstructured), and — for analysis — <strong>Veracity</strong> (quality).
    Sources are traditional (markets, financials, economics) and non-traditional/alternative (individuals,
    business processes, sensors/IoT).</p>
    <h4>1 · Model-building steps (5, iterative)</h4>
    <p>Conceptualize → Collect → Prepare &amp; wrangle → Explore → Train. Text projects mirror these but do
    extra work up front to turn documents into a structured, numerical form.</p>
    <h4>2 · Data preparation &amp; wrangling</h4>
    <p>Structured: cleanse (missing, invalid, duplicate…), then transform — including
    <strong>normalization</strong> (x−min)/(max−min) → [0,1] and <strong>standardization</strong> (x−μ)/σ
    (z-score). Text: remove HTML/punctuation/numbers/whitespace → tokenize → normalize (stop-words,
    lowercase, <strong>stemming/lemmatization</strong>) → bag-of-words / document-term matrix.</p>
    <h4>3 · Data exploration</h4>
    <p>EDA (summary stats, histograms, box plots, word clouds), <strong>feature selection</strong> (keep only
    features that add out-of-sample power — χ², mutual information, dimension reduction), and
    <strong>feature engineering</strong> (one-hot encoding, n-grams, POS/NER tags). Try the
    Data-Exploration Sorter.</p>
    <h4>4 · Model training &amp; evaluation</h4>
    <p>Method selection → performance evaluation (confusion matrix: precision = TP/(TP+FP), recall =
    TP/(TP+FN), F1; ROC/AUC; RMSE for regression — accuracy misleads on imbalanced classes) → tuning
    (regularization, grid search, ceiling analysis).</p>`,

  "alt::Real Estate": `
    <p>Real estate can be held as <strong>equity</strong> (ownership → rental income + capital gains) or
    <strong>debt</strong> (mortgages → interest), and accessed <strong>privately</strong> (direct ownership,
    real-estate funds) or <strong>publicly</strong> (REITs, MBS, real-estate ETFs). These lessons cover the
    private/direct side: features, due diligence, valuation, and debt financing.</p>
    <h4>1 · Investment features &amp; risk–return</h4>
    <p>Strategies sit on a risk ladder: <strong>Core</strong> (stable, fully-leased, steady yield) →
    <strong>Core-plus</strong> (minor work) → <strong>Value-add</strong> (significant improvement) →
    <strong>Opportunistic</strong> (major redevelopment, ground-up, distressed). Property <strong>quality
    classes</strong> run Class A (newest, top amenities, stable income) to Class D (oldest, weakest locations,
    upside via capex). Demand depends on the <em>lessee's</em> industry: <strong>defensive</strong> (e.g.
    healthcare REITs — stable) vs <strong>cyclical</strong> (office, industrial — swing with the economy).
    Green/ESG buildings can command higher rents, lower vacancy and opex, and tax incentives.</p>
    <h4>2 · Due diligence &amp; indexes</h4>
    <p><strong>Due diligence</strong> checks leases and rent history, cash flows and operating expenses,
    engineering &amp; environmental inspections, legal/zoning review, a property survey, re-leasing costs, and
    that taxes/insurance are paid. <strong>Indexes</strong>: <em>appraisal-based</em> (e.g. NCREIF Property
    Index) use infrequent appraisals, so they <strong>lag</strong> the market — <em>understating</em> true
    volatility and correlation with stocks (overstating diversification benefit). <em>Transaction-based</em>
    indexes (repeat-sales; hedonic regression on characteristics) are noisier but more current.
    <em>Real-estate security</em> indexes (REIT share prices) are <strong>highly correlated</strong> with
    equities.</p>
    <h4>3 · Valuation — the three approaches</h4>
    <ul>
      <li><strong>Cost</strong>: land value + rebuilding cost − depreciation. Best for newer properties
      (depreciation is hard to estimate on old ones).</li>
      <li><strong>Sales comparison ("market")</strong>: adjust recent comparable sales for age, location,
      condition, size (e.g. price/sq ft, price/rent multiples).</li>
      <li><strong>Income</strong>: present value of future cash flows (below).</li>
    </ul>
    <p>Reconcile the three into one value with weights (more weight to sales comparison in active markets;
    less to cost for old buildings). <strong>Highest &amp; best use</strong> = the use that maximizes the
    <em>land</em> value: implied land value = value of the completed project − construction costs − the
    developer's required profit.</p>
    <h4>4 · Income approach</h4>
    <p><strong>Direct capitalization</strong>: V₀ = NOI₁ / cap rate, where <strong>cap rate = r − g</strong>
    (so required return r = cap rate + g). Estimate the cap rate from comparable sales (cap = NOI/price).
    If the tenant pays all operating expenses, use the <strong>all-risk yield</strong>: V₀ = Rent₁ / ARY.
    Because direct cap uses only year-1 NOI, adjust with a <strong>stabilized NOI</strong> when a
    renovation is planned.</p>
    <p><strong>DCF (two-stage)</strong>: discount explicit NOIs, then add a terminal ("resale") value
    V_T = NOI_(T+1) / (terminal cap rate). <em>Example</em>: NOI $10M/yr on a 3-yr lease, terminal cap 8%
    → V_T = 10/0.08 = $150M; at r = 12%, V₀ = 10/1.12 + 10/1.12² + (10+150)/1.12³ ≈ <strong>$131M</strong>.</p>
    <h4>5 · Debt financing</h4>
    <p>Lenders cap the loan by two ratios: <strong>LTV</strong> = loan / appraised value, and
    <strong>DSCR</strong> = NOI₁ / debt service. The maximum loan is the <strong>lower</strong> of
    (LTV × value) and, for an interest-only loan, (NOI₁ / DSCR) ÷ interest rate. For the equity investor,
    the <strong>equity dividend rate</strong> ("cash-on-cash") = (NOI − debt service) / equity. Leverage
    raises both expected return and risk — the <strong>leveraged IRR</strong> exceeds the unleveraged IRR
    when the property return beats the borrowing cost (20.6% vs 15% in the slide example).</p>`,

};
