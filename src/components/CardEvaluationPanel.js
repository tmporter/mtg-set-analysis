import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 0px;
  padding: 1rem;
  display: flex;
  flex-direction: row;

  & > ul {
    list-style-type: none;
  }
`;

const CardEvaluationPanel = ({ cardData, evaluation, onChange }) => {
  const handleChange = (e) => {
    onChange(cardData.id, e.currentTarget.value);
  };

  return (
    <Wrapper>
      <Card {...cardData} />
      <ul>
        <li>
          <input
            type="radio"
            name={`eval-${cardData.id}`}
            value="reason"
            checked={evaluation === "reason"}
            id={`reason-${cardData.id}`}
            onChange={handleChange}
          />

          <label for={`reason-${cardData.id}`}>Reason</label>
        </li>

        <li>
          <input
            type="radio"
            name={`eval-${cardData.id}`}
            value="reward"
            checked={evaluation === "reward"}
            id={`reward-${cardData.id}`}
            onChange={handleChange}
          />

          <label for={`reward-${cardData.id}`}>Reward</label>
        </li>

        <li>
          <input
            type="radio"
            name={`eval-${cardData.id}`}
            value="rp"
            checked={evaluation === "rp"}
            id={`rp-${cardData.id}`}
            onChange={handleChange}
          />

          <label for={`rp-${cardData.id}`}>Role-player</label>
        </li>

        <li>
          <input
            type="radio"
            name={`eval-${cardData.id}`}
            value="replaceable"
            checked={evaluation === "replaceable"}
            id={`replaceable-${cardData.id}`}
            onChange={handleChange}
          />

          <label for={`replaceable-${cardData.id}`}>Replaceable</label>
        </li>
      </ul>
    </Wrapper>
  );
};

export default CardEvaluationPanel;
