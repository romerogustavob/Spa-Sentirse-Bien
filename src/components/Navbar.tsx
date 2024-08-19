import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//NO FUNCIONA NADAAAAA

const Navbar = () => {
  return (
    <header>
      <div className="marca">
        {/* Verifica la ruta de la imagen */}
        <img src={process.env.PUBLIC_URL + "../assets/logo.png"} alt="Logo" />
        <p>Sentirse Bien</p>
      </div>
      <nav>
        <Link to="/inicio">Inicio</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/turnos">Turnos</Link>
        <Button />
      </nav>
    </header>
  );
};

const Button = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return <button onClick={handleClick}>Ingresar</button>;
};

export default Navbar;
