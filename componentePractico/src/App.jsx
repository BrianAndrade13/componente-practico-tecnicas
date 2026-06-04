import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

import landingImage from "./assets/landing.png";
import webImage from "./assets/pagina-web.png";
import systemImage from "./assets/sistema-web.jpeg";

function App() {
  function consultarServicio(servicio) {
    const texto = `Hola Kent, quiero información sobre el servicio de ${servicio}.`;
    const url = `https://wa.me/593967709773?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  }

  function enviarWhatsApp(event) {
    event.preventDefault();

    const form = event.currentTarget;

    const nombre = form.nombre.value.trim();
    const contacto = form.contacto.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !contacto || !mensaje) {
      alert("Por favor completa tu nombre, contacto y mensaje.");
      return;
    }

    const texto = `Hola Brian, soy ${nombre}. Mi contacto es ${contacto}. Quiero información sobre soluciones digitales. Mi mensaje es: ${mensaje}`;
    const url = `https://wa.me/593969489821?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  }

  return (
    <div className="app">
      <Navbar />

      <main>
        <section id="inicio" className="page home-page">
          <Hero />

          <div className="home-info">
            <h2>Soluciones digitales para negocios y emprendimientos</h2>

            <p>
              En la actualidad, muchas personas necesitan mostrar sus servicios
              en internet de una forma clara, ordenada y profesional. Por eso,
              las soluciones digitales permiten que un negocio tenga mayor
              presencia, mejor comunicación y una imagen más confiable.
            </p>

            <p>
              Este proyecto presenta de manera sencilla algunos tipos de
              soluciones digitales, como landing pages, páginas web y sistemas
              web. Además, demuestra el uso básico de React mediante
              componentes, propiedades, eventos y funciones de JavaScript.
            </p>

            <a className="home-button" href="#informacion">
              Ver tipos de soluciones
            </a>
          </div>

          <div className="contact-box">
            <h2>Contacto</h2>

            <p>
              Completa este formulario y se abrirá WhatsApp con un mensaje listo
              para enviar.
            </p>

            <form onSubmit={enviarWhatsApp}>
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
              />

              <input
                type="text"
                name="contacto"
                placeholder="Tu correo o número"
              />

              <textarea
                name="mensaje"
                placeholder="Escribe qué necesitas"
              ></textarea>

              <button type="submit">Enviar por WhatsApp</button>
            </form>
          </div>
        </section>

        <section id="informacion" className="page information-page">
          <div className="section-content">
            <span className="section-label">Información</span>

            <h2>Tipos de soluciones digitales</h2>

            <p className="section-description">
              Estas son algunas soluciones básicas que se pueden desarrollar
              para negocios, emprendimientos o profesionales que necesitan
              mostrar sus servicios en internet.
            </p>

            <div className="cards-container">
              <Card
                image={landingImage}
                title="Landing Page"
                description="Una landing page es una página simple enfocada en presentar un producto, servicio o negocio. Su objetivo es captar la atención del usuario y llevarlo a realizar una acción, como escribir por WhatsApp o solicitar información."
                extraInfo="Es ideal para emprendimientos, campañas, servicios específicos, promociones o portafolios personales."
                buttonText="Consultar Landing"
                onAction={() => consultarServicio("Landing Page")}
              />

              <Card
                image={webImage}
                title="Página Web"
                description="Una página web puede tener varias secciones, como inicio, servicios, nosotros, galería y contacto. Sirve para presentar de manera más completa la información de una empresa o profesional."
                extraInfo="Es útil para negocios que necesitan mostrar su identidad, servicios, ubicación, medios de contacto y trabajos realizados."
                buttonText="Consultar Página Web"
                onAction={() => consultarServicio("Página Web")}
              />

              <Card
                image={systemImage}
                title="Sistema Web"
                description="Un sistema web permite realizar procesos más avanzados, como registrar información, administrar productos, gestionar usuarios, controlar pedidos o manejar datos desde una plataforma."
                extraInfo="Es recomendable cuando un negocio necesita organizar información, automatizar procesos o trabajar con datos internos."
                buttonText="Consultar Sistema"
                onAction={() => consultarServicio("Sistema Web")}
              />
            </div>

            <a className="back-home-button" href="#inicio">
              Volver al inicio
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;