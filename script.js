// check check
console.log("👍");

const APIKEY = "1ffa249d287632c68386830cf2a6b863";
const city = "Seattle";
const unit = "imperial";
const urlQueryString = `https://api.openweathermap.org/data/2.5/weather?appid=${APIKEY}&q=${city}&units=${unit}`;

console.log(urlQueryString);

//gets data
fetch(urlQueryString)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const city = document.querySelector("#city");
    const temp = document.querySelector("#temp");
    const descr = document.querySelector("#descr");
    const icon = document.querySelector("img");
    const feels = document.querySelector("#feels");
    const humidity = document.querySelector("#humidity");
    const min = document.querySelector("#min");
    const max = document.querySelector("#max");
    const iconId = data.weather[0].icon;
  

    //set element
    city.textContent = data.name;
    temp.textContent = Math.ceil(data.main.temp) + "\xB0";
    feels.textContent = data.main.temp + "\xB0";
    humidity.textContent = data.main.humidity + `%`;
    descr.textContent = data.weather[0].description;
    min.textContent = data.main.temp_min + "\xB0";
    max.textContent = data.main.temp_max + "\xB0";
    console.log(data.weather[0].icon);
    icon.src = `https://openweathermap.org/img/wn/${iconId}@4x.png`;
  });

const APIKEY2 = "1ffa249d287632c68386830cf2a6b863";
const city2 = "San Jose";
const unit2 = "imperial";
const urlQueryString2 = `https://api.openweathermap.org/data/2.5/weather?appid=${APIKEY2}&q=${city2}&units=${unit2}`;

console.log(urlQueryString2);

fetch(urlQueryString2)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  
  
    //second city
    const city2 = document.querySelector("#city2");
    const temp2 = document.querySelector("#temp2");
    const descr2 = document.querySelector("#descr2");
    const icon2 = document.querySelector("img2");
    const feels2 = document.querySelector("#feels2");
    const humidity2 = document.querySelector("#humidity2");
    const min2 = document.querySelector("#min2");
    const max2 = document.querySelector("#max2");
    const iconId2 = data.weather[0].icon;

    //set element
    city2.textContent = data.name;
    temp2.textContent = Math.ceil(data.main.temp) + "\xB0";
    feels2.textContent = data.main.temp + "\xB0";
    humidity2.textContent = data.main.humidity + `%`;
    descr2.textContent = data.weather[0].description;
    min2.textContent = data.main.temp_min + "\xB0";
    max2.textContent = data.main.temp_max + "\xB0";
    console.log(data.weather[0].icon);
    icon.src  = `https://openweathermap.org/img/wn/${iconId2}@4x.png`
  });
