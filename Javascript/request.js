const key = "802bea7637711ef757433b79e8575bb3";

// const baseURL =
//   "http://api.lopenweathermap.org/data/2.5/weather?q=Lagos&appid=802bea7637711ef757433b79e8575bb3";

// fetch(baseURL)
//   .then((data) => {
//     console.log("response", data.json());
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const requestCity = async (city) => {
  const baseURL = "http://api.lopenweathermap.org/data/2.5/weather";
  const query = `?q=${city}appid=${key}`;

  // make fetch call (promise call)

  const response = await fetch(baseURL + query);
};
