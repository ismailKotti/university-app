import { useState } from 'react';
import './forum.css';

function ForumEtudiant({ onAjouterEtudiant }) {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [filiere, setFiliere] = useState('');
  const [anneeEtude, setAnneeEtude] = useState('');
  const [groupe, setGroupe] = useState('');
  const [ville, setVille] = useState('');
  const [image, setImage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const nouvelEtudiant = {
      nom: nom.trim(),
      prenom: prenom.trim(),
      email: email.trim(),
      telephone: telephone.trim(),
      filiere,
      anneeEtude,
      groupe: groupe.trim(),
      ville: ville.trim(),
      image,
    };

    onAjouterEtudiant(nouvelEtudiant);
  }

  function handleImageChange(event) {
    const fichier = event.target.files?.[0];
    if (fichier) {
      setImage(URL.createObjectURL(fichier));
    }
  }

  return (
    <section className="forum-section" aria-labelledby="forum-title">
      <div className="forum-card">
        <header className="forum-heading">
          <span className="forum-eyebrow">Communauté étudiante</span>
          <h2 id="forum-title">Rejoignez le forum</h2>
          <p>Présentez-vous pour échanger avec les autres étudiants.</p>
        </header>
        <form className="forum-form" onSubmit={handleSubmit}>
          <div className="forum-fields">
            <label className="forum-field" htmlFor="forum-nom">
              <span>Nom</span>
              <input
                id="forum-nom"
                name="nom"
                type="text"
                placeholder="Saisir votre nom"
                value={nom}
                onChange={(event) => setNom(event.target.value)}
                required
              />
            </label>
            <label className="forum-field" htmlFor="forum-prenom">
              <span>Prénom</span>
              <input
                id="forum-prenom"
                name="prenom"
                type="text"
                placeholder="Saisir votre prénom"
                value={prenom}
                onChange={(event) => setPrenom(event.target.value)}
                required
              />
            </label>
            <label className="forum-field" htmlFor="forum-email">
              <span>Email</span>
              <input
                id="forum-email"
                name="email"
                type="email"
                placeholder="Saisir votre email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
            <label className="forum-field" htmlFor="forum-telephone">
              <span>Téléphone</span>
              <input
                id="forum-telephone"
                name="telephone"
                type="tel"
                placeholder="Saisir votre téléphone"
                value={telephone}
                onChange={(event) => setTelephone(event.target.value)}
                required
              />
            </label>
            <label className="forum-field" htmlFor="forum-filiere">
              <span>Filière</span>
              <select
                id="forum-filiere"
                name="filiere"
                value={filiere}
                onChange={(event) => setFiliere(event.target.value)}
                required
              >
                <option value="">Sélectionnez une filière</option>
                <option value="Génie logiciel et système d'information">
                  Génie logiciel et système d'information
                </option>
                <option value="Génie électrique et système d'information">
                  Génie électrique et système d'information
                </option>
              </select>
            </label>
            <label className="forum-field" htmlFor="forum-annee">
              <span>Année d'étude</span>
              <input
                id="forum-annee"
                name="anneeEtude"
                type="number"
                min="1"
                placeholder="Ex. 2"
                value={anneeEtude}
                onChange={(event) => setAnneeEtude(event.target.value)}
                required
              />
            </label>
            <label className="forum-field" htmlFor="forum-groupe">
              <span>Groupe</span>
              <input
                id="forum-groupe"
                name="groupe"
                type="text"
                placeholder="Saisir votre groupe"
                value={groupe}
                onChange={(event) => setGroupe(event.target.value)}
                required
              />
            </label>
            <label className="forum-field" htmlFor="forum-ville">
              <span>Ville</span>
              <input
                id="forum-ville"
                name="ville"
                type="text"
                placeholder="Saisir votre ville"
                value={ville}
                onChange={(event) => setVille(event.target.value)}
                required
              />
            </label>
            <label className="forum-field forum-field-file" htmlFor="forum-image">
              <span>Photo de profil</span>
              <input
                id="forum-image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
          {image && (
            <img className="forum-image-preview" src={image} alt="Aperçu de la photo de profil" />
          )}
          <button className="forum-submit" type="submit">Rejoindre le forum</button>
        </form>
      </div>
    </section>
  );
}

export default ForumEtudiant;
