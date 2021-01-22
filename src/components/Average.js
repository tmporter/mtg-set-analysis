import React from "react";

const calculateAverage = (numbers) => {
  const sum = numbers.reduce((prev, curr) => prev + curr, 0);
  return sum / numbers.length;
};

const round = (number, maxDecimalPlaces) => {
  return (
    Math.round((number + Number.EPSILON) * (10 ^ maxDecimalPlaces)) /
    (10 ^ maxDecimalPlaces)
  );
};

const Average = ({ values = [], maxDecimalPlaces = 2 }) => {
  return <span>{round(calculateAverage(values), maxDecimalPlaces)}</span>;
};

export default Average;
