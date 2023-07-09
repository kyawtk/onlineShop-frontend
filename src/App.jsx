import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { ShopContextProvider } from "./context/shopContext";
import { CartContextProvider } from "./context/cartContext";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <>
      <CartContextProvider>
        <ShopContextProvider>
          <Navbar></Navbar>
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/shop" element={<Shop></Shop>}></Route>
              <Route path="/shop/:id" element={<Product></Product>}></Route>
              <Route path="/cart" element={<Cart></Cart>}></Route>
            </Routes>
          </AnimatePresence>
        </ShopContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
