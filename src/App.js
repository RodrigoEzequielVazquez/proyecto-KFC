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
import Terminos from "./components/Terminos";
import Privacidad from "./components/Privacidad";
import Contacto from "./components/Contacto";
import FormaPago from "./components/FormaPago";
import FinCompra from "./components/FinCompra";
import PagoTarjeta from "./components/PagoTarjeta";

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
            <Route path="/forma-de-pago" element={<FormaPago />} />
            <Route path="/pago-tarjeta" element={<PagoTarjeta />} />
            <Route path="/fin-de-compra" element={<FinCompra />} />
            <Route path="/promociones" element={<Promociones />} />
            <Route path="/locales" element={<Locales />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        </div>
      </CartContextProvider>

    
  );
}

export default App;
