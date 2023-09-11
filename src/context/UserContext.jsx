"use client";

import React, { createContext } from "react";
import auth from "@/hooks/auth";

const Context = createContext();

const UserProvider = ({ children }) => {
  const { isAuthenticated, register, login, logout } = auth();

  return (
    <Context.Provider value={{ isAuthenticated, register, login, logout }}>
      {children}
    </Context.Provider>
  );
};

export { Context, UserProvider };
