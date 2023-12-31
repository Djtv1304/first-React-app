import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

//? Este componente será un layout que permitirá renderizar otros componentes y dentro de él retorno el componente MainHeader que será el encabezado de mi aplicación. Basicamente el MainHeader será compartido y lo demás se renderizará debajo de él

function RootLayout() {

    return(

        <>
            <MainHeader/>
            {/*//! Para renderizar los componentes que se renderizarán debajo del MainHeader debo agregar el componente Outlet que me provee react-router-dom y que renderizará las rutas que se definieron como children de este layout*/}
            <Outlet/>
        </>

    );

}

export default RootLayout;