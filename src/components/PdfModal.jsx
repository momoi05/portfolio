import HTMLFlipBook from "react-pageflip";
import "../Style/Flipbook.css";

export default function FlipbookSinglePageRealistic({ images, titre, onClose }) {
  return (
    <div className="flipbook-overlay">
      <div className="flipbook-container">
        <h2 style={{ paddingBottom: "10px" }}>{titre}</h2>

        <HTMLFlipBook
          width={400}                 // largeur du livre
          height={500}                // hauteur du livre
          showCover={true}            // première page = couverture
          drawShadow={true}           // ombres pour effet réaliste
          maxShadowOpacity={0.5}      // opacité des ombres
          flippingTime={700}          // temps du flip en ms
          usePortrait={false}         // vue paysage
          startPage={0}
          className="flipbook-react"
          flipOnClick={true}          // clic pour tourner
        >
          {images.map((img, index) => (
            <div key={index} className="page">
              <img
                src={img}
                alt={`Page ${index + 1}`}
                className="flip-image"
                style={{ width: "100%" }}
              />
            </div>
          ))}
        </HTMLFlipBook>

        <button className="close-btn" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
}
