import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Container from "../components/layout/Container";
import SectionHeader from "../components/layout/SectionHeader";
import "./sections.css";
import "./Contacto.css";
import { socialMedia } from "../data/data";

function Contacto() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    comments: "",
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    setFormData((prev) => ({ ...prev, photos: files }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contacto" className="section section--soft">
      <Container>
        <SectionHeader
          eyebrow="Contacto"
          intro="Escribinos para hacerte una cotización personalizada y adaptar la propuesta a tu espacio."
        />
        <form onSubmit={handleSubmit} className="contact__form">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact__input"
          />


          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact__input"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Tu teléfono"
            value={formData.phone}
            onChange={handleChange}
            className="contact__input"
          />
          <textarea
            name="comments"
            placeholder="Contanos más detalles sobre tu evento"
            value={formData.comments}
            onChange={handleChange}
            className="contact__textarea"
            rows="4"
          ></textarea>
          <p>
            Te pedimos que adjuntes fotos del espacio donde vas a hacer el
            evento para armar una propuesta a medida
          </p>
          <div className="contact__file-wrap">
            <input
              id="contact-photos"
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="contact__file-input"
            />
            <label htmlFor="contact-photos" className="contact__file-button">
              Cargar imágenes
            </label>
            <p className="contact__file-help">
              {formData.photos.length > 0
                ? `${formData.photos.length} imagen(es) seleccionada(s)`
                : "No seleccionaste imágenes todavía"}
            </p>
          </div>
          <button type="submit" className="button button--primary">
            Enviar
          </button>
        </form>
        <div className="contact__social">
          <SectionHeader eyebrow="Seguinos en nuestras redes" />
          <ul>
            <li>
              <a
                href={socialMedia.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="contact__social-icon"
                />
                {socialMedia.instagram.handle}
              </a>
            </li>
            <li>
              <a
                href={socialMedia.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="contact__social-icon"
                />
                {socialMedia.facebook.handle}
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Contacto;
