import React, { useState } from 'react';
import '../Style/style.css';
import { useLocation, useNavigate } from "react-router-dom";

const pages = [
  { id: "/", chap: "COUVERTURE", nom: "" },
  { id: "/presentation", chap: "CHAPITRE 1 :", nom: "QUI SUIS-JE ????" },
  { id: "/entreprise", chap: "CHAPITRE 3 :", nom: "MON ALTERNANCE" },
  { id: "/projet", chap: "CHAPITRE 4 :", nom: "MES PROJETS" },
  { id: "/veille", chap: "CHAPITRE 5 :", nom: "MA VEILLE TECHNOLOGIQUE" },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const currentPage = pages.find(item => item.id === location.pathname);

  return (
    <div className="page-layout">
      <div className="left-zone">
        <div style={{
    border: "3px solid #000",
    boxShadow: "6px 6px 0 #000",
    height: "80px",
    backgroundColor : "#fff"
        }}>
          <h1>{currentPage?.chap}</h1>
          <h2>{currentPage?.nom}</h2>
        </div>
      </div>

      <div className="right-zone">
        <div className="avatar-section">
          <div>
            {/* Bouton Sommaire */}
            <h2 
              style={{ cursor: 'pointer' }}
              onClick={() => setIsOpen(!isOpen)}
            >
              Sommaire
            </h2>

            {/* Menu déroulant */}
            {isOpen && (
              <ul className="sommaire-dropdown">
                {pages.map(page => (
                  <li 
                    key={page.id} 
                    onClick={() => {
                      navigate(page.id);
                      setIsOpen(false); // ferme le menu après clic
                    }}
                    style={{ cursor: 'pointer', padding: '4px 0' }}
                  >
                    {page.chap} {page.nom}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
