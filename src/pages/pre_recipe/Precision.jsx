import React from "react";

export default function Precision() {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Pre-Recipe</p>
          <h2>Precision Evaluation</h2>
          <p className="subtle">Compare repeated spectra for stability metrics.</p>
        </div>
        <button className="primary-button">Fetch Precision</button>
      </header>

      <section className="grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h3>Point Selector</h3>
            <button className="ghost-button">Use Slice Plan</button>
          </div>
          <div className="form-grid">
            <div className="form-row">
              <label>Wafer</label>
              <select>
                <option>Wafer A</option>
                <option>Wafer B</option>
              </select>
            </div>
            <div className="form-row">
              <label>Point ID</label>
              <input type="text" defaultValue="P-01" />
            </div>
            <div className="form-row">
              <label>Spectrum ID</label>
              <input type="text" defaultValue="WAFER-223A" />
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-header">
            <h3>Precision Metrics</h3>
            <button className="ghost-button">Export</button>
          </div>
          <div className="metric-grid">
            <div className="metric-card">
              <p>Average Deviation</p>
              <h3>0.8%</h3>
            </div>
            <div className="metric-card">
              <p>Max Drift</p>
              <h3>1.4%</h3>
            </div>
            <div className="metric-card">
              <p>Repeat Count</p>
              <h3>6</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>Precision Overlay</h3>
          <div className="inline-actions">
            <button className="ghost-button">Toggle Deviation</button>
            <button className="ghost-button">Normalize</button>
          </div>
        </div>
        <div className="plot-placeholder">Plotly Precision Container</div>
      </section>
    </div>
  );
}
