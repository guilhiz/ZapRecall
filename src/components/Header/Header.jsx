import zapLogo from "../../img/logo.png"
export default function Header() {
  return (
    <div className="logo-container">
      <img src={zapLogo} alt="logo do ZapRecall" />
      <h1>ZapRecall</h1>
    </div>
  );
}
