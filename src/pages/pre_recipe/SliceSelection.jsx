import React, { useState } from "react";

export default function SliceSelection() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("Balanced");

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Pre-Recipe</p>
          <h2>TEM Selection Workbench</h2>
          <p className="subtle">
            Configure spatial constraints and pick TEM points with linked spectrum highlight.
          </p>
        </div>
        <button className="primary-button">Generate Plan</button>
      </header>

      <section className="grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h3>Basic Configuration</h3>
            <button className="ghost-button">Load Wafer Map</button>
          </div>
          <div className="form-grid">
            <div className="form-row">
              <label>Trim Radius (mm)</label>
              <input type="number" defaultValue={148} />
            </div>
            <div className="form-row">
              <label>Center Boundary (mm)</label>
              <input type="number" defaultValue={50} />
            </div>
            <div className="form-row">
              <label>Middle Boundary (mm)</label>
              <input type="number" defaultValue={100} />
            </div>
            <div className="form-row">
              <label>Edge Boundary (mm)</label>
              <input type="number" defaultValue={148} />
            </div>
          </div>
          <div className="panel-note">
            Boundaries are formatted as Center (0 to value), Middle (center to value), Edge (middle to trim radius).
          </div>
        </div>
        <div className="panel">
          <div className="panel-header">
            <h3>Wafer Region Quotas</h3>
            <button className="ghost-button">Add Wafer</button>
          </div>
          <div className="table">
            <div className="table-row table-head">
              <span>Wafer</span>
              <span>Center</span>
              <span>Middle</span>
              <span>Edge</span>
            </div>
            <div className="table-row">
              <span>WAFER-223A</span>
              <input type="number" defaultValue={2} />
              <input type="number" defaultValue={3} />
              <input type="number" defaultValue={1} />
            </div>
            <div className="table-row">
              <span>WAFER-118C</span>
              <input type="number" defaultValue={1} />
              <input type="number" defaultValue={2} />
              <input type="number" defaultValue={2} />
            </div>
          </div>
          <div className="panel-note">Each wafer maintains its own quota counts.</div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>Algorithm Selection</h3>
          <span className="chip">Choose one</span>
        </div>
        <div className="inline-actions">
          {["Balanced", "Center Focus", "Edge Focus", "Randomized"].map((algo) => (
            <button
              key={algo}
              className={selectedAlgorithm === algo ? "primary-button" : "ghost-button"}
              onClick={() => setSelectedAlgorithm(algo)}
            >
              {algo}
            </button>
          ))}
        </div>
      </section>

      <section className="grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h3>Spectrum View</h3>
            <div className="inline-actions">
              <button className="ghost-button">Highlight Plan</button>
              <button className="ghost-button">Single Point</button>
            </div>
          </div>
          <div className="plot-placeholder">Plotly Spectrum Container</div>
        </div>
        <div className="panel">
          <div className="panel-header">
            <h3>Wafer Spatial View</h3>
            <div className="inline-actions">
              <button className="ghost-button">Show Rings</button>
              <button className="ghost-button">Highlight Point</button>
            </div>
          </div>
          <div className="plot-placeholder">2D Wafer Map Placeholder</div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>TEM Plan Output</h3>
          <button className="ghost-button">Save Plan</button>
        </div>
        <div className="table">
          <div className="table-row table-head">
            <span>Wafer</span>
            <span>Point</span>
            <span>Spectrum ID</span>
            <span>Region</span>
          </div>
          <div className="table-row">
            <span>A</span>
            <span>P-01</span>
            <span>WAFER-223A</span>
            <span>Center</span>
          </div>
          <div className="table-row">
            <span>A</span>
            <span>P-02</span>
            <span>WAFER-118C</span>
            <span>Middle</span>
          </div>
          <div className="table-row">
            <span>B</span>
            <span>P-05</span>
            <span>WAFER-77B</span>
            <span>Edge</span>
          </div>
        </div>
      </section>

    </div>
  );
}
