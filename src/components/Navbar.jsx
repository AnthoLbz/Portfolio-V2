import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navigationbar() {

  return (
    <>
      <div className="nav">
        <nav className="list">
          <li>
            <Link
              to="/"
              data-index="0"
              style={{ textDecoration: "none" }}
              activeClassName="activeTitle"
            >
              Accueil
            </Link>
          </li>
          <li>
            <a
              data-index="1"
              href="#parcours"
              style={{ textDecoration: "none" }}
            >
              Mon Parcours
            </a>
          </li>
          <li>
            <Link
              to="/Projets"
              data-index="2"
              style={{ textDecoration: "none" }}
              activeClassName="activeTitle"
            >
              Projets
            </Link>
          </li>
          <li>
            <a data-index="3" href="#cv" style={{ textDecoration: "none" }}>
              Mon CV
            </a>
          </li>
          <li>
            <a
              data-index="4"
              href="#contact"
              style={{ textDecoration: "none" }}
            >
              Me Contacter
            </a>
          </li>
        </nav>
      </div>
    </>
  );
}

export default Navigationbar;
