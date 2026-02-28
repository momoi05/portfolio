import "../Style/ParcoursTimeline.css";

const parcours = [
  {
    id: 1,
    annee: "2024 – 2026",
    titre: "BTS SIO Développeur Web",
    ecole: "Nexa digital school",
    description: "Spécialité SLAM, développement d'application web"
  },
  {
    id: 2,
    annee: "2021 – 2024",
    titre: "Baccalauréat général",
    ecole: "St Joseph",
    description: "Bac général avec spécialité Maths, Physique, SVT"
  },
  {
    id: 3,
    annee: "2022",
    titre: "Stage de Seconde en Informatique",
    ecole: "Active Developpement",
    description: "Stage de seconde à active developpement une  entreprise qui crée des sitesw web. J'ai fait mon rapport de stage en html css"
  },
  {
    id: 4,
    annee: "2020",
    titre: "Stage de Troisième en Informatique",
    ecole: "Kéolis Lyon",
    description: "Stage de découverte de troisième à Kéolis Lyon, une entreprise qui gère le réseau des transport urbain. J'ai observer la maintenance des outils informatiques utiliser"
  }
];

export default function ParcoursTimeline() {
  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Parcours scolaire</h2>

      <div className="timeline-wrapper">
        <div className="timeline">
          {parcours.map((item) => (
            <div className="timeline-item" key={item.id}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-annee">{item.annee}</span>
                <h3>{item.titre}</h3>
                <p className="timeline-ecole">{item.ecole}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
