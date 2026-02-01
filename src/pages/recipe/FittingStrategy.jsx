import React from "react";

const materialOrder = ["SiO2", "SiN", "ARC", "PR"];
const hoSteps = [
  { step: "Step 1", params: "Amplitude" },
  { step: "Step 2", params: "Amplitude + EN" },
  { step: "Step 3", params: "Amplitude + EN + EG" }
];

export default function FittingStrategy() {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Recipe</p>
          <h2>Fitting Strategy</h2>
          <p className="subtle">Define material order, HO step sequence, and sensitivity weights.</p>
        </div>
        <button className="primary-button">Save Fitting</button>
      </header>

      <section className="grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h3>Material Optimization Order</h3>
            <button className="ghost-button">Auto Sort</button>
          </div>
          <div className="drag-list">
            {materialOrder.map((item, index) => (
              <div className="drag-row" key={item}>
                <span className="drag-handle">::</span>
                <span>{index + 1}. {item}</span>
                <span className="chip">unstable</span>
              </div>
            ))}
          </div>
        </div>
        <div className="panel">
          <div className="panel-header">
            <h3>HO Step Sequence</h3>
            <button className="ghost-button">Template</button>
          </div>
          <div className="table">
            <div className="table-row table-head">
              <span>Step</span>
              <span>Parameters</span>
              <span>Mode</span>
            </div>
            {hoSteps.map((row) => (
              <div className="table-row" key={row.step}>
                <span>{row.step}</span>
                <span>{row.params}</span>
                <span>By Column</span>
              </div>
            ))}
          </div>
          <div className="inline-actions">
            <button className="ghost-button">By Column</button>
            <button className="ghost-button">By Group</button>
            <button className="ghost-button">Custom</button>
          </div>
        </div>
      </section>

      <section className="grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h3>Sensitivity Weight</h3>
            <button className="ghost-button">Link Pre-Recipe</button>
          </div>
          <div className="form-grid">
            <div className="form-row">
              <label>Enable Weighting</label>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider" />
              </label>
            </div>
            <div className="form-row">
              <label>Weight Factor</label>
              <input type="text" defaultValue="0.75" />
            </div>
            <div className="form-row">
              <label>Band Source</label>
              <input type="text" defaultValue="Pre-Recipe sensitivity" />
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-header">
            <h3>Iteration Estimate</h3>
            <button className="ghost-button">Refresh</button>
          </div>
          <div className="form-grid">
            <div className="form-row">
              <label>Total Iterations</label>
              <input type="number" defaultValue={3} />
            </div>
            <div className="form-row">
              <label>Estimated Time</label>
              <input type="text" defaultValue="2h 10m" />
            </div>
          </div>
          <div className="panel-note">Estimated time returned by API placeholder.</div>
        </div>
      </section>
    </div>
  );
}
