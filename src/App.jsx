// src/App.jsx

import { useEffect, useState } from "react";
// import StarShipList from "./components/StarshipList";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import * as starWarService from "./services/starWarsService";

const App = () => {
  const [starships, setStarships] = useState([]);

  const getStarShip = async (starShip) => {
    const data = await starWarService.showAll();

    data.results.map((ship)=>{

      const newStarShip = {
      name: ship.name,
      class: ship.class,
      manufacturer: ship.manufacturer,
      model: ship.model,
    };

    setStarships([...starships,newStarShip]);
    })
    
  };

  useEffect(() => {
    getStarShip("9");
  }, []);
  useEffect(() => {}, [starships]);

  return (
    <main>
      <h1>Hello world!</h1>
      <StarshipSearch getStarShip={getStarShip} />
      <StarshipList starShips={starships} />
    </main>
  );
};

export default App;
