import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./components/pages/Products";

function App() {
  return (
    <main id="main" className="bg-white h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </main>
  );
}

export default App;
