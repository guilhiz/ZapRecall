import React, { useState } from "react";
import play from "../../img/seta_play.png";
import miss from "../../img/icone_erro.png";
import zap from "../../img/icone_certo.png";
import partial from "../../img/icone_quase.png";
import turn from "../../img/seta_virar.png";
import { ClosedQuestion, OpenQuestion, ContainerBotoes, AnswerButton } from "./style";

export default function Card(props) {
  const { question, answer, i, setAnswerCounter, answerCounter, setFooterIcon } = props;
  const [cardSwitch, setCardSwitch] = useState("closed");
  const [activeSwitch, setActiveSwitch] = useState(true);
  const [textColor, SetTextColor] = useState("#333333");
  const [textDecoration, setTextDecoration] = useState("none");
  const [icon, setIcon] = useState(play);
  const [dataTest, setDataTest] = useState("play-btn");

  function handleClick(props) {
    setCardSwitch("closed");
    setTextDecoration("line-through");
    setActiveSwitch(false);
    setAnswerCounter(answerCounter + 1);
    if (props === "red") {
      SetTextColor("#FF3030");
      setIcon(miss);
      setDataTest("no-icon");
      setFooterIcon((c) => [...c, "miss"]);
    } else if (props === "orange") {
      SetTextColor("#FF922E");
      setIcon(partial);
      setDataTest("partial-icon");
      setFooterIcon((c) => [...c, "partial"]);
    } else if (props === "green") {
      SetTextColor("#2FBE34");
      setIcon(zap);
      setDataTest("zap-icon");
      setFooterIcon((c) => [...c, "zap"]);
    }
  }

  if (cardSwitch === "closed") {
    return (
      <ClosedQuestion data-test="flashcard" textColor={textColor} textDecoration={textDecoration}>
        <p data-test="flashcard-text">{`pergunta ${i + 1}`}</p>
        <img
          data-test={dataTest}
          onClick={() => activeSwitch && setCardSwitch("openQuestion")}
          src={icon}
          alt="icon de play"
        />
      </ClosedQuestion>
    );
  } else if (cardSwitch === "openQuestion") {
    return (
      <OpenQuestion data-test="flashcard">
        <p data-test="flashcard-text">{question}</p>
        <img data-test="turn-btn" onClick={() => setCardSwitch("openAnswer")} src={turn} alt="icon de turn" />
      </OpenQuestion>
    );
  }
  return (
    <OpenQuestion data-test="flashcard">
      <p data-test="flashcard-text">{answer}</p>
      <ContainerBotoes>
        <AnswerButton data-test="no-btn" onClick={() => handleClick("red")} color="#FF3030">
          Não lembrei
        </AnswerButton>
        <AnswerButton data-test="partial-btn" onClick={() => handleClick("orange")} color="#FF922E">
          Quase não lembrei
        </AnswerButton>
        <AnswerButton data-test="zap-btn" onClick={() => handleClick("green")} color="#2FBE34">
          Zap
        </AnswerButton>
      </ContainerBotoes>
    </OpenQuestion>
  );
}
