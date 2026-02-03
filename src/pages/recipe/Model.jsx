import React from "react";
import { basisCdRows, constraintCdRows, materialSummary } from "../../data/mock.js";

export default function Model() {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Recipe</p>
          <h2>Model</h2>
          <p className="subtle">Parsed basis and constraint CD tables from model.json.</p>
        </div>
        <button className="primary-button">Reload Model</button>
      </header>

      <section className="panel narrow">
        <div className="panel-header">
          <h3>Model ID</h3>
          <span className="chip">API: /models/{'{'}modelID{'}'}</span>
        </div>
        <div className="form-row">
          <label>Model ID</label>
          <input type="text" defaultValue="M-ALD-77" />
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>Basis CD</h3>
          <button className="ghost-button">Export</button>
        </div>
        <div className="table">
          <div className="table-row table-head">
            <span>ID</span>
            <span>Name</span>
            <span>Current</span>
            <span>Nominal</span>
            <span>Range</span>
            <span>Unit</span>
          </div>
          {basisCdRows.map((row) => (
            <div className="table-row" key={row.id}>
              <span>{row.id}</span>
              <span>{row.name}</span>
              <span>{row.current}</span>
              <span>{row.nominal}</span>
              <span>{row.range}</span>
              <span>{row.unit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>Constraint CD</h3>
          <button className="ghost-button">Export</button>
        </div>
        <div className="table">
          <div className="table-row table-head">
            <span>ID</span>
            <span>Name</span>
            <span>Depends</span>
            <span>Relation</span>
            <span>Current</span>
          </div>
          {constraintCdRows.map((row) => (
            <div className="table-row" key={row.id}>
              <span>{row.id}</span>
              <span>{row.name}</span>
              <span>{row.depends}</span>
              <span>{row.relation}</span>
              <span>{row.current}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>Material Summary</h3>
          <button className="ghost-button">View Details</button>
        </div>
        <div className="summary-grid">
          <div>
            <p className="summary-label">Materials</p>
            <p className="summary-value">{materialSummary.materials.join(", ")}</p>
          </div>
          <div>
            <p className="summary-label">Model Type</p>
            <p className="summary-value">{materialSummary.model}</p>
          </div>
          <div>
            <p className="summary-label">Oscillators</p>
            <p className="summary-value">{materialSummary.oscillators}</p>
          </div>
          <div>
            <p className="summary-label">Spectrum Range</p>
            <p className="summary-value">380-780 nm</p>
          </div>
          <div>
            <p className="summary-label">SE / SR Ratio</p>
            <p className="summary-value">0.82</p>
          </div>
        </div>
      </section>
    </div>
  );
}
