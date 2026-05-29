import React from "react";
import "../style/SlantedGrid3.css";
import Image4 from "../images/article-4.png";
import Image5 from "../images/article-5.png";
import Image6 from "../images/article-6.png";
import Image7 from "../images/article-7.webp";
import ImageLevy from "../images/chibi-levy.png"

export default function SlantedGrid() {
  return (
    <div className="manga-page-veille live-inking"> {/* Ajout de la texture papier globale */}
      {/* --- SECTION DE GAUCHE : 3 BLOCS --- */}
      <div className="manga-grid-top-veille">
        <div className="manga-panel-veille live-border">
         <h2 className="panel-title"><span>− La mise en place de ma veille −</span></h2>
          <div className="panel-body">
            <p>Pour rester informée des dernières évolutions dans le domaine du numérique et du développement, j'ai mis en place une veille technologique structurée. J'utilise des outils tels que LinkedIn pour suivre des professionnels du secteur, ainsi que GitHub Explore pour découvrir de nouveaux projets. Je consulte également régulièrement des sites tels que Techno Science, JeuxVidéo.com et Presse Citron. </p>
            <img src={ImageLevy} alt="basket" className="manga-char-veille basket speed-up" />
          </div>
        </div>

        <div className="manga-panel-veille live-border manga-vibe"> {/* Fond légèrement tramé */}
          <h2 className="panel-title"><span>− Impact de ma veille −</span></h2>
          <div className="panel-body">
            <p>Cette démarche de veille m’a permis de :<br/>
-Mieux comprendre les tendances actuelles et à venir dans les technologies web.<br/>
-Identifier des outils et pratiques que je peux intégrer dans mes projets (par exemple : automatisation avec GitHub Actions, meilleures pratiques UX).<br/>
-Développer une curiosité constante et une capacité à apprendre en autonomie.<br/>
<br/>
Elle m’a également sensibilisé à l’importance de l’adaptabilité dans un secteur en constante évolution.</p>
          </div>
        </div>        
      </div>

      {/* --- SECTION DE DROITE : 4 BLOCS tramés --- */}
      <div className="manga-grid-bottom-entreprise">
        {[
          { date: "Rust sauvera Linux de lia — ZDNet", 
            text: "L’article défend l’idée que l’intégration de Rust dans Linux pourrait limiter les bugs amplifiés par les contributions générées par IA grâce à sa sécurité mémoire, mais il sous-estime les tensions humaines, la dette historique du noyau et le fait que l’IA améliore aussi déjà la maintenance du code C existant.",
             url: "https://www.zdnet.fr/actualites/rust-sauvera-linux-de-lia-affirme-le-responsable-de-la-maintenance-du-noyau-495666.htm",
             image: Image4 },
          { date: "Cybercriminels & chaînes logistiques", 
            text: "Les cybercriminels ont désormais pris pour cible les chaînes logistiques : ils piratent les systèmes des transporteurs/fret pour détourner des cargaisons. Cela pose la question de la responsabilité des entreprises dans la sécurisation de leurs infrastructures critiques.", 
            url: "https://www.bfmtv.com/tech/cybersecurite/les-cybercriminels-ont-trouve-un-nouveau-terrain-de-jeu-ils-piratent-la-chaine-logistique-et-detournent-pour-des-millions-de-dollars-de-produits-chaque-annee_AV-202512010744.html",
            image: Image5 },
          { date: "Piratage de la plateforme Itelis", 
            text: "La plateforme Itelis a été victime d’un piratage : les données privées de certains assurés (identité, numéro de sécu, remboursements optiques…) ont été dérobées, ce qui expose les utilisateurs à des risques de phishing. Au-delà du risque immédiat de phishing, c’est la confiance dans ces plateformes qui est fragilisée.",
             url: "https://www.bfmtv.com/tech/cybersecurite/la-plateforme-itelis-a-ete-victime-d-un-piratage-les-donnees-privees-d-utilisateurs-liees-aux-remboursements-de-frais-d-optique-ont-ete-derobees-attention-aux-campagnes-de-phishing_AV-202511240584.html",
             image: Image6 },
          { date: "DrawDB — éditeur de schémas de bases de données.", 
            text: "DrawDB est un outil open source dans le navigateur qui permet de faire des diagrammes de bases de données et de générer des scripts SQL facilement. Mais comme souvent avec ces outils “simples”, la question se pose : gain de productivité réel ou risque de masquer la complexité des modèles de données ?", 
            url: "https://www.it-connect.fr/drawdb-un-outil-open-source-pour-modeliser-vos-bases-de-donnees/",
            image: Image7 }
        ].map((item, index) => (
          <div
            key={index}
            className="manga-panel small-panel live-border screentone-bg clickable-panel"
            onClick={() => {
              if (item.url) {
                window.open(item.url, "_blank", "noopener,noreferrer");
              }
            }}
          >
            {item.image && (
              <div
                className="panel-image"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            )}
            <div className="panel-date manga-title-font">{item.date}</div>
            <div className="panel-text" dangerouslySetInnerHTML={{ __html: item.text }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}