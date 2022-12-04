import LoginPage from "./LoginPage/LoginPage";
import MainPage from "./MainPage/MainPage";
import React, { useState } from "react";

export default function App() {
  const [changePage, setChangePage] = useState(true);
  if (changePage) {
    return <LoginPage setChangePage={setChangePage} />;
  }
  return <MainPage />;
}
