const searchForm = document.querySelector(".search-location");
const cityValue = document.querySelector(".search-location input");
const cityName = document.querySelector(".city-name p");
const cardBody = document.querySelector(".card-body");
const timeImage = document.querySelector(".card-top img");
const cardInfo = document.querySelector(".back-card");

// displays weather degrees on front end
const spitOutCelcius = (kelvin) => {
  celcius = Math.round(kelvin - 273.15);
  return celcius;
};

const isDayTime = (icon) => {
  if (icon.includes("d")) {
    return true;
  } else {
    return false;
  }
};

// update front end (city name & weather)
updateWeatherApp = (city) => {
  console.log(city);
  const imageName = city.weather[0].icon;
  const IconSrc = `http://openweathermap.org/img/wn/${imageName}@2x.png`;
  cityName.textContent = city.name;

  // innerHTML will equal the template string from html file
  //   in order to change its values

  cardBody.innerHTML = `
  <div class="card-mid row">
  <div class="col-8 text-center temp">
    <span>${spitOutCelcius(city.main.temp)}&deg;C</span>
  </div>

  <div class="col-4 condition-temp">
    <p class="condition">${city.weather[0].description}</p>
    <p class="high">${spitOutCelcius(city.main.temp_max)}&deg;C</p>
    <p class="low">${spitOutCelcius(city.main.temp_min)}&deg;C</p>
  </div>
</div>

<div class="icon-container card shadow mx-auto">
  <img src="${IconSrc}" alt="" />
</div>

<div class="card-button px-5 py-4 row">
  <div class="col text-center">
    <p>${spitOutCelcius(city.main.feels_like)}&deg;C</p>
    <span>Feels like</span>
  </div>

  <div class="col text-center">
    <p>${city.main.humidity}</p>
    <span>Humidity</span>
  </div>`;

  if (isDayTime(imageName)) {
    console.log("day");
    timeImage.setAttribute("src", "img/day.png");
    if (cityName.classList.contains("text-white")) {
      cityName.classList.remove("text-white");
    } else {
      cityName.classList.add("text-black");
    }
  } else {
    console.log("night");
    timeImage.setAttribute("src", "img/night.png");
    if (cityName.classList.contains("text-black")) {
      cityName.classList.remove("text-black");
    } else {
      cityName.classList.add("text-white");
    }
  }

  cardInfo.classList.remove("d-none");
};

// add event listener to the form
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const citySearched = cityValue.value.trim();
  console.log(citySearched);
  searchForm.reset();

  requestCity(citySearched)
    .then((data) => {
      updateWeatherApp(data);
    })
    .catch(() => {
      console.log(error);
    });
});
