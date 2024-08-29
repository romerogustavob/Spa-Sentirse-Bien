<Link to={`/turnos?servicio=${serviceName}`}>Reservar turno</Link>;

import { useLocation } from "react-router-dom";

function TurnosPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const servicio = params.get("servicio");

  return (
    <div>
      <h1>Reserva para: {servicio}</h1>
      {/* Resto del código */}
    </div>
  );
}
