import "./forum.css";
function ForumEtudiant(){

    return(
        <section className="forum-section" aria-labelledby="forum-title">
            <div className="forum-card">
                <header className="forum-heading">
                    <span className="forum-eyebrow">Communauté étudiante</span>
                    <h2 id="forum-title">Rejoignez le forum</h2>
                    <p>Présentez-vous pour échanger avec les autres étudiants.</p>
                </header>
                <form className="forum-form">
                    <div className="forum-fields">
                        <label className="forum-field" htmlFor="forum-nom">
                            <span>Nom</span>
                            <input id="forum-nom" name="nom" type="text" placeholder="Saisir votre nom" />
                        </label>
                        <label className="forum-field" htmlFor="forum-prenom">
                            <span>Prénom</span>
                            <input id="forum-prenom" name="prenom" type="text" placeholder="Saisir votre prénom" />
                        </label>
                        <label className="forum-field" htmlFor="forum-email">
                            <span>Email</span>
                            <input id="forum-email" name="email" type="email" placeholder="Saisir votre email" />
                        </label>
                        <label className="forum-field" htmlFor="forum-telephone">
                            <span>Téléphone</span>
                            <input id="forum-telephone" name="telephone" type="tel" placeholder="Saisir votre téléphone" />
                        </label>
                        <label className="forum-field" htmlFor="forum-filiere">
                            <span>Filière</span>
                            <select id="forum-filiere" name="filiere" defaultValue="">
                                <option value="">Sélectionnez une filière</option>
                                <option value="1">Informatique</option>
                                <option value="2">Mathématiques</option>
                                <option value="3">Physique</option>
                            </select>
                        </label>
                        <label className="forum-field" htmlFor="forum-annee">
                            <span>Année d'étude</span>
                            <input id="forum-annee" name="annee" type="number" placeholder="Ex. 2" />
                        </label>
                        <label className="forum-field" htmlFor="forum-groupe">
                            <span>Groupe</span>
                            <input id="forum-groupe" name="groupe" type="text" placeholder="Saisir votre groupe" />
                        </label>
                        <label className="forum-field" htmlFor="forum-ville">
                            <span>Ville</span>
                            <input id="forum-ville" name="ville" type="text" placeholder="Saisir votre ville" />
                        </label>
                        <label className="forum-field forum-field-file" htmlFor="forum-image">
                            <span>Photo de profil</span>
                            <input id="forum-image" name="image" type="file" accept="image/*" />
                        </label>
                    </div>
                    <button className="forum-submit" type="submit">Rejoindre le forum</button>
                </form>
            </div>
        </section>
    );


}
export default ForumEtudiant;