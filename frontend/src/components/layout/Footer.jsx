import { projectName } from "../../data/data";
import Container from "./Container";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <p className="footer__text">
          © {new Date().getFullYear()} {projectName}
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
