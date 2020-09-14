const key = "802bea7637711ef757433b79e8575bb3";

const baseURL =
  "http://api.openweathermap.org/data/2.5/weather?q=Charlotte&appid=802bea7637711ef757433b79e8575bb3";
// https://www.youtube.com/watch?v=QDdn3yrsyCQ
// left of at minute 31:48

fetch(baseURL).then((data) => {
  console.log("response", data);
});
