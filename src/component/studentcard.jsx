
function StudentCard(props) {

  return (
    <main>
      <div class="id">
        <h1>Fiche etudiant</h1>
        <img src={props.image} alt="ismail.jpeg" />
        <p><strong> nom & prenom </strong> : {props.nom}</p><br />
        <p><strong>Email</strong> : {props.email}</p><br />
        <p><strong>Telephone</strong> : {props.telephone}</p><br />
        <p><strong>Filiere</strong> : {props.filiere}</p><br />
        <p><strong>niveau</strong> : {props.niveau}</p><br />
        <p><strong>groupe</strong> :{props.groupe}</p><br />
        <p><strong>ville</strong> : {props.ville}</p><br/>
        <a href={`mailto:${props.email}`} id="btn">contacter</a>

      </div>
    </main>
  )
}

export default StudentCard;
