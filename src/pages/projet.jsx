import React from "react";
import "../style/style.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout";
import Bibliotheque from "../components/Bibliotheque";
import clean1 from "../images/4584096.jpg";
import clean2 from "../images/moi.jpg";
import clean3 from "../images/azerty.jpg";
// import clean4 from "../images/123456789.jpg";
import clean4 from "../images/chibiK.png"

const perso = [
  {
    id: 1,
    titre: "BCBC",
    images: [clean1, clean2, clean3,clean4, clean1, clean2, clean3,clean4],
  },
  {
    id: 2,
    titre: "APE chenes bourg",
    images: [
        "../images/4584096.jpg",
        "../images/moi.jpg",
        "../images/azerty.jpg",
      ],
  },
  {
    id: 3,
    titre: "Cahier de recette",
    images: [
        "../images/4584096.jpg",
        "../images/moi.jpg",
        "../images/azerty.jpg",
      ],
  },
  {
    id: 4,
    titre: "React pour les null",
    images: [
        "/images/clean_code/page1.jpg",
        "/images/clean_code/page2.jpg",
        "/images/clean_code/page3.jpg",
      ],
  },
];

const pro = [
  {
    id: 1,
    titre: "Eas",
    images: [clean1, clean2, clean3,clean4, clean1, clean2, clean3,clean4],
  },
  {
    id: 2,
    titre: "st",
    images: [
        "../images/4584096.jpg",
        "../images/moi.jpg",
        "../images/azerty.jpg",
      ],
  },
  {
    id: 3,
    titre: "alpina",
    images: [
        "../images/4584096.jpg",
        "../images/moi.jpg",
        "../images/azerty.jpg",
      ],
  },
  {
    id: 4,
    titre: "aurel",
    images: [
        "/images/clean_code/page1.jpg",
        "/images/clean_code/page2.jpg",
        "/images/clean_code/page3.jpg",
      ],
  },
  {
    id: 5,
    titre: "sia",
    images: [
        "/images/clean_code/page1.jpg",
        "/images/clean_code/page2.jpg",
        "/images/clean_code/page3.jpg",
      ],
  },
  {
    id: 6,
    titre: "fac",
    images: [
        "/images/clean_code/page1.jpg",
        "/images/clean_code/page2.jpg",
        "/images/clean_code/page3.jpg",
      ],
  },
];

const ap = [
  {
    id: 1,
    titre: "GSB",
    images: [clean1, clean2, clean3,clean4, clean1, clean2, clean3,clean4],
  },
  {
    id: 2,
    titre: "GSB 2",
    images: [
        "../images/4584096.jpg",
        "../images/moi.jpg",
        "../images/azerty.jpg",
      ],
  },
  {
    id: 3,
    titre: "Josslan",
    images: [
        "../images/4584096.jpg",
        "../images/moi.jpg",
        "../images/azerty.jpg",
      ],
  },
  {
    id: 4,
    titre: "solia",
    images: [
        "/images/clean_code/page1.jpg",
        "/images/clean_code/page2.jpg",
        "/images/clean_code/page3.jpg",
      ],
  },
];

export default function ChapitrePage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />

      <div className="page-projet">
          <div className="projet-biblio"><div>
      <h1>Mes projets perso</h1>
      <Bibliotheque livres={perso}/>
    </div>
          <div>
      <h1>Mes projets d'entreprise</h1>
      <Bibliotheque livres={pro}/>
    </div>
          <div>
      <h1>Mes Ap</h1>
      <Bibliotheque livres={ap}/>
    </div></div>
      <div className="jsp">
    <div className="bottom-row">
<div className="box"><p>Année: 2024 – 2026
    <br/>BTS SIO Développeur Web
    <br/>Ecole: Nexa digital school
    <br/>Spécialité SLAM, développement d'application web</p></div>
<div className="box" ><p>Annee: 2021 – 2024
    <br/>Baccalauréat général
    <br/>Ecole: St Joseph
    <br/>Bac général avec spécialité Maths, Physique, SVT</p></div>
</div></div>
        </div>
    </>
  );
}