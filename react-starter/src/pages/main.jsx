import React from "react";
import { useState } from "react";
import Section from "../components/main/Section.jsx";

const main = () => {
  const [dropSubMenu, setDropSubMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="main">
      <nav className="menu" data-showMenu={showMenu}>
        <div
          className="menu__toggle"
          onClick={() => {
            setShowMenu(showMenu === true ? false : true);
          }}
        >
          <span className="material-symbols-outlined">menu</span>
        </div>

        <div className="menu__logo">
          <img src="./src/assets/logo.png" />
        </div>

        <ul className="nav list bg-neutral-200" data-showMenu={showMenu}>
          <li className="nav__item">projets</li>
          <li className="nav__item">productions</li>
          <li className="nav__item">axes de recherche</li>
          <li className="nav__item">equipes de recherche</li>
        </ul>

        <div className="menu__search">
          <span className="material-symbols-outlined">search</span>
        </div>
      </nav>
      <nav
        className="submenu"
        onClick={() => {
          setDropSubMenu(dropSubMenu === true ? false : true);
        }}
      >
        <p>aperçu</p>
        <span className="material-symbols-outlined submenu__list">list</span>
        <div className="flex-container absolute-element">
          <ul className="submenu__content" data-drop={dropSubMenu}>
            <li className="submenu__content__item">qui sommes nous</li>
            <li className="submenu__content__item">nos projets</li>
            <li className="submenu__content__item">nos publications</li>
            <li className="submenu__content__item">nos axes de recherche</li>
            <li className="submenu__content__item">nos équipes de recherche</li>
          </ul>
        </div>
      </nav>
      <Section title={"qui sont nous"}>
        <p>
          L’évolution d’Internet et le développement des technologies numériques
          ont révolutionné la production et les usages de l’information en
          général et de l’information scientifique et technique en particulier.
          L’information Scientifique et Technique constitue la brique de base de
          la société de la connaissance devenant ainsi un contenu numérique
          qu’il s’agit de rendre intelligible pour chacun selon ses besoins
          spécifiques tout en maîtrisant l’environnement juridique et
          socio-économique lié au numérique. Grâce à sa composante
          multidisciplinaire avec des chercheurs issus de l’informatique, des
          mathématiques et des sciences humaines, la division Sciences de
          l’Information et Humanités Numériques s’attelle à développer des
          outils d’analyse et d’interprétation de grands corpus plurilingues en
          utilisant les techniques de l’Intelligence Artificielle et du
          Traitement Automatique des Langues Naturelles, proposer des modèles
          mathématiques pour l’évaluation de l’information et la modélisation
          des usages numériques, proposer une approche nationale de veille
          stratégique de l’IST, mener une réflexion sur l’accès ouvert à
          l’information et aux données, les nouveaux modèles économiques, le
          cadre juridique de l’IST et l’éthique Numérique de façon plus
          générale.
        </p>
      </Section>
      <Section title={"Al-Jahiz pour les humanités"}>
        <p>
          Le projet Al-Jahiz pour les humanités numériques vise à fournir une
          infrastructure pour soutenir les sciences humaines et sociales arabes
          en particulier et les sciences arabes en général.
        </p>
        <div className="gallery">
          <img className="gallery__img" src="./src/assets/jahiz.jpg" alt="" />
          <img className="gallery__img" src="./src/assets/image4.jpg" alt="" />
          <img className="gallery__img" src="./src/assets/image5.jpg" alt="" />
        </div>
      </Section>
    </div>
  );
};

export default main;
