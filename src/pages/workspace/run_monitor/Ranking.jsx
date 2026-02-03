import React, { useEffect, useState } from "react";
import { getRunDetail, startRunTicker } from "../../../data/mockApi.js";

export default function MonitorRanking({ workspaceId }) {
  const [detail, setDetail] = useState(() => getRunDetail(workspaceId));
  const [selectedSeed, setSelectedSeed] = useState(null);

  useEffect(() => {
    startRunTicker();
    const interval = window.setInterval(() => {
      setDetail({ ...getRunDetail(workspaceId) });
    }, 3000);
    return () => window.clearInterval(interval);
  }, [workspaceId]);

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Run Monitor</p>
          <h2>Ranking</h2>
          <p className="subtle">Live KPI ranking for active seeds.</p>
        </div>
      </header>

      <section className="panel">
        <div className="panel-header">
          <h3>Live Ranking</h3>
          <span className="chip">Selected: {selectedSeed || "-"}</span>
        </div>
        <div className="table">
          <div className="table-row table-head">
            <span>Rank</span>
            <span>Seed</span>
            <span>Iteration</span>
            <span>KPI</span>
            <span>Status</span>
          </div>
          {detail.ranking.map((row) => (
            <button
              className="table-row"
              key={`${row.seedId}-${row.rank}`}
              onClick={() => setSelectedSeed(row.seedId)}
            >
              <span>{row.rank}</span>
              <span>{row.seedId}</span>
              <span>{row.iteration}</span>
              <span>{row.kpi}</span>
              <span className="chip">{row.status}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
