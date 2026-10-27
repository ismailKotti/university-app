import { useState } from 'react';

function StudentCard({
  prenom,
  nom,
  email,
  telephone,
  filiere,
  niveau,
  groupe,
  ville,
  image,
  onDelete,
  onUpdatePrenom,
}) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);
  const [editionActive, setEditionActive] = useState(false);
  const [prenomModifie, setPrenomModifie] = useState(prenom);

  function enregistrerPrenom(event) {
    event.preventDefault();
    const nouveauPrenom = prenomModifie.trim();

    if (nouveauPrenom) {
      onUpdatePrenom(nouveauPrenom);
      setEditionActive(false);
    }
  }

  function annulerModification() {
    setPrenomModifie(prenom);
    setEditionActive(false);
  }

  return (
    <article className="student-card">
      <img className="student-avatar" src={image} alt={`Photo de ${prenom} ${nom}`} />
      <h3>{[prenom, nom].filter(Boolean).join(' ')}</h3>
      <dl className="student-details">
        <div>
          <dt>Filière</dt>
          <dd>{filiere}</dd>
        </div>
        <div>
          <dt>Niveau</dt>
          <dd>{niveau}</dd>
        </div>
        <div>
          <dt>Groupe</dt>
          <dd>{groupe}</dd>
        </div>
        <div>
          <dt>Ville</dt>
          <dd>{ville}</dd>
        </div>
      </dl>

      <button
        className="secondary-button"
        onClick={() => setCoordonneesVisibles((visibles) => !visibles)}
      >
        {coordonneesVisibles
          ? 'Masquer les informations'
          : 'Afficher les informations'}
      </button>

      {coordonneesVisibles && (
        <div className="contact-details">
          <p>
            <strong>Email :</strong> {email}
          </p>
          <p>
            <strong>Téléphone :</strong> {telephone}
          </p>
          <a href={`mailto:${email}`} className="contact-link">
            Contacter
          </a>
        </div>
      )}

      {editionActive ? (
        <form className="edit-student-form" onSubmit={enregistrerPrenom}>
          <label>
            Modifier le prénom
            <input
              value={prenomModifie}
              onChange={(event) => setPrenomModifie(event.target.value)}
              required
            />
          </label>
          <div className="card-actions">
            <button className="secondary-button" type="submit">
              Enregistrer
            </button>
            <button
              className="text-button"
              type="button"
              onClick={annulerModification}
            >
              Annuler
            </button>
          </div>
        </form>
      ) : (
        <div className="card-actions">
          <button
            className="text-button"
            onClick={() => {
              setPrenomModifie(prenom);
              setEditionActive(true);
            }}
          >
            Modifier le prénom
          </button>
          <button className="delete-button" onClick={onDelete}>
            Supprimer
          </button>
        </div>
      )}
    </article>
  );
}

export default StudentCard;
