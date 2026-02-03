export const recentRuns = [
  {
    runId: "R-24031",
    modelId: "M-ALD-77",
    status: "running",
    owner: "L. Chen",
    updated: "4 min ago"
  },
  {
    runId: "R-24029",
    modelId: "M-ALD-65",
    status: "paused",
    owner: "J. Wu",
    updated: "2 hr ago"
  },
  {
    runId: "R-24021",
    modelId: "M-ET-21",
    status: "succeeded",
    owner: "Y. Zhang",
    updated: "Yesterday"
  }
];

export const waferIds = ["WAFER-223A", "WAFER-118C", "WAFER-77B", "WAFER-19A"];

export const spectrumIds = [
  "SPEC-001",
  "SPEC-002",
  "SPEC-003",
  "SPEC-004",
  "SPEC-005"
];

export const timeRanges = [
  "2024-06-01 08:00-10:00",
  "2024-06-01 10:00-12:00",
  "2024-06-02 08:00-10:00"
];

export const spectrumByWafer = {
  "WAFER-223A": ["SPEC-001", "SPEC-002", "SPEC-003"],
  "WAFER-118C": ["SPEC-002", "SPEC-004"],
  "WAFER-77B": ["SPEC-003", "SPEC-005"],
  "WAFER-19A": ["SPEC-001", "SPEC-004", "SPEC-005"]
};

export const basisCdRows = [
  { id: "CD01", name: "Line CD", current: 32.4, nominal: 32.0, range: "31.5-33.2", unit: "nm" },
  { id: "CD02", name: "Pitch", current: 64.1, nominal: 64.0, range: "63.0-65.0", unit: "nm" },
  { id: "CD03", name: "Top CD", current: 29.8, nominal: 30.0, range: "29.0-31.0", unit: "nm" }
];

export const constraintCdRows = [
  { id: "CCD-01", name: "Sidewall", depends: "CD01/CD03", relation: "CD01 - CD03", current: 2.6 },
  { id: "CCD-02", name: "Bias", depends: "CD02", relation: "CD02 * 0.03", current: 1.9 }
];

export const materialSummary = {
  materials: ["SiO2", "SiN", "Photoresist", "ARC"],
  model: "HO",
  oscillators: 4
};

export const seedCandidates = [
  { name: "SiO2", nk: "n=1.46, k=0" },
  { name: "SiN", nk: "n=2.0, k=0.02" },
  { name: "ARC", nk: "n=1.8, k=0.12" }
];

export const runEvents = [
  { time: "10:02", seed: "S1", step: "Seed Search", result: "Accepted", note: "GOF improved" },
  { time: "10:06", seed: "S1", step: "Fitting", result: "Rejected", note: "KPI failed" },
  { time: "10:10", seed: "S2", step: "Fitting", result: "Accepted", note: "R2 0.982" },
  { time: "10:13", seed: "S2", step: "Linearization", result: "Accepted", note: "Slope stable" }
];

export const historyRows = [
  { runId: "R-24031", modelId: "M-ALD-77", owner: "L. Chen", status: "running", bestKpi: "-", time: "Today 09:58" },
  { runId: "R-24029", modelId: "M-ALD-65", owner: "J. Wu", status: "paused", bestKpi: "0.88", time: "Today 07:12" },
  { runId: "R-24021", modelId: "M-ET-21", owner: "Y. Zhang", status: "succeeded", bestKpi: "0.95", time: "Yesterday 15:22" }
];

export const templates = [
  { name: "Dense Gate V3", materials: "SiO2/SiN", owner: "L. Chen", updated: "2024-06-01" },
  { name: "Spacer Etch B", materials: "ARC/PR", owner: "S. Li", updated: "2024-05-18" },
  { name: "High-K Stack", materials: "HfO2/SiO2", owner: "J. Wu", updated: "2024-05-02" }
];
