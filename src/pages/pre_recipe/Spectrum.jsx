import React from "react";
import { waferIds } from "../../data/mock.js";

export default function Spectrum() {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Pre-Recipe</p>
          <h2>Spectrum Viewer</h2>
          <p className="subtle">
            Load DOE spectra by WaferID and compare curves with zoom and highlight.
          </p>
        </div>
        <button className="primary-button">Load Spectra</button>
      </header>

      <section className="panel">
        <div className="panel-header">
          <h3>WaferID Input</h3>
          <button className="ghost-button">Import from CSV</button>
        </div>
        <div className="chip-row">
          {waferIds.map((id) => (
            <span className="chip" key={id}>{id}</span>
          ))}
          <span className="chip chip-muted">+ Add WaferID</span>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>Spectrum Plot</h3>
          <div className="inline-actions">
            <button className="ghost-button">Toggle Legend</button>
            <button className="ghost-button">Highlight</button>
          </div>
        </div>
        <div className="plot-placeholder">Plotly Spectrum Container</div>
      </section>
    </div>
  );
}
