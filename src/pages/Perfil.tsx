import { useLayoutEffect } from "react";
import "./Perfil.css";

type Perfil = {
  FullName: string;
  email: string;
  img?: string;
  password: string;
  registro: Date;
  visits: number;
};
const perfil: Perfil = {
  FullName: "Julian Codina",
  email: "depedrojulianismael@gmail.com",
  password: "StarWars1234",
  registro: new Date("07-09-24"),
  visits: 3,
};

export default function Perfil() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="perfil-page">
      <div className="background-image" />
      <div className="perfil-container">
        <div className="titulo">
          <h1>PERFIL</h1>
          <hr />
        </div>
        <div className="perfil-section">
          <h3>Mi perfil</h3>
        </div>
      </div>
    </div>
  );
}
