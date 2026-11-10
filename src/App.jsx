import { useState } from 'react';
import Counter from './component/counteur.jsx';
import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
import Navbar from './component/Navbar.jsx';
import StudentCard from './component/studentcard.jsx';
import ForumEtudiant from './component/forum.jsx';
import ismailImg from './assets/ismail.jpeg';
import './App.css';

const etudiantsInitiaux = [
  {
    id: 1,
    prenom: 'Ismail',
    nom: 'Kotti',
    email: 'kottiismail50@gmail.com',
    telephone: '+216 58 334 560',
    filiere: "Génie logiciel et système d'information",
    niveau: '2ème année',
    groupe: 'GLSI 2_B',
    ville: 'Sfax',
    image: ismailImg,
  },
  {
    id: 2,
    prenom: 'Mohamed Ali',
    nom: 'Kotti',
    email: 'mohamed.ali@gmail.com',
    telephone: '+216 55 123 456',
    filiere: "Génie électrique et système d'information",
    niveau: '2ème année',
    groupe: 'GEL 2_A',
    ville: 'Tunis',
    image: ismailImg,
  },
];

function App() {
  const [etudiants, setEtudiants] = useState(etudiantsInitiaux);
  const [filiereSelectionnee, setFiliereSelectionnee] = useState('');

  function ajouterEtudiant() {
    setEtudiants((etudiantsActuels) => {
      const id = Math.max(
        Date.now(),
        ...etudiantsActuels.map((etudiant) => etudiant.id + 1),
      );
      const nouvelEtudiant = {
        id,
        prenom: 'Nouvel étudiant',
        nom: '',
        email: `etudiant.${id}@university-app.test`,
        telephone: 'À renseigner',
        filiere: etudiantsActuels[0]?.filiere ?? 'À renseigner',
        niveau: '2ème année',
        groupe: 'À renseigner',
        ville: 'À renseigner',
        image: ismailImg,
      };

      return [...etudiantsActuels, nouvelEtudiant];
    });
  }

  function supprimerEtudiant(id) {
    setEtudiants((etudiantsActuels) =>
      etudiantsActuels.filter((etudiant) => etudiant.id !== id),
    );
  }

  function modifierPrenom(id, nouveauPrenom) {
    setEtudiants((etudiantsActuels) =>
      etudiantsActuels.map((etudiant) =>
        etudiant.id === id ? { ...etudiant, prenom: nouveauPrenom } : etudiant,
      ),
    );
  }

  const filieres = [...new Set(etudiants.map((etudiant) => etudiant.filiere))];
  const etudiantsFiltres = etudiants.filter(
    (etudiant) => !filiereSelectionnee || etudiant.filiere === filiereSelectionnee,
  );

  return (
    <>
      <Navbar />
      <Header />
      <main className="app-content">
        <section id="etudiants" className="students-section">
          <div className="students-heading">
            <div>
              <h2>Liste des étudiants</h2>
              <p>{etudiants.length} étudiant(s) inscrit(s)</p>
            </div>
            <label id="filieres" className="filter-control">
              <span>Filtrer par filière</span>
              <select
                value={filiereSelectionnee}
                onChange={(event) => setFiliereSelectionnee(event.target.value)}
              >
                <option value="">Toutes les filières</option>
                {filieres.map((filiere) => (
                  <option key={filiere} value={filiere}>
                    {filiere}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="student-cards">
            {etudiantsFiltres.map((etudiant) => (
              <StudentCard
                key={etudiant.id}
                {...etudiant}
                onDelete={() => supprimerEtudiant(etudiant.id)}
                onUpdatePrenom={(nouveauPrenom) =>
                  modifierPrenom(etudiant.id, nouveauPrenom)
                }
              />
            ))}
          </div>

          {etudiants.length === 0 && (
            <p className="empty-state">Aucun étudiant dans la liste.</p>
          )}
          {etudiants.length > 0 && etudiantsFiltres.length === 0 && (
            <p className="empty-state">Aucun étudiant dans cette filière.</p>
          )}

          <button className="primary-button" onClick={ajouterEtudiant}>
            Ajouter un étudiant
          </button>
        </section>
        <Counter />
      </main>
      <ForumEtudiant />
      <Footer />
    </>
  );
}

export default App;
