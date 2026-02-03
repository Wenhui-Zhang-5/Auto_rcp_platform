import React from "react";
import { getRunDetail, saveCheckpoint, updateWorkspaceStatus } from "../../../data/mockApi.js";

export default function MonitorControl({ workspaceId }) {
  const detail = getRunDetail(workspaceId);

  const handleStop = () => {
    updateWorkspaceStatus(workspaceId, "completed");
  };

  const handleStopCheckpoint = () => {
    saveCheckpoint(workspaceId);
    updateWorkspaceStatus(workspaceId, "completed");
  };

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Run Monitor</p>
          <h2>Control</h2>
          <p className="subtle">Stop run or stop with checkpoint.</p>
        </div>
      </header>

      <section className="panel status-panel">
        <div>
          <p className="summary-label">Run Status</p>
          <h3 className={`status-pill status-${detail.status}`}>{detail.status}</h3>
        </div>
        <div>
          <p className="summary-label">Iteration</p>
          <p className="summary-value">{detail.iteration}</p>
        </div>
        <div>
          <p className="summary-label">Current Seed</p>
          <p className="summary-value">S2</p>
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
            <button className="danger-button" onClick={handleStop}>Stop</button>
            <button className="ghost-button" onClick={handleStopCheckpoint}>Stop + Checkpoint</button>
          </div>
        </div>
        <div className="panel-note">Controls update mock status and trace.</div>
      </section>
    </div>
  );
}
