import { useEffect, useState } from "react";
import Container from "../components/layout/Container";
import cateringImg from "../assets/stock/catering.png";
import evento1Img from "../assets/stock/evento1.png";
import evento2Img from "../assets/stock/evento2.png";
import limpiezaImg from "../assets/stock/limpieza.png";
import servicioImg from "../assets/stock/servicio.png";
import "./sections.css";
import "./Hero.css";

const heroImages = [
  cateringImg,
  evento1Img,
  evento2Img,
  limpiezaImg,
  servicioImg,
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImages[currentImage]})`,
      }}
    >
      <Container>
        <div className="hero__content">
          <span className="hero__badge">Hasta 50 personas</span>
          <h1 className="hero__title">
            Eventos completos en tu casa, sin estrés.
          </h1>
          <p className="hero__text">
            El mejor servicio en CABA. Catering, servicio a domicilio, montaje y
            limpieza final para que disfrutes tu evento sin preocuparte por
            nada.
          </p>
          <div className="hero__actions">
            <a href="#contacto">
              <button>Solicitar presupuesto</button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
