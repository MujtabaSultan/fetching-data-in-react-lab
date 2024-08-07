import { useState } from "react";

const StarshipSearch = ({ getStarShip }) => {
  const [ship, setShip] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getStarShip(ship);
    setShip("");
  };

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ship">search term:</label>
        <input
          id="ship"
          type="text"
          value={ship}
          onChange={(e) => setShip(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default StarshipSearch;
