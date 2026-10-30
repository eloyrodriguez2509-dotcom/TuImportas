import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="link navbar-logo">
        tuImportas
      </a>

      {/* ul es la caja que agrupa toda la lista */}
      <ul className="navbar-links">
      {/* li es cada elemento de la lista ul */}
        <li>
          <a href="#" className="link navbar-link">
            Cómo funciona
          </a>
        </li>
        <li>
          <a href="#" className="btn navbar-btn">
            Quiero ayudar
          </a>
        </li>
        <li>
          <a href="#" className="btn navbar-btn">
            Encontrar mi psicólogo
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
