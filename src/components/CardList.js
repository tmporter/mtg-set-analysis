import React from "react";
import styled from "styled-components";

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .Card {
    margin: 0.5rem;
  }
`;

export default CardList;