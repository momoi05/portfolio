import { useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "../style/Flipbook.css";

export default function FlipbookSinglePageRealistic({ images, titre, onClose }) {
  const drawerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  
  return (
    <div className="flipbook-drawer">
      <div className="flipbook-header">
        <h2>{titre}</h2>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      <div className="flipbook-container">
        <HTMLFlipBook
          width={400}
          height={500}
          showCover={true}
          drawShadow={true}
          maxShadowOpacity={0.5}
          flippingTime={700}
          usePortrait={false}
          startPage={0}
          className="flipbook-react"
          flipOnClick={true}
        >
          {images.map((img, index) => (
            <div key={index} className="page-livre">
              <img
                src={img}
                alt={`Page ${index + 1}`}
                className="flip-image"
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}