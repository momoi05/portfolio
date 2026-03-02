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
          { date: "Git : master devient main", 
            text: "Git va changer le nom de sa branche par défaut — traditionnellement « master » — pour « main » dans sa version 3.0, prévue pour fin 2026, afin d’adopter un langage plus inclusif.",
             url: "https://alm.developpez.com/actu/377924/Git-va-changer-le-nom-par-defaut-de-sa-branche-master-en-main-dans-la-version-3-0-prevue-pour-fin-2026-afin-de-promouvoir-un-langage-inclusif-dans-le-contexte-des-changements-sociaux-de-2020/",
             image: Image4 },
          { date: "Cybercriminels & chaînes logistiques", 
            text: "Les cybercriminels ont désormais pris pour cible les chaînes logistiques : ils piratent les systèmes des transporteurs/fret pour détourner des cargaisons — des produits physiques — et volent chaque année des millions de dollars de marchandises.", 
            url: "https://www.bfmtv.com/tech/cybersecurite/les-cybercriminels-ont-trouve-un-nouveau-terrain-de-jeu-ils-piratent-la-chaine-logistique-et-detournent-pour-des-millions-de-dollars-de-produits-chaque-annee_AV-202512010744.html",
            image: Image5 },
          { date: "Piratage de la plateforme Itelis", 
            text: "La plateforme Itelis a été victime d’un piratage : les données privées de certains assurés (identité, numéro de sécu, remboursements optiques…) ont été dérobées, ce qui expose les utilisateurs à des risques de phishing.",
             url: "https://www.bfmtv.com/tech/cybersecurite/la-plateforme-itelis-a-ete-victime-d-un-piratage-les-donnees-privees-d-utilisateurs-liees-aux-remboursements-de-frais-d-optique-ont-ete-derobees-attention-aux-campagnes-de-phishing_AV-202511240584.html",
             image: Image6 },
          { date: "DrawDB — éditeur de schémas de bases de données.", 
            text: "DrawDB est un outil open source dans le navigateur qui permet de faire des diagrammes de bases de données et de générer des scripts SQL facilement.", 
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