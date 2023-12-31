// Los imports deben siempre ser contener una letra en mayúscula para no ser confundidos con etiquetas normales de HTML
import { Outlet } from "react-router-dom";
import Post from "../components/Post";
import PostList from "../components/PostList";
import { useState } from "react";

function Posts() {
  return (

    <>
      {/*//? Debido a que este componente renderiza componentes hijos debo agregar el Outlet  */}
      <Outlet />
      <main>
        {/* 
          Al invocar varios componentes se crear varias instancias de ese componente pero hay que tomar 
          En cuenta que una función de un componente solo puede devolver 1 solo elemento
          Debido a eso, en ese único elemento que se retorna podemos invocar a varios componentes React
          
          También a un componente se le pueden pasar propiedades al momento de invocarlo
        */}

        <PostList />

      </main>
    </>

  );
}

export async function Loader() {

  const response = await fetch('http://localhost:8080/posts');
  const data = await response.json();

  // Retorno los datos que quiero exponer al elemento que está siendo renderizado
  return data.posts;

}

export default Posts;
