


let API_KEY = "dad23db72868013ba51c43609d5df773";

getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";

    const Full_Url = `${URL}?q=${city}&appid=${API_KEY}&units=Metric`;

    const weatherPromise = fetch(Full_Url);
    console.log(city);

    return weatherPromise.then((response) => {
        return response.json()
    })
}


function searchCity() {
    const city = document.getElementById("city-input").value;

    getWeatherData(city)
        .then((response) => {
            showWeatherData(response)
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })

}

showWeatherData = (weatherData) => {

    document.getElementById("city").innerText = weatherData.name;
    document.getElementById("temp").innerText = Math.floor(weatherData.main.temp);
    document.getElementById("weather").innerText = weatherData.weather[0].main;
    document.getElementById("humidity").innerText = weatherData.main.humidity;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}
