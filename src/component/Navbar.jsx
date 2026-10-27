import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#etudiants">Étudiants</a></li>
        <li><a href="#filieres">Filières</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;