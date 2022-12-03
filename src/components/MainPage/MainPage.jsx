import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CardList from "../CardList/CardList";
import GlobalStyle from "../../GlobalStyle";
import { ScreenContainer } from "./styles";

export default function MainPage() {
  const [answerCounter, setAnswerCounter] = useState(0);
  return (
    <ScreenContainer>
      <GlobalStyle />
      <Header />
      <CardList setAnswerCounter={setAnswerCounter} answerCounter={answerCounter} />
      <Footer answerCounter={answerCounter} />
    </ScreenContainer>
  );
}
