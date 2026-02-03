import React, { useState } from "react";

const templateData = [
  {
    id: "T-001",
    name: "Dense Gate V3",
    summary: "CD Strategy + HO by column",
    owner: "L. Chen"
  },
  {
    id: "T-002",
    name: "Spacer Etch B",
    summary: "Seed search top 6 + custom HO",
    owner: "S. Li"
  }
];

export default function Templates() {
  const [selected, setSelected] = useState(templateData[0]);

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Platform</p>
          <h2>Templates</h2>
          <p className="subtle">Preview and select recipe templates.</p>
        </div>
        <button className="primary-button">Create Recipe</button>
      </header>

      <section className="grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h3>Template List</h3>
            <button className="ghost-button">Filter</button>
          </div>
          <div className="list">
            {templateData.map((template) => (
              <button
                key={template.id}
                className="list-row"
                onClick={() => setSelected(template)}
              >
                <div>
                  <p className="list-title">{template.name}</p>
                  <p className="list-subtitle">{template.owner}</p>
                </div>
                <span className="chip">{template.id}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="panel">
          <div className="panel-header">
            <h3>Template Preview</h3>
            <button className="ghost-button">Copy JSON</button>
          </div>
          <div className="summary-grid">
            <div>
              <p className="summary-label">Name</p>
              <p className="summary-value">{selected.name}</p>
            </div>
            <div>
              <p className="summary-label">Owner</p>
              <p className="summary-value">{selected.owner}</p>
            </div>
            <div>
              <p className="summary-label">Summary</p>
              <p className="summary-value">{selected.summary}</p>
            </div>
          </div>
          <div className="plot-placeholder">Template JSON Preview Placeholder</div>
        </div>
      </section>
    </div>
  );
}
