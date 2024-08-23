import "./Home.css";

function Home() {
  return (
    <>
      <main>
        <section className="first">
          <div className="first-content">
            <div className="text">
              <h2>Venga con nosotros a</h2>
              <h1 className="titulo">
                Revitalizarse, Relajarse, Renovarse, y
                <p className="MarcaName"> Sentirse bien</p>
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
          </div>
        </section>
        <section className="about">
          <img src="/src/assets/imagen1.jpg" alt="imagen1" />
          <div className="text">
            <h3>NOSOTROS</h3>
            <h1>¿Qué buscamos?</h1>
            <p>
              Buscamos atraer la atención de nuestro clientes a través de
              experiencias inspiradas en la seducción de los sentidos. Adaptamos
              las propuestas con el objetivo de que logre desconectarse
              completamente de la rutina y disfrute de un momento de bienestar,
              en total armonía con la naturaleza.
            </p>
            <a className="SecondButton" href="#contact">
              Contáctanos
            </a>
          </div>
        </section>
        <section className="footer" id="contact">
          <div className="contact">
            <h3>CONTÁCTANOS</h3>
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
            <div className="itemEmpleo">
              <h3>EMPLEO</h3>
              <div className="archivo">
                <input type="file" />
                <input className="submit" type="submit" value={"Enviar CV"} />
              </div>
            </div>
          </div>
          <img className="temp" src="src/assets/temp.png" alt="maps" />
        </section>
      </main>
    </>
  );
}

export default Home;
