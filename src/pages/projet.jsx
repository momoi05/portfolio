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
    width: 50,
    height: 150,
    images: [clean1, clean2, clean3,clean4, clean1, clean2, clean3,clean4],
  },
  {
    id: 2,
    titre: "APE chenes bourg",
    width: 60,
    height: 160,
    images: [
        "../images/4584096.jpg",
        "../images/moi.jpg",
        "../images/azerty.jpg",
      ],
  },
  {
    id: 3,
    titre: "Cahier de recette",
    width: 80,
    height: 180,
    images: [
        "../images/4584096.jpg",
        "../images/moi.jpg",
        "../images/azerty.jpg",
      ],
  },  
];

const pro = [
  {
    id: 1,
    titre: "Eas",
    width: 50,
    height: 190,
    images: [clean1, clean2, clean3,clean4, clean1, clean2, clean3,clean4],
  },
  {
    id: 2,
    titre: "st /n sia /n Fac",
    width: 70,
    height: 180,
    images: [
        "../images/4584096.jpg",
        "../images/moi.jpg",
        "../images/azerty.jpg",
      ],
  },
  {
    id: 3,
    titre: "alpina",
    width: 50,
    height: 190,
    images: [
        "../images/4584096.jpg",
        "../images/moi.jpg",
        "../images/azerty.jpg",
      ],
  },
  {
    id: 4,
    titre: "aurel",
    width: 40,
    height: 150,
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
          <div className="projet-biblio">
            <div>
              <Bibliotheque livres={perso} />
            </div>
            <div>
              <Bibliotheque livres={pro} />
            </div>
            <div>
              <Bibliotheque livres={ap} />
            </div>
          </div>
      <div className="jsp">
    <div className="bottom-row">
<div className="box">
  <p>
    Année : 2024 – 2026
    <br/>BTS SIO – Développement web
    <br/>École : Nexa Digital School
    <br/>Spécialité SLAM, développement d'applications web
  </p>
</div>
<div className="box">
  <p>
    Année : 2021 – 2024
    <br/>Baccalauréat général
    <br/>École : Saint-Joseph
    <br/>Spécialités : Mathématiques, Physique-Chimie, SVT
  </p>
</div>
</div></div>
        </div>
    </>
  );
}