import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./components/pages/Products";
import Product from "./components/pages/Product";
import Login from "./components/pages/Login";
import { ToastContainer } from "react-toastify";
import Cart from "./components/pages/Cart";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <main id="main" className="bg-white min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
}

export default App;
