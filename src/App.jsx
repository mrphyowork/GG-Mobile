import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/product/Products";
import Cart from "./pages/cart/Cart";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Favorite from "./pages/favorite/Favorite";
import { CartContextProvider } from "./context/CartContext";
import ThankYou from "./pages/ThankYou";
import ggMobile from "./assets/GGMobile.png";
import Footer from "./components/Footer";
import { ProductDetail } from "./pages/product/ProductDetail";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <CartContextProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar image={ggMobile} />
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer image={ggMobile} />
        </BrowserRouter>
      </ThemeProvider>
    </CartContextProvider>
  );
};

export default App;
