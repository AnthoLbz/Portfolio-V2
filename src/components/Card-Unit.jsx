import React from "react";
import Cards from "./Cards.jsx";
import image1 from "../images/screen-projet1.png";
import image2 from "../images/screen-projet2.PNG";
import image3 from "../images/screen-hackaton.PNG";
import image4 from "../images/screen projet3.PNG";
import "./card.css";


function CardUnit() {
  return (
    <div className="pageProjets">
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div>
            <Cards
              imgsrc={image1}
              title="Projet #1 - MCU Project"
              text="Un projet d'introduction, uniquement basé sur
              l'HTML et CSS. Référence les films du MCU par ordre de sortie,
              ordre chronologique, propose des fiches personnages ainsi qu'une
              page articles."
              link="https://antholbz.github.io/AnthoLbz.github.io/landing-page.html"
            />
          </div>
          <div>
            <Cards
              imgsrc={image2}
              title="Projet #2 - Memory Horror Game"
              text="Projet de jeu de Memory, basé sur les films d'horreur. Première
              application React réalisée en groupe, sur une durée d'un mois.
              Beaucoup de cheveux perdus, mais l'horreur est au rendez-vous."
              link="https://memory-horror-game.netlify.app/"
            />
          </div>
          <div>
            <Cards
              imgsrc={image3}
              title="Hackaton #1 - Trip Roulette"
              text="Réalisé lors de notre 1er Hackaton, durant la période de
              confinement liée au covid-19. Le thème imposé était le voyage
              depuis son canapé, pris au pied de la lettre! Notice sur le GitHub."
              link="https://trip-roulette.netlify.app/"
            />
          </div>
          <div>
            <Cards imgsrc={image4} title="Test4" text="" />
          </div>
          <div>
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardUnit;
