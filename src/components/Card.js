import React, { useState } from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  border-radius: 10px;
  max-width: calc(2.5 * 100px);
  max-height: calc(3.5 * 100px);
  width: auto;
  height: auto;
`;

const Blank = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  padding: 0.5rem;
  width: calc(2.5 * 100px);
  height: calc(3.5 * 100px);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = ({ image_uris, name, oracle_text, card_faces }) => {
  const [showBack, setShowBack] = useState(false);
  let imageUri = null;

  if (card_faces) {
    imageUri = card_faces[showBack ? 1 : 0].image_uris.normal;
  } else {
    imageUri = image_uris.normal;
  }

  return (
    <Wrapper>
      {imageUri ? (
        <StyledImg className="Card" src={imageUri} />
      ) : (
        <Blank>
          <h4>{name}</h4>
          <p>{oracle_text}</p>
        </Blank>
      )}

      {card_faces ? (
        showBack ? (
          <button type="button" onClick={() => setShowBack(false)}>
            show front
          </button>
        ) : (
          <button type="button" onClick={() => setShowBack(true)}>
            show back
          </button>
        )
      ) : null}
    </Wrapper>
  );
};

export default Card;
