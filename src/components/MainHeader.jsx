// Importo íconos de react de la librería react-icons que debe ser incluida en el proyecto con el comando npm install react-icons
import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        {/* //? La etiqueta link sirve para renderizar un nuevo componente mediante el path sin la necesidad de renderizar toda la página nuevamente */}
        <Link to="/create-post" className={classes.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
