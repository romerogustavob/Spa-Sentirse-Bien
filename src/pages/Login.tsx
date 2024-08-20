import "./Login.css";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="contenedor ">
      <div className="titulo">
        <h1>Hola de nuevo!</h1>
        <p>👋</p>
      </div>
      <p>
        Inicia sesión o <Link to="/registro">regístrate</Link> para solicitar un
        turno
      </p>
      <form>
        <label>
          <p>Correo electrónico</p>
          <input type="email" name="email"></input>
        </label>
        <label>
          <p>Contraseña</p>
          <input type="password" name="password" />
        </label>
        <p className="MensajeError">* Correo o contraseña incorrectos.</p>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export function Register() {
  return (
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
          <p>Correo electrónico</p>
          <input type="email" name="email"></input>
        </label>
        <label>
          <p>Contraseña</p>
          <input type="password" name="password" />
        </label>
        <label>
          <p>Repite la contraseña</p>
          <input type="password" name="password2" />
        </label>
        <p className="MensajeError">* Correo ya en uso.</p>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Login;
