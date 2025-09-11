import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import QuickLinks from "./components/QuckLinks/QuickLinks";

function App() {
  return (
    <main id="main" className="bg-black h-screen">
      <Navbar />
      <Hero />
      <QuickLinks />
    </main>
  );
}

export default App;
