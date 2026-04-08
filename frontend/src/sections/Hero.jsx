import { useEffect, useRef, useState } from "react";
import catering1 from "../assets/stock/catering1.png";
import catering2 from "../assets/stock/catering2.jpg";
import catering3 from "../assets/stock/catering3.jpg";
import servicio1 from "../assets/stock/servicio1.png";
import Container from "../components/layout/Container";
import "./sections.css";
import "./Hero.css";

const heroMessages = [
  {
    title: "Nosotros organizamos tu evento, vos disfrutás",
    badge: "Hasta 50 personas",
    image: catering1
  },
  {
    title: "Catering, montaje, atención y limpieza final",
    badge: "Servicio integral",
    image: servicio1
  },
  {
    title: "El mejor servicio en CABA",
    badge: "Experiencia garantizada",
    image: catering3
  }
]

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [incomingIndex, setIncomingIndex] = useState(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    let cycleTimeoutId;
    let promoteTimeoutId;

    const scheduleNextTransition = () => {
      cycleTimeoutId = window.setTimeout(() => {
        const nextIndex = (currentIndexRef.current + 1) % heroMessages.length;

        setIncomingIndex(nextIndex);

        promoteTimeoutId = window.setTimeout(() => {
          setCurrentIndex(nextIndex);
          currentIndexRef.current = nextIndex;
          setIncomingIndex(null);
          scheduleNextTransition();
        }, 1000);
      }, 5000);
    };

    scheduleNextTransition();

    return () => {
      window.clearTimeout(cycleTimeoutId);
      window.clearTimeout(promoteTimeoutId);
    };
  }, []);

  const current = heroMessages[currentIndex];
  const incoming = incomingIndex !== null ? heroMessages[incomingIndex] : null;

  return (
    <section className="hero">
      <div className="hero__background" aria-hidden="true">
        <div
          className="hero__background-layer hero__background-layer--current"
          style={{
            backgroundImage: `url(${current.image})`,
          }}
        />
        {incoming !== null ? (
          <div
            className="hero__background-layer hero__background-layer--incoming"
            style={{
              backgroundImage: `url(${incoming.image})`,
            }}
          />
        ) : null}
      </div>
        <div className={`hero__content ${incomingIndex !== null ? 'hero__content--transitioning' : ''}`}>
          <span className="hero__badge">{current.badge}</span>
          <h1 className="hero__title">
            {current.title}
          </h1>
        </div>
        <div className="hero__actions">
          <a href="#contacto">
            <button>Solicitar presupuesto</button>
          </a>
        </div>
    </section>
  );
}

export default Hero;
