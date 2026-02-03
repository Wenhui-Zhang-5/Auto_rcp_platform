import React, { useState } from "react";
import { waferIds } from "../../data/mock.js";

export default function Sensitivity() {
  const [splitTags, setSplitTags] = useState(["splitA", "splitB"]);

  const updateSplitTag = (index, value) => {
    setSplitTags((prev) => prev.map((tag, idx) => (idx === index ? value : tag)));
  };

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

      <section className="panel">
        <div className="panel-header">
          <h3>Split Tag Panel</h3>
          <button className="ghost-button">Add Split</button>
        </div>
        <div className="form-grid two-col">
          {splitTags.map((tag, index) => (
            <div className="form-row" key={`split-${index}`}>
              <label>Split Tag {index + 1}</label>
              <input
                type="text"
                value={tag}
                onChange={(event) => updateSplitTag(index, event.target.value)}
              />
            </div>
          ))}
        </div>
        <div className="panel-note">
          Each wafer can take up to two split tags (example: splitA_Baseline, splitA_Baseline-, splitA_Baseline+).
        </div>
        <div className="table">
          <div className="table-row table-head">
            <span>Wafer</span>
            <span>Tag Slot A</span>
            <span>Tag Slot B</span>
          </div>
          {waferIds.map((id) => (
            <div className="table-row" key={id}>
              <span>{id}</span>
              <select>
                {splitTags.map((tag) => (
                  <option key={`${id}-${tag}-a`} value={`${tag}_Baseline`}>
                    {tag}_Baseline
                  </option>
                ))}
                <option value="">None</option>
              </select>
              <select>
                {splitTags.map((tag) => (
                  <option key={`${id}-${tag}-b`} value={`${tag}_Baseline+`}>
                    {tag}_Baseline+
                  </option>
                ))}
                <option value="">None</option>
              </select>
            </div>
          ))}
        </div>
        <div className="form-row">
          <label>Analysis Target</label>
          <select>
            <option>Split A</option>
            <option>Split B</option>
            <option>All WaferIDs</option>
          </select>
        </div>
        <button className="primary-button">Start Sensitivity Analysis</button>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>Sensitivity Curve Plot</h3>
          <div className="inline-actions">
            <button className="ghost-button">Toggle Bands</button>
            <button className="ghost-button">Overlay Spectra</button>
          </div>
        </div>
        <div className="plot-placeholder">Plotly Sensitivity Container</div>
        <div className="band-list">
          <div className="band-item">480-520 nm - High</div>
          <div className="band-item">610-660 nm - Medium</div>
          <div className="band-item">720-750 nm - Low</div>
        </div>
      </section>
    </div>
  );
}
