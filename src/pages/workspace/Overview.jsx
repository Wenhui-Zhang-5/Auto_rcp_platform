import React from "react";
import { getWorkspace } from "../../data/mockApi.js";
import { buildHashHref } from "../../router.js";

export default function Overview({ workspaceId }) {
  const workspace = getWorkspace(workspaceId) || {};

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Workspace</p>
          <h2>Overview</h2>
          <p className="subtle">Track workspace status and jump into modules.</p>
        </div>
      </header>

      <section className="grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h3>Workspace Info</h3>
            <span className="chip">{workspace.type || "temporary"}</span>
          </div>
          <div className="summary-grid">
            <div>
              <p className="summary-label">Model ID</p>
              <p className="summary-value">{workspace.modelID || "TEMP"}</p>
            </div>
            <div>
              <p className="summary-label">Recipe</p>
              <p className="summary-value">{workspace.recipeName || "-"}</p>
            </div>
            <div>
              <p className="summary-label">Owner</p>
              <p className="summary-value">{workspace.owner || "-"}</p>
            </div>
            <div>
              <p className="summary-label">Status</p>
              <p className="summary-value">{workspace.status || "temp"}</p>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-header">
            <h3>Quick Actions</h3>
            <button className="ghost-button">Sync Workspace</button>
          </div>
          <div className="list">
            <a className="list-row" href={buildHashHref(`/workspace/${workspaceId}/pre-recipe/spectrum`)}>
              <span>Go to Pre-Recipe</span>
              <span className="chip">Start</span>
            </a>
            <a className="list-row" href={buildHashHref(`/workspace/${workspaceId}/recipe/create`)}>
              <span>Build Recipe</span>
              <span className="chip">Draft</span>
            </a>
            <a className="list-row" href={buildHashHref(`/workspace/${workspaceId}/run-monitor/control`)}>
              <span>Run Monitor</span>
              <span className="chip">Live</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
