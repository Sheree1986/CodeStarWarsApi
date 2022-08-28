import React from "react";

const Character = ({ name, birthYear, homeworld }) => {
  console.log(homeworld)

  return (
    <div>
      <h3>{name}</h3>
      <p>Films names: {films}</p>
      <p>Birth Year: {birthYear}</p>
    </div>
  );
};

export default Character;
