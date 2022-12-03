import mockCards from "./mockCards"
import Card from "../Card/Card"

export default function CardList() {

  return (
    <>
      {mockCards.map((c, i) => <Card question={c.question} i={i} answer={c.answer}/>)}
    </>
  );
}
