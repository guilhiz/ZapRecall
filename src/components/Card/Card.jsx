import React, { useState } from "react";
import play from "../../img/seta_play.png";
import turn from "../../img/seta_virar.png";
import { ClosedQuestion, OpenQuestion, ContainerBotoes, AnswerButton } from "./style";

export default function Card(props) {
  const { question, answer, i } = props;
  const [cardSwitch, setCardSwitch] = useState("closed");
  const [activeSwitch, setActiveSwitch] = useState(true);
  const [textColor, SetTextColor] = useState("#333333");
  const [textDecoration, setTextDecoration] = useState("none");

  function handleClick(props) {
    setCardSwitch("closed");
    setTextDecoration("line-through");
    setActiveSwitch(false);
    if (props === "red") {
      SetTextColor("#FF3030");
    } else if ( props === "orange") {
      SetTextColor("#FF922E");
    } else if (props === "green") {
      SetTextColor("#2FBE34");
    }

  }

  if (cardSwitch === "closed") {
    return (
      <ClosedQuestion textColor={textColor} textDecoration={textDecoration}>
        <p>{`pergunta ${i + 1}`}</p>
        <img onClick={() => activeSwitch && setCardSwitch("openQuestion")} src={play} alt="icon de play" />
      </ClosedQuestion>
    );
  } else if (cardSwitch === "openQuestion") {
    return (
      <OpenQuestion>
        <p>{question}</p>
        <img onClick={() => setCardSwitch("openAnswer")} src={turn} alt="icon de turn" />
      </OpenQuestion>
    );
  }
  return (
    <OpenQuestion>
      <p>{answer}</p>
      <ContainerBotoes>
        <AnswerButton onClick={() => handleClick("red")} color="#FF3030">
          Não lembrei
        </AnswerButton>
        <AnswerButton onClick={() => handleClick("orange")} color="#FF922E">
          Quase não lembrei
        </AnswerButton>
        <AnswerButton onClick={() => handleClick("green")} color="#2FBE34">
          Zap
        </AnswerButton>
      </ContainerBotoes>
    </OpenQuestion>
  );
}
