import React from "react";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";

export default function PageShell({ children }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-shell">
        <Topbar />
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
