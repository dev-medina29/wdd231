const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url ="https://api.openweathermap.org/data/2.5/weather?lat=49.77218484156301&lon=6.642501700769286&appid=04f1b04f494911cc997005d70334e49c&units=imperial";
// const url="https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=04f1b04f494911cc997005d70334e49c";

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  // weatherIcon.setAttribute('Alt', "the image is not loaded successfully");
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt',desc);
  captionDesc.innerHTML = `${desc}`;
}





async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetch();
