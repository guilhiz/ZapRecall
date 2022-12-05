import styled from "styled-components";

export const Container = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85vh;
`;

export const ChooseDeck = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 340px;
  height: 70px;
  gap: 10px;
  margin: 0px 0px 42px;
  > button {
    width: 100px;
    height: 54px;
    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    cursor: pointer;
    font-family: "Recursive";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #d70900;
    :active {
      scale: 0.9;
    }
    :focus {
      color: #fffb48;
      border: 1px solid #fffb48;
      background: #333333;
      background: #072440;
    }
  }
`;

export const ButtonLogin = styled.button`
  width: 246px;
  height: 54px;
  background: ${(props) => (props.clicked ? "#ffffff" : "#9faab5")};
  border: 1px solid #d70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  cursor: ${(props) => (props.clicked ? "pointer" : "not-allowed")};

  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #d70900;
  :active {
    scale: ${(props) => (props.clicked ? "0.9" : "1")};
  }
  :hover {
    opacity: ${(props) => (props.clicked ? "0.7" : "1")};
  }
`;
