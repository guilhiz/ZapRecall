import { FooterCompleted } from "./styles";

export default function Footer(props) {
  const { answerCounter } = props;
  return (
    <FooterCompleted data-test="footer" className="footer-concluidos">
      <p>{answerCounter}/8 CONCLUÍDOS</p>
    </FooterCompleted>
  );
}
