import Container from "../components/layout/Container";
import SectionHeader from "../components/layout/SectionHeader";
import "./sections.css";
import "./QuienesSomos.css";

function QuienesSomos() {
  return (
    <section id="quienes-somos" className="section quienes">
      <Container className="quienes-container">
        <SectionHeader
          eyebrow="Quiénes somos"
          title="Sobre nosotros"
          className="quienes-header"
        />
        <div className="quienes__text-block">
          <p className="quienes__text">
            Somos un equipo dedicado a crear eventos en casa simples, cálidos y
            bien organizados. Te acompañamos desde el primer mensaje para
            entender qué tipo de evento querés hacer y cómo adaptar la propuesta
            a tu espacio.
          </p>
          <p>
            Contamos con 10 años de experiencia en eventos privados, familiares y corporativos. Nuestro servicio es integral: catering, montaje, atención durante el
            evento y limpieza final para que no tengas que preocuparte por nada.
          </p>
          <p className="quienes__text">
            Trabajamos en eventos de hasta 50 personas, con un enfoque cercano,
            prolijo y personalizado en cada detalle.
          </p>
        </div>
        <SectionHeader
          eyebrow="Testimonios"
          intro="¡Te mostramos lo que dicen nuestros clientes de nosotros!"
          className="quienes-header testimonios"
        />
        <div className="quienes__text-block">
          <p className="quienes__text">
            "Contratamos el servicio para un cumpleaños en casa y fue increíble.
            La comida deliciosa, el montaje hermoso y el equipo súper atento.
            Nos dejaron disfrutar sin preocuparnos por nada."
          </p>
          <p className="quienes__text">
            "El mejor servicio de catering a domicilio que hemos probado. Todo
            estuvo perfecto, desde la comunicación hasta la limpieza final. Sin
            dudas volveremos a contratar para nuestro próximo evento."
          </p>
        </div>
      </Container>
    </section>
  );
}

export default QuienesSomos;
