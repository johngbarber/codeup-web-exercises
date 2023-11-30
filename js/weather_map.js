"use strict";

// Global variables
let newCityName;

// Geocoding function (unchanged)
function geocode(search, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
        .then(res => res.json())
        .then(data => data.features[0].center);
}

// Reverse Geocoding function with city name storage (unchanged)
function reverseGeocode(coordinates, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${coordinates.lng},${coordinates.lat}.json?access_token=${token}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            newCityName = data.features[3].text;
            return newCityName;
        });
}

// Function to add a marker to the map (unchanged)
function addMarker(coordinates) {
    // Create a new marker and add it to the map
    new mapboxgl.Marker({ draggable: true })
        .setLngLat(coordinates)
        .addTo(map);
}

// Map initialization (unchanged)
mapboxgl.accessToken = MAPBOX_API;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 10,
    center: [-96.74640775941502, 33.02017252444113]
});

// Initialize a draggable marker (unchanged)
let marker = new mapboxgl.Marker({ draggable: true })
    .setLngLat([-96.74640775941502, 33.02017252444113])
    .addTo(map);

// Event listener for form submission (modified)
document.getElementById("weather-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the city name from the input field
    const cityNameInput = document.getElementById("cityName").value;

    // Call the geocode function and update the marker position
    geocode(cityNameInput, MAPBOX_API)
        .then(function (result) {
            // Update the marker position
            marker.setLngLat(result);

            // Update the map center
            map.setCenter(result);

            fetchWeather(cityNameInput);
                });
        });


//Event listener for marker dragend (modified)
marker.on('dragend', function () {
    // Get the marker's new position
    let newCoordinates = marker.getLngLat();

    // Reverse geocode to get the new city name
    reverseGeocode(newCoordinates, MAPBOX_API)
        .then(function (cityName) {
            // console.log(cityName)
            // Update the new city name
            newCityName = cityName;

            // Fetch weather data and update the weather output
            fetchWeather(newCityName);
        });
});

// Function to fetch weather data from OpenWeather API and update the weather output
function fetchWeather(cityName) {
    // OpenWeather API key (replace with your own key)
    const openWeatherAPIKey = OPEN_WEATHER_API_KEY;

    // OpenWeather API endpoint for forecast data
    const openWeatherEndpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${openWeatherAPIKey}&units=imperial`;

    // Fetch data from OpenWeather API
    fetch(openWeatherEndpoint)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // Update the weather output section with relevant data
            updateWeatherOutput(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            // Handle errors or display a message to the user
        });
}

// Function to get the weather icon URL based on weather conditions
function getWeatherIconURL(weatherMain) {
    const iconMap = {
        'Clouds': 'Image/clouds.png',
        'Clear': 'Image/clear.png',
        'Rain': 'Image/rain.png',
        'Drizzle': 'Image/drizzle.png',
        'Mist': 'Image/mist.png',
        // Add more conditions as needed
    };

    // Default to a generic icon if the weather condition is not in the map
    return iconMap[weatherMain] || 'Image/default.png';
}

// Function to update the weather output section
function updateWeatherOutput(weatherData) {
    // Access relevant data from the OpenWeather API response and update the HTML
    const weatherOutputElement = document.getElementById('weatherOutput');

    // Clear previous content
    weatherOutputElement.innerHTML = '';

    // Display relevant information
    const cityName = weatherData.city.name;

    // Create a heading with the city name
    const cityHeading = document.createElement('h2');
    cityHeading.textContent = `Weather in ${cityName}`;
    weatherOutputElement.appendChild(cityHeading);

    // Loop through forecast data with a step of 8 to grab every 8th entry
    for (let i = 0; i < weatherData.list.length; i += 8) {
        // Extract relevant data for each time period
        const forecast = weatherData.list[i];
        const date = new Date(forecast.dt * 1000); // Convert timestamp to date
        const temperature = forecast.main.temp;
        const description = forecast.weather[0].description;
        const humidity = forecast.main.humidity;
        const windSpeed = forecast.wind.speed;
        const pressure = forecast.main.pressure;
        const weatherMain = forecast.weather[0].main;

        // Create a Bootstrap card for each forecast entry
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'col-md-2');
        cardDiv.style.width = '18rem';

        // Image
        const img = document.createElement('img');
        img.src = getWeatherIconURL(weatherMain); // Use the function to get the icon URL
        img.classList.add('card-img-top');
        img.alt = 'Weather Icon';

        // Card body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Display description, temperature, humidity, wind speed, and pressure inside the card body
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = `Description: ${description}`;
        cardBody.appendChild(descriptionElement);

        const temperatureElement = document.createElement('p');
        temperatureElement.textContent = `Temperature: ${temperature} F`;
        cardBody.appendChild(temperatureElement);

        const humidityElement = document.createElement('p');
        humidityElement.textContent = `Humidity: ${humidity}%`;
        cardBody.appendChild(humidityElement);

        const windSpeedElement = document.createElement('p');
        windSpeedElement.textContent = `Wind Speed: ${windSpeed} MPH`;
        cardBody.appendChild(windSpeedElement);

        const pressureElement = document.createElement('p');
        pressureElement.textContent = `Pressure: ${pressure} hPa`;
        cardBody.appendChild(pressureElement);

        // Append the image and card body to the card
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        // Append the Bootstrap card to the weather output
        weatherOutputElement.appendChild(cardDiv);
    }
}
