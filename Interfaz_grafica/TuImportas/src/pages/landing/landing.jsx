import "./landing.css";
import fotoJavier from "../../assets/Javier_Gonzales.png";

const trustItems = [
  {
    title: "Colegiados verificados",
    text: "Solo psicólogos con colegiación comprobada.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Datos protegidos",
    text: "Tu información es privada y solo se usa con tu permiso.",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect width="18" height="11" x="3" y="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "La IA no diagnostica",
    text: "Te ayuda a elegir psicólogo, no evalúa tu salud.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0l1.58 6.14a2 2 0 0 0 1.44 1.44l6.14 1.58a.5.5 0 0 1 0 .96l-6.14 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z" />
        <path d="M20 3v4M22 5h-4M4 17v2M5 18H3" />
      </svg>
    ),
  },
];

const profesionales = [
  {
    id: 1,
    nombre: "Javier González",
    especialidad: "Especialidad",
    descripcion:
      "Trabajo de manera clara y cercana, sin presionarte en ningún momento a hablar ni a expresar tus emociones.",
    foto: fotoJavier,
  },
  {
    id: 2,
    nombre: "Javier González",
    especialidad: "Especialidad",
    descripcion:
      "Trabajo de manera clara y cercana, sin presionarte en ningún momento a hablar ni a expresar tus emociones.",
    foto: fotoJavier,
  },
  {
    id: 3,
    nombre: "Javier González",
    especialidad: "Especialidad",
    descripcion:
      "Trabajo de manera clara y cercana, sin presionarte en ningún momento a hablar ni a expresar tus emociones.",
    foto: fotoJavier,
  },
];

function Landing() {
  return (
    <main>
      <section className="hero">
        <h1 className="hero-title">Encuentra a tu acompañante ideal</h1>
        <p className="hero-texto">
          Empecemos poco a poco y conoce a la persona que te ayude
        </p>
        <button type="button" className="btn hero-btn">
          Quiero sentirme mejor
        </button>
      </section>

      <section className="mascota"></section>

      <section className="trust">
        <ul className="trust-list">
          {trustItems.map((item) => (
            <li key={item.title} className="trust-item">
              <span className="icon" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <p className="trust-title">{item.title}</p>
                <p className="trust-texto">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="ayudar">
        <h1 className="ayudar-title">
          Esta es tu oportunidad para cambiar el mundo
        </h1>
        <p className="ayudar-text">
          Queremos que crezcas para ayudarte a ti y a las personas
        </p>
        <button className="btn ayudar-btn">Quiero ser parte del cambio</button>
      </section>

      <section className="profesionales">
        <h2 className="profesionales-titulo">
          Conoce a nuestros profesionales
        </h2>
        <ul className="profesionales-tarjetas">
          {profesionales.map((p) => (
            <li key={p.id} className="profesional-tarjeta">
              <img src={p.foto} alt={p.nombre} className="profesional-foto" />
              <h3 className="profesional-nombre">{p.nombre}</h3>
              <p className="profesional-especialidad">{p.especialidad}</p>
              <p className="profesional-descripcion">{p.descripcion}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Landing;
