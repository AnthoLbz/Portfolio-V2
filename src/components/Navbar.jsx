import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navigationbar() {

  return (
    <>
      <div className="nav">
        <nav className="list">
          <li className="Title">
            <NavLink
              to="/Accueil"
              style={{ textDecoration: "none" }}
              activeClassName="activeTitle"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Parcours"
              style={{ textDecoration: "none" }}
              activeClassName="activeTitle"
            >
              Mon Parcours
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Projets"
              style={{ textDecoration: "none" }}
              className="Title"
              activeClassName="activeTitle"
            >
              Projets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/MonCV"
              style={{ textDecoration: "none" }}
              activeClassName="activeTitle"
            >
              Mon CV
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              style={{ textDecoration: "none" }}
              activeClassName="activeTitle"
            >
              Me Contacter
            </NavLink>
          </li>
        </nav>
      </div>
    </>
  );
}

export default Navigationbar;
