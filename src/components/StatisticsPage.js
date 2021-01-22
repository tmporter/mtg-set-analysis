import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import styled from "styled-components";
import Average from "./Average";
import RarityPicker from "./RarityPicker";
import SetPicker from "./SetPicker";

const Layout = styled.div`
  display: grid;
  grid-template: "filters content" / 200px auto;
`;

const StatisticsPage = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [rarityFilter, setRarityFilter] = useState([]);

  const filteredCards = cards.filter((c) =>
    // TODO: handle double sided cards
    rarityFilter && rarityFilter.length > 0
      ? rarityFilter.includes(c.rarity)
      : c
  );

  const handleSetChange = async (e) => {
    const newSet = e.currentTarget.value;

    if (!newSet) {
      setCards([]);
      return;
    }

    let cardData = [];
    let uri = `https://api.scryfall.com/cards/search?q=set:${newSet}`;

    setIsLoading(true);

    while (true) {
      const response = await fetch(uri);
      const data = await response.json();

      if (data.data) {
        cardData = [
          ...cardData,
          ...data.data.filter((c) => c.object === "card"),
        ];
      }

      if (data.has_more) {
        uri = data.next_page;
      } else {
        break;
      }
    }

    setCards(cardData);

    setIsLoading(false);
  };

  return (
    <Layout>
      <div>
        <SetPicker onChange={handleSetChange} />
        <RarityPicker onChange={(r) => setRarityFilter(r)} />
      </div>

      {isLoading ? (
        "Loading..."
      ) : filteredCards.length > 0 ? (
        <div>
          <ul>
            <li>
              Average power:{" "}
              <Average
                values={filteredCards
                  .filter((c) => !isNaN(c.power))
                  .map((c) => +c.power)}
              />
            </li>

            <li>
              Average toughness:{" "}
              <Average
                values={filteredCards
                  .filter((c) => !isNaN(c.toughness))
                  .map((c) => +c.toughness)}
              />
            </li>

            <li>
              Average CMC:{" "}
              <Average
                values={filteredCards
                  .filter((c) => !isNaN(c.cmc))
                  .map((c) => +c.cmc)}
              />
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <div>
              <h3>Power/Toughness breakdown</h3>

              <BarChart
                data={Object.values(
                  filteredCards.reduce((acc, card) => {
                    let cardsToProcess = [];

                    if (card.card_faces) {
                      cardsToProcess.push(card.card_faces);
                    } else {
                      cardsToProcess.push(card);
                    }

                    for (let c of cardsToProcess) {
                      if (c.power) {
                        if (!acc[c.power]) {
                          acc[c.power] = {
                            value: c.power,
                            power: 0,
                            toughness: 0,
                          };
                        }

                        acc[c.power].power++;
                      }

                      if (c.toughness) {
                        if (!acc[c.toughness]) {
                          acc[c.toughness] = {
                            value: c.toughness,
                            power: 0,
                            toughness: 0,
                          };
                        }

                        acc[c.toughness].toughness++;
                      }
                    }

                    return acc;
                  }, {})
                )}
                width={500}
                height={300}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="value" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="power" fill="#DA4167" label={{ fill: "white" }} />
                <Bar
                  dataKey="toughness"
                  fill="#083D77"
                  label={{ fill: "white" }}
                />
              </BarChart>
            </div>
          </div>

          {/* <pre>{JSON.stringify(filteredCards, null, 1)}</pre> */}
        </div>
      ) : null}
    </Layout>
  );
};

export default StatisticsPage;
