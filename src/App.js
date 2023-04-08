import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ContainerMenu from "./components/ContainerMenu";
import Promociones from "./components/Promociones";
import Locales from "./components/Locales";
import Error404 from "./components/Error404";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    
      <CartContextProvider>
        <div >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/menu" element={<ContainerMenu />} />
            <Route path="/menu/:menuId" element={<ItemListContainer />} />
            <Route path="/menu/:menuId/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/promociones" element={<Promociones />} />
            <Route path="/locales" element={<Locales />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        </div>
      </CartContextProvider>

    
  );
}

export default App;
