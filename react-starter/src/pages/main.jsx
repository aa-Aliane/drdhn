import React from "react";

const main = () => {
  return (
    <div className="main">
      <nav className="menu">
        <div className="menu__container">
          <span className="menu__menu" class="material-symbols-outlined">menu</span>

          <div>
            <img className="menu__logo" src="./src/assets/logo.png" />
          </div>
        </div>
        <ul className="nav">
          <li className="nav__item">projets</li>
          <li className="nav__item">productions</li>
          <li className="nav__item">axes de recherche</li>
          <li className="nav__item">equipes de recherche</li>
        </ul>

        <span className="menu__search" class="material-symbols-outlined">search</span>
      </nav>
    </div>
  );
};

export default main;
