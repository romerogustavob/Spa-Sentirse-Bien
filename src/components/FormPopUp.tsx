import React, { useState } from "react";
import { usePopUp } from "../components/PopUpContext";
import "./FormPopUp.css";

export function FormPopUp() {
  const { activePopUp, closePopUp } = usePopUp();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simular el envío de correo
    const { nombre, email, mensaje } = formData;
    const destinatario = "contacto@ejemplo.com"; // Destinatario fijo
    const asunto = `Nueva consulta de ${nombre}`;
    const cuerpoMensaje = `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`;

    // Aquí podrías agregar la lógica para enviar el correo
    alert(
      `Correo enviado a ${destinatario}\nAsunto: ${asunto}\nMensaje: ${cuerpoMensaje}`
    );

    closePopUp(); // Cerrar el pop-up después del envío
  };

  if (activePopUp !== "form") return null;

  return (
    <div className="form-component">
      <div className="popup-overlay">
        <div className="form-component-content">
          <div className="icon">
            <img src="./src/assets/gmail2.png" />
            <h1>ENVIANOS UN CORREO</h1>
          </div>
          <p>Completa el siguiente formulario para reservar tu turno</p>
          <hr />
          <br />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="textbox"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                className="textbox"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                className="textbox"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
            </div>
            <div className="buttons">
              <input type="submit" className="MainButton" value="Enviar" />
              <button
                type="button"
                className="SecondButton"
                onClick={closePopUp}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
