import React from "react";
import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <section >
      <NavBar/>
      <ItemListContainer greeting={"No se encontraron productos!"} />
      <Inicio/>  
      <Footer/>
    </section>
  );
}

export default App;
