import React, { useMemo, useState } from "react";
import MultiSelectDropdown from "../../components/MultiSelectDropdown.jsx";
import { spectrumByWafer, timeRanges, waferIds } from "../../data/mock.js";

export default function Spectrum() {
  const [recipeName, setRecipeName] = useState("Temp Recipe");
  const [selectedWafers, setSelectedWafers] = useState([waferIds[0]]);
  const [selectedTimes, setSelectedTimes] = useState([timeRanges[0]]);
  const [selectedSpectra, setSelectedSpectra] = useState([]);
  const [showPlot, setShowPlot] = useState(false);

  const handleImport = () => {
    setShowPlot(true);
  };

  const mappingWafer = selectedWafers[0] || waferIds[0];
  const spectrumOptions = useMemo(
    () => spectrumByWafer[mappingWafer] || [],
    [mappingWafer]
  );

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
        <button className="primary-button" onClick={handleImport}>Import Data</button>
      </header>

      <section className="panel">
        <div className="panel-header">
          <h3>Inputs</h3>
        </div>
        <div className="form-grid">
          <div className="form-row">
            <label>Recipe Name</label>
            <input
              type="text"
              value={recipeName}
              onChange={(event) => setRecipeName(event.target.value)}
            />
          </div>
          <div className="form-row">
            <label>WaferID (multi)</label>
            <MultiSelectDropdown
              label="WaferID"
              options={waferIds.map((id) => ({ value: id, label: id }))}
              value={selectedWafers}
              onChange={setSelectedWafers}
            />
          </div>
          <div className="form-row">
            <label>Time Range (multi)</label>
            <MultiSelectDropdown
              label="Time Range"
              options={timeRanges.map((range) => ({ value: range, label: range }))}
              value={selectedTimes}
              onChange={setSelectedTimes}
            />
          </div>
          <button className="primary-button" onClick={handleImport}>Import Data</button>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>Select Spectrum to Highlight</h3>
          <span className="chip">Spectrum ID (multi select)</span>
        </div>
        <div className="form-grid two-col">
          <div className="form-row">
            <label>Wafer ID</label>
            <select
              value={mappingWafer}
              onChange={(event) => {
                setSelectedWafers([event.target.value]);
                setSelectedSpectra([]);
              }}
            >
              {waferIds.map((id) => (
                <option key={id} value={id}>{id}</option>
              ))}
            </select>
          </div>
          <div className="form-row">
            <label>Spectrum ID (multi)</label>
            <MultiSelectDropdown
              label="Spectrum ID"
              options={spectrumOptions.map((id) => ({
                value: `${mappingWafer}-${id}`,
                label: id
              }))}
              value={selectedSpectra}
              onChange={setSelectedSpectra}
            />
          </div>
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
        {showPlot ? (
          <div className="plot-placeholder">
            Plotly Spectrum Container (Highlighted: {selectedSpectra.join(", ") || "None"})
          </div>
        ) : (
          <div className="plot-placeholder">Import data to load plot</div>
        )}
      </section>
    </div>
  );
}
