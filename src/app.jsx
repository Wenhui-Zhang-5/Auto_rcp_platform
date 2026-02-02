import React, { useEffect, useMemo, useState } from "react";
import PageShell from "./components/PageShell.jsx";
import Home from "./pages/Home.jsx";
import Spectrum from "./pages/pre_recipe/Spectrum.jsx";
import Sensitivity from "./pages/pre_recipe/Sensitivity.jsx";
import SliceSelection from "./pages/pre_recipe/SliceSelection.jsx";
import Precision from "./pages/pre_recipe/Precision.jsx";
import NewRecipe from "./pages/recipe/NewRecipe.jsx";
import Model from "./pages/recipe/Model.jsx";
import CdStrategy from "./pages/recipe/CdStrategy.jsx";
import Material from "./pages/recipe/Material.jsx";
import SeedSearch from "./pages/recipe/SeedSearch.jsx";
import FittingStrategy from "./pages/recipe/FittingStrategy.jsx";
import TmKpi from "./pages/recipe/TmKpi.jsx";
import Monitor from "./pages/run_center/Monitor.jsx";
import Results from "./pages/run_center/Results.jsx";
import History from "./pages/run_center/History.jsx";
import Templates from "./pages/run_center/Templates.jsx";
import { getCurrentPath, matchRoute } from "./router.js";

export default function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getCurrentPath());
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const routes = useMemo(
    () => [
      { path: "/", render: () => <Home /> },
      { path: "/pre-recipe/spectrum", render: () => <Spectrum /> },
      { path: "/pre-recipe/sensitivity", render: () => <Sensitivity /> },
      { path: "/pre-recipe/slice-selection", render: () => <SliceSelection /> },
      { path: "/pre-recipe/precision", render: () => <Precision /> },
      { path: "/recipe/new", render: () => <NewRecipe /> },
      { path: "/recipe/model", render: () => <Model /> },
      { path: "/recipe/cd-strategy", render: () => <CdStrategy /> },
      { path: "/recipe/material", render: () => <Material /> },
      { path: "/recipe/seed-search", render: () => <SeedSearch /> },
      { path: "/recipe/fitting-strategy", render: () => <FittingStrategy /> },
      { path: "/recipe/tm-kpi", render: () => <TmKpi /> },
      {
        path: "/run-center/monitor/:runId",
        render: (params) => <Monitor runId={params.runId} />
      },
      {
        path: "/run-center/results/:runId",
        render: (params) => <Results runId={params.runId} />
      },
      { path: "/run-center/history", render: () => <History /> },
      { path: "/run-center/templates", render: () => <Templates /> }
    ],
    []
  );

  const activeRoute = routes.find((route) => matchRoute(route.path, currentPath));
  const routeParams = activeRoute ? matchRoute(activeRoute.path, currentPath) : null;
  const page = activeRoute ? activeRoute.render(routeParams) : <Home />;

  return (
    <PageShell currentPath={currentPath}>{page}</PageShell>
  );
}
