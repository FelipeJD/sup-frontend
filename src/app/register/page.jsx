"use client";

import React, { useContext, useState } from "react";
import { Context } from "../../context/UserContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Input from "@/components/form/input";
import Button from "@/components/form/button";

import { FiArrowRight } from "react-icons/fi";

const Login = () => {
  const [user, setUser] = useState({});
  const { register } = useContext(Context);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formIsValid = true;
    const newErrors = {};

    if (!user.nome) {
      newErrors.nome = "Nome obrigatório";
      formIsValid = false;
    }

    if (!user.email) {
      newErrors.email = "E-mail obrigatório";
      formIsValid = false;
    }

    if (!user.senha) {
      newErrors.senha = "Senha obrigatória";
      formIsValid = false;
    }

    if (!formIsValid) {
      if (newErrors.email) {
        toast.error(newErrors.email);
      }
      if (newErrors.senha) {
        toast.error(newErrors.senha);
      }
      return;
    }

    register(user);
  };

  return (
    <div className="w-full h-screen flex items-center">
      <ToastContainer position="top-right" />
      <form className="w-full max-h-full flex flex-col px-2 space-y-5">
        <div className="w-full">
          <img
            src="/sup-logo.png"
            alt="SUP! logo"
            className="w-32 mb-5 m-auto"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-white mb-1">Nome</label>
          <Input
            type="text"
            name="nome"
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-stone-300"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-white mb-1">E-mail</label>
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-stone-300"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-white mb-1">Nova Senha</label>
          <Input
            type="password"
            name="senha"
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-stone-300"
          />
        </div>
        <Button
          onClick={handleSubmit}
          className="flex items-center justify-center w-full bg-blue-900 p-3 text-white font-medium rounded-md shadow-sm"
        >
          Continue
          <FiArrowRight className="text-md ml-2 text-white" />
        </Button>
        <span className="mt-2 text-md text-white/80">
          Já tem uma conta?{" "}
          <Link href="/login" className="font-medium text-white/100">
            Entrar
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
