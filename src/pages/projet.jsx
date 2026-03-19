import React, { useState } from "react";
import "../style/style.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout";
import Bibliotheque from "../components/Bibliotheque";
import PdfModal from "../components/PdfModal";

const perso = [
  {
    id: 0,
    titre: "BCBC",
    width: 50,
    height: 150,
    images:  [    
      "/bcbc/bcbc.jpg",
      "/blanc.jpg",
      "/bcbc/6_page-0001.jpg",
      "/bcbc/6_page-0002.jpg",
      "/bcbc/6_page-0003.jpg",
      "/bcbc/6_page-0004.jpg",
      "/bcbc/6_page-0005.jpg",
      "/bcbc/6_page-0006.jpg",
      "/bcbc/6_page-0007.jpg",
      "/bcbc/bcbc-fond.jpg",],
  },
  {
    id: 1,
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
    id: 2,
    titre: "Recipedia",
    width: 80,
    height: 180,
    images: [    
      "/recipedia/recipedia.jpg",
      "/blanc.jpg",
      "/recipedia/5_page-0001.jpg",
      "/recipedia/5_page-0002.jpg",
      "/recipedia/5_page-0003.jpg",
      "/recipedia/5_page-0004.jpg",
      "/recipedia/5_page-0005.jpg",
      "/recipedia/5_page-0006.jpg",
      "/recipedia/5_page-0007.jpg",
      "/recipedia/recipedia-fond.jpg",],
  },  
];

const pro = [
  {
    id: 0,
    titre: "Easy",
    width: 50,
    height: 190,
    images:   [    
      "/gsb/1-images-0.jpg",
      "/gsb/1-images-1.jpg",
      "/gsb/1-images-2.jpg",
      "/gsb/1-images-3.jpg",
      "/gsb/1-images-4.jpg",],
  },
  {
    id: 1,
    titre: "sitt \n sia \n Facy",
    width: 70,
    height: 180,
    images: [
        "../images/4584096.jpg",
        "../images/moi.jpg",
        "../images/azerty.jpg",
      ],
  },
  {
    id: 2,
    titre: "Hotel Alpina",
    width: 50,
    height: 190,
    images: [
        "../images/4584096.jpg",
        "../images/moi.jpg",
        "../images/azerty.jpg",
      ],
  },
  {
    id: 3,
    titre: "Aurelie",
    width: 40,
    height: 150,
    images: [
        "/images/clean_code/page1.jpg",
        "/images/clean_code/page2.jpg",
        "/images/clean_code/page3.jpg",
      ],
  },
  {
    id: 4,
    titre: "Sav",
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
    id: 0,
    titre: "GSB",
    width: 60,
    height: 190,
    images: [    
      "/gsb/GSB.jpg",
      "/blanc.jpg",
      "/gsb/2_page-0001.jpg",
      "/gsb/2_page-0002.jpg",
      "/gsb/2_page-0003.jpg",
      "/gsb/2_page-0004.jpg",
      "/gsb/2_page-0005.jpg",
      "/gsb/2_page-0006.jpg",
      "/gsb/2_page-0007.jpg",
      "/gsb/2_page-0008.jpg",
      "/blanc.jpg",
      "/gsb/GSB4.jpg",],
  },
  {
    id: 1,
    titre: "GSB 2",
    width: 50,
    height: 170,
    images: [  
      "/gsb2/GSB.jpg",
      "/blanc.jpg",
      "/gsb2/3_page-0001.jpg",
      "/gsb2/3_page-0002.jpg",
      "/gsb2/3_page-0003.jpg",
      "/gsb2/3_page-0004.jpg",
      "/gsb2/3_page-0005.jpg",
      "/gsb2/3_page-0006.jpg",
      "/gsb2/3_page-0007.jpg",
      "/gsb2/3_page-0008.jpg",
      "/gsb2/3_page-0009.jpg",
      "/josslan/fond.jpg",],
  },
  {
    id: 2,
    titre: "Josslan",
    width: 40,
    height: 140,
    images:  [  
      "/josselan/Josselan.jpg",
      "/blanc.jpg",
      "/josslan/4_page-0001.jpg",
      "/josslan/4_page-0002.jpg",
      "/josslan/4_page-0003.jpg",
      "/josslan/4_page-0004.jpg",
      "/josslan/4_page-0005.jpg",
      "/josslan/4_page-0006.jpg",
      "/josslan/4_page-0007.jpg",
      "/josslan/4_page-0008.jpg",
      "/josslan/fond.jpg",],
  },
];

const competencesColonnes = [
  { id: "gpi", label: "Gérer le patrimoine informatique" },
  { id: "rai", label: "Répondre aux incidents et aux demandes d’assistance" },
  { id: "devweb", label: "Développer la présence en ligne de l’organisation" },
  { id: "projet", label: "Travailler en mode projet" },
  { id: "service", label: "Mettre à disposition des utilisateurs un service informatique" },
  { id: "devpro", label: "Organiser son développement professionnel" },
];

