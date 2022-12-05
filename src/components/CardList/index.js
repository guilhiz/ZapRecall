import { mockCards1, mockCards2, mockCards3 } from "./mockCards";
import Card from "../Card";
const dois = 2;

export default function CardList(props) {
  const { setAnswerCounter, answerCounter, setFooterIcon, changeDeck } = props;
  function switchDeck() {
    if (changeDeck === "G") {
      return mockCards2;
    } else if (changeDeck === "H") {
      return mockCards3;
    }
    return mockCards1;
  }
  return (
    <>
      {switchDeck().map((c, i) => (
        <Card
          key={i}
          question={c.question}
          i={i}
          answer={c.answer}
          setAnswerCounter={setAnswerCounter}
          answerCounter={answerCounter}
          setFooterIcon={setFooterIcon}
        />
      ))}
    </>
  );
}
