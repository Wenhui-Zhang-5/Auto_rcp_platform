import React from "react";

export default function ResultsTemplate({ workspaceId }) {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Results</p>
          <h2>Template</h2>
          <p className="subtle">Export recipe schema for {workspaceId}.</p>
        </div>
        <button className="primary-button">Save as Template</button>
      </header>

      <section className="panel">
        <div className="panel-header">
          <h3>Template Preview</h3>
          <button className="ghost-button">Copy JSON</button>
        </div>
        <div className="plot-placeholder">Recipe JSON Schema Preview</div>
      </section>
    </div>
  );
}
