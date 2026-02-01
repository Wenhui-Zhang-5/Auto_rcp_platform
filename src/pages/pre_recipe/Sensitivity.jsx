import React from "react";
import { waferIds } from "../../data/mock.js";

export default function Sensitivity() {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Pre-Recipe</p>
          <h2>Sensitivity Analysis</h2>
          <p className="subtle">Analyze sensitive bands and overlay on spectra.</p>
        </div>
        <button className="primary-button">Analyze</button>
      </header>

      <section className="grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h3>Selected WaferIDs</h3>
            <button className="ghost-button">Use Spectrum Viewer</button>
          </div>
          <div className="chip-row">
            {waferIds.slice(0, 3).map((id) => (
              <span className="chip" key={id}>{id}</span>
            ))}
            <span className="chip chip-muted">+ Add</span>
          </div>
          <div className="form-row">
            <label>Band Highlight</label>
            <select>
              <option>Overlay on spectrum</option>
              <option>Separate plot</option>
            </select>
          </div>
        </div>
        <div className="panel">
          <div className="panel-header">
            <h3>Sensitivity Bands</h3>
            <button className="ghost-button">Export</button>
          </div>
          <div className="band-list">
            <div className="band-item">480-520 nm - High</div>
            <div className="band-item">610-660 nm - Medium</div>
            <div className="band-item">720-750 nm - Low</div>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>Sensitivity Plot</h3>
          <div className="inline-actions">
            <button className="ghost-button">Toggle Bands</button>
            <button className="ghost-button">Overlay Spectra</button>
          </div>
        </div>
        <div className="plot-placeholder">Plotly Sensitivity Container</div>
      </section>
    </div>
  );
}
