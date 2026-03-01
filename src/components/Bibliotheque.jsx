import { useState } from "react";
import PdfModal from "./PdfModal";
import "../style/Bibliotheque.css";
import clean1 from "../images/4584096.jpg";
import clean2 from "../images/moi.jpg";
import clean3 from "../images/azerty.jpg";
// import clean4 from "../images/123456789.jpg";
import clean4 from "../images/chibiK.png"

export default function Bibliotheque({livres}) {
  const [livreOuvert, setLivreOuvert] = useState(null);

  return (
    <>
      <div className="bibliotheque">
        <div className="etagere">
          {livres.map((livre) => (
            <div
              key={livre.id}
              className="livre"
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
