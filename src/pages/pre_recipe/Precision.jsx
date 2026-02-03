import React, { useState } from "react";
import MultiSelectDropdown from "../../components/MultiSelectDropdown.jsx";
import { buildHashHref } from "../../router.js";
import { timeRanges, waferIds } from "../../data/mock.js";

export default function Precision({ workspaceId }) {
  const [recipeName, setRecipeName] = useState("Temp Recipe");
  const [selectedWafers, setSelectedWafers] = useState([waferIds[0]]);
  const [selectedTimes, setSelectedTimes] = useState([timeRanges[0]]);
  const [selectedPoints, setSelectedPoints] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  const handleStart = () => {
    setShowSummary(true);
  };

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Pre-Recipe</p>
          <h2>Precision Evaluation</h2>
          <p className="subtle">Analyze repeatability and batch plot spectra by point.</p>
        </div>
        <a className="ghost-button" href={buildHashHref(`/workspace/${workspaceId}/pre-recipe/recipe-data-setup`)}>
          Recipe Data Setup
        </a>
      </header>

      <section className="panel">
        <div className="panel-header">
          <h3>Inputs</h3>
        </div>
        <div className="form-grid">
          <div className="form-row">
            <label>Recipe Name</label>
            <input
              type="text"
              value={recipeName}
              onChange={(event) => setRecipeName(event.target.value)}
            />
          </div>
          <div className="form-row">
            <label>WaferID (multi)</label>
            <MultiSelectDropdown
              label="WaferID"
              options={waferIds.map((id) => ({ value: id, label: id }))}
              value={selectedWafers}
              onChange={setSelectedWafers}
            />
          </div>
          <div className="form-row">
            <label>Time Range (multi)</label>
            <MultiSelectDropdown
              label="Time Range"
              options={timeRanges.map((range) => ({ value: range, label: range }))}
              value={selectedTimes}
              onChange={setSelectedTimes}
            />
          </div>
          <div className="form-row">
            <button className="primary-button" onClick={handleStart}>Start Precision Analysis</button>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>Precision Summary</h3>
          <div className="inline-actions">
            <button className="ghost-button">Export</button>
          </div>
        </div>
        {showSummary ? (
          <div className="table">
            <div className="table-row table-head">
              <span>Point</span>
              <span>Mean</span>
              <span>Std</span>
              <span>Range</span>
            </div>
            {Array.from({ length: 17 }).map((_, index) => (
              <div className="table-row" key={`precision-${index}`}>
                <span>P-{String(index + 1).padStart(2, "0")}</span>
                <span>{(0.8 + index * 0.02).toFixed(2)}%</span>
                <span>{(0.15 + index * 0.01).toFixed(2)}%</span>
                <span>{(1.2 + index * 0.1).toFixed(2)}%</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="plot-placeholder">Start analysis to load summary</div>
        )}
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>Spectrum Plot (by Point ID)</h3>
          <div className="inline-actions">
            <button className="ghost-button">Toggle Deviation</button>
            <button className="ghost-button">Normalize</button>
          </div>
        </div>
        <div className="form-row">
          <label>Point ID (multi)</label>
          <MultiSelectDropdown
            label="Point ID"
            options={Array.from({ length: 8 }).map((_, index) => {
              const value = `P-${String(index + 1).padStart(2, "0")}`;
              return { value, label: value };
            })}
            value={selectedPoints}
            onChange={setSelectedPoints}
          />
        </div>
        <div className="plot-placeholder">
          Plotly Precision Container (Points: {selectedPoints.join(", ") || "None"})
        </div>
      </section>
    </div>
  );
}
