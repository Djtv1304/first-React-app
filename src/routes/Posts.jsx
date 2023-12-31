// Los imports deben siempre ser contener una letra en mayúscula para no ser confundidos con etiquetas normales de HTML
import Post from "../components/Post";
import PostList from "../components/PostList";
import { useState } from "react";



function Posts() {
  
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {

    setModalIsVisible(true);

  }

  function hideModalHandler() {

    setModalIsVisible(false);

  }

  return (

    <>
      <main>
        {/* 
          Al invocar varios componentes se crear varias instancias de ese componente pero hay que tomar 
          En cuenta que una función de un componente solo puede devolver 1 solo elemento
          Debido a eso, en ese único elemento que se retorna podemos invocar a varios componentes React
          
          También a un componente se le pueden pasar propiedades al momento de invocarlo
        */}

        <PostList 
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />

      </main>  
    </>  
    
  );
}

export default Posts;
