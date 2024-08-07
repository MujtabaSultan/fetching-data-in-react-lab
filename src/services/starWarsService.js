const BASE_URL = `https://swapi.dev/api/starships/?search=`;
const BASE_URL_ALL = `https://swapi.dev/api/starships/`;

const show = async (shipNum) => {
  try {
    const query =shipNum;
    const res = await fetch(BASE_URL + query);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
     
    }

    const data = await res.json();
    console.log("data is",data)

    return data;
  } catch (error) {
    console.error(error);
  }
};


const showAll = async (shipNum) => {
  try {
    const query =shipNum;
    const res = await fetch(BASE_URL_ALL);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
     
    }

    const data = await res.json();
    console.log("data is",data)

    return data;
  } catch (error) {
    console.error(error);
  }
};


// ------------------------
showAll()

export { show };
export { showAll };