import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="marca">
        <Link to="/">
          <img src="src/assets/logo.png" alt="Logo" />
        </Link>
        <Link to="/">
          <p className="MarcaName">Sentirse bien</p>
        </Link>
      </div>
      <div className="enlaces">
        <Link to="/">Inicio</Link>
        <a href="">Galería</a>
        <Link to="/servicios">Servicios</Link>
        <Link to="/servicios">Turnos</Link>
        <Link to="/login" className="MainButton">
          Ingresar
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
