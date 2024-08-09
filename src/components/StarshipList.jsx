import StarShipCard from "./StarshipCard";
import { useState } from "react";

const StarshipList = ({ starShips }) => {

  // console.log("mamamia",starShips)
  return (
    <section>
      <h3>total ships is {starShips.length}</h3>
      {starShips.map((ship) => {return <StarShipCard  starship={ship} />}
  
)}
    </section>
  );
};

export default StarshipList;
