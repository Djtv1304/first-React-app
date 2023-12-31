import classes from "./Modal.module.css";

// En vez de usar el objeto props, puedo usar el objeto children directamente para renderizar el componente hijo
function Modal({ children, onClose }) {
    return (
        <>
            {/* Este div será usado para renderizar el background del modal */}
            <div className={classes.backdrop} onClick={onClose} />
            {/* Con el atributo open hacemos que se vea o no se vea */}
            <dialog open={true} className={classes.modal}>

                {children}

            </dialog>
        </>
    );
}

export default Modal;
