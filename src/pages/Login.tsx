import "./Login.css";

export function Login() {
  return (
    <div className="contenedor ">
      <div className="titulo">
        <h1>Hola de nuevo!</h1>
        <p>👋</p>
      </div>
      <p>
        Inicia sesión o <a href="">registrate</a> para solicitar un turno
      </p>
      <form>
        <label>
          <p>Correo electronico</p>
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

export default Login;
