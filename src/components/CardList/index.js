import mockCards from "./mockCards";
import Card from "../Card";

export default function CardList(props) {
  const { setAnswerCounter, answerCounter, setFooterIcon, footerIcon } = props;

  return (
    <>
      {mockCards.map((c, i) => (
        <Card
          key={i}
          question={c.question}
          i={i}
          answer={c.answer}
          setAnswerCounter={setAnswerCounter}
          answerCounter={answerCounter}
          setFooterIcon={setFooterIcon}
          footerIcon={footerIcon}
        />
      ))}
    </>
  );
}
