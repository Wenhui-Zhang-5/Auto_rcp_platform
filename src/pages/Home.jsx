import React from "react";
import { listModelHub, createTemporaryWorkspace } from "../data/mockApi.js";
import { buildHashHref } from "../router.js";

export default function Home() {
  const modelList = listModelHub();

  const handleNewModel = () => {
    createTemporaryWorkspace();
    window.location.hash = buildHashHref("/workspace/temp/overview");
  };

  return (
    <div className="page">
      <section className="hero">
        <div>
          <p className="eyebrow">OCD Intelligent Platform</p>
          <h1>Unified entry for models, recipes, and live runs.</h1>
          <p className="hero-subtitle">
            Manage model workspaces, monitor global runs, and standardize recipe
            strategies with traceable workflow states.
          </p>
          <div className="hero-actions">
            <button className="primary-button" onClick={handleNewModel}>
              New Model
            </button>
            <a className="ghost-button" href={buildHashHref("/global-run-monitor")}>
              Global Run Monitor
            </a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="flow-node">
            <span>Capability Intro</span>
            <p>Pre-Recipe, Recipe Build, Run Monitor, Results</p>
          </div>
          <div className="flow-node">
            <span>Model Hub</span>
            <p>All workspaces in one list</p>
          </div>
          <div className="flow-node">
            <span>Run Overview</span>
            <p>Track queued and running models</p>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h2>Model Hub List</h2>
          <button className="primary-button" onClick={handleNewModel}>
            New Model
          </button>
        </div>
        <div className="table">
          <div className="table-row table-head">
            <span>Model ID</span>
            <span>Recipe</span>
            <span>Owner</span>
            <span>Status</span>
            <span>Updated</span>
          </div>
          {modelList.map((item) => (
            <a
              className="table-row link-row"
              key={item.modelID}
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

      <section className="panel">
        <div className="panel-header">
          <h2>Global Run Monitor Entry</h2>
          <a className="ghost-button" href={buildHashHref("/global-run-monitor")}>
            Open Monitor
          </a>
        </div>
        <div className="signal-grid">
          <div className="signal-card">
            <h3>Running</h3>
            <p>2 active model runs</p>
          </div>
          <div className="signal-card">
            <h3>Queued</h3>
            <p>3 waiting in queue</p>
          </div>
          <div className="signal-card">
            <h3>Completed</h3>
            <p>8 completed this week</p>
          </div>
        </div>
      </section>
    </div>
  );
}
