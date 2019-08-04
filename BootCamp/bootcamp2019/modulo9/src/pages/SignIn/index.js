import React from "react";
import { Link } from "react-router-dom";

import { Form, Input } from "@rocketseat/unform";

import * as Yup from "yup";

import logo from "~/assets/logo.svg";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("campo email obrigatório"),
  password: Yup.string()
    .min(6)
    .required("Campo email com no minimo 6 caracteres obrigatório")
  // nome: Yup.string()
  //   .min(3)
  //   .required("campo nome obrigatório com no minimo 3 caracteres")
});

// Yup.setLocale({
//   number: {
//     min: "deve ser maior que ${min}"
//   }
// });

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <Link to="/register">Novo cadastro</Link>
      </Form>
    </>
  );
}
