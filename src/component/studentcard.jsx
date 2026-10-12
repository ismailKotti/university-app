import ismailImg from '../assets/ismail.jpeg';

const etudiant= {
  nom: "Ismail kotti",
  email: "kottiismail50@gmail.com",
  telephone: "+216 58 334 560",
  filiere: "Genie logiciel et systeme d'information",
  niveau: "2eme annee",
  groupe: "GLSI 2_B",
  ville: "sfax"
}
function StudentCard() {

  return (
    <main>
      <div class="id">
        <h1>Fiche etudiant</h1>
        <img src={ismailImg} alt="ismail.jpeg" />
        <p><strong> nom & prenom </strong> : {etudiant.nom}</p><br />
        <p><strong>Email</strong> : {etudiant.email}</p><br />
        <p><strong>Telephone</strong> : {etudiant.telephone}</p><br />
        <p><strong>Filiere</strong> : {etudiant.filiere}</p><br />
        <p><strong>niveau</strong> : {etudiant.niveau}</p><br />
        <p><strong>groupe</strong> :{etudiant.groupe}</p><br />
        <p><strong>ville</strong> : {etudiant.ville}</p><br/>
        <a href={`mailto:${etudiant.email}`} id="btn">contacter</a>

      </div>
    </main>
  )
}

export default StudentCard;
