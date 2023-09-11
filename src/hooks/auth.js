import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import api from "@/api/api";

const auth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.authorization = `Bearer ${JSON.parse(token)}`;
      setIsAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const register = async (user) => {
    try {
      const data = await api
        .post("/api/usuarios/registrar", user)
        .then((response) => {
          return response.data;
        });

      await authUser(data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const login = async (user) => {
    try {
      const data = await api
        .post("/api/usuarios/login", user)
        .then((response) => {
          return response.data;
        });

      await authUser(data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const authUser = async (data) => {
    setIsAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));
    router.push("/");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.headers.authorization = undefined;

    router.push("/login");
  };

  return { isAuthenticated, loading, register, login, logout };
};

export default auth;
