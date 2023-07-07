import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from './pages/Cart'
import {  ShopContextProvider } from "./context/shopContext";
import {CartContextProvider} from './context/cartContext'
function App() {
  return (
    <><CartContextProvider>
      <ShopContextProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/shop/:id" element={<Product></Product>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </ShopContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
