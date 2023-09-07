import React from "react";
import Link from "next/link";
import Input from "@/components/form/input";
import Button from "@/components/form/button";

import { FiArrowRight } from "react-icons/fi";

const Login = () => {
  return (
    <div className="w-full h-screen flex items-center">
      <form className="w-full max-h-full flex flex-col px-2 space-y-5">
        <div className="w-full">
          <img src="/sup-logo.png" alt="SUP! logo" className="w-32 mb-5 m-auto"/>
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-white mb-1">E-mail</label>
          <Input className="w-full p-3 rounded-md bg-stone-300" />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-white mb-1">Senha</label>
          <Input className="w-full p-3 rounded-md bg-stone-300" />
        </div>
        <Button className="flex items-center justify-center w-full bg-blue-900 p-3 text-white font-medium rounded-md shadow-sm">
          Continue
          <FiArrowRight className="text-md ml-2 text-white" />
        </Button>
        <span className="mt-2 text-md text-white/80">
          Ainda não tem uma conta?{" "}
          <Link href="/register" className="font-medium text-white/100">
            Criar
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
