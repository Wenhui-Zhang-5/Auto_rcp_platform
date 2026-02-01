import React from "react";
import { recentRuns } from "../data/mock.js";

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div>
          <p className="eyebrow">OCD Intelligent Platform</p>
          <h1>From spectrum to strategy to live runs.</h1>
          <p className="hero-subtitle">
            A unified workflow for Pre-Recipe diagnostics, recipe construction, and
            run-time monitoring with traceable strategies.
          </p>
          <div className="hero-actions">
            <button className="primary-button">Start Pre-Recipe</button>
            <button className="ghost-button">Load Recipe Draft</button>
          </div>
        </div>
        <div className="hero-panel">
          <div className="flow-node">
            <span>Pre-Recipe</span>
            <p>Spectrum, sensitivity, precision</p>
          </div>
          <div className="flow-node">
            <span>Recipe</span>
            <p>CD strategy, seed search, fitting</p>
          </div>
          <div className="flow-node">
            <span>Run Center</span>
            <p>Monitor, results, templates</p>
          </div>
        </div>
      </section>

      <section className="grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h2>Recent Runs</h2>
            <button className="text-button">View all</button>
          </div>
          <div className="list">
            {recentRuns.map((run) => (
              <div className="list-row" key={run.runId}>
                <div>
                  <p className="list-title">{run.runId}</p>
                  <p className="list-subtitle">{run.modelId} - {run.owner}</p>
                </div>
                <div className={`status-pill status-${run.status}`}>
                  {run.status}
                </div>
                <p className="list-time">{run.updated}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="panel">
          <div className="panel-header">
            <h2>System Signals</h2>
            <button className="text-button">Announcements</button>
          </div>
          <div className="signal-grid">
            <div className="signal-card">
              <h3>API Latency</h3>
              <p>Stable at 180ms (p95)</p>
            </div>
            <div className="signal-card">
              <h3>Active Templates</h3>
              <p>12 strategy bundles ready</p>
            </div>
            <div className="signal-card">
              <h3>Live Sessions</h3>
              <p>6 concurrent runs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
