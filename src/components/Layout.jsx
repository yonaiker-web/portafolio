import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WFloat } from "./WFloat";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-200">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <WFloat />

      <Footer />
    </div>
  );
};
