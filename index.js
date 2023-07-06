document.addEventListener("DOMContentLoaded", () => {
    const apikey = "3e23edc510c9497c78e4776144a163c3";
    const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");


    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apikey}`);
        const data = await response.json();


        if (response.status == 404) {
            document.querySelector('.error').style.display = 'block';
            document.querySelector('.weather').style.display = 'none';

        } else {
            console.log(data);
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector(".temp").innerHTML = data.main.temp + '°C';
            document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
            document.querySelector('.wind').innerHTML = data.wind.speed + 'Km/h';

            if (data.weather[0].main == 'cloud') {
                weatherIcon.src = "./weather-app-img/images/clouds.png"
            } else if (data.weather[0].main == 'clear') {
                weatherIcon.src = "./weather-app-img/images/clear.png"
            } else if (data.weather[0].main == 'Rain') {
                weatherIcon.src = "./weather-app-img/images/rain.png"
            } else if (data.weather[0].main == 'Drizzle') {
                weatherIcon.src = "./weather-app-img/images/drizzle.png"
            } else if (data.weather[0].main == 'Mist') {
                weatherIcon.src = "./weather-app-img/images/mist.png"
            }
            document.querySelector('.weather').style.display = 'block';
        }

    }


    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});
