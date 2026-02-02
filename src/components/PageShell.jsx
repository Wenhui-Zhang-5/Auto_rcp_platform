import React from "react";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";

export default function PageShell({ children, currentPath }) {
  return (
    <div className="app-shell">
      <Sidebar currentPath={currentPath} />
      <div className="main-shell">
        <Topbar currentPath={currentPath} />
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
