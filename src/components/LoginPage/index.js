import React, { useState } from "react";
import Header from "../Header";
import GlobalStyle from "../../GlobalStyle";
import { Container, ContainerLogin, ButtonLogin, ChooseDeck } from "./styles";

function LoginPage({ setChangePage, setChangeDeck }) {
  const [buttonText, setButtonText] = useState("Escolha um deck!");
  const [clicked, setClicked] = useState(false);
  function handleClick(props) {
    setButtonText("Iniciar Recall!");
    setClicked(true);
    setChangeDeck(props)
  }
  return (
    <Container>
      <GlobalStyle />
      <ContainerLogin>
        <Header direction="column" imgWidth="136px" />
        <ChooseDeck>
          <button onClick={() => handleClick("R")}>React</button>
          <button onClick={() => handleClick("G")}>Game of Thrones</button>
          <button onClick={() => handleClick("H")}>Harry Potter</button>
        </ChooseDeck>
        <ButtonLogin clicked={clicked} data-test="start-btn" onClick={() => setChangePage(false)}>
          {buttonText}
        </ButtonLogin>
      </ContainerLogin>
    </Container>
  );
}

export default LoginPage;
