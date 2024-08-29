import { Link } from "react-router-dom";
import "./servicio.css";

type Props = {
  img: string;
  titulo: string;
  texto: string;
};

export default function Servicio(props: Props) {
  const { img, titulo, texto } = props;
  return (
    <Link to="/login" className="tarjeta">
      <img src={img} />
      <div>
        <h4>{titulo}</h4>
        <p>{texto}</p>
      </div>
    </Link>
  );
}
