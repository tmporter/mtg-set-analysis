import React, { useEffect, useState } from "react";
import CardEvaluationPanel from "./CardEvaluationPanel";
import FlexColumn from "./layout/FlexColumn";
import SetPicker from "./SetPicker";

const SetEvaluationPage = () => {
  const [set, setSet] = useState("");
  const [cards, setCards] = useState([]);
  const [evaluations, setEvaluations] = useState({});

  useEffect(() => {
    const cachedEvaluations = localStorage.getItem("evaluations");

    if (cachedEvaluations) {
      console.log("Loading evaluations from local storage...");
      setEvaluations(JSON.parse(cachedEvaluations));
    }
  }, []);

  useEffect(() => {
    console.log(evaluations);
    localStorage.setItem("evaluations", JSON.stringify(evaluations));
  }, [evaluations]);

  const handleSetChange = async (e) => {
    const newSet = e.currentTarget.value;

    if (!newSet) {
      setCards([]);
      setSet("");
      return;
    }

    let cardData = [];
    let uri = `https://api.scryfall.com/cards/search?q=set:${newSet}`;

    while (true) {
      const response = await fetch(uri);
      const data = await response.json();

      console.log(data);

      if (data.data) {
        cardData = [
          ...cardData,
          ...data.data.filter((c) => c.object === "card"),
        ];
      }

      console.log({ np: data.next_page });

      if (data.has_more) {
        uri = data.next_page;
      } else {
        break;
      }
    }

    setCards(cardData);
    setSet(newSet);
  };

  const handleEvaluationChange = (cardId, value) => {
    setEvaluations({ ...evaluations, [cardId]: value });
  };

  return (
    <>
      <SetPicker set={set} onChange={handleSetChange} />
      <FlexColumn>
        {cards
          .sort(
            (c1, c2) =>
              parseInt(c1.collector_number) - parseInt(c2.collector_number)
          )
          .map((c) => (
            <CardEvaluationPanel
              cardData={c}
              evaluation={evaluations[c.id] || null}
              onChange={handleEvaluationChange}
            />
          ))}
      </FlexColumn>
    </>
  );
};

export default SetEvaluationPage;
