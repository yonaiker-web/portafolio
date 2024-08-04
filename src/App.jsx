import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WFloat } from "./components/WFloat";

export const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-200">
        <Navbar />
        <main className="flex-grow py-3 px-8 pt-20 ">
          <Routes path="/" element={<About />}>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <WFloat />
        <Footer />
      </div>
    </Router>
  );
};
