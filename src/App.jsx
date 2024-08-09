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

    const rightData = data.results.filter((item) => {
      //  console.log("me item boy",item)
      return item.name == starShip;
    });

    console.log("mamamia im right", rightData);
    data.results.map((ship) => {
      const newStarShip = {
        name: ship.name,
        starship_class: ship.starship_class,
        manufacturer: ship.manufacturer,
        model: ship.model,
      };

      setStarships( rightData );
    });
  };
  console.log("this is the right data ", starships);

  useEffect(() => {
  //--------------------------

const startingSite = async ()=>{

  const data = await starWarService.showAll();
  const startingArray=data.results.map((ship) => ({
   
      name: ship.name,
      starship_class: ship.starship_class,
      manufacturer: ship.manufacturer,
      model: ship.model,
  }));
  setStarships( startingArray );
console.log("we starting with ", starships)
   return <StarshipList starShips={starships} />
  
 

}
startingSite()
  
  //------------------------
  }, []);


  return (
    <main>
      <h1>star wars api!</h1>
      <StarshipSearch getStarShip={getStarShip} />
      <StarshipList starShips={starships} />
    </main>
  );
};

export default App;
