import { ChangeEvent, FormEvent, useState } from "react";
import "./comments.css";

export default function Comments() {
  const [item, setItem] = useState("");
  const [list, setList] = useState<Array<string>>([]);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (item.trim() !== "") {
      const newList = [...list];
      newList.push(item);
      setList(newList);
      setItem("");
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setItem(event.target.value);
  }

  return (
    <div className="comments">
      <h1>Comentarios</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">
          <input
            className="textbox"
            id="item"
            type="text"
            value={item}
            onChange={handleChange}
            placeholder="Escribe tu comentario"
          />
        </label>
        <button className="MainButton" type="submit">
          Comentar
        </button>
      </form>
      <h3>Últimos realizados</h3>
      <ul>
        {list.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
