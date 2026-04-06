import { useEffect, useState } from "react";
import Container from "../components/layout/Container";
import SectionHeader from "../components/layout/SectionHeader";
import "./sections.css";
import "./Servicios.css";
import catering from "../assets/stock/catering.png";
import servicio from "../assets/stock/servicio.png";
import limpieza from "../assets/stock/limpieza.png";
import evento1 from "../assets/stock/evento1.png";
import evento2 from "../assets/stock/evento2.png";

const stockImages = [catering, servicio, limpieza, evento1, evento2];

const servicios = [
  {
    title: "Catering",
    text: "Menú simple y rico para reuniones y celebraciones.",
    chips: ["Bocados", "Mesa dulce", "Brunch"],
    images: stockImages,
  },
  {
    title: "Atención a las mesas",
    text: "Servicio profesional para que no tengas que preocuparte por nada.",
    chips: ["Meseros", "Coordinación", "Servicio cálido"],
    images: stockImages,
  },
  {
    title: "Limpieza final",
    text: "Dejamos el espacio limpio y ordenado al terminar.",
    chips: ["Retiro", "Orden", "Cierre rápido"],
    images: stockImages,
  },
];

function Servicios() {
  const [indexes, setIndexes] = useState(() =>
    servicios.reduce((acc, item) => {
      acc[item.title] = 0;
      return acc;
    }, {}),
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIndexes((prev) =>
        servicios.reduce((acc, item) => {
          const totalImages = item.images.length;

          acc[item.title] = (prev[item.title] + 1) % totalImages;
          return acc;
        }, {}),
      );
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleNext = (title, total) => {
    setIndexes((prev) => ({
      ...prev,
      [title]: (prev[title] + 1) % total,
    }));
  };

  const handlePrev = (title, total) => {
    setIndexes((prev) => ({
      ...prev,
      [title]: (prev[title] - 1 + total) % total,
    }));
  };

  return (
    <section className="section section--soft" id="servicios">
      <Container>
        <SectionHeader
          eyebrow="Servicios"
          title="Todo lo que necesitás para recibir sin preocuparte"
        />

        <div className="services__list">
          {servicios.map((item) => (
            <article key={item.title} className="service-item">
              <div className="service-item__media">
                <div className="service-carousel">
                  <button
                    type="button"
                    className="service-carousel__btn"
                    onClick={() => handlePrev(item.title, item.images.length)}
                    aria-label={`Foto anterior de ${item.title}`}
                  >
                    ‹
                  </button>

                  <img
                    src={item.images[indexes[item.title]]}
                    alt={`Imagen de ${item.title}`}
                    className="service-carousel__image"
                  />

                  <button
                    type="button"
                    className="service-carousel__btn"
                    onClick={() => handleNext(item.title, item.images.length)}
                    aria-label={`Siguiente foto de ${item.title}`}
                  >
                    ›
                  </button>
                </div>

                <div className="service-item__overlay">
                  <p className="service-item__label">{item.title}</p>
                  <p className="service-item__text">{item.text}</p>
                  <div className="service-item__chips">
                    {item.chips.map((chip) => (
                      <span key={chip} className="service-item__chip">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Servicios;
