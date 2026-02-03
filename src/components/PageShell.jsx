import React from "react";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";
import WorkspaceSidebar from "./WorkspaceSidebar.jsx";
import WorkspaceTopbar from "./WorkspaceTopbar.jsx";

const isWorkspacePath = (path) => path.startsWith("/workspace/");

const getWorkspaceId = (path) => {
  const parts = path.split("/").filter(Boolean);
  return parts[1] || null;
};

export default function PageShell({ children, currentPath }) {
  const isWorkspace = isWorkspacePath(currentPath);
  const workspaceId = isWorkspace ? getWorkspaceId(currentPath) : null;

  return (
    <div className="app-shell">
      {isWorkspace ? (
        <WorkspaceSidebar
          currentPath={currentPath}
          workspaceId={workspaceId}
        />
      ) : (
        <Sidebar currentPath={currentPath} />
      )}
      <div className="main-shell">
        {isWorkspace ? (
          <WorkspaceTopbar currentPath={currentPath} workspaceId={workspaceId} />
        ) : (
          <Topbar currentPath={currentPath} />
        )}
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
