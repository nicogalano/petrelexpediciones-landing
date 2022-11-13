import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Tours from "./components/Tours";
import Whatsapp from "./components/Whatsapp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Tours />
      <About />
      <Contact />

      <Whatsapp />
      <Footer />
      
    </div>
  );
}

export default App;
