import React from "react";
import { Link } from "react-router-dom";

import { Form, Input } from "@rocketseat/unform";
import logo from "~/assets/logo.svg";

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <Link to="/register">Novo cadastro</Link>
      </Form>
    </>
  );
}