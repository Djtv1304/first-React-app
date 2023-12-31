import classes from "./NewPost.module.css";
import { useState } from "react";

let idJSX = 0;

function NewPost({ onCancel, onAddPost }) {
  /* 
    Al ejecutar este Hook registro un nuevo estado del componente y dentro de ese estado puedo almacenar cualquier tipo de objeto.
    El primer parámetro enviado a la función setea un valor por defecto a la variable de ese estado, el parámetro enviado puede ser de cualquier tipo.
    Luego la función me retorna un array con exactamente dos elementos, el elemento del primer índice será el valor por defecto que le dimos a ese estado y el segundo elemento será una función que recibirá como parámetro el nuevo valor de la variable de ese estado
    
    Ejemplo:
    const [currentValue, setCurrentValue] = useState('');

  */

  //? const [enteredBody, setEnteredBody] = useState();
  //? function changeBodyHandler(event) {
  //?    Dentro del evento recibimos información del objeto que desató el evento, en este caso sería el Text Area
  //?   setEnteredBody(event.target.value);
  //? }

  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {

    setEnteredBody(event.target.value);

  }

  function authorChangeHandler(event) {

    setEnteredAuthor(event.target.value);

  }

  function submitHandler(event) {

    event.preventDefault();

    const postData = {
      
      id: idJSX,
      body: enteredBody,
      author: enteredAuthor

    };

    idJSX++;

    onAddPost(postData);

    onCancel();

  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        {/* Con la propiedad puedo agregar un event listener para usarlo junto a un state */}
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
