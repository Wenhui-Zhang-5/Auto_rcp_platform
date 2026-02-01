import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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

export default function App() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pre-recipe/spectrum" element={<Spectrum />} />
        <Route path="/pre-recipe/sensitivity" element={<Sensitivity />} />
        <Route path="/pre-recipe/slice-selection" element={<SliceSelection />} />
        <Route path="/pre-recipe/precision" element={<Precision />} />
        <Route path="/recipe/new" element={<NewRecipe />} />
        <Route path="/recipe/model" element={<Model />} />
        <Route path="/recipe/cd-strategy" element={<CdStrategy />} />
        <Route path="/recipe/material" element={<Material />} />
        <Route path="/recipe/seed-search" element={<SeedSearch />} />
        <Route path="/recipe/fitting-strategy" element={<FittingStrategy />} />
        <Route path="/recipe/tm-kpi" element={<TmKpi />} />
        <Route path="/run-center/monitor/:runId" element={<Monitor />} />
        <Route path="/run-center/results/:runId" element={<Results />} />
        <Route path="/run-center/history" element={<History />} />
        <Route path="/run-center/templates" element={<Templates />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PageShell>
  );
}
