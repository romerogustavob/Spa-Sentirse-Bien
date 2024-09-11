import "./servicio.css";
import { usePopUp } from "./PopUpContext";

type Props = {
  img: string;
  titulo: string;
  texto: string;
};

export default function Servicio(props: Props) {
  const { openPopUp } = usePopUp();
  const { img, titulo, texto } = props;

  return (
    <div className="tarjeta" onClick={() => openPopUp("turn")}>
      <img src={img} />
      <div>
        <h4>{titulo}</h4>
        <p>{texto}</p>
      </div>
    </div>
  );
}
