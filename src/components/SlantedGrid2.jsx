import React from "react";
import "../style/SlantedGrid2.css";
import Image from "../images/guilde.png"


// SlantedGrid.jsx
export default function SlantedGrid() {
return (
<div className="page">
<div className="container">
<div className="top-row">
<div className="manga-grid-top-entreprise">
        <div className="manga-entreprise live-border">
        <div className="panel-body-entreprise">
<h2 className="panel-title"><span>− Alp-Software −</span></h2>
<p>Alp-Software est une société spécialisée dans le développement informatique, implantée à Thonon-les-Bains, en Haute-Savoie, depuis 2003. Forte de plus de 20 ans d'expérience, elle accompagne les entreprises dans leur transition numérique grâce à une offre complète de services.
<br/>
<br/>L'entreprise intervient principalement dans trois domaines :
<br/>- L'édition de logiciels : elle développe et commercialise des solutions métiers, notamment des logiciels de gestion, de facturation ou encore d'impression de documents.
<br/>- Le développement sur mesure : Alp-Software conçoit des applications spécifiques (web, mobiles ou desktop) adaptées aux besoins de ses clients, quel que soit leur secteur d'activité et leur taille.
<br/>- Les services Internet : l'entreprise propose la création de sites web, l'hébergement, ainsi que des prestations en stratégie digitale et en référencement.
<br/>
<br/>Avec un portefeuille de plus de 3 500 clients à travers la France, Alp-Software mise sur l'innovation, la proximité et la réactivité pour offrir un service de qualité.
<br/>
<br/>Coordonnées :
<br/>📍 6 chemin du Pillon – Parc Ravel B1 – 74200 Thonon-les-Bains
<br/>📞 04 50 72 88 23
<br/>🌐 www.alp-software.com
</p>
<img
      src={Image}
      alt="decor"
      className="guilde-image"
    /></div>
</div>
</div>
<div className="manga-grid-top-entreprise">
        <div className="manga-entreprise live-border">
    <h2 className="panel-title"><span>− Mes Missions −</span></h2>
    <div className="panel-body-entreprise">
<p>Mes missions sont variées et touchent à plusieurs aspects du développement numérique. Elles incluent notamment :
<br/>- La réalisation de tests fonctionnels sur les applications web et mobiles afin de garantir leur bon fonctionnement avant leur mise en production.
<br/>- La conception de maquettes (UI/UX) pour des sites web, en lien avec les besoins des clients et les standards de l’expérience utilisateur.
<br/>- Le développement d’applications mobiles (iOS/Android) et de sites web dynamiques, en utilisant des technologies .net telque Blazor, Maui.
<br/>- La mise à jour d'applications web (changement de version, de langage, de framework, etc.)
<br/>- La création de sites vitrines en ASP.net
<br/>
<br/>Cette expérience me permet de développer à la fois mes compétences techniques (front-end, back-end, mobile) et ma capacité à m’intégrer dans un environnement professionnel agile.
</p>
                <img
      src={Image}
      alt="decor"
      className="corner-image"
    /></div>
</div>
</div>
</div>
</div>
</div>
);
}