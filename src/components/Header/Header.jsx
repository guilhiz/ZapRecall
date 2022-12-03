import zapLogo from "../../img/logo.png";
import { LogoContainer } from "./styles";

export default function Header() {
  return (
    <LogoContainer className="logo-container">
      <img src={zapLogo} alt="logo do ZapRecall" />
      <h1>ZapRecall</h1>
    </LogoContainer>
  );
}
