import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import CardList from "./CardList/CardList";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";

export default function App() {
  return (
    <ScreenContainer>
      <GlobalStyle />
      <Header />
      <CardList />
      <Footer />
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
