import { projectName } from "../../data/data";
import Container from "./Container";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <p className="header__brand">{projectName}</p>
          <div className="header__buttons">
            <a href="#contacto" className="header__cta contacto">
              Solicitar un presupuesto
            </a>
            <a href="#servicios" className="header__cta">
              Servicios
            </a>
            <a href="#quienes-somos" className="header__cta">
              Quienes somos
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
