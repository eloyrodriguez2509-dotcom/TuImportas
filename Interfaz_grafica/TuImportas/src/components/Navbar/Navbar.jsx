import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const cerrar = () => setAbierto(false);
  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
  }, [abierto]);

  return (
    <nav className="navbar">
      <a href="#" className="link navbar-logo">
        tuImportas
      </a>

      <button
        type="button"
        /* Con el navbar-toggle el css solo muestra este boton
        cuando se esta viendo desde el movil */
        className="navbar-toggle"
        aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={abierto}
        aria-controls="navbar-menu"
        onClick={() => setAbierto(!abierto)}
      >
        <svg viewBox="0 0 24 24">
          {abierto ? (
            <path d="M18 6 6 18M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {/* ul es la caja que agrupa toda la lista */}
      <ul
        id="navbar-menu"
        className={abierto ? "navbar-links abierto" : "navbar-links"}
      >
        {/* li es cada elemento de la lista ul */}
        <li>
          <a href="#" className="link navbar-link" onClick={cerrar}>
            Cómo funciona
          </a>
        </li>
        <li>
          <a href="#" className="btn navbar-btn" onClick={cerrar}>
            Quiero ayudar
          </a>
        </li>
        <li>
          <a href="#" className="btn navbar-btn" onClick={cerrar}>
            Encontrar mi psicólogo
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
