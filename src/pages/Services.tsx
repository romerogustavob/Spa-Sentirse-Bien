import { useLayoutEffect } from "react";
import Servicio from "../components/servicio";
import "./services.css";

type TarjetaProps = {
  img: string;
  titulo: string;
  texto: string;
};
const masajes: TarjetaProps[] = [
  {
    img: "src/assets/masaje-antiestres.jpg",
    titulo: "Antiestrés",
    texto: "Relaja cuerpo y mente, aliviando tensión muscular y estrés.",
  },
  {
    img: "src/assets/masaje-descontractura.jpg",
    titulo: "Descontracturantes",
    texto:
      "Alivia dolores musculares profundos, devolviendo flexibilidad al cuerpo.",
  },
  {
    img: "src/assets/masaje-piedras.jpeg",
    titulo: "Masajes con piedras calientes",
    texto:
      "Combina el calor de piedras volcánicas con masajes para una relajación profunda.",
  },
  {
    img: "src/assets/masaje-circulatorio.jpg",
    titulo: "Circulatorios",
    texto:
      "Estimula la circulación sanguínea, mejorando la oxigenación de tejidos.",
  },
];
const belleza: TarjetaProps[] = [
  {
    img: "src/assets/lifting-pestanas.jpg",
    titulo: "Lifting de pestaña",
    texto:
      "Eleva y realza tus pestañas de forma natural, con resultados duraderos.",
  },
  {
    img: "src/assets/depilacion-facial.jpg",
    titulo: "Depilación facial",
    texto:
      "Elimina vellos no deseados con precisión, dejando tu piel suave y lisa.",
  },
  {
    img: "src/assets/manos-y-pies.jpeg",
    titulo: "Belleza de manos y pies",
    texto:
      "Cuida y embellece tus manos y pies con nuestros tratamientos especializados.",
  },
];
const trataFa: TarjetaProps[] = [
  {
    img: "src/assets/punta-diamante.jpg",
    titulo: "Punta de Diamante",
    texto:
      "Microexfoliación que renueva la piel, dándole un aspecto más joven y luminoso.",
  },
  {
    img: "src/assets/Limpieza.jpg",
    titulo: "Limpieza profunda + Hidratación",
    texto: "Limpia y rehidrata la piel, dejándola fresca y luminosa.",
  },
  {
    img: "src/assets/crio-frecuencia.jpg",
    titulo: "Crio frecuencia facial",
    texto:
      "Produce un ‘shock térmico’, logrando un efecto lifting instantáneo en tu rostro.",
  },
];
const trataCo: TarjetaProps[] = [
  {
    img: "src/assets/Velaslim.jpg",
    titulo: "VelaSlim",
    texto: "Reducción de la circunferencia corporal y la celulitis.",
  },
  {
    img: "src/assets/Dermohealth.jpg",
    titulo: "DermoHealth",
    texto:
      "Moviliza tejidos y estimula la microcirculación, generando un drenaje linfático.",
  },
  {
    img: "src/assets/criofrecuencia-corporal.jpg",
    titulo: "Criofrecuencia",
    texto:
      "Produce un efecto de lifting instantáneo, tonificando y rejuveneciendo la piel.",
  },
  {
    img: "src/assets/Ultracavitacion.jpg",
    titulo: "Ultracavitación",
    texto:
      "Técnica reductora que combate la grasa localizada, esculpiendo tu figura.",
  },
];

type Props = {
  titulo: string;
  tarjetas: TarjetaProps[];
};
export function ServiceSection(props: Props) {
  const { titulo, tarjetas } = props;
  return (
    <div className="services-section">
      <h3>{titulo}</h3>
      <div className="services-container">
        {tarjetas.map((TarjetaProps, index) => (
          <Servicio
            key={index}
            img={TarjetaProps.img}
            titulo={TarjetaProps.titulo}
            texto={TarjetaProps.texto}
          />
        ))}
      </div>
    </div>
  );
}

function Services() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="servicios-page">
      <div className="background-image" />
      <div className="servicios-container">
        <div className="titulo">
          <h1>SERVICIOS</h1>
          <hr />
        </div>
        <div className="servicios-types">
          <ServiceSection titulo="Masajes" tarjetas={masajes} />
          <ServiceSection titulo="Belleza" tarjetas={belleza} />
          <ServiceSection titulo="Tratamientos Faciales" tarjetas={trataFa} />
          <ServiceSection titulo="Tratamientos Corporales" tarjetas={trataCo} />
        </div>
      </div>
    </div>
  );
}

export default Services;
