import "./Home.css";

function Home() {
  return (
    <>
      <main>
        <section className="first">
          <div className="text">
            <h3>Ven con nosotros</h3>
            <h1>
              Relájate, Renueva, Revitaliza y
              <h1 className="MarcaName">Sientete bien</h1>
            </h1>
          </div>
          <div className="buttons">
            <input
              className="MainButton"
              type="button"
              value="Solicitar Turno"
            />
            <input className="SecondButton" type="button" value="Consultas" />
          </div>
        </section>
        <section className="about">
          <img src="/src/assets/imagen1.jpg" alt="imagen1" />
          <div>
            <h3>NOSOTROS</h3>
            <h1>¿Qué buscamos?</h1>
            <p>
              Buscamos atraer la atención de nuestro clientes a través de
              experiencias inspiradas en la seducción de los sentidos. Adaptamos
              las propuestas con el objetivo de que logre desconectarse
              completamente de la rutina y disfrute de un momento de bienestar,
              en total armonía con la naturaleza.
            </p>
            <a href="#contact">Contáctanos</a>
          </div>
        </section>
        <section className="contact">
          <div>
            <h3>Contáctanos</h3>
            <div className="item">
              <img src="/src/assets/ubicacion.png" alt="Ubicacion" />
              <p>Av. Rivadavia N°4358. Resistencia, Chaco.</p>
            </div>
            <div className="item">
              <img src="/src/assets/gmail.png" alt="Gmail" />
              <p>correoelectronico@email.com</p>
            </div>
            <div className="item">
              <img src="/src/assets/whatsapp.png" alt="Whatsapp" />
              <p>+54 3624242424</p>
            </div>
            <div className="item">
              <img src="/src/assets/facebook.png" alt="facebook" />
              <p>@Sentirse.bien</p>
            </div>
          </div>
          <img src="src/assets/temp.png" alt="maps" />
        </section>
      </main>
    </>
  );
}

export default Home;
