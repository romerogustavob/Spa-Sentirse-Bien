import "./Login.css";
import { Link } from "react-router-dom";
//import { useAuth } from "../context/AuthContext.jsx"

export function Login() {
  return (
    <div className="ingreso">
      <div className="background-image" />
      <div className="contenedor ">
        <div className="titulo">
          <h1>Hola de nuevo!</h1>
          <p>👋</p>
        </div>
        <p>
          Inicia sesión o <Link to="/registro">regístrate</Link> para solicitar
          un turno
        </p>
        <form>
          <label>
            <p>Correo electrónico</p>
            <input className="textbox" type="email" name="email"></input>
          </label>
          <label>
            <p>Contraseña</p>
            <input className="textbox" type="password" name="password" />
          </label>
          <p className="MensajeError">* Correo o contraseña incorrectos.</p>
          <button className="MainButton" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export function Register() {
  return (
    <div className="ingreso">
      <div className="background-image" />
      <div className="contenedor R">
        <div className="titulo">
          <h1>Bienvenido!</h1>
          <p id="R">🙌</p>
        </div>
        <p>
          <Link to="/login">Inicia sesión</Link> o regístrate para solicitar un
          turno
        </p>
        <form>
          <label>
            <p>Nombre Completo</p>
            <input className="textbox" type="text" name="FullName"></input>
          </label>
          <label>
            <p>Correo electrónico</p>
            <input className="textbox" type="email" name="email"></input>
          </label>
          <label>
            <p>Contraseña</p>
            <input className="textbox" type="password" name="password" />
          </label>
          <label>
            <p>Confirmar contraseña</p>
            <input className="textbox" type="password" name="password2" />
          </label>
          <p className="MensajeError">* Correo ya en uso.</p>
          <button className="MainButton" type="submit">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
