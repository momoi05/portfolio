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
    height: "80px",
    backgroundColor : "#fff"
        }}>
          <h1>LE VOYAGE D'UN ÉTUDIANT BTS SIO SLAM EN 2026</h1>
          <h2>TESSA TARASCHINI</h2>
        </div>
        <div className="main-character"><img src={Image} alt="moi"/></div>
      </div>


      <div className="right-zone">
        <div className="avatar-section">
          <div>
            <h2>Développeuse Web</h2>
          </div>
        </div>


        <nav className="menu">
          <button onClick={() => navigate('/presentation')}>PRESENTATION</button>
          <button onClick={() => navigate('/entreprise')}>MON ALTERNANCE</button>
          <button onClick={() => navigate('/projet')}>MES PROJETS</button>
          <button onClick={() => navigate('/veille')}>VEILLE</button>
        </nav>
      </div>
    </div>
  );
}