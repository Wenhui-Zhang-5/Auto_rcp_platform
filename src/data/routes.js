export const navSections = [
  {
    title: "Home",
    theme: "home",
    items: [{ label: "Overview", path: "/" }]
  },
  {
    title: "Pre-Recipe",
    theme: "pre",
    items: [
      { label: "Spectrum Viewer", path: "/pre-recipe/spectrum" },
      { label: "Sensitivity Analysis", path: "/pre-recipe/sensitivity" },
      { label: "TEM Selection", path: "/pre-recipe/slice-selection" },
      { label: "Precision", path: "/pre-recipe/precision" }
    ]
  },
  {
    title: "Recipe",
    theme: "recipe",
    items: [
      { label: "New Recipe", path: "/recipe/new" },
      { label: "Model", path: "/recipe/model" },
      { label: "CD Strategy", path: "/recipe/cd-strategy" },
      { label: "Material", path: "/recipe/material" },
      { label: "Seed Search", path: "/recipe/seed-search" },
      { label: "Fitting Strategy", path: "/recipe/fitting-strategy" },
      { label: "TEM & KPI", path: "/recipe/tm-kpi" }
    ]
  },
  {
    title: "Run Center",
    theme: "run",
    items: [
      { label: "Run Monitor", path: "/run-center/monitor/demo-run" },
      { label: "Results", path: "/run-center/results/demo-run" },
      { label: "History", path: "/run-center/history" },
      { label: "Templates", path: "/run-center/templates" }
    ]
  }
];

export const breadcrumbMap = {
  "/": ["Home"],
  "/pre-recipe/spectrum": ["Pre-Recipe", "Spectrum Viewer"],
  "/pre-recipe/sensitivity": ["Pre-Recipe", "Sensitivity Analysis"],
  "/pre-recipe/slice-selection": ["Pre-Recipe", "TEM Selection"],
  "/pre-recipe/precision": ["Pre-Recipe", "Precision"],
  "/recipe/new": ["Recipe", "New Recipe"],
  "/recipe/model": ["Recipe", "Model"],
  "/recipe/cd-strategy": ["Recipe", "CD Strategy"],
  "/recipe/material": ["Recipe", "Material"],
  "/recipe/seed-search": ["Recipe", "Seed Search"],
  "/recipe/fitting-strategy": ["Recipe", "Fitting Strategy"],
  "/recipe/tm-kpi": ["Recipe", "TEM & KPI"],
  "/run-center/monitor/:runId": ["Run Center", "Run Monitor"],
  "/run-center/results/:runId": ["Run Center", "Results"],
  "/run-center/history": ["Run Center", "History"],
  "/run-center/templates": ["Run Center", "Templates"]
};
