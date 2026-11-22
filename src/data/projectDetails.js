export const projectDetails = {
  "PostalVision | Postal OCR & Logistics Intelligence": {
    problem: "Read handwritten postal addresses and route envelopes locally without sending personal address data to third-party OCR services. The project also required a model built without pretrained neural backbones.",
    approach: [
      "Built a scratch CRNN with asymmetric pooling, bidirectional GRU sequence modeling, and CTC decoding; the technical report describes 2,058,188 trainable parameters and preparation using about 1.9 million handwritten glyph examples.",
      "Added perspective correction, shadow and ink enhancement, text-line segmentation, address parsing, six-digit PIN checks, and offline lookup across more than 19,000 Indian PIN records.",
      "Developed a Flask API and web interface for image review, editable address fields, and CSV/JSON manifests.",
    ],
    result: "The report documents a six-stage OCR-to-routing workflow and local lookup. It defines CER, WER, exact-line accuracy, and PIN extraction rate as evaluation measures, but provides no final measured values.",
  },
  "ChurnZero | Bank Customer Churn Prediction": {
    problem: "Identify banking customers at risk of leaving and choose an outreach threshold based on retention costs. The project presentation describes 8,101 customer records and an 84:16 retained-to-churned split.",
    approach: [
      "Expanded 97 inputs to 114 features covering behavior, balance health, complaints, sentiment, and credit stress.",
      "Used median imputation, categorical encoding, and SMOTE inside five-fold validation, then blended LightGBM and XGBoost predictions at 60:40 weights.",
      "Compared false-negative and false-positive outreach costs when selecting a decision threshold and translated model drivers into retention triggers.",
    ],
    result: "The competition slides report F1 0.9943 and a 0.18 operating threshold, with an illustrative outreach cost of ₹1.26 lakh.",
    note: "The slides do not clearly establish an independent holdout for their near-perfect scores; these figures should be treated as reported presentation results.",
  },
  "StreamMax | Viewer Fatigue Prediction": {
    problem: "Estimate viewer fatigue from watch activity, subscription tier, and engagement signals to inform retention or content recommendations. The report covers 8,000 labeled users and 2,000 unlabeled test users.",
    approach: [
      "Explored viewing time, sessions, binge behavior, completion, genre diversity, and recommendation clicks; encoded subscription type and compared four classifiers.",
      "Tuned models with three-fold GridSearchCV, tested decision thresholds, and blended balanced Logistic Regression, Random Forest, and LightGBM probabilities.",
      "Aligned test features with the training schema and exported user-level fatigue scores for 2,000 test users.",
    ],
    result: "The three-model blend reached 0.8076 validation ROC-AUC, 0.6560 F1, and 0.7438 accuracy at a 0.45 threshold.",
    note: "These are validation results; the report notes that parts of the raw-to-model preprocessing workflow need further reproducibility work.",
  },
  "E-Commerce Conversion Prediction": {
    problem: "Predict which online shopping sessions will convert despite missing values, correlated engagement signals, and a minority positive class. The supplied labeled set contains 13,000 sessions.",
    approach: [
      "Engineered engagement sums, discount interactions, long-session and log-time features, plus missingness indicators.",
      "Kept preprocessing inside a scikit-learn pipeline and compared Logistic Regression, Random Forest, XGBoost, and LightGBM with five-fold stratified out-of-fold evaluation.",
      "Selected an F1-oriented Logistic Regression threshold and generated 3,000 private-test predictions.",
    ],
    result: "The selected model reached 0.734 out-of-fold ROC-AUC and 0.568 F1 at a 0.26 threshold, versus 0.393 F1 at the default 0.50 threshold.",
    note: "The documented scores are out-of-fold estimates, not verified private-leaderboard performance.",
  },
  "Network Congestion Prediction": {
    problem: "Classify low, medium, or high network congestion from noisy, imbalanced telemetry to support service-quality monitoring. The team started from 5,000 records and selected 11 predictive features.",
    approach: [
      "Cleaned missing entries, capped high outliers, and removed timestamps, location, and redundant bandwidth columns.",
      "Applied RandomUnderSampler and SMOTE for class balance, then tuned a Random Forest with stratified folds and GridSearchCV.",
      "Demonstrated an interactive predictor that maps user-adjusted telemetry values to congestion classes.",
    ],
    result: "The team slides report 95% accuracy and 0.95 weighted F1 on 697 evaluation examples.",
    note: "The documentation does not establish whether resampling stayed within training folds; the reported scores may be optimistic if it preceded splitting.",
  },
  "Explainable Network Failure Root-Cause Analysis": {
    problem: "Go beyond network-degradation alerts by identifying probable causes and possible operator responses from proposed telemetry collected every 1–5 minutes.",
    approach: [
      "Designed a two-stage workflow to classify normal, degraded, or severely degraded performance and then infer multiple likely causes.",
      "Proposed tree-based detection and cause models, SHAP attributions, dependency diagrams, and counterfactual explanations.",
      "Specified ranked causes, confidence, resolution suggestions, and evaluation criteria including F1, Hamming loss, explanation fidelity, and time to resolution.",
    ],
    result: "The deliverable is an architecture and evaluation plan; no trained model, observed accuracy, or measured reduction in resolution time is documented.",
  },
  "Insurance Charges Prediction": {
    problem: "Estimate insurance charges from age, sex, BMI, children, smoking status, and region while balancing model fit with interpretability. The study contains 1,338 records.",
    approach: [
      "Encoded categorical variables, examined correlations, and flagged 268 observations with a median absolute deviation outlier method.",
      "Compared linear and polynomial regression, Ridge, Lasso, and principal component regression using fit statistics and information criteria.",
      "Examined residual patterns and actual-versus-predicted values, particularly for high-cost cases.",
    ],
    result: "The notes favor an interpretable first-order baseline and identify systematic bias and weaker fit for expensive claims.",
    note: "The report does not provide an unambiguous final R², MAE, or RMSE, and its model-selection discussion is not fully consistent.",
  },
  "Academic Portal | MySQL Database": {
    problem: "Create an AIMS-style database for academic administration, including people, courses, registrations, grades, credit progress, and approvals.",
    approach: [
      "Designed relational tables for students, faculty, offerings, prerequisites, registrations, earned credits, requests, and program requirements with primary and foreign keys.",
      "Implemented stored procedures for course offering, registration checks, grade uploads, CGPA calculation, requests and approvals, and graduation eligibility.",
      "Added duplicate-registration prevention, semester rules, a 24-credit cap, and role-based processing for academic staff and students.",
    ],
    result: "The group report includes SQL schema, sample records, and procedure demonstrations across the academic workflow.",
    note: "This is a database backbone; no full web portal deployment or load-test result is documented.",
  },
  "Insightify | Restaurant Data Analysis": {
    problem: "Find pricing, popularity, location, and service patterns in restaurant listings and ratings using fields such as cost for two, cuisine, votes, and table-booking availability.",
    approach: [
      "Cleaned column names and numeric text, removed duplicates, and imputed missing rating, cost, and location values according to their distributions.",
      "Compared location prices, vote counts, ratings, cuisine diversity, geographic clusters, and table-booking patterns through descriptive charts and correlations.",
    ],
    result: "The analyzed data show a near-zero cost–rating correlation (about −0.01) and identify Indiranagar, Marathahalli, and Jayanagar as high-rated clusters.",
    note: "These are descriptive associations rather than evidence that price or booking options cause ratings to change.",
  },
  "Decoding Consumer Choice": {
    problem: "Assess which Indian e-commerce marketplace a consumer-electronics seller should prioritize and which service factors relate to satisfaction and repeat purchase. The group surveyed 50 student buyers.",
    approach: [
      "Translated the decision into research questions, a 15-item survey, and five statistical tests.",
      "Compared platform ratings with ANOVA, tested platform preference with chi-square, and modeled satisfaction and repurchase intent with multiple regression.",
    ],
    result: "The reported satisfaction model explains 68.4% of variance; returns, authenticity, packaging, and support are significant factors in this sample. Amazon averaged 4.00/5 satisfaction, Flipkart 3.53/5, and Meesho 2.83/5.",
    note: "The 50-person convenience sample supports exploratory recommendations, not a population-wide causal conclusion.",
  },
  "Supplier Sustainability Program": {
    problem: "Reduce purchased-material Scope 3 emissions for a modeled air-conditioner supply chain while accounting for quality, delivery, and supplier economics. The case assumes one million units annually.",
    approach: [
      "Estimated embodied emissions across aluminium, electronics, steel, plastics, copper, and refrigerants in the bill of materials.",
      "Built a 36-month supplier transition plan with pilots, carbon and quality scorecards, recycled-material procurement, incentives, and contract KPIs.",
      "Compared material-cost effects and modeled the investment and emissions-reduction case over three years.",
    ],
    result: "The competition model targets roughly 34–35% lower Scope 3 Category 1 emissions and projects ₹132 material savings per AC.",
    note: "All volumes, savings, and emissions reductions are case-model projections; no physical rollout is documented.",
  },
  "Cambridge Cooling Systems": {
    problem: "Decide whether to retain production at Cambridge or shift part of it to Mexico, balancing capacity utilization, cost, quality, and engineering coordination.",
    approach: [
      "Compared Cambridge and hybrid footprints with cost-volume equations and a factor-rating method.",
      "Calculated a scenario break-even near 833 units, then weighed capacity, labor-cost, quality, and coordination assumptions.",
    ],
    result: "The team recommended a phased hybrid footprint: keep Cambridge as an engineering and R&D hub while using lower-cost Mexican manufacturing capacity.",
    note: "The 833-unit break-even depends on assumed cost curves; the case does not report realized savings or a completed production move.",
  },
  "Investing Through Tariff Wars": {
    problem: "Examine how tariff exposure and corporate resilience relate to returns across more than 300 global equity funds and ETFs, then develop a portfolio framework.",
    approach: [
      "Explored tariff-risk and resilience distributions by sector and exposure tier with dashboard views and regression reasoning.",
      "Created a risk–resilience segmentation and proposed 45% defensive, 35% balanced-growth, and 20% opportunistic allocations with periodic review.",
    ],
    result: "The presentation argues that resilience helps distinguish funds within the same tariff-risk category and proposes a 3–5-year allocation framework.",
    note: "The allocation is a proposal; no observed portfolio backtest, risk-adjusted return, or investment result is documented.",
  },
  "Anduril Industries | AI-Driven Strategy": {
    problem: "Assess how AI-enabled software platforms affect competition, buyer power, and governance in the regulated defense-technology industry.",
    approach: [
      "Used PESTLE and Porter's Five Forces to examine regulation, buyer concentration, rivalry, and industry structure.",
      "Analyzed the integrated hardware–software model and prepared an Adopt–Scale–Lead roadmap covering interoperability, partnerships, human oversight, explainability, and responsible production.",
    ],
    result: "The group report recommends expanding a software-platform ecosystem while strengthening safety and governance. It identifies data, integration, and execution as key sources of advantage.",
    note: "This is strategic research; no realized revenue gain, adoption KPI, or implementation outcome is reported.",
  },
  "GST Reform in India": {
    problem: "Explain how changes in indirect taxes can affect consumers, producers, public revenue, and economic efficiency under different supply and demand elasticities.",
    approach: [
      "Modeled four hypothetical markets—essentials, luxury goods, relatively inelastic goods, and discretionary goods—using tax-wedge diagrams.",
      "Compared consumer and producer surplus, likely revenue, tax burden, and deadweight-loss direction across the scenarios.",
    ],
    result: "The analysis shows how the less elastic side of a market tends to bear more tax and how more responsive quantities can produce greater efficiency loss.",
    note: "The numerical examples are classroom scenarios, not measured national welfare effects.",
  },
};
