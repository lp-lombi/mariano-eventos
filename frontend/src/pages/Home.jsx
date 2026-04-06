import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Contacto from "../sections/Contacto";
import Eventos from "../sections/Eventos";
import Hero from "../sections/Hero";
import QuienesSomos from "../sections/QuienesSomos";
import Servicios from "../sections/Servicios";
import "./Home.css";

function Home() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Servicios />
        <QuienesSomos />
        <Eventos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
