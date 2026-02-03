import React, { useMemo, useState } from "react";
import MultiSelectDropdown from "../../components/MultiSelectDropdown.jsx";
import { buildHashHref } from "../../router.js";
import { spectrumByWafer, waferIds } from "../../data/mock.js";

export default function RecipeSetup({ workspaceId }) {
  const [selectedWafers, setSelectedWafers] = useState(waferIds.slice(0, 2));
  const [baselineWafer, setBaselineWafer] = useState(waferIds[0]);
  const [baselineSpectrum, setBaselineSpectrum] = useState("");

  const baselineOptions = useMemo(() => spectrumByWafer[baselineWafer] || [], [baselineWafer]);

  const handleSelectAll = () => {
    setSelectedWafers(waferIds);
  };

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Pre-Recipe</p>
          <h2>Recipe Data Setup</h2>
          <p className="subtle">Select wafers and baselines before creating recipe.</p>
        </div>
        <a
          className="primary-button"
          href={buildHashHref(`/workspace/${workspaceId}/recipe/create`)}
        >
          Proceed to Create Recipe
        </a>
      </header>

      <section className="panel">
        <div className="panel-header">
          <h3>Confirm WaferID</h3>
          <div className="inline-actions">
            <button className="ghost-button" onClick={handleSelectAll}>Select All</button>
          </div>
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
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>Confirm Baseline Spectrum</h3>
        </div>
        <div className="form-grid two-col">
          <div className="form-row">
            <label>WaferID</label>
            <select
              value={baselineWafer}
              onChange={(event) => {
                setBaselineWafer(event.target.value);
                setBaselineSpectrum("");
              }}
            >
              {waferIds.map((id) => (
                <option key={id} value={id}>{id}</option>
              ))}
            </select>
          </div>
          <div className="form-row">
            <label>Spectrum ID</label>
            <select
              value={baselineSpectrum}
              onChange={(event) => setBaselineSpectrum(event.target.value)}
            >
              <option value="">Select spectrum</option>
              {baselineOptions.map((id) => (
                <option key={id} value={`${baselineWafer}-${id}`}>
                  {id}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
    </div>
  );
}
