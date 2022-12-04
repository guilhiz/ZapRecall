import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import CardList from "../CardList";
import GlobalStyle from "../../GlobalStyle";
import { ScreenContainer } from "./styles";

export default function MainPage() {
  const [answerCounter, setAnswerCounter] = useState(0);
  const [footerIcon, setFooterIcon] = useState([]);

  return (
    <ScreenContainer>
      <GlobalStyle />
      <Header direction="row" imgWidth="52px" />
      <CardList
        setAnswerCounter={setAnswerCounter}
        answerCounter={answerCounter}
        footerIcon={footerIcon}
        setFooterIcon={setFooterIcon}
      />
      <Footer answerCounter={answerCounter} footerIcon={footerIcon} />
    </ScreenContainer>
  );
}
