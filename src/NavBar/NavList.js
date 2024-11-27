import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";

export default function NavList() {
  const [navList, setNavList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("/navList.json")
      .then((response) => response.json())
      .then((data) => setNavList(data))
      .catch((error) => console.error("Error loading navList:", error));
  }, []);

  return (
    <div>
      <div className="navComp">
        {navList.map((pItem, pIndex) => {
          // Check if any child is active
          const isChildActive = pItem?.child?.some(
            (cItem) => `/${cItem.childTo}` === location.pathname
          );
          console.log("isChildActive", isChildActive);
          return (
            <div key={pIndex} className="menu-item">
              {/* Parent Link or Non-clickable Text */}
              {pItem?.child ? (
                <span
                  className={"parent-link c_pointer"}
                  style={{ color: isChildActive ? "rgb(38 161 207)" : "white" }}
                >
                  {pItem.parentLabel}
                </span>
              ) : (
                <NavLink
                  to={`/${pItem.parentTo}`}
                  style={({ isActive }) => ({
                    color: isActive ? "rgb(38 161 207)" : "white",
                  })}
                  className="parent-link"
                >
                  {pItem.parentLabel}
                </NavLink>
              )}

              {/* Sub-menu */}
              {pItem?.child && (
                <div className="submenu">
                  {pItem.child.map((cItem, cIndex) => (
                    <div key={cIndex} className="submenu-item">
                      <NavLink
                        to={`/${cItem.childTo}`}
                        style={({ isActive }) => ({
                          color: isActive ? "rgb(38 161 207)" : "black",
                        })}
                      >
                        {cItem.childLabel}
                      </NavLink>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
