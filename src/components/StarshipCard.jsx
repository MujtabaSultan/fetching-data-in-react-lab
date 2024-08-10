// import StarShipCard from "./StarshipCard"
import { useState } from "react";

const StarshipCard = ({ starship }) => {
  console.log("im him", starship);
  console.log("my name is", starship.name);
  return (
    <section>
      <li>
        <p>name: {starship.name}</p>
        <p>model: {starship.model}</p>
        <p>class: {starship.starship_class}</p>
        <p>manufacturer: {starship.manufacturer}</p>
      </li>
    </section>
  );
};

export default StarshipCard;
