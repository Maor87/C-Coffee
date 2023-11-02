import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import AboutUS from "./pages/AboutUS";
import ContactUS from "./pages/ContactUS";
import SignOrLog from "./pages/SignOrLog";
import Footer from "./pages/Footer";
import './about.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
         <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/about us" element={<AboutUS />} />
          <Route path="/contact us" element={<ContactUS />} />
          <Route path="/signup" element={<SignOrLog />} />
          <Route path="/login" element={<SignOrLog />} />
         </Routes>
          <Footer />
       </div>
    </Router>
  );
}

export default App;
