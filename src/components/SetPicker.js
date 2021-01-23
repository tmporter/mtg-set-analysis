import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Select from "react-select";

// const Select = styled.select`
//   width: 100%;
// `;

const SetPicker = ({ set, onChange }) => {
  const [sets, setSets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const response = await fetch("https://api.scryfall.com/sets");
        const data = await response.json();

        setSets(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Select
      isLoading={isLoading}
      isSearchable={true}
      isClearable={true}
      options={sets.map((set) => ({
        value: set.code,
        label: `${set.name} (${set.code.toUpperCase()})`,
      }))}
      onChange={(item) => onChange(item ? item.value : null)}
    />
  );
};

export default SetPicker;
