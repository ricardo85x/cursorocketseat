import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import AuthLayout from "~/pages/_layouts/auth";
import DefaultLayout from "~/pages/_layouts/default";

import { store } from "~/store";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  console.tron.log("store 1", store.getState());

  if (!signed && isPrivate) {
    console.tron.log("nao estou logado e sou private");

    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    console.tron.log("estou logado e nao sou private");
    return <Redirect to="/dashboard" />;
  }

  console.tron.log("signed", signed);
  console.tron.log("isPrivate", isPrivate);

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isPrivate: PropTypes.bool
};

RouteWrapper.defaultProps = {
  isPrivate: false
};
