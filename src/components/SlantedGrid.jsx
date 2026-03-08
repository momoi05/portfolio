import React from "react";
import "../style/SlantedGrid.css";
import ImageBasket from "../images/chibi-tetsuya-kuroko-coloring.png";
import ImageManga from "../images/happy.webp";
import ImageInfo from "../images/lucy.png";

export default function SlantedGrid() {
  return (
    <div className="manga-page live-inking"> {/* Ajout de la texture papier globale */}
      {/* --- SECTION DU HAUT : 3 BLOCS --- */}
      <div className="manga-grid-top">
      <div className="manga-panel live-border info-vibe">
          <h2 className="panel-title"><span>− L'informatique −</span></h2>
          <div className="panel-body">
            <p>
              Passionnée par l’informatique, un domaine que j’ai découvert d’abord à travers les jeux vidéo, puis approfondi lors de mes premières expériences en stage.
              Ce qui m’intéresse particulièrement, c’est la capacité de la technologie à combiner logique, créativité et résolution de problèmes.
           </p>
            <img src={ImageInfo} alt="info" className="manga-char lucy" />
          </div>
        </div>

        <div className="manga-panel live-border">
         <h2 className="panel-title"><span>− Le Sport −</span></h2>
          <div className="panel-body">
            <p>De plus je pratique le basket depuis plusieurs années. Ce sport m’a permis de développer un fort esprit d’équipe, le sens de la communication et la persévérance, des qualités que je transpose aussi dans mes projets informatiques.</p>
            <img src={ImageBasket} alt="basket" className="manga-char kuroko " />
          </div>
        </div>

        <div className="manga-panel live-border manga-vibe"> {/* Fond légèrement tramé */}
          <h2 className="panel-title"><span>− Les Mangas −</span></h2>
          <div className="panel-body">
            <p>Passionnée également par l’univers des mangas, j’ai choisi de construire mon portfolio autour de ce thème, car il reflète à la fois ma personnalité, mon imagination et mon sens du détail.</p>
            <img src={ImageManga} alt="manga" className="manga-char happy floats" />
          </div>
        </div>       
      </div>

      {/* --- DIVISEUR CENTRAL --- */}
      <div className="manga-divider">
        <div className="divider-line"></div>
        <div className="divider-label manga-title-font">− Mon Parcours −</div>
        <div className="divider-line"></div>
      </div>

      {/* --- SECTION DU BAS : 4 BLOCS tramés --- */}
      <div className="manga-grid-bottom">
        {[
          { date: "2024 - 2026", text: "<strong>BTS SIO</strong><br/>Développement Web<br/>J’ai débuté mon BTS SIO en 2024 afin d’obtenir mon diplôme en 2026.<br/>Au cours de ma formation, j’ai acquis différentes compétences techniques et professionnelles liées au domaine des services informatiques.<br/>J’ai réalisé mon BTS en alternance au sein de l’entreprise Alp-Software. Cette expérience m’a permis de développer mes compétences en situation réelle et de découvrir le fonctionnement ainsi que les exigences du monde professionnel.", type: "city" },
          { date: "2021 - 2024", text: "<strong>BAC Général</strong><br/>Spécialité Math, Physique, SVT", type: "city" },
          { date: "2022", text: "<strong>Stage de seconde</strong><br/>Informatique<br/>J'ai réalisé un premier stage en seconde à Active Développement, une entreprise qui crée des sites web. Ce stage m'a permis de découvrir le monde du travail et de la programmation.<br/>J'ai également rédigé mon rapport de stage en HTML/CSS.", type: "boy" },
          { date: "2021", text: "<strong>Stage de troisième</strong><br/>Informatique<br/>Mon stage de troisième à Kéolis Lyon, une entreprise qui gère le réseau de transports urbains, m'a permis de découvrir différentes infrastructures informatiques. J'ai observé la maintenance des outils informatiques utilisés. Cette expérience m'a ensuite donné envie d'en apprendre davantage, ce qui m'a conduite à mes expériences suivantes.", type: "girl" }
        ].map((item, index) => (
          <div key={index} className="manga-panel small-panel live-border screentone-bg">
            <div className="panel-date manga-title-font">{item.date}</div>
            <div className="panel-text" dangerouslySetInnerHTML={{ __html: item.text }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}