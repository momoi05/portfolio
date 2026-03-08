import { useState } from "react";
import PdfModal from "./PdfModal";
import "../style/bibliotheque.css";

export default function Bibliotheque({livres}) {
  const [livreOuvert, setLivreOuvert] = useState(null);

  const handleClick = (livre) => {
    if (livreOuvert?.id === livre.id) {
      setLivreOuvert(null); // ferme si déjà ouvert
    } else {
      setLivreOuvert(livre); // remplace l'ancien
    }
  };

  return (
    <>
      <div className="bibliotheque">
        <div className="etagere">
          {livres.map((livre) => (
            <div
              key={livre.id}
              className="livre"
              style={{
                width: `${livre.width}px`,
                height: `${livre.height}px`
              }}
              onClick={() => setLivreOuvert(livre)}
            >
              <span>{livre.titre}</span>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP PDF */}
      {livreOuvert && (
        <PdfModal
        images={livreOuvert.images}
        titre={livreOuvert.titre}
          onClose={() => setLivreOuvert(null)}
        />
      )}
    </>
  );
}
