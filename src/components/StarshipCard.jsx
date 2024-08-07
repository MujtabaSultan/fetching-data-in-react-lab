
// import StarShipCard from "./StarshipCard"
import { useState } from "react";

const StarshipCard = ({ starShips }) => {


  return (
    <section>
      <h2>starShip Details</h2>
      <p>name: {starShips.name}</p>
      <p>model: {starShips.model}</p>
      <p>class: {starShips.class}</p>
      <p>manufacturer: {starShips.manufacturer}</p>
    </section>
  );
};




export default StarshipCard;
