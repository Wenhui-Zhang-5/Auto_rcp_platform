import React from "react";
import { basisCdRows } from "../../data/mock.js";

export default function CdStrategy() {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Recipe</p>
          <h2>CD Strategy</h2>
          <p className="subtle">Classify CDs and configure grid-fixed priorities.</p>
        </div>
        <button className="primary-button">Save Strategy</button>
      </header>

      <section className="grid three-col">
        <div className="panel">
          <div className="panel-header">
            <h3>Master Float</h3>
            <button className="ghost-button">Auto</button>
          </div>
          <div className="list">
            <div className="list-row">CD01 - Line CD</div>
            <div className="list-row">CD02 - Pitch</div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-header">
            <h3>Master Fix</h3>
            <button className="ghost-button">Lock</button>
          </div>
          <div className="list">
            <div className="list-row">CD05 - Sidewall</div>
            <div className="list-row">CD07 - Spacer</div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-header">
            <h3>Maybe (Priority)</h3>
            <button className="ghost-button">Reorder</button>
          </div>
          <div className="drag-list">
            {basisCdRows.map((row, index) => (
              <div className="drag-row" key={row.id}>
                <span className="drag-handle">::</span>
                <span>{index + 1}. {row.name}</span>
                <span className="chip">grid</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>Grid Fixed Parameters</h3>
          <div className="inline-actions">
            <button className="ghost-button">Batch Apply</button>
            <button className="ghost-button">Reset</button>
          </div>
        </div>
        <div className="table">
          <div className="table-row table-head">
            <span>CD</span>
            <span>Range</span>
            <span>Step</span>
            <span>Status</span>
          </div>
          {basisCdRows.map((row) => (
            <div className="table-row" key={`${row.id}-grid`}>
              <span>{row.name}</span>
              <input type="text" defaultValue={row.range} />
              <input type="text" defaultValue="0.1" />
              <span className="chip">Enabled</span>
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>Constraint Scheme</h3>
          <button className="ghost-button">Save Scheme</button>
        </div>
        <div className="form-row">
          <label>Scheme Name</label>
          <input type="text" defaultValue="Scheme A" />
        </div>
        <div className="form-row">
          <label>Expression</label>
          <textarea rows={4} defaultValue="CCD01 = CD01 - CD03; CCD02 = CD02 * 0.03" />
        </div>
        <div className="chip-row">
          <span className="chip">Scheme A (active)</span>
          <span className="chip">Scheme B</span>
          <span className="chip chip-muted">+ New</span>
        </div>
      </section>
    </div>
  );
}
