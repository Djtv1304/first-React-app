import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

// En vez de usar el objeto props, puedo usar el objeto children directamente para renderizar el componente hijo
function Modal({ children }) {

    //? El Hook useNavigate sirve para navegar a una ruta específica
    const  navigate = useNavigate();

    function onCloseHandler() {

        //? En este caso cuando se cierre el modal dando click al <div/>, se navegará a la ruta raíz, puedo pasarle una ruta especifica o puedo pasarle una ruta relativa que serian dos puntos y que harian que se navege al path anterior, es decir al path padre
        navigate('..');

    }

    return (
        <>
            {/* Este div será usado para renderizar el background del modal */}
            <div className={classes.backdrop} onClick={onCloseHandler} />
            {/* Con el atributo open hacemos que se vea o no se vea */}
            <dialog open={true} className={classes.modal}>

                {children}

            </dialog>
        </>
    );
}

export default Modal;
