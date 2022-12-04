import React from "react";
import GlobalStyle from "../../GlobalStyle";
import Header from "../Header/Header";
import { Container, ContainerLogin, ButtonLogin } from "./styles";

function LoginPage({ setChangePage }) {
  return (
    <Container>
      <GlobalStyle />
      <ContainerLogin>
        <Header direction="column" imgWidth="136px" />
        <ButtonLogin data-test="start-btn" onClick={() => setChangePage(false)}>
          Iniciar Recall!
        </ButtonLogin>
      </ContainerLogin>
    </Container>
  );
}

export default LoginPage;
