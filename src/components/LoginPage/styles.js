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

export const ButtonLogin = styled.button`
  width: 246px;
  height: 54px;
  background: #ffffff;
  border: 1px solid #d70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  cursor: pointer;

  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #d70900;
  :active {
    scale: 0.9;
  }
  :hover {
    opacity: 0.7;
  }
`;
