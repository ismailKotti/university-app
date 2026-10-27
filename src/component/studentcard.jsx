
function StudentCard(props) {

  return (
    <main>
      <div className="id">
        <h1>Fiche etudiant</h1>
        <img src={props.image} alt="ismail.jpeg" />
        <p><strong> nom & prenom </strong> : {props.nom}</p><br />
        <p><strong>Email</strong> : {props.email}</p><br />
        <p><strong>Telephone</strong> : {props.telephone}</p><br />
        <p><strong>Filiere</strong> : {props.filiere}</p><br />
        <p><strong>niveau</strong> : {props.niveau}</p><br />
        <p><strong>groupe</strong> :{props.groupe}</p><br />
        <p><strong>ville</strong> : {props.ville}</p><br/>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${props.email}&su=${encodeURIComponent("Contact - " + props.nom)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Contacter
        </a>
      </div>
    </main>
  );
}

export default StudentCard;
