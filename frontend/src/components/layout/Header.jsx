import { projectName } from "../../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Container from "./Container";
import "./Header.css";

function HeaderLinks() {
  return (
    <div className="header__links">
      <a href="#servicios">Servicios</a>
      <a href="#cobertura">Cobertura</a>
      <a href="#paquetes">Galería</a>
      <a href="#quienes-somos">Quienes somos</a>
      <a href="#contacto" className="header__link__contacto">
        <FontAwesomeIcon icon={faEnvelope} /> Solicitar un presupuesto
      </a>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__name">
          <span>Mariano</span>
          <span>Eventos</span>
        </div>
        <HeaderLinks />
      </Container>
    </header>
  );
}

export default Header;
