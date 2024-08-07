import StarShipCard from "./StarshipCard";
import { useState } from "react";

const StarshipList = ({ starShips }) => {

  // console.log("mamamia",starShips)
  return (
    <section>
      {starShips.map(ship => (
  <StarShipCard key={ship.url} starship={ship} />
))}
    </section>
  );
};

export default StarshipList;
