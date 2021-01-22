import React, { useState } from "react";
import styled from "styled-components";

const Style = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > label {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const RarityPicker = ({ onChange }) => {
  const [selected, setSelected] = useState([]);

  const handleChange = (e, value) => {
    const checked = e.currentTarget.checked;
    let newSelection = [];

    if (!value) {
      newSelection = checked ? ["common", "uncommon", "rare", "mythic"] : [];
    } else {
      newSelection = selected.filter((s) => s !== value);

      if (checked) {
        newSelection.push(value);
      }
    }

    setSelected(newSelection);
    onChange(newSelection);
  };

  return (
    <Style>
      <legend>Rarity</legend>

      <label>
        <input
          type="checkbox"
          checked={selected.length === 4}
          onChange={(e) => handleChange(e, "")}
        />
        <span>Select all...</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={selected.includes("common")}
          onChange={(e) => handleChange(e, "common")}
        />
        <span>C</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={selected.includes("uncommon")}
          onChange={(e) => handleChange(e, "uncommon")}
        />
        <span>U</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={selected.includes("rare")}
          onChange={(e) => handleChange(e, "rare")}
        />
        <span>R</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={selected.includes("mythic")}
          onChange={(e) => handleChange(e, "mythic")}
        />
        <span>M</span>
      </label>
    </Style>
  );
};

export default RarityPicker;
