import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" exact element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" elemecnt={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
