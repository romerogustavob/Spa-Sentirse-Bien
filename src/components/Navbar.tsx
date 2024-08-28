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
        <a href="">Servicios</a>
        <a href="">Turnos</a>
        <Link to="/login" className="MainButton">
          Ingresar
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
