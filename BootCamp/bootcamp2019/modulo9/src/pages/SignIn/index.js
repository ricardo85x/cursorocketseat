import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Form, Input } from "@rocketseat/unform";

import * as Yup from "yup";

import { signInRequest } from "~/store/modules/auth/actions";
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
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">{loading ? "Carregando" : "Acessar"}</button>

        <Link to="/register">Novo cadastro</Link>
      </Form>
    </>
  );
}
