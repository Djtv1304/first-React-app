import Post from "./Post";
import Modal from "./Modal";
import clasess from './PostList.module.css';
import NewPost from './NewPost';
// Importo un Hook de react, un Hook debe ser ejecutado dentro de una función de un componente
import { useState, useEffect } from "react";

function PostList({ isPosting, onStopPosting }) {

    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    //? El hook useEfect me permite ejecutar código en ciertos momentos del ciclo de vida de un componente, en este caso, cuando el componente se renderiza por primera vez, se ejecuta el código que está dentro de la función que se le pasa como parámetro al Hook y el array vacío que se le pasa como segundo parámetro al Hook sirve en general para indicarle al hook que la funcion anonima debe ejecutarse solo cuando el componente se renderiza por primera vez.
    //! Si se le pasa un array con elementos u otro dato, el hook se ejecutará cuando el componente se renderiza por primera vez y cuando alguno de los elementos del array o el dato enviado cambie de valor

    useEffect(() => {

        async function fetchPosts() {

            setIsFetching(true);

            await fetch('http://localhost:8080/posts')
                .then(response => response.json())
                .then(data => setPosts(data.posts));

            setIsFetching(false);

        }

        fetchPosts();

    }, [])

    function addPostHandler(postData) {

        fetch('http://localhost:8080/posts', {

            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        .then(response => response.json())
        .then(data => console.log('Petición exitosa: ', data))
        .catch(error => console.log('Error: ' + error));

        //? El operador spread (...) me permite extraer los elementos de un array y colocarlos en otro array, en este caso, extraigo los elementos del array posts (existingPosts) y los coloco en el array que se retorna. De esta forma, el nuevo elemento que se agrega al array se coloca al inicio del array pero siempre delante de los elementos que ya estaban en el array porque el nuevo estado depende del estado anterior
        setPosts((existingPosts) => [postData, ...existingPosts]);

    }

    return (
        // Puedo utlizar etiquetas vacias llamadas 'Fragments' para anidar componentes sin problema
        <>
            {/* Renderización condicional */}
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    {/* Cuando anido componentes en este caso, debo especificarle al componente padre, en este caso Modal dónde debería ir el componente NewPost para que así se muestre correctamente */}
                    <NewPost
                        onCancel={onStopPosting}
                        onAddPost={addPostHandler}
                    />
                </Modal>
            )}

            {!isFetching && posts.length === 0 && (

                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>No posts yet. Start posting!</h2>
                </div>

            )}

            {!isFetching && posts.length > 0 && (

                <ul className={clasess.posts}>

                    {/*//? La funcion map me permite recorrer un array y retornar un nuevo array con los elementos que yo haya modificado. En este caso, convierto cada elemento del array posts en un componente Post con código JSX y sus propiedades (autor y body) */}
                    {posts.map((post) => (
                        <Post key={post.id} author={post.author} body={post.body} />
                    ))}
                </ul>

            )}

            {isFetching && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <p>Loading posts...</p>
                </div>
            )}

        </>

    );

}

export default PostList;