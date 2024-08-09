// import StarShipCard from "./StarshipCard"
import { useState } from "react";

const StarshipCard = ({ starship }) => {
  console.log("im him", starship);
  console.log("my name is", starship.name);
  return (
    <section>
      <h2>starships</h2>
      <ul>
    
        <li>name: {starship.name}</li>
        <li>model: {starship.model}</li>
        <li>class: {starship.starship_class}</li>
        <li>manufacturer: {starship.manufacturer}</li>
      </ul>
    </section>
  );
};

export default StarshipCard;
