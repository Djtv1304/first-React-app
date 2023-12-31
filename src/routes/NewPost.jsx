import { Link, Form, redirect } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css";

function NewPost() {
  /* 
    Al ejecutar este Hook registro un nuevo estado del componente y dentro de ese estado puedo almacenar cualquier tipo de objeto.
    El primer parámetro enviado a la función setea un valor por defecto a la variable de ese estado, el parámetro enviado puede ser de cualquier tipo.
    Luego la función me retorna un array con exactamente dos elementos, el elemento del primer índice será el valor por defecto que le dimos a ese estado y el segundo elemento será una función que recibirá como parámetro el nuevo valor de la variable de ese estado
    
    Ejemplo:
    const [currentValue, setCurrentValue] = useState('');

  */

  return (
    <Modal>
      {/*//? El componente Form me permite crear un formulario que al ser enviado recoje toda la informacion de los inputs del formulario. genera un objeto y ejecuta la funcion action definida en mi main.jsx que contiene las rutas y la funcion que se ejecutará cuando se haga el submit del formulario */}
      <Form method='POST' className={classes.form} >
        <p>
          <label htmlFor="body">Text</label>
          {/* Con la propiedad puedo agregar un event listener para usarlo junto a un state */}
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          {/* Debo usar la etiqueta Link para navegar entre componentes de React */}
          <Link to='/' type="button">Cancel</Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

//? Esta función será ejecutada cuando se haga el submit del formulario y recoibirá como parámetro los datos del formulario en la variable 'data' automaticamente por React Router. 
//! También puedo usar la destructuración de objetos en los parámetros de la función para obtener solo los datos que me interesan del formulario
export async function action(/*data*/ { request }) {

  //? El metodo formData() me permite obtener los datos del formulario en un objeto
  const formData = await request.formData();

  //? El metodo get() me permite obtener un valor del objeto formData
  formData.get('body');

  //? O puedo usar Object.fromEntries() que me permite construir un objeto a partir de un array de arrays, donde cada array interno contiene dos elementos, el primero es el nombre de la propiedad del objeto y el segundo es el valor de esa propiedad
  const postData = Object.fromEntries(formData);

  await fetch('http://localhost:8080/posts', {

    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }

  });

  //? El metodo redirect() me permite navegar a una ruta especifica
  return redirect('/');

}