const projetsGrille = [
  // Réalisations en cours de formation  
  {
    id: "8",
    titre: "GSB – Application web full stack",
    periode: "14/05/2025 au 23/06/2025",
    images: ap[0].images,
    competences: { gpi: true, rai: true, devweb: true, projet: true, service: true, devpro: true },
  },
  {
    id: "gsb-winform",
    titre: "GSB Winform",
    images: ap[0].images,
    periode: "04/11/2025 au 09/01/2026",
    competences: { gpi: true, rai: true, devweb: false, projet: true, service: true, devpro: true },
  },
  {
    id: "portfolio",
    titre: "Portfolio",
    images: ap[0].images,
    periode: "20/05/2025 au 17/06/2025",
    competences: { gpi: false, rai: true, devweb: false, projet: true, service: true, devpro: true },
  },
  {
    id: "josslan-lan",
    titre: "Josslan",
    images: ap[0].images,
    periode: "17/03/2025 au 20/03/2025",
    competences: { gpi: true, rai: true, devweb: false, projet: true, service: true, devpro: true },
  },

  // Réalisations en milieu professionnel en cours de première année
  {
    id: "1",
    titre: "Sitt",
    images: ap[0].images,
    periode: "À compléter",
    competences: { gpi: false, rai: false, devweb: false, projet: true, service: true, devpro: true },
  },
  {
    id: "2",
    titre: "Aurelie",
    images: ap[0].images,
    periode: "À compléter",
    competences: { gpi: false, rai: true, devweb: false, projet: false, service: true, devpro: true },
  },
  {
    id: "3",
    titre: "Hotel Alpina",
    images: ap[0].images,
    periode: "À compléter",
    competences: { gpi: false, rai: true, devweb: true, projet: false, service: false, devpro: true },
  },

  // Réalisations en milieu professionnel en cours de seconde année
  {
    id: "4",
    titre: "Easy",
    images: ap[0].images,
    periode: "À compléter",
    competences: { gpi: true, rai: false, devweb: false, projet: false, service: true, devpro: true },
  },
  {
    id: "1",
    titre: "Sia",
    periode: "À compléter",
    images: pro[0].images,
    competences: { gpi: false, rai: false, devweb: false, projet: true, service: true, devpro: true },
  },
  {
    id: "1",
    titre: "Fac",
    periode: "À compléter",
    images: pro[1].images,
    competences: { gpi: false, rai: false, devweb: false, projet: true, service: true, devpro: true },
  },
  {
    id: "5",
    titre: "Sav",
    periode: "À compléter",
    images: pro[2].images,
    competences: { gpi: true, rai: true, devweb: true, projet: false, service: false, devpro: false },
  },
];

export default function ChapitrePage() {
  const navigate = useNavigate();
  const [projetSelectionne, setProjetSelectionne] = useState(null);

  const ouvrirProjet = (projet) => {
    if (!projet?.images) return;
  
    setProjetSelectionne({
      id: projet.id,
      titre: projet.titre,
      images: projet.images
    });
  };

  return (
    <>
      <Header />

      <div className="page-projet">
          <div className="projet-biblio">
            <div>
              <Bibliotheque livres={ap}  onOpenProjet={ouvrirProjet} />
            </div>
            <div>
              <Bibliotheque livres={pro} onOpenProjet={ouvrirProjet}  />
            </div>
            <div>
              <Bibliotheque livres={perso}  onOpenProjet={ouvrirProjet} />
            </div>
          </div>
            <div className="competences-actions">
              <div className="competence-grid">
                <table className="competence-grid-table">
                  <thead>
                    <tr>
                      <th>Réalisation</th>
                      <th>Période</th>
                      {competencesColonnes.map((col) => (
                        <th key={col.id}>{col.label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {projetsGrille.map((projet) => (
                      <tr key={projet.id}>
                        <td
                          className={projet.images ? "cell-projet" : undefined}
                          onClick={() => ouvrirProjet(projet)}
                        >
                          {projet.titre}
                        </td>
                        <td>{projet.periode}</td>
                        {competencesColonnes.map((col) => (
                          <td
                            key={col.id}
                            className={
                              projet.competences[col.id] ? "competence-cell-ok" : "competence-cell-empty"
                            }
                          >
                            {projet.competences[col.id] ? "●" : ""}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="download-buttons">
                <a
                  href="/18%20ans.pdf"
                  className="download-btn"
                  download
                >
                  Télécharger mon CV
                </a>
                <a
                  href="/BTS%20SIO%202025%20-%20E4%20-%20Tableau%20de%20synthèse%20Tessa.pdf"
                  className="download-btn"
                  download
                >
                  Télécharger la grille de compétences
                </a>
              </div>
        </div>
        </div>

      {projetSelectionne && (
        <PdfModal
          images={projetSelectionne.images}
          titre={projetSelectionne.titre}
          onClose={() => setProjetSelectionne(null)}
        />
      )}
    </>
  );
}