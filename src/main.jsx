import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { Loader as postsLoader } from "./routes/Posts";
import "./index.css";
import PostList from "./components/PostList";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import PostDetails, { loader as postDetailsLoader } from "./components/PostDetails";

//! Para configurar las rutas de mi front-end debo importar y crear un objeto de tipo BrowserRouter y pasarlo como parámetro al componente RouterProvider. En la funcion createBrowserRouter() debo pasarle un array con varios objetos que contenga las rutas de mi front-end
const router = createBrowserRouter([
  //? Este path será un layout que permitirá renderizar otros componentes dentro de él y para eso debo agregarle la propiedad children: que será un array que contendrá mas rutas que serán renderizadas dentro de este layout (Nested Routes se llaman en inglés)
  {
    path: "/",
    element: <RootLayout />,
    children: [
      //? Puedo renderizar mis componentes colocando el componente como valor de la propiedad element: <Componente/> en el path indicado en la propiedad path
      {
        path: "/",
        element: <Posts />,
        // Este atributo loader espera una funcion que será ejecutada cuando se renderice la ruta indicada en la propiedad path, esta función debe retornar una promesa que será resuelta cuando se cargue el componente que se quiere renderizar
        loader: postsLoader,
        children: [
          //? Hago que mi componente NewPost se renderice dentro del componente Posts que contiene todos los posts inciales
          {
            path: "/create-post",
            element: <NewPost />,
            // El atributo action espera una función que se ejecutará cuando se haga el submit de un form en el componente NewPost
            action: newPostAction
          },
          {
            // El atributo id será un parametro dinámico que se pasará como props al componente PostList mediante la URL
            path: "/:id",
            element: <PostDetails />,
            loader: postDetailsLoader
          }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* //! Para agregar rutas a mi front-end debo instalar el react-router-dom, importarlo y renderizarlo en vez del componente principal de react que era <Posts/> */}
    {/* <Posts /> */}
  </React.StrictMode>
);
