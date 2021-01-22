import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 100%;
`;

const SetPicker = ({ set, onChange }) => {
  const [sets, setSets] = useState([]);

  useEffect(() => {
    (async () => {
      let response = null;

      try {
        response = await fetch("https://api.scryfall.com/sets");
      } catch (error) {
        console.error(error);
        return;
      }

      const data = await response.json();

      setSets(data.data);
    })();
  }, []);

  return (
    <Select value={set} onChange={onChange}>
      <option value="">Select a set...</option>
      {sets.map((s) => (
        <option value={s.code}>
          {s.name} ({s.code.toUpperCase()})
        </option>
      ))}
    </Select>
  );
};

export default SetPicker;
