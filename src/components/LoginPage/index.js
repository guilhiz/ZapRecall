import React from "react";
import Header from "../Header";
import GlobalStyle from "../../GlobalStyle";
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
