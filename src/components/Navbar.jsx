import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white border-b-2 border-white"
      : "text-gray-300 hover:text-white";

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-50 pb-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-4">
          <NavLink to="/about" className={linkClass}>
            Sobre mí
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Proyectos
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contacto
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
