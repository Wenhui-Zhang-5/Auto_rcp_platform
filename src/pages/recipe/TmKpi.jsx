import React from "react";

const tmRows = [
  { wafer: "W01", spectrum: "WAFER-223A", cd: "CD01", tm: 32.4, baseline: "WAFER-223A" },
  { wafer: "W02", spectrum: "WAFER-118C", cd: "CD02", tm: 64.1, baseline: "WAFER-118C" }
];

const kpiRows = [
  { cd: "CD01", bias: "+/-1.2", slope: "0.98-1.02", r2: ">0.97" },
  { cd: "CD02", bias: "+/-1.5", slope: "0.95-1.03", r2: ">0.96" }
];

export default function TmKpi() {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Recipe</p>
          <h2>TEM & KPI</h2>
          <p className="subtle">Define TEM values and KPI thresholds before launching run.</p>
        </div>
        <button className="primary-button">Validate & Save</button>
      </header>

      <section className="panel">
        <div className="panel-header">
          <h3>TEM Input Table</h3>
          <button className="ghost-button">Add Row</button>
        </div>
        <div className="table">
          <div className="table-row table-head">
            <span>Wafer</span>
            <span>Spectrum</span>
            <span>CD</span>
            <span>TEM</span>
            <span>Baseline</span>
          </div>
          {tmRows.map((row, index) => (
            <div className="table-row" key={`${row.wafer}-${index}`}>
              <span>{row.wafer}</span>
              <span>{row.spectrum}</span>
              <span>{row.cd}</span>
              <span>{row.tm}</span>
              <span>{row.baseline}</span>
            </div>
          ))}
        </div>
        <div className="panel-note">Baseline confirmation required before start.</div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>KPI Thresholds</h3>
          <button className="ghost-button">Apply Template</button>
        </div>
        <div className="table">
          <div className="table-row table-head">
            <span>CD</span>
            <span>Bias</span>
            <span>Slope</span>
            <span>R2</span>
          </div>
          {kpiRows.map((row) => (
            <div className="table-row" key={row.cd}>
              <span>{row.cd}</span>
              <span>{row.bias}</span>
              <span>{row.slope}</span>
              <span>{row.r2}</span>
            </div>
          ))}
        </div>
        <div className="panel-note">KPI validation runs before start.</div>
      </section>
    </div>
  );
}
