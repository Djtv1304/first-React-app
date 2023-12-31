import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Posts from './routes/Posts'
import './index.css'
import PostList from './components/PostList'
import NewPost from './components/NewPost'
import RootLayout from './routes/RootLayout'

//! Para configurar las rutas de mi front-end debo importar y crear un objeto de tipo BrowserRouter y pasarlo como parámetro al componente RouterProvider. En la funcion createBrowserRouter() debo pasarle un array con varios objetos que contenga las rutas de mi front-end
const router = createBrowserRouter([
  //? Este path será un layout que permitirá renderizar otros componentes dentro de él y para eso debo agregarle la propiedad children: que será un array que contendrá mas rutas que serán renderizadas dentro de este layout (Nested Routes se llaman en inglés)
  {
    path: '/', element: <RootLayout/>, children: [

      //? Puedo renderizar mis componentes colocando el componente como valor de la propiedad element: <Componente/> en el path indicado en la propiedad path
      { path: '/', element: <Posts /> },
      { path: '/create-post', element: <NewPost /> }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* //! Para agregar rutas a mi front-end debo instalar el react-router-dom, importarlo y renderizarlo en vez del componente principal de react que era <Posts/> */}
    {/* <Posts /> */}
  </React.StrictMode>
) 
