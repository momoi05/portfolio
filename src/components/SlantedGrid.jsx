import React from "react";
import "../Style/SlantedGrid.css";
import Image from "../images/chibi-tetsuya-kuroko-coloring.png"
import Image2 from "../images/happy.png"
import Image3 from "../images/lucy.png"


// SlantedGrid.jsx
export default function SlantedGrid() {
return (
<div className="page">
<div className="container">
<div className="top-row">
<div className="slanted1 left">
<div className="slanted-inner" >
<p>De plus je pratique le basket depuis plusieurs années. Ce sport m’a permis de développer un fort esprit d’équipe, le sens de la communication et la persévérance, des qualités que je transpose aussi dans mes projets informatiques.</p>
<img
      src={Image}
      alt="decor"
      className="corner-image"
    /></div>
</div>
<div className="slanted1">
<div className="slanted-inner" >
<p>Passionnée également par l’univers des mangas, j’ai choisi de construire mon portfolio autour de ce thème, car il reflète à la fois ma personnalité, mon imagination et mon sens du détail.</p>
<img
      src={Image2}
      alt="decor"
      className="happy-image"
    /></div>
</div>
<div className="slanted1 right">
<div className="slanted-inner" >
<p>Passionnée par l’informatique, un domaine que j’ai découvert d’abord à travers les jeux vidéo, puis approfondi lors de mes premières expériences en stage.
                Ce qui intéresse particulièrement, c’est cette capacité qu’a la technologie de combiner logique, créativité et résolution de problèmes. 
                Cette curiosité me pousse à apprendre en continu, à<br/> expérimenter par moi-même et à sortir de ma zone de confort pour élargir mes compétences. 
                </p>
                <img
      src={Image3}
      alt="decor"
      className="lucy-image"
    /></div>
</div>
</div>


<div className="bottom-row">
<div className="box"><p>Année: 2024 – 2026
    <br/>BTS SIO Développeur Web
    <br/>Ecole: Nexa digital school
    <br/>Spécialité SLAM, développement d'application web</p></div>
<div className="box" ><p>Annee: 2021 – 2024
    <br/>Baccalauréat général
    <br/>Ecole: St Joseph
    <br/>Bac général avec spécialité Maths, Physique, SVT</p></div>
<div className="box"><p>Annee: 2022
    <br/>Stage de Seconde en Informatique
    <br/>Ecole: "Active Developpement
    <br/>Stage de seconde à active developpement une  entreprise qui crée des sitesw web. J'ai fait mon rapport de stage en html css
 </p></div>
<div className="box"><p>Annee: 2020
    <br/>Stage de Troisième en Informatique
    <br/>Ecole: "Kéolis Lyon
    <br/>Stage de découverte de troisième à Kéolis Lyon, une entreprise qui gère le réseau des transport urbain. J'ai observer la maintenance des outils informatiques utiliser
</p></div>
</div>
</div>
</div>
);
}