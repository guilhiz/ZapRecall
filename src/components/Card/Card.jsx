import React, { useState } from "react";
import play from "../../img/seta_play.png";
import turn from "../../img/seta_virar.png";
import styled from "styled-components";

export default function Card(props) {
  const { question, answer, i } = props;
  const [cardSwitch, setCardSwitch] = useState(0);

  if (cardSwitch === 0) {
    return (
      <ClosedQuestion>
        <p>{`pergunta ${i + 1}`}</p>
        <img onClick={() => setCardSwitch(1)} src={play} alt="icon de play" />
      </ClosedQuestion>
    );
  } else if (cardSwitch === 1) {
    return (
      <OpenQuestion>
        <p>{question}</p>
        <img onClick={() => setCardSwitch(2)} src={turn} alt="icon de turn" />
      </OpenQuestion>
    );
  }
  return (
    <OpenQuestion>
      <p>{answer}</p>
      <ContainerBotoes>
        <StyledButton color="#FF3030">Não lembrei</StyledButton>
        <StyledButton color="#FF922E">Quase não lembrei</StyledButton>
        <StyledButton color="#2FBE34">Zap</StyledButton>
      </ContainerBotoes>
    </OpenQuestion>
  );
}

const ClosedQuestion = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;

const OpenQuestion = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const ContainerBotoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 37px;
  background: ${(props) => props.color};
  border-radius: 5px;
  border: 1px solid ${(props) => props.color};
  padding: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  :active {
    scale: 0.9;
  }
  :hover {
    opacity: 0.8;
  }
`;
