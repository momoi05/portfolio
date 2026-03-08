import React from "react";
import "../style/style.css";
import { useNavigate } from "react-router-dom";
import Image from "../images/home_image.jpg"


export default function ChapitrePage() {
  const navigate = useNavigate();
  return (
    <div className="page-layout">
      <div className="left-zone">
        <div style={{
    border: "3px solid #000",
    boxShadow: "6px 6px 0 #000",
    height: "auto",
    backgroundColor : "#fff"
        }}>
          <h1>LE VOYAGE D'UN ÉTUDIANT BTS SIO SLAM EN 2026</h1>
          <h2>TESSA TARASCHINI</h2>
        </div>
        <img src={Image} alt="moi" className="image-moi"/>
      </div>


      <div className="right-zone">
        <div className="avatar-section">
          <div>
            <h2>Développeuse Web</h2>
          </div>
        </div>


        <nav className="menu">
          <button onClick={() => navigate('/presentation')}>Chapitre 1 : Qui suis-je ????</button>
          <button onClick={() => navigate('/entreprise')}>Chapitre 2 : Mon alternance</button>
          <button onClick={() => navigate('/projet')}>Chapitre 3 : Ma bibliothèque de projets</button>
          <button onClick={() => navigate('/veille')}>Chapitre 4 : Ma veille technologique</button>
        </nav>
      </div>
    </div>
  );
}