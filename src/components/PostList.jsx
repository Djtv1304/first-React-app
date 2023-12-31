import Post from "./Post";
import clasess from './PostList.module.css';
//TODO Un Hook de react, un Hook debe ser ejecutado solamente dentro de una función de un componente
// Importo un Hook de React Router que me permite obtener los datos que se pasan como parámetro a la función Loader del componente que está siendo renderizado
import { useLoaderData } from "react-router-dom";

function PostList() {

    // Esta funcion me retorna los datos que retorna la funcion ejecutada al renderizar este componente
    const posts = useLoaderData();

    return (
        // Puedo utlizar etiquetas vacias llamadas 'Fragments' para anidar componentes sin problema
        <>
            {/* Renderización condicional */}
            {posts.length === 0 && (

                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>No posts yet. Start posting!</h2>
                </div>

            )}

            {posts.length > 0 && (

                <ul className={clasess.posts}>

                    {/*//? La funcion map me permite recorrer un array y retornar un nuevo array con los elementos que yo haya modificado. En este caso, convierto cada elemento del array posts en un componente Post con código JSX y sus propiedades (autor y body) */}
                    {posts.map((post) => (
                        <Post key={post.id} id={post.id} author={post.author} body={post.body} />
                    ))}
                </ul>

            )}

        </>

    );

}

export default PostList;