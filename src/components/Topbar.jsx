import React from "react";
import { useLocation, matchPath } from "react-router-dom";
import { breadcrumbMap } from "../data/routes.js";

const getBreadcrumbs = (pathname) => {
  const patterns = Object.keys(breadcrumbMap);
  for (const pattern of patterns) {
    if (matchPath({ path: pattern, end: true }, pathname)) {
      return breadcrumbMap[pattern];
    }
  }
  return ["Home"];
};

export default function Topbar() {
  const { pathname } = useLocation();
  const crumbs = getBreadcrumbs(pathname);

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
