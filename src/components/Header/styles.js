import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  margin: 40px 0 20px 0;

  img {
    width: ${(props) => props.imgWidth};
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;
