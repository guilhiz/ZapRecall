import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import React, { useState } from "react";

export default function App() {
  const [changePage, setChangePage] = useState(true);
  const [changeDeck, setChangeDeck] = useState();
  if (changePage) {
    return <LoginPage setChangePage={setChangePage} setChangeDeck={setChangeDeck} />;
  }
  return <MainPage changeDeck={changeDeck} />;
}
