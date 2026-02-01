import React from "react";

export default function SliceSelection() {
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
            <h3>Wafer Configuration</h3>
            <button className="ghost-button">Load Wafer Map</button>
          </div>
          <div className="form-grid">
            <div className="form-row">
              <label>Wafer A Points</label>
              <input type="number" defaultValue={3} />
            </div>
            <div className="form-row">
              <label>Wafer B Points</label>
              <input type="number" defaultValue={3} />
            </div>
            <div className="form-row">
              <label>Trim Radius (mm)</label>
              <input type="number" defaultValue={148} />
            </div>
            <div className="form-row">
              <label>Center/Middle/Edge Boundaries</label>
              <input type="text" defaultValue="0-50 / 50-100 / 100-148" />
            </div>
          </div>
          <div className="panel-note">
            Region quotas must sum to each wafer's total points.
          </div>
        </div>
        <div className="panel">
          <div className="panel-header">
            <h3>Region Quotas</h3>
            <button className="ghost-button">Auto Balance</button>
          </div>
          <div className="quota-grid">
            <div className="quota-row">
              <span>Center</span>
              <input type="number" defaultValue={2} />
            </div>
            <div className="quota-row">
              <span>Middle</span>
              <input type="number" defaultValue={3} />
            </div>
            <div className="quota-row">
              <span>Edge</span>
              <input type="number" defaultValue={1} />
            </div>
          </div>
          <div className="panel-note">Current total: 6 points</div>
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
