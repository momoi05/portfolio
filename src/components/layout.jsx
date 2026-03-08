import React, { useState } from 'react';
import '../style/style.css';
import { useLocation, useNavigate } from "react-router-dom";

const LINKEDIN_URL = "https://www.linkedin.com/in/tessa-taraschini-729b99241/";
const GITHUB_URL = "https://github.com/momoi05";

const pages = [
  { id: "/", chap: "COUVERTURE", nom: "" },
  { id: "/presentation", chap: "CHAPITRE 1 :", nom: "QUI SUIS-JE ????" },
  { id: "/entreprise", chap: "CHAPITRE 2 :", nom: "MON ALTERNANCE" },
  { id: "/projet", chap: "CHAPITRE 3 :", nom: "MA BIBLIOTHEQUE DE PROJETS" },
  { id: "/veille", chap: "CHAPITRE 4 :", nom: "MA VEILLE TECHNOLOGIQUE" },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const currentPage = pages.find(item => item.id === location.pathname);

  const openExternal = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="page-layout">
      <div className="left-zone">
        <div
          style={{
            border: "3px solid #000",
            boxShadow: "6px 6px 0 #000",
            height: "80px",
            backgroundColor: "#fff"
          }}
        >
           <div className="header-socials">
              <button
                type="button"
                className="social-btn social-btn-linkedin"
                onClick={() => openExternal(LINKEDIN_URL)}
              >
                in
              </button>
              <button
                type="button"
                className="social-btn social-btn-github"
                onClick={() => openExternal(GITHUB_URL)}
              >
                Git
              </button>
            </div>
          <div className="header-bar">
            <div className="header-titles">
              <h1>{currentPage?.chap}</h1>
              <h2>{currentPage?.nom}</h2>
            </div>
          </div>
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
