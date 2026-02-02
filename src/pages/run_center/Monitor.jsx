import React from "react";
import { runEvents } from "../../data/mock.js";

export default function Monitor({ runId }) {

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Run Center</p>
          <h2>Run Monitor</h2>
          <p className="subtle">Live status and controls for run {runId}.</p>
        </div>
        <button className="primary-button">Open Results</button>
      </header>

      <section className="panel status-panel">
        <div>
          <p className="summary-label">Run Status</p>
          <h3 className="status-pill status-running">running</h3>
        </div>
        <div>
          <p className="summary-label">Current Stage</p>
          <p className="summary-value">Fitting - Step 2</p>
        </div>
        <div>
          <p className="summary-label">Seed</p>
          <p className="summary-value">S2 / Material SiN</p>
        </div>
        <div>
          <p className="summary-label">ETA</p>
          <p className="summary-value">38 min</p>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>Control Center</h3>
          <div className="inline-actions">
            <button className="ghost-button">Pause</button>
            <button className="ghost-button">Resume</button>
            <button className="danger-button">Stop</button>
          </div>
        </div>
        <div className="control-grid">
          <div className="control-card">
            <p>Seed Control</p>
            <button className="ghost-button">Stop Seed S1</button>
          </div>
          <div className="control-card">
            <p>Step Control</p>
            <button className="ghost-button">Retry Step</button>
          </div>
          <div className="control-card">
            <p>Checkpoint</p>
            <button className="ghost-button">Save Snapshot</button>
          </div>
        </div>
      </section>

      <section className="grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h3>Event Timeline</h3>
            <button className="ghost-button">Filter</button>
          </div>
          <div className="timeline">
            {runEvents.map((event, index) => (
              <div className="timeline-row" key={`${event.time}-${index}`}>
                <span className="time">{event.time}</span>
                <div>
                  <p className="list-title">{event.step} - {event.seed}</p>
                  <p className="list-subtitle">{event.note}</p>
                </div>
                <span className={`status-pill status-${event.result.toLowerCase()}`}>
                  {event.result}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="panel">
          <div className="panel-header">
            <h3>Result Tabs</h3>
            <div className="inline-actions">
              <button className="ghost-button">Spectrum</button>
              <button className="ghost-button">Linearization</button>
              <button className="ghost-button">NK Curves</button>
            </div>
          </div>
          <div className="plot-placeholder">Live Plot Container</div>
          <div className="plot-placeholder small">KPI Cards Placeholder</div>
        </div>
      </section>
    </div>
  );
}
