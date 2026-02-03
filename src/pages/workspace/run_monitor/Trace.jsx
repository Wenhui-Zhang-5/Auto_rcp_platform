import React, { useEffect, useState } from "react";
import { getRunDetail, startRunTicker } from "../../../data/mockApi.js";

export default function MonitorTrace({ workspaceId }) {
  const [detail, setDetail] = useState(() => getRunDetail(workspaceId));

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
          <h2>Trace</h2>
          <p className="subtle">Iteration log with accept/revert/KPI checks.</p>
        </div>
      </header>

      <section className="panel">
        <div className="panel-header">
          <h3>Iteration Log</h3>
          <button className="ghost-button">Filter</button>
        </div>
        <div className="timeline">
          {detail.trace.map((event, index) => (
            <div className="timeline-row" key={`${event.time}-${index}`}>
              <span className="time">{event.time}</span>
              <div>
                <p className="list-title">{event.action}</p>
                <p className="list-subtitle">{event.note}</p>
              </div>
              <span className="chip">{event.action}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
