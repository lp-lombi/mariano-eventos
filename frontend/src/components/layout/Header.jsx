import { projectName } from "../../data/data";
import Container from "./Container";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <Container>
                <div className="header__name">
                    <span>𝓜𝓪𝓻𝓲𝓪𝓷𝓸</span>
                    <span>𝓔𝓿𝓮𝓷𝓽𝓸𝓼</span>
                </div>
                <div className="header__links">
                    <a href="#servicios">Servicios</a>
                    <a href="#quienes-somos">Quienes somos</a>
                    <a href="#paquetes">Paquetes</a>
                    <a href="#contacto" className="header__link__contacto">
                        Solicitar un presupuesto
                    </a>
                </div>
            </Container>
        </header>
    );
}

export default Header;
