export const platformNavSections = [
  {
    title: "Platform",
    theme: "home",
    items: [
      { label: "Home", path: "/" },
      { label: "Global Run Monitor", path: "/global-run-monitor" }
    ]
  },
  {
    title: "Assets",
    theme: "recipe",
    items: [
      { label: "History", path: "/history" },
      { label: "Templates", path: "/templates" }
    ]
  }
];

export const workspaceNavSections = [
  {
    title: "Workspace",
    theme: "pre",
    items: [
      { label: "Overview", path: "/overview" }
    ],
    children: [
      {
        label: "Pre-Recipe",
        path: "/pre-recipe",
        items: [
          { label: "Spectrum", path: "/pre-recipe/spectrum" },
          { label: "Sensitivity", path: "/pre-recipe/sensitivity" },
          { label: "TEM Selection", path: "/pre-recipe/slice-selection" },
          { label: "Precision", path: "/pre-recipe/precision" },
          { label: "Recipe Data Setup", path: "/pre-recipe/recipe-data-setup" }
        ]
      },
      {
        label: "Recipe Build",
        path: "/recipe",
        items: [
          { label: "Create", path: "/recipe/create" },
          { label: "Model", path: "/recipe/model" },
          { label: "CD Strategy", path: "/recipe/cd-strategy" },
          { label: "Material", path: "/recipe/material" },
          { label: "Fitting Strategy", path: "/recipe/fitting-strategy" },
          { label: "TEM & KPI", path: "/recipe/tem-kpi" }
        ]
      },
      {
        label: "Run Monitor",
        path: "/run-monitor",
        items: [
          { label: "Control", path: "/run-monitor/control" },
          { label: "Trace", path: "/run-monitor/trace" },
          { label: "Ranking", path: "/run-monitor/ranking" },
          { label: "Detail", path: "/run-monitor/detail" }
        ]
      },
      {
        label: "Results",
        path: "/results",
        items: [
          { label: "Summary", path: "/results/summary" },
          { label: "Template", path: "/results/template" }
        ]
      }
    ]
  }
];

export const breadcrumbMap = {
  "/": ["Platform", "Home"],
  "/global-run-monitor": ["Platform", "Global Run Monitor"],
  "/history": ["Platform", "History"],
  "/templates": ["Platform", "Templates"],
  "/workspace/:id/overview": ["Workspace", "Overview"],
  "/workspace/:id/pre-recipe/spectrum": ["Workspace", "Pre-Recipe", "Spectrum Viewer"],
  "/workspace/:id/pre-recipe/sensitivity": ["Workspace", "Pre-Recipe", "Sensitivity Analysis"],
  "/workspace/:id/pre-recipe/slice-selection": ["Workspace", "Pre-Recipe", "TEM Selection"],
  "/workspace/:id/pre-recipe/precision": ["Workspace", "Pre-Recipe", "Precision"],
  "/workspace/:id/pre-recipe/recipe-data-setup": ["Workspace", "Pre-Recipe", "Recipe Data Setup"],
  "/workspace/:id/recipe/create": ["Workspace", "Recipe Build", "Create Recipe"],
  "/workspace/:id/recipe/model": ["Workspace", "Recipe Build", "Model"],
  "/workspace/:id/recipe/cd-strategy": ["Workspace", "Recipe Build", "CD Strategy"],
  "/workspace/:id/recipe/material": ["Workspace", "Recipe Build", "Material"],
  "/workspace/:id/recipe/fitting-strategy": ["Workspace", "Recipe Build", "Fitting Strategy"],
  "/workspace/:id/recipe/tem-kpi": ["Workspace", "Recipe Build", "TEM & KPI"],
  "/workspace/:id/run-monitor/control": ["Workspace", "Run Monitor", "Control"],
  "/workspace/:id/run-monitor/trace": ["Workspace", "Run Monitor", "Trace"],
  "/workspace/:id/run-monitor/ranking": ["Workspace", "Run Monitor", "Ranking"],
  "/workspace/:id/run-monitor/detail": ["Workspace", "Run Monitor", "Detail"],
  "/workspace/:id/results/summary": ["Workspace", "Results", "Summary"],
  "/workspace/:id/results/template": ["Workspace", "Results", "Template"]
};
