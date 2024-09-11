import { ChangeEvent, useLayoutEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import "./Admin.css";

const servicios: string[] = [
  "Antiestres",
  "Descontracturantes",
  "Con piedras calientes",
  "Circulatorios",
];
const horas: string[] = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

type Media = {
  img: string;
  titulo?: string;
  texto?: string;
};
const news: Media[] = [
  {
    img: "src/assets/noticia1.jpeg",
    titulo: "Titulo noticia 1",
    texto: "Prueba noticia 1",
  },
  {
    img: "src/assets/noticia1.jpeg",
    titulo: "Titulo noticia 2",
    texto:
      "Prueba noticia 2 Prueba noticia 2 Prueba noticia 2 Prueba noticia 2 Prueba noticia 2",
  },
];
const photos: Media[] = [
  {
    img: "src/assets/masaje-antiestres.jpg",
  },
  {
    img: "src/assets/temp.png",
  },
  {
    img: "src/assets/Dermohealth.jpg",
  },
  {
    img: "src/assets/masaje-antiestres.jpg",
  },
  {
    img: "src/assets/temp.png",
  },
  {
    img: "src/assets/Dermohealth.jpg",
  },
];

export default function Admin() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [item, setItem] = useState("");
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setItem(event.target.value);
  }

  return (
    <div className="admin-page">
      <div className="background-image" />
      <div className="admin-container">
        <div className="titulo">
          <h1>ADMINISTRADOR</h1>
          <hr />
        </div>
        <div className="admin-types">
          <div className="gallery-section">
            <h3>Noticias</h3>
            <div className="element-container">
              {news.map((element, index) => (
                <div className="element" key={index}>
                  <div>
                    <img src={element.img} />
                    <div className="text"></div>
                    <h4>{element.titulo}</h4>
                    <p>{element.texto}</p>
                  </div>
                  <button className="delete">Borrar</button>
                </div>
              ))}
            </div>
            <div className="buttons">
              <div className="par">
                <input
                  className="textbox"
                  id="item"
                  type="text"
                  value={item}
                  onChange={handleChange}
                  placeholder="Titulo"
                />
                <input
                  className="textbox"
                  id="item"
                  type="text"
                  value={item}
                  onChange={handleChange}
                  placeholder="Descripcion"
                />
              </div>
              <div className="par">
                <div className="file">
                  <label htmlFor="file-upload" className="SecondButton">
                    Seleccionar imagen
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    style={{ display: "none" }}
                  />
                </div>
                <input className="MainButton" type="submit" value="Guardar" />
              </div>
            </div>
          </div>
          <div className="gallery-section">
            <h3>Fotos</h3>
            <div className="element-container">
              {photos.map((element, index) => (
                <div className="element-photo">
                  <div className="element-img" key={index}>
                    <img src={element.img} />
                  </div>
                  <button className="delete">Borrar</button>
                </div>
              ))}
            </div>
            <div className="buttons">
              <div className="file">
                <label htmlFor="file-upload" className="SecondButton">
                  Seleccionar imagen
                </label>
                <input
                  id="file-upload"
                  type="file"
                  style={{ display: "none" }}
                />
              </div>
              <input className="MainButton" type="submit" value="Guardar" />
            </div>
          </div>
          <div className="services-section">
            <h3>Servicios</h3>
            <div className="buttons">
              <div className="par">
                <Dropdown
                  label="Tipo"
                  options={[
                    "Masajes",
                    "Belleza",
                    "Tratamientos Faciales",
                    "Tratamientos Corporales",
                  ]}
                />
                <Dropdown label="Servicio" options={servicios} />
              </div>
              <div className="par">
                <input type="text" className="textbox" placeholder="precio" />
                <input type="submit" className="MainButton" value="Guardar" />
              </div>
            </div>
            <div className="turns-section">
              <h3>Turnos</h3>
              <div className="buttons">
                <div className="par">
                  <Dropdown label="Horarios" options={horas} />
                  <input
                    type="text"
                    className="textbox"
                    placeholder="Agregar hora"
                  />
                </div>
                <div className="par">
                  <input type="submit" className="MainButton" value="Guardar" />
                  <input
                    type="submit"
                    className="SecondButton"
                    value="Borrar Horas"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
