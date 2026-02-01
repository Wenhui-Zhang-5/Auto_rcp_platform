import React from "react";
import { NavLink } from "react-router-dom";
import { navSections } from "../data/routes.js";

const getLinkClass = ({ isActive }) =>
  isActive ? "nav-link nav-link-active" : "nav-link";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark">OCD</span>
        <div>
          <p className="brand-title">Intelligent Platform</p>
          <p className="brand-subtitle">Spectra -> Recipe -> Run</p>
        </div>
      </div>
      <nav className="nav">
        {navSections.map((section) => (
          <div className={`nav-section nav-${section.theme}`} key={section.title}>
            <p className="nav-title">{section.title}</p>
            <div className="nav-links">
              {section.items.map((item) => (
                <NavLink key={item.path} to={item.path} className={getLinkClass}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="chip">API: Mock Mode</div>
        <div className="chip">Status: Ready</div>
      </div>
    </aside>
  );
}
