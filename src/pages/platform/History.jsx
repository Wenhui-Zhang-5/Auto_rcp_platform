import React, { useState } from "react";
import { listModelHub } from "../../data/mockApi.js";
import { buildHashHref } from "../../router.js";

export default function History() {
  const [query, setQuery] = useState("");
  const models = listModelHub().filter((item) =>
    [item.modelID, item.recipeName, item.owner]
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Platform</p>
          <h2>History</h2>
          <p className="subtle">Search across all model workspaces.</p>
        </div>
        <div className="form-row">
          <label>Search</label>
          <input
            type="text"
            placeholder="Search by model, recipe, owner"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </header>

      <section className="panel">
        <div className="table">
          <div className="table-row table-head">
            <span>Model ID</span>
            <span>Recipe</span>
            <span>Owner</span>
            <span>Status</span>
            <span>Updated</span>
          </div>
          {models.map((item) => (
            <a
              key={item.modelID}
              className="table-row link-row"
              href={buildHashHref(`/workspace/${item.modelID}/overview`)}
            >
              <span>{item.modelID}</span>
              <span>{item.recipeName}</span>
              <span>{item.owner}</span>
              <span className={`status-pill status-${item.status}`}>{item.status}</span>
              <span>{item.updatedAt}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
