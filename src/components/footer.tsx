import "./footer.css";
import GoogleMap from "./googleMap";

export default function Footer() {
  return (
    <div className="footer" id="contact">
      <div className="contact">
        <h3>CONTÁCTANOS</h3>
        <div className="item">
          <img src="/src/assets/ubicacion.png" alt="Ubicacion" />
          <p>ANJ, Saavedra 449, H3500 Resistencia, Provincia del Chaco</p>
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
      <GoogleMap />
    </div>
  );
}
