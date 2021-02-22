import React, {useState} from "react";
import "./parcours.css";
import Fade from "react-reveal/Fade";

function Parcours() {

  const [checked, setChecked] = useState('2012');

  return (
    <>
      <div class="flex-parent">
        <div class="input-flex-container">
          <div class="dots-before" />
          <input
            type="radio"
            name="timeline-dot"
            data-description="2012"
            checked={checked === "2012"}
            onChange={(e) => setChecked("2012")}
          />
          <div class="dot-info" data-description="2012">
            <span class="year">2012</span>
            <span class="label">Licence, tabernac'</span>
          </div>
          <input
            type="radio"
            name="timeline-dot"
            data-description="2013"
            checked={checked === "2013"}
            onChange={(e) => setChecked("2013")}
          />
          <div class="dot-info" data-description="2013">
            <span class="year">2013</span>
            <span class="label">La crise</span>
          </div>
          <input
            type="radio"
            name="timeline-dot"
            data-description="2014"
            checked={checked === "2014"}
            onChange={(e) => setChecked("2014")}
          />
          <div class="dot-info" data-description="2014">
            <span class="year">2014</span>
            <span class="label">L'exil breton</span>
          </div>
          <input
            type="radio"
            name="timeline-dot"
            data-description="2015"
            checked={checked === "2015"}
            onChange={(e) => setChecked("2015")}
          />
          <div class="dot-info" data-description="2015">
            <span class="year">2015</span>
            <span class="label">Best Chaudières Ever</span>
          </div>
          <input
            type="radio"
            name="timeline-dot"
            data-description="2018"
            checked={checked === "2018"}
            onChange={(e) => setChecked("2018")}
          />
          <div class="dot-info" data-description="2018">
            <span class="year">2018</span>
            <span class="label">La fin d'une ère</span>
          </div>
          <input
            type="radio"
            name="timeline-dot"
            data-description="2018-bis"
            checked={checked === "2018-bis"}
            onChange={(e) => setChecked("2018-bis")}
          />
          <div class="dot-info" data-description="2018-bis">
            <span class="year">2018-bis</span>
            <span class="label">I am Stéphane Plaza !</span>
          </div>
          <input
            type="radio"
            name="timeline-dot"
            data-description="2019"
            checked={checked === "2019"}
            onChange={(e) => setChecked("2019")}
          />
          <div class="dot-info" data-description="2019">
            <span class="year">2019</span>
            <span class="label">Le mauvais tampon</span>
          </div>
          <input
            type="radio"
            name="timeline-dot"
            data-description="2019-bis"
            checked={checked === "2019-bis"}
            onChange={(e) => setChecked("2019-bis")}
          />
          <div class="dot-info" data-description="2019-bis">
            <span class="year">2019-bis</span>
            <span class="label">Back to the roots !</span>
          </div>
          <input
            type="radio"
            name="timeline-dot"
            data-description="2020"
            checked={checked === "2020"}
            onChange={(e) => setChecked("2020")}
          />
          <div class="dot-info" data-description="2020">
            <span class="year">2020</span>
            <span class="label">Wild Covid School</span>
          </div>
          <input
            type="radio"
            name="timeline-dot"
            data-description="Aujourd'hui"
            checked={checked === "Aujourd'hui"}
            onChange={(e) => setChecked("Aujourd'hui")}
          />
          <div class="dot-info" data-description="Aujourd'hui">
            <span class="year">Aujourd'hui</span>
            <span class="label">Open World !</span>
          </div>
          <div class="dots-after" />
          <div id="timeline-descriptions-wrapper">
            <Fade>
              <p data-description="2012">
                Dans la continuité de mon BTS, j'obtiens ma licence en commerce
                International à Aix en Provence.
                <br />
                <br />
                Départ pour Montréal, où je travaille quelques mois dans
                l'évènementiel grâce à d'anciens collègues de stages.
              </p>
            </Fade>
            <Fade>
              <p data-description="2013">
                De retour en France, la crise économique faisant des ravages,
                les postes sont limités en nombres et en interet.
                <br />
                <br />
                Je m'oriente vers l'Administration des Ventes, par dépit...
              </p>
            </Fade>
            <Fade>
              <p data-description="2014">
                Je décide de partir pour Nantes, et suivre ma compagne de
                l'époque.
                <br />
                <br />
                Les postes sont plus intéressants, mais uniquement en intérim,
                et j'ai envie de me faire ma place dans une entreprise !
              </p>
            </Fade>
            <Fade>
              <p data-description="2015">
                J'intègre la société Saunier Duval, dans laquelle je reste près
                de 4 années.
                <br />
                <br />A ce jour, l'expérience et les contacts que j'y ai connu
                font toujours partie de mes meilleurs souvenirs !
              </p>
            </Fade>
            <Fade>
              <p data-description="2018">
                Malheureusement vient toujours un moment où l'on n'avance plus,
                et mon tour est arrivé.
                <br />
                <br />
                J'ai donc mis un terme à mon aventure Saunier, pour en démarrer
                une nouvelle ailleurs.
              </p>
            </Fade>
            <Fade>
              <p data-description="2018-bis">
                Je rentre alors dans le Sud, et grâce à mes compétences sociales
                (et une amie), je démarre un nouveau travail:
                <br />
                <br />
                Agent Immobilier
              </p>
            </Fade>
            <Fade>
              <p data-description="2019">
                <br />
                Manque de chance, le sort en a voulu autrement, et j'ai dû
                arreter mon activité au bout de 8 mois suite à un sévère
                accident de moto...
              </p>
            </Fade>
            <Fade>
              <p data-description="2019-bis">
                Du coup, grosse remise en question sur mes capacités et mon
                avenir.
                <br />
                <br />
                Je me suis alors orienté vers une passion de toujours,
                l'informatique (oui, c'est vaste mais bon ...)!
              </p>
            </Fade>
            <Fade>
              <p data-description="2020">
                J'intègre la Wild Code School de Marseille pour 5 mois intensifs
                de formation.
                <br />
                <br />
                Encore une fois, le destin ou le karma, mais le Covid s'en mèle,
                et le magnifique campus se transforme en appartement, confiné...
              </p>
            </Fade>
            <Fade>
              <p data-description="Aujourd'hui">
                Malgré tout, avec une promo qui se serre les coudes, de multiples
                projets et hackatons, et une bonne structure, je peux dire
                fièrement aujourd'hui: <br />
                <br />I am Dev (Junior) !
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default Parcours;
