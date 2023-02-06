import main from "./main.js";
main()

const city =document.querySelector(".city")
const temprature = document.querySelector(".temprature")
const tempratureFeel = document.querySelector(".temprature-feel")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")




const weather = (() => {
    function convertData(data) {
      const {
        name: cityName,
        main: { temp: temperature, feels_like: feelsLike, humidity },
        wind: { speed: windSpeed },
      } = data;
      return { cityName, temperature, feelsLike, humidity, windSpeed };
    }
  
    async function getData(city) {
      const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d8ea9b3d407e1bbf6d725cdc8c19e412`;
      try {
        const response = await fetch(api, { mode: "cors" });
        if (!response.ok) throw new Error(`City ${city} not found`);
        const data = convertData(await response.json());
        return data;
      } catch (error) {
        alert(error);
        return null;
      }
    }
    return { getData };
  })();
  
const view = (  () =>{
  function resuilt(weatherData){

      if(!weatherData)
      return
      city.innerHTML = `${weatherData.cityName}`
      temprature.innerHTML = `${weatherData.temperature} °C`
      tempratureFeel.innerHTML = `Nhiệt độ: ${weatherData.feelsLike} °C`
      humidity.innerHTML = `Độ ẩm: ${weatherData.humidity} %`
      wind.innerHTML = `Gió: ${weatherData.windSpeed} km/h`
  }
  return { resuilt}

})();

const btnSearch = document.querySelector(".btn-search")
const inputText = document.querySelector(".input-text")


const a =  async () => {
    if(inputText.value === ""){
        return
    }
    const weatherData = await weather.getData(inputText.value);
    view.resuilt(weatherData);

    const contentMain = document.querySelector(".content-main")
    contentMain.style.display = "flex "
}

btnSearch.addEventListener("click", a)

inputText.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
      event.preventDefault()
      a()
    }
})