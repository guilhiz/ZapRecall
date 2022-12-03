import styled from "styled-components";

export const ClosedQuestion = styled.div`
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
    color: ${(props) => props.textColor};
    text-decoration: ${(props) => props.textDecoration};
  }
  > img {
    cursor: pointer;
  }
`;

export const OpenQuestion = styled.div`
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
    cursor: pointer;
  }
`;

export const ContainerBotoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
`;

export const AnswerButton = styled.button`
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
