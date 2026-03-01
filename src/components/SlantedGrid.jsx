import React from "react";
import "../style/SlantedGrid.css";
import ImageBasket from "../images/chibi-tetsuya-kuroko-coloring.png";
import ImageManga from "../images/happy.png";
import ImageInfo from "../images/lucy.png";

export default function SlantedGrid() {
  return (
    <div className="manga-page live-inking"> {/* Ajout de la texture papier globale */}
      {/* --- SECTION DU HAUT : 3 BLOCS --- */}
      <div className="manga-grid-top">
        <div className="manga-panel live-border">
          <div className="speed-lines"></div> {/* LIGNES DE VITESSE CSS */}
          <h2 className="panel-title"><span>− Le Sport −</span></h2>
          <div className="panel-body">
            <p className="heavy-text">Je pratique le basket depuis des années. Cela m’a appris le travail en équipe et la persévérance.</p>
            <img src={ImageBasket} alt="basket" className="manga-char basket speed-up" />
          </div>
        </div>

        <div className="manga-panel live-border manga-vibe"> {/* Fond légèrement tramé */}
          <h2 className="panel-title"><span>− Les Mangas −</span></h2>
          <div className="panel-body">
            <p>Passionné de mangas, j’ai créé un portfolio inspiré par cet univers.</p>
            <img src={ImageManga} alt="manga" className="manga-char happy floats" />
          </div>
        </div>

        <div className="manga-panel live-border info-vibe">
          <h2 className="panel-title"><span>− L'Informatique −</span></h2>
          <div className="panel-body">
            <p>Passionné par l’informatique, j’adore coder et résoudre des problèmes.</p>
            <img src={ImageInfo} alt="info" className="manga-char computer" />
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
          { date: "2021 - 2024", text: "<strong>BAC Général</strong><br/>Spécialité Math, Physique, SVT", type: "city" },
          { date: "2024 - 2026", text: "<strong>BTS SIO</strong><br/>Développement Web", type: "city" },
          { date: "2024 - 2026", text: "<strong>Stage Seconde</strong><br/>Informatique", type: "boy" },
          { date: "2022 - 2026", text: "<strong>Stage Troisième</strong><br/>Informatique<br/><small>2020</small>", type: "girl" }
        ].map((item, index) => (
          <div key={index} className="manga-panel small-panel live-border screentone-bg">
            <div className="panel-date manga-title-font">{item.date}</div>
            <div className="panel-text" dangerouslySetInnerHTML={{ __html: item.text }}></div>
            {item.type === "city" && <div className="city-silhouette"></div>}
            {item.type === "boy" && <div className="character-silhouette boy"></div>}
            {item.type === "girl" && <div className="character-silhouette girl"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}