import { useEffect, useState } from "react";
import Container from "../components/layout/Container";
import SectionHeader from "../components/layout/SectionHeader";
import { getEvents } from "../services/api";
import "./sections.css";
import "./Eventos.css";

function Eventos() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents()
      .then(setEvents)
      .catch(() => setEvents([]));
  }, []);

  return (
    <section id="paquetes" className="section">
      <Container>
        <SectionHeader
          title="Paquetes"
          eyebrow="Opciones pensadas para distintos tipos de eventos"
        />
        <ul className="event-list">
          {events.map((event) => (
            <li key={event.id} className="event-list__item">
              <p className="event-list__name">{event.name}</p>
              <p className="event-list__description">{event.description}</p>
              <p className="event-list__price">Desde ${event.price}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Eventos;
