import React from "react";

export default function NewRecipe() {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Recipe</p>
          <h2>Create Recipe Draft</h2>
          <p className="subtle">Load model.json via modelID and start a strategy draft.</p>
        </div>
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
        <div className="form-row">
          <label>Description</label>
          <input type="text" placeholder="Optional notes" />
        </div>
        <button className="primary-button">Confirm & Parse</button>
      </section>
    </div>
  );
}
