import React from "react";
import { Link } from "react-router-dom";
import logo from "~/assets/logo.svg";

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <Link to="/register">Novo cadastro</Link>
      </form>
    </>
  );
}
