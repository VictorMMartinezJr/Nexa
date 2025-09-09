import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main id="main" className="bg-black h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
