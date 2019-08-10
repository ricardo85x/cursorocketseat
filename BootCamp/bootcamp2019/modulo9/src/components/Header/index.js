import React from "react";
import { Link } from "react-router-dom";
import { Container, Content, Profile } from "./styles";

import Notifications from "../Notifications";
import logo from "~/assets/logo-purple.svg";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong> Ricardo Ferreira </strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Ricardo Ferreira"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}