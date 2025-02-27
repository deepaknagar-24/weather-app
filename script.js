const input = document.getElementById('input');
const button = document.getElementById('btn');
const weather_img = document.getElementById('img');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind-speed');
const weather_body = document.querySelector('.weather-body');
const img_not_found = document.querySelector('.img-not-found-container')


async function checkWeather(city) {
 const api_key = 'f7c1f4527746e0da9c894a3fca3812cc';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
 const weather_data = await fetch(`${url}`).then(response => 
 response.json());

 console.log(weather_data);

 if(weather_data.cod === '404'){
    img_not_found.style.display='flex'
    weather_body.style.display='none'
    console.log('Location not found')
    return;
 }

   img_not_found.style.display='none'
   weather_body.style.display='flex'

 temperature.innerText = `${Math.round(weather_data.main.temp - 273.15)}°C`;
 description.innerHTML = `${weather_data.weather[0].description}`
 humidity.innerHTML=`${weather_data.main.humidity}%`;
 wind.innerHTML=`${weather_data.wind.speed}Km/H`;


 if(weather_data.weather[0].main === 'Cloud'){
     weather_img.src = 'images/cloud.png';
 } else if(weather_data.weather[0].main === 'Rain'){
     weather_img.src = 'images/rain.png'
 } else if(weather_data.weather[0].main === 'Mist'){
     weather_img.src = 'images/mist.png'
 } else if(weather_data.weather[0].main === 'Snow'){
     weather_img.src = 'images/snow.png'
 } else if(weather_data.weather[0].main === 'Clear'){
     weather_img.src = 'images/sky.png'
 }


}

button.addEventListener('click', function(){
    checkWeather(input.value);
})

