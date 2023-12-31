// Así es como se debe declarar las clases CSS en un componente de React
import { Link } from 'react-router-dom';
import clasess from './Post.module.css';

// Los nombres de mis componentes en React deben empezar con una letra en mayúscula 
function Post({ id, author, body }) {



    return (

        // Puedo darle estilos a mis componentes dentro de las llaves y con la sintaxis de JavaScript o también puedo agregar un nombre de clase para agregar estilos desde una hoja CSS aparte
        <li key={id} className={clasess.post} /*style={{color: 'red', textAlign: 'center'}}*/>
            <Link to={id}>
                <p className={clasess.author}>{author}</p>
                <p className={clasess.text}>{body}</p>
            </Link>
        </li>

    );
}
// Puedo exportar la función de esta manera o agregar la palabra 'export' antes de la función 
export default Post;