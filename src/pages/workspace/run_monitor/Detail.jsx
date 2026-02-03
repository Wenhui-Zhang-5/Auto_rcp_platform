import React from "react";

export default function MonitorDetail() {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Run Monitor</p>
          <h2>Detail View</h2>
          <p className="subtle">Linear plot, NK curves, and spectrum fitting.</p>
        </div>
      </header>

      <section className="panel">
        <div className="panel-header">
          <h3>Detail Charts</h3>
          <span className="chip">Seed: S2</span>
        </div>
        <div className="grid three-col">
          <div className="plot-placeholder">Linear Plot (TM vs OCD)</div>
          <div className="plot-placeholder">NK Curves</div>
          <div className="plot-placeholder">Spectrum Fitting</div>
        </div>
      </section>
    </div>
  );
}
