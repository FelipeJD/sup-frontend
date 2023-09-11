"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { Context } from "../../context/UserContext";
import { FiMenu, FiLogOut, FiPlus } from "react-icons/fi";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useContext(Context);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-5 bg-blue-900 shadow md:flex md:items-center md:justify-between relative">
      <div className="flex justify-between items-center w-full">
        <Link href="/" className="text-2xl font-bold">
          <img src="/sup-logo.png" alt="SUP! logo" className="w-12" />
        </Link>

        <span className="flex space-x-5 items-center text-3xl cursor-pointer mx-2 md:hidden">
          <FiMenu onClick={toggleMenu} className="text-white w-8" />
        </span>
      </div>

      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:items-center md:bg-transparent md:p-0 py-4 md:w-auto md:opacity-100 transition-all ease-in duration-500`}
      >
        {isAuthenticated ? (
          <div className="w-full max-h-full lg:flex lg:items-center">
            <li className="my-6 md:my-0">
              <Link
                href="#"
                className={`flex items-center text-md font-medium text-white hover:text-white/70 duration-100 whitespace-nowrap ${
                  menuOpen ? "" : "hidden md:flex"
                } ${menuOpen ? "mx-0" : "mx-4"}`}
              >
                {menuOpen && <FiPlus className="text-xl text-white mr-2" />}
                Novo Chat
              </Link>
            </li>
            <li className="my-6 md:my-0">
              <span
                className={`flex items-center cursor-pointer font-medium text-white hover:text-white/70 ${
                  menuOpen ? "mx-0" : "mx-4"
                }`}
                onClick={logout}
              >
                {menuOpen && <FiLogOut className="text-xl mr-2 text-white" />}
                Sair
              </span>
            </li>
          </div>
        ) : (
          <>
            <li className="my-6 md:my-0">
              <Link
                href="/register"
                className={`${
                  menuOpen
                    ? "bg-blue-950 text-white hover:text-blue-950 hover:border-white hover:bg-white shadow-md"
                    : "bg-blue-950 text-white hover:text-blue-950 hover:border-white hover:bg-white shadow-md"
                } duration-100 px-4 md:px-6 py-2 whitespace-nowrap rounded ${
                  menuOpen ? "mx-0" : "mx-4"
                }`}
              >
                Registro
              </Link>
            </li>

            <li className="my-6 md:my-0">
              <Link
                href="/login"
                className={`${
                  menuOpen
                    ? "bg-blue-950 text-white hover:text-blue-950 hover:border-white hover:bg-white shadow-md"
                    : "bg-blue-950 text-white hover:text-blue-950 hover:border-white hover:bg-white shadow-md"
                } duration-100 px-4 md:px-6 py-2 whitespace-nowrap rounded ${
                  menuOpen ? "mx-0" : "mx-4"
                }`}
              >
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
