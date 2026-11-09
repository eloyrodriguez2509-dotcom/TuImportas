import "./Footer.css";

const redes = [
  {
    nombre: "Instagram",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
  {
    nombre: "LinkedIn",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const enlaces = [
  { texto: "Cómo funciona", url: "#" },
  { texto: "Encontrar mi psicólogo", url: "#" },
  { texto: "Quiero ayudar", url: "#" },
];

const contacto = [
  {
    texto: "hola@tuimportas.com",
    url: "mailto:hola@tuimportas.com",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    texto: "España",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const legales = ["Aviso legal", "Política de privacidad", "Cookies"];

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="footer-logo">tuImportas</p>
            <p className="footer-frase">
              Te ayudamos a encontrar al psicólogo que encaja contigo, paso a
              paso y a tu ritmo.
            </p>
            <ul className="footer-redes">
              {redes.map((red) => (
                <li key={red.nombre}>
                  <a href={red.url} className="footer-red" aria-label={red.nombre}>
                    {red.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Enlaces rápidos">
            <h2 className="footer-titulo">Enlaces rápidos</h2>
            <ul className="footer-lista">
              {enlaces.map((enlace) => (
                <li key={enlace.texto}>
                  <a href={enlace.url} className="link">
                    {enlace.texto}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="footer-titulo">Contacto</h2>
            <ul className="footer-lista">
              {contacto.map((dato) => (
                <li key={dato.texto} className="footer-contacto">
                  {dato.icon}
                  {dato.url ? <a href={dato.url}>{dato.texto}</a> : dato.texto}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-crisis" role="note">
          <p className="footer-crisis-titulo">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
            Si estás en crisis o emergencia:
          </p>
          <div className="footer-crisis-telefonos">
            <a href="tel:024">Línea 024 (atención a la conducta suicida)</a>
            <a href="tel:112">112 (emergencias)</a>
          </div>
        </div>

        <div className="footer-inferior">
          <p>© {new Date().getFullYear()} tuImportas. Todos los derechos reservados.</p>
          <ul className="footer-legal">
            {legales.map((legal) => (
              <li key={legal}>
                <a href="#" className="link">
                  {legal}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;