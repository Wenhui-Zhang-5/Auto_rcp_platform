import React from "react";
import { breadcrumbMap } from "../data/routes.js";
import { matchRoute } from "../router.js";

const getBreadcrumbs = (pathname) => {
  const patterns = Object.keys(breadcrumbMap);
  for (const pattern of patterns) {
    if (matchRoute(pattern, pathname)) {
      return breadcrumbMap[pattern];
    }
  }
  return ["Home"];
};

export default function Topbar({ currentPath }) {
  const crumbs = getBreadcrumbs(currentPath);

  return (
    <header className="topbar">
      <div className="breadcrumbs">
        {crumbs.map((crumb, index) => (
          <span key={`${crumb}-${index}`}>
            {crumb}
            {index < crumbs.length - 1 ? <span className="crumb-sep">/</span> : null}
          </span>
        ))}
      </div>
      <div className="topbar-actions">
        <button className="ghost-button">Sync</button>
        <button className="primary-button">New Run</button>
      </div>
    </header>
  );
}
