import styled from "styled-components";

export const FooterCompleted = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 5px;
  margin-top: 10px;
`;

export const FooterMsg = styled.div`
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 222px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 14px;
  }
  img {
    margin-right: 10px;
  }
  h2 {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
  > p {
    height: 44px;
    width: 200px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #333333;
    text-align: center;
  }
`;
