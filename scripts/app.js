// c3b64ec47ce5e9b41273e992955f84ae

const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImage = document.getElementById('temp-image');
const description = document.getElementById('description');
const tempMax = document.getElementById('temp-max');
const tempMin = document.getElementById('temp-min');
const countryCode = document.getElementById('country-code');

const months = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
]

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() - 1;
let year = dateObj.getUTCFullYear();

// Samples
// console.log(dateObj);
// console.log(dateObj.getUTCMonth());
// console.log(dateObj.getUTCFullYear());
// console.log(dateObj.getUTCDate());

date.innerHTML = `${month} ${day}, ${year}`;

const app = document.getElementById('app');

const getWeather = async () => {
    try {
        const cityVal = document.getElementById('search-bar-input').value;



        const weatherDataFetch = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=c3b64ec47ce5e9b41273e992955f84ae&units=metric`, 
            {
                headers: {
                    Accept: "application/json"
                }
            });

            const weatherData = await weatherDataFetch.json();
            console.log(weatherData);
            
            city.innerHTML = `${weatherData.name}`;
            countryCode.innerHTML = `COUNTRY CODE: ${weatherData.sys.country}`;

            description.innerHTML = `${weatherData.weather[0].main}`;
            tempImage.innerHTML= `
            <img src='http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png'/>`;
            temp.innerHTML = `<h2> ${Math.round(weatherData.main.temp)} ℃</h2>`;
            tempMax.innerHTML = `${weatherData.main.temp_max} ℃`;
            tempMin.innerHTML = `${weatherData.main.temp_min} ℃`;
        }
    
    catch(error) {
        console.log(error);
    }
}

const button = document.getElementById("search-icon");

button.addEventListener('click', getWeather)
