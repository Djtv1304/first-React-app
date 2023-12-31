import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './PostDetails.module.css';

function PostDetails() {
    const post = useLoaderData();

    if (!post) {
        return (
            <Modal>
                <main className={classes.details}>
                    <h1>Could not find post</h1>
                    <p>Unfortunately, the requested post could not be found.</p>
                    <p>
                        <Link to=".." className={classes.btn}>
                            Okay
                        </Link>
                    </p>
                </main>
            </Modal>
        );
    }
    return (
        <Modal>
            <main className={classes.details}>
                <p className={classes.author}>{post.author}</p>
                <p className={classes.text}>{post.body}</p>
            </main>
        </Modal>
    );
}

export default PostDetails;

export async function loader({ params }) {
    
    const response = await fetch(
        // Por parámetro en la petición recibo el id del post que quiero cargar, este id deb tener el mismo nombre que el parámetro que le paso a la ruta en el main.jsx
        'http://localhost:8080/posts/' + params.id
    );
    
    if (!response.ok) {
        
        return undefined;

    }
    
    const data = await response.json();
    
    return data.post;

}