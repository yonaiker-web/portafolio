import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { Projects } from "./routes/Projects";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WFloat } from "./components/WFloat";

export const App = () => {
  return (
    <></>
    // <Router>
    //   <div className="flex flex-col min-h-screen bg-slate-200">
    //     <Navbar />
    //     <main className="flex-grow py-3 px-8 pt-20 ">
    //       <Routes>
    //         <Route path="/" element={<Navigate to="/about" replace />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/projects" element={<Projects />} />
    //         <Route path="/contact" element={<Contact />} />
    //       </Routes>
    //     </main>
    //     <WFloat />
    //     <Footer />
    //   </div>
    // </Router>

    // version sin el gh-pages
    //     <Router>
    //   <div className="flex flex-col min-h-screen bg-slate-200">
    //     <Navbar />
    //     <main className="flex-grow py-3 px-8 pt-20 ">
    //       <Routes>
    //         <Route path="/" element={<Navigate to="/about" replace />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/projects" element={<Projects />} />
    //         <Route path="/contact" element={<Contact />} />
    //       </Routes>
    //     </main>
    //     <WFloat />
    //     <Footer />
    //   </div>
    // </Router>
  );
};
