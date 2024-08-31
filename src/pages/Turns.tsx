import { useLayoutEffect } from "react";
import Dropdown from "../components/Dropdown";
import "./Turns.css";

type Turno = {
  servicio: string;
  tipo: string;
  dia: string;
  hora: string;
};
const misTurnos: Turno[] = [
  {
    servicio: "Antiestres",
    tipo: "Masaje",
    dia: "04/06/2024",
    hora: "18:15",
  },
  {
    servicio: "Depilacion Facial",
    tipo: "Belleza",
    dia: "05/06/2024",
    hora: "18:00",
  },
  {
    servicio: "Punta de Diamante",
    tipo: "Tratamiento Facial",
    dia: "06/06/2024",
    hora: "17:45",
  },
  {
    servicio: "Antiestres",
    tipo: "Masaje",
    dia: "04/06/2024",
    hora: "18:15",
  },
  {
    servicio: "Depilacion Facial",
    tipo: "Belleza",
    dia: "05/06/2024",
    hora: "18:00",
  },
  {
    servicio: "Punta de Diamante",
    tipo: "Tratamiento Facial",
    dia: "06/06/2024",
    hora: "17:45",
  },
  {
    servicio: "Antiestres",
    tipo: "Masaje",
    dia: "04/06/2024",
    hora: "18:15",
  },
  {
    servicio: "Depilacion Facial",
    tipo: "Belleza",
    dia: "05/06/2024",
    hora: "18:00",
  },
  {
    servicio: "Punta de Diamante",
    tipo: "Tratamiento Facial",
    dia: "06/06/2024",
    hora: "17:45",
  },
];

const servicios: string[] = [
  "Antiestres",
  "Descontracturantes",
  "Con piedras calientes",
  "Circulatorios",
];
const horas: string[] = ["10:00", "11:00", "17:00", "18:00", "19:00"];

type Props = {
  titulo: string;
  label: string;
  options: string[];
};
function Box(props: Props) {
  const { titulo, label, options } = props;
  return (
    <div className="box">
      <h4>{titulo}</h4>
      <Dropdown label={label} options={options} />
    </div>
  );
}

export function TurnComponent() {
  return (
    <div className="turno-component">
      <form>
        <div className="icon">
          <img src="./src/assets/calendario.png" />
          <h1>AGENDÁ TU TURNO</h1>
        </div>
        <p>Completa el siguiente formulario para reservar tu turno</p>
        <hr />
        <h2>Reserva</h2>
        <div className="Contenedor-dropdowns">
          <Box
            titulo="Tipo de Tratamiento"
            label="Seleccione Tratamiento"
            options={[
              "Masajes",
              "Belleza",
              "Tratamientos Faciales",
              "Tratamientos Corporales",
            ]}
          />
          <Box
            titulo="Servicio"
            label="Seleccione Servicio"
            options={servicios}
          />
          <div className="box">
            <h4>Fecha</h4>
            <input type="date" name="fecha" id="fecha" value="Ingresar Fecha" />
          </div>
          <Box titulo="Hora" label="Seleccione Horario" options={horas} />
        </div>
        <div className="detalles">
          <h4>Informacion importante</h4>
          <textarea
            className="textbox"
            name="informacion"
            id="informacion"
            placeholder="Escriba brevemente informacion que debera ser considerada por los empleados"
          />
        </div>
        <input type="submit" className="MainButton" value="AGENDAR" />
      </form>
    </div>
  );
}

export default function Turn() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="turn-page">
      <div className="background-image" />
      <div className="turn-container">
        <div className="titulo">
          <h1>TURNOS</h1>
          <hr />
        </div>
        <div className="misTurnos">
          <h3>Mis Turnos</h3>
          <div className="misTurnos-container">
            {misTurnos.map((turn, index) => (
              <div className="turno" key={index}>
                <div>
                  <h4>{turn.servicio}</h4>
                </div>
                <div>
                  <p>{turn.tipo}</p>
                  <br />
                  <p>{turn.dia}</p>
                  <p>{turn.hora}</p>
                  <br />
                  <input
                    type="submit"
                    className="SecondButton"
                    value="Eliminar Reserva"
                  />
                </div>
              </div>
            ))}
          </div>
          <input type="submit" className="MainButton" value="Agendar Turno" />
          <TurnComponent />
        </div>
      </div>
    </div>
  );
}
