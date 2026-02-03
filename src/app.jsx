import React, { useEffect, useMemo, useState } from "react";
import PageShell from "./components/PageShell.jsx";
import Home from "./pages/Home.jsx";
import Spectrum from "./pages/pre_recipe/Spectrum.jsx";
import Sensitivity from "./pages/pre_recipe/Sensitivity.jsx";
import SliceSelection from "./pages/pre_recipe/SliceSelection.jsx";
import Precision from "./pages/pre_recipe/Precision.jsx";
import RecipeSetup from "./pages/pre_recipe/RecipeSetup.jsx";
import NewRecipe from "./pages/recipe/NewRecipe.jsx";
import Model from "./pages/recipe/Model.jsx";
import CdStrategy from "./pages/recipe/CdStrategy.jsx";
import Material from "./pages/recipe/Material.jsx";
import FittingStrategy from "./pages/recipe/FittingStrategy.jsx";
import TmKpi from "./pages/recipe/TmKpi.jsx";
import MonitorControl from "./pages/workspace/run_monitor/Control.jsx";
import MonitorTrace from "./pages/workspace/run_monitor/Trace.jsx";
import MonitorRanking from "./pages/workspace/run_monitor/Ranking.jsx";
import MonitorDetail from "./pages/workspace/run_monitor/Detail.jsx";
import ResultsSummary from "./pages/workspace/results/Summary.jsx";
import ResultsTemplate from "./pages/workspace/results/Template.jsx";
import GlobalRunMonitor from "./pages/platform/GlobalRunMonitor.jsx";
import History from "./pages/platform/History.jsx";
import Templates from "./pages/platform/Templates.jsx";
import Overview from "./pages/workspace/Overview.jsx";
import WorkspaceLocked from "./pages/workspace/WorkspaceLocked.jsx";
import { buildHashHref, getCurrentPath, matchRoute } from "./router.js";
import { createTemporaryWorkspace, getWorkspace } from "./data/mockApi.js";

const RedirectTo = ({ to }) => {
  useEffect(() => {
    window.location.hash = buildHashHref(to);
  }, [to]);
  return null;
};

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
      { path: "/global-run-monitor", render: () => <GlobalRunMonitor /> },
      { path: "/history", render: () => <History /> },
      { path: "/templates", render: () => <Templates /> },
      { path: "/workspace/:id/overview", render: ({ id }) => <Overview workspaceId={id} /> },
      { path: "/workspace/:id/pre-recipe", render: ({ id }) => <RedirectTo to={`/workspace/${id}/pre-recipe/spectrum`} /> },
      { path: "/workspace/:id/pre-recipe/spectrum", render: ({ id }) => <Spectrum workspaceId={id} /> },
      { path: "/workspace/:id/pre-recipe/sensitivity", render: ({ id }) => <Sensitivity workspaceId={id} /> },
      { path: "/workspace/:id/pre-recipe/slice-selection", render: ({ id }) => <SliceSelection workspaceId={id} /> },
      { path: "/workspace/:id/pre-recipe/precision", render: ({ id }) => <Precision workspaceId={id} /> },
      { path: "/workspace/:id/pre-recipe/recipe-data-setup", render: ({ id }) => <RecipeSetup workspaceId={id} /> },
      { path: "/workspace/:id/recipe", render: ({ id }) => <RedirectTo to={`/workspace/${id}/recipe/create`} /> },
      { path: "/workspace/:id/recipe/create", render: ({ id }) => <NewRecipe workspaceId={id} /> },
      { path: "/workspace/:id/recipe/model", render: ({ id }) => <Model workspaceId={id} /> },
      { path: "/workspace/:id/recipe/cd-strategy", render: ({ id }) => <CdStrategy workspaceId={id} /> },
      { path: "/workspace/:id/recipe/material", render: ({ id }) => <Material workspaceId={id} /> },
      { path: "/workspace/:id/recipe/fitting-strategy", render: ({ id }) => <FittingStrategy workspaceId={id} /> },
      { path: "/workspace/:id/recipe/tem-kpi", render: ({ id }) => <TmKpi workspaceId={id} /> },
      { path: "/workspace/:id/run-monitor", render: ({ id }) => <RedirectTo to={`/workspace/${id}/run-monitor/control`} /> },
      { path: "/workspace/:id/run-monitor/control", render: ({ id }) => <MonitorControl workspaceId={id} /> },
      { path: "/workspace/:id/run-monitor/trace", render: ({ id }) => <MonitorTrace workspaceId={id} /> },
      { path: "/workspace/:id/run-monitor/ranking", render: ({ id }) => <MonitorRanking workspaceId={id} /> },
      { path: "/workspace/:id/run-monitor/detail", render: ({ id }) => <MonitorDetail workspaceId={id} /> },
      { path: "/workspace/:id/results", render: ({ id }) => <RedirectTo to={`/workspace/${id}/results/summary`} /> },
      { path: "/workspace/:id/results/summary", render: ({ id }) => <ResultsSummary workspaceId={id} /> },
      { path: "/workspace/:id/results/template", render: ({ id }) => <ResultsTemplate workspaceId={id} /> }
    ],
    []
  );

  const activeRoute = routes.find((route) => matchRoute(route.path, currentPath));
  const routeParams = activeRoute ? matchRoute(activeRoute.path, currentPath) : null;
  let page = activeRoute ? activeRoute.render(routeParams) : <Home />;

  if (!activeRoute && currentPath.startsWith("/workspace/")) {
    const parts = currentPath.split("/").filter(Boolean);
    const workspaceId = parts[1];
    if (workspaceId) {
      page = <RedirectTo to={`/workspace/${workspaceId}/overview`} />;
    }
  }

  if (routeParams && routeParams.id) {
    let workspace = getWorkspace(routeParams.id);
    if (!workspace && routeParams.id === "temp") {
      workspace = createTemporaryWorkspace();
    }
    const isTemp = workspace && workspace.type === "temporary";
    const isRestricted = currentPath.includes("/recipe/") || currentPath.includes("/run-monitor") || currentPath.includes("/results");
    if (isTemp && isRestricted) {
      page = <WorkspaceLocked workspaceId={routeParams.id} />;
    }
  }

  return (
    <PageShell currentPath={currentPath}>{page}</PageShell>
  );
}
