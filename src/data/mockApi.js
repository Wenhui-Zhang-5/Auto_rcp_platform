const STORAGE_KEY = "ocd_mock_state_v1";

const defaultState = {
  workspaces: [
    {
      id: "temp",
      type: "temporary",
      status: "temp",
      modelID: null,
      recipeName: "Temporary Workspace",
      owner: "You",
      updatedAt: "Just now"
    },
    {
      id: "M-ALD-77",
      type: "model",
      status: "running",
      modelID: "M-ALD-77",
      recipeName: "ALD Gate V2",
      owner: "L. Chen",
      updatedAt: "4 min ago"
    },
    {
      id: "M-ALD-65",
      type: "model",
      status: "queued",
      modelID: "M-ALD-65",
      recipeName: "Spacer Etch B",
      owner: "J. Wu",
      updatedAt: "25 min ago"
    },
    {
      id: "M-ET-21",
      type: "model",
      status: "completed",
      modelID: "M-ET-21",
      recipeName: "High-K Stack",
      owner: "Y. Zhang",
      updatedAt: "Yesterday"
    }
  ],
  templates: [
    {
      id: "T-001",
      name: "Dense Gate V3",
      summary: "CD Strategy + HO by column",
      owner: "L. Chen",
      updatedAt: "2024-06-01"
    },
    {
      id: "T-002",
      name: "Spacer Etch B",
      summary: "Seed search top 6 + custom HO",
      owner: "S. Li",
      updatedAt: "2024-05-18"
    }
  ],
  runs: [
    {
      modelID: "M-ALD-77",
      recipeName: "ALD Gate V2",
      owner: "L. Chen",
      status: "running",
      currentStage: "Fitting Step 2",
      bestKPI: "0.95"
    },
    {
      modelID: "M-ALD-65",
      recipeName: "Spacer Etch B",
      owner: "J. Wu",
      status: "queued",
      currentStage: "Seed Search",
      bestKPI: "-"
    },
    {
      modelID: "M-ET-21",
      recipeName: "High-K Stack",
      owner: "Y. Zhang",
      status: "completed",
      currentStage: "KPI Evaluation",
      bestKPI: "0.97"
    }
  ],
  runDetail: {
    "M-ALD-77": {
      status: "running",
      iteration: 12,
      ranking: [
        { rank: 1, seedId: "S2", iteration: 12, kpi: "0.95", status: "accepted" },
        { rank: 2, seedId: "S1", iteration: 11, kpi: "0.91", status: "reverted" },
        { rank: 3, seedId: "S3", iteration: 9, kpi: "0.88", status: "running" }
      ],
      trace: [
        { time: "10:02", action: "accept", note: "Seed S2 KPI 0.95" },
        { time: "10:06", action: "revert", note: "Seed S1 KPI drop" },
        { time: "10:10", action: "check", note: "KPI evaluation pass" }
      ]
    }
  },
  recipeSchemas: {}
};

let cachedState = null;
let runTickerStarted = false;

const loadState = () => {
  if (cachedState) {
    return cachedState;
  }
  if (typeof window !== "undefined") {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      cachedState = JSON.parse(raw);
      return cachedState;
    }
  }
  cachedState = { ...defaultState };
  return cachedState;
};

const saveState = () => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cachedState));
  }
};

export const workspaceStatuses = ["temp", "draft", "queued", "running", "completed"];
export const workspaceTypes = ["temporary", "model"];

export const listModelHub = () => {
  const state = loadState();
  return state.workspaces.filter((workspace) => workspace.type === "model");
};

export const listWorkspaces = () => {
  const state = loadState();
  return state.workspaces;
};

export const getWorkspace = (id) => {
  const state = loadState();
  return state.workspaces.find((workspace) => workspace.id === id) || null;
};

export const createTemporaryWorkspace = () => {
  const state = loadState();
  let existing = state.workspaces.find((workspace) => workspace.id === "temp");
  if (!existing) {
    existing = {
      id: "temp",
      type: "temporary",
      status: "temp",
      modelID: null,
      recipeName: "Temporary Workspace",
      owner: "You",
      updatedAt: "Just now"
    };
    state.workspaces.unshift(existing);
    saveState();
  }
  return existing;
};

export const createModelWorkspace = (payload) => {
  const state = loadState();
  const modelID = payload.modelID || `M-${Date.now().toString().slice(-5)}`;
  const workspace = {
    id: modelID,
    type: "model",
    status: "draft",
    modelID,
    recipeName: payload.recipeName || "New Recipe",
    owner: payload.owner || "You",
    updatedAt: "Just now"
  };
  state.workspaces = state.workspaces.filter((item) => item.id !== "temp");
  state.workspaces.unshift(workspace);
  state.recipeSchemas[modelID] = payload;
  saveState();
  return workspace;
};

export const updateWorkspaceStatus = (id, status) => {
  const state = loadState();
  const workspace = state.workspaces.find((item) => item.id === id);
  if (workspace) {
    workspace.status = status;
    workspace.updatedAt = "Just now";
    saveState();
  }
  return workspace;
};

export const listGlobalRuns = () => {
  const state = loadState();
  return state.runs;
};

const tickRunDetail = (detail) => {
  detail.iteration += 1;
  detail.ranking = detail.ranking.map((row) => ({
    ...row,
    iteration: row.iteration + 1
  }));
  if (detail.ranking[0]) {
    detail.ranking[0].kpi = (0.94 + Math.random() * 0.02).toFixed(2);
  }
  detail.trace.unshift({
    time: "now",
    action: "check",
    note: `Iteration ${detail.iteration} KPI updated`
  });
};

export const startRunTicker = () => {
  if (runTickerStarted || typeof window === "undefined") {
    return;
  }
  runTickerStarted = true;
  window.setInterval(() => {
    const state = loadState();
    Object.values(state.runDetail).forEach((detail) => tickRunDetail(detail));
    saveState();
  }, 6000);
};

export const getRunDetail = (modelID) => {
  const state = loadState();
  if (!state.runDetail[modelID]) {
    state.runDetail[modelID] = {
      status: "queued",
      iteration: 0,
      ranking: [],
      trace: []
    };
  }
  return state.runDetail[modelID];
};

export const saveCheckpoint = (modelID) => {
  const state = loadState();
  const detail = getRunDetail(modelID);
  detail.trace.unshift({
    time: "now",
    action: "checkpoint",
    note: "Checkpoint saved"
  });
  state.runDetail[modelID] = detail;
  saveState();
  return detail;
};

export const saveRecipeSchema = (modelID, schema) => {
  const state = loadState();
  state.recipeSchemas[modelID] = schema;
  saveState();
};

export const loadRecipeSchema = (modelID) => {
  const state = loadState();
  return state.recipeSchemas[modelID] || null;
};

export const getPreRecipeSpectrum = ({ waferIds, timeRange }) => ({
  waferIds,
  timeRange,
  curves: waferIds.map((id) => ({ id, points: [] }))
});

export const getSensitivityAnalysis = ({ target }) => ({
  target,
  bands: [
    { range: "480-520", level: "high" },
    { range: "610-660", level: "medium" }
  ],
  curve: []
});

export const getPrecisionSummary = ({ waferId, pointId }) => ({
  waferId,
  pointId,
  summary: Array.from({ length: 17 }).map((_, index) => ({
    point: `P-${String(index + 1).padStart(2, "0")}`,
    mean: (0.7 + index * 0.02).toFixed(2),
    std: (0.12 + index * 0.01).toFixed(2)
  }))
});
