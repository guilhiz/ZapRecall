import { FooterCompleted, ContainerIcons, FooterMsg } from "./styles";
import miss from "../../img/icone_erro.png";
import zap from "../../img/icone_certo.png";
import partial from "../../img/icone_quase.png";
import party from "../../img/party.png";
import sad from "../../img/sad.png";

export default function Footer(props) {
  const { answerCounter, footerIcon, children } = props;

  function footerText() {
    if (footerIcon.includes("miss")) {
      return (
        <FooterMsg data-test="finish-text">
          <div>
            <img src={sad} alt="sad icon" />
            <h2>Putz...</h2>
          </div>
          <p>Ainda faltam alguns... Mas não desanime!</p>
        </FooterMsg>
      );
    }
    return (
      <FooterMsg data-test="finish-text">
        <div data-test="finish-text">
          <img src={party} alt="party icon" />
          <h2>Parabéns!</h2>
        </div>
        <p>Você não esqueceu de nenhum flashcard!</p>
      </FooterMsg>
    );
  }
  return (
    <FooterCompleted data-test="footer" className="footer-concluidos">
      {answerCounter === 8 && footerText()}
      <p>{answerCounter}/8 CONCLUÍDOS</p>
      <ContainerIcons>
        {footerIcon.map((a, i) => (
          <img
            key={i}
            src={a === "miss" ? miss : a === "partial" ? partial : zap}
            alt="icons"
            data-test={a === "miss" ? "no-icon" : a === "partial" ? "partial-icon" : "zap-icon"}
          />
        ))}
      </ContainerIcons>
    </FooterCompleted>
  );
}
