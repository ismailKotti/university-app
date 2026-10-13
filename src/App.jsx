import StudentCard from './component/studentcard.jsx';
import ismailImg from './assets/ismail.jpeg';
import './App.css';
const etudiant=[
 {
  nom: "Ismail kotti",
  email: "kottiismail50@gmail.com",
  telephone: "+216 58 334 560",
  filiere: "Genie logiciel et systeme d'information",
  niveau: "2eme annee",
  groupe: "GLSI 2_B",
  ville: "sfax",
  image: ismailImg
},
{
  nom: "mohamed ali",
  email: "mohamed.ali@gmail.com",
  telephone: "+216 55 123 456",
  filiere: "Genie electrique et systeme d'information",
  niveau: "2eme annee",
  groupe: "GEL 2_A",
  ville: "tunis",
  image: ismailImg
}
]

function App() {
  return (
    <div className="caontainer">
      {etudiant.map((etudiant) => (
        <StudentCard
          image={etudiant.image}
          prenom={etudiant.prenom}
          nom={etudiant.nom}
          email={etudiant.email}
          telephone={etudiant.telephone}
          filiere={etudiant.filiere}
          niveau={etudiant.niveau}
          groupe={etudiant.groupe}
          ville={etudiant.ville} />
      ))}
    </div>
  );
}
export default App;

