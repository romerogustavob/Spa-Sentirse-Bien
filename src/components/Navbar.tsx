/*import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";*/
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="marca">
        <img src="src\assets\logo.png"></img>
        <p>Sentirse bien</p>
      </div>
      <div className="enlaces">
        <a href="">Inicio</a>
        <a href="">Servicios</a>
        <a href="">Turnos</a>
        <input type="submit" value="Ingresar" />
      </div>
    </header>
  );
}
/*
const Button = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return <button onClick={handleClick}>Ingresar</button>;
};
*/
export default Navbar;
