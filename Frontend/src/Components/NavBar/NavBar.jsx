import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center gap-4 relative">
      {/* Burger for mobil */}
      <button
        className="md:hidden text-green-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa-solid fa-bars text-2xl"></i>
      </button>

      {/* Desktop-menu */}
      <div className="hidden md:flex items-center gap-4">
        <NavLink to="/categories">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Kategorier
          </button>
        </NavLink>

        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Opret Annonce
        </button>

        <div className="flex items-center gap-4 text-gray-500">
          <i className="fa-solid fa-envelope h-6 w-6"></i>
          <i className="fa-solid fa-info h-6 w-6"></i>
          <i className="fa-solid fa-user h-6 w-6"></i>
        </div>
      </div>

      {/* Mobil-menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md flex flex-col gap-2 p-2 md:hidden z-10">
          <NavLink to="/categories" className="hover:bg-green-100 rounded px-2 py-1">
            Kategorier
          </NavLink>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full">
            Opret Annonce
          </button>
          <div className="flex items-center gap-4 text-gray-500 justify-center mt-2">
            <i className="fa-solid fa-envelope h-6 w-6"></i>
            <i className="fa-solid fa-info h-6 w-6"></i>
            <i className="fa-solid fa-user h-6 w-6"></i>
          </div>
        </div>
      )}
    </nav>
  );
};
