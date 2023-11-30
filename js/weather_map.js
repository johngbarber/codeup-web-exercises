// "use strict";
// // Function to add a marker to the map
// function addMarker(coordinates) {
//     // Create a new marker and add it to the map
//     new mapboxgl.Marker()
//         .setLngLat(coordinates)
//         .addTo(map);
// }
//
//
// function geocode(search, token) {
//     let baseUrl = 'https://api.mapbox.com';
//     let endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
//         .then(res => res.json())
//         .then(data => data.features[0].center);
// }
//
// function reverseGeocode(coordinates, token) {
//     let baseUrl = 'https://api.mapbox.com';
//     let endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(`${baseUrl}${endPoint}${coordinates.lng},${coordinates.lat}.json?access_token=${token}`)
//         .then(res => res.json())
//         .then(data => data.features[0].place_name);
// }
//
// mapboxgl.accessToken = MAPBOX_API;
// const map = new mapboxgl.Map({
//     container: 'map', // Updated to 'map'
//     style: 'mapbox://styles/mapbox/streets-v11',
//     zoom: 10,
//     center: [-96.74640775941502, 33.02017252444113]
// });
//
//
// let storedLatitude;
// let storedLongitude;
//
// document.getElementById("weather-form").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the default form submission behavior
//
//     // Call the geocode function and store the result
//     geocode(document.getElementById("cityName").value, MAPBOX_API)
//         .then(function (result) {
//             storedLatitude = result[0];
//             storedLongitude = result[1];
//
//             // Update the map
//             map.setCenter([storedLatitude, storedLongitude]);
//
//             // Add a marker to the map
//             addMarker([storedLatitude, storedLongitude]);
//
//             console.log(storedLatitude);
//             console.log(storedLongitude)
//
//         });
// });
//
"use strict";
//
// // Global variable to store the new city name
// let newCityName;
//
// // Geocoding function (unchanged)
// function geocode(search, token) {
//     let baseUrl = 'https://api.mapbox.com';
//     let endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
//         .then(res => res.json())
//         .then(data => data.features[0].center);
// }
//
// // Reverse Geocoding function with city name storage
// function reverseGeocode(coordinates, token) {
//     let baseUrl = 'https://api.mapbox.com';
//     let endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(`${baseUrl}${endPoint}${coordinates.lng},${coordinates.lat}.json?access_token=${token}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             newCityName = data.features[3].text;
//             return newCityName;
//         });
// }
//
// // Map initialization (unchanged)
// mapboxgl.accessToken = MAPBOX_API;
// const map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11',
//     zoom: 10,
//     center: [-96.74640775941502, 33.02017252444113]
// });
//
// // Initialize a draggable marker (unchanged)
// let marker = new mapboxgl.Marker({ draggable: true })
//     .setLngLat([-96.74640775941502, 33.02017252444113])
//     .addTo(map);
//
// // Event listener for form submission (unchanged)
// document.getElementById("weather-form").addEventListener("submit", function (event) {
//     event.preventDefault();
//
//     // Call the geocode function and update the marker position
//     geocode(document.getElementById("cityName").value, MAPBOX_API)
//         .then(function (result) {
//             // Update the marker position
//             marker.setLngLat(result);
//
//             // Update the map center
//             map.setCenter(result);
//
//             // Update the new city name
//             reverseGeocode(result, MAPBOX_API)
//                 .then(function (cityName) {
//                     console.log('New City Name:', cityName);
//                 });
//         });
// });
//
// // Event listener for marker dragend
// marker.on('dragend', function () {
//     // Get the marker's new position
//     let newCoordinates = marker.getLngLat();
//
//     // Reverse geocode to get the new city name
//     reverseGeocode(newCoordinates, MAPBOX_API)
//         .then(function (cityName) {
//             // Log the new city name
//             console.log('New City Name:', cityName);
//         });
// });
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
            console.log(data)
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
// document.getElementById("weather-form").addEventListener("submit", function (event) {
//     event.preventDefault();
//
//     // Call the geocode function and update the marker position
//     geocode(document.getElementById("cityName").value, MAPBOX_API)
//         .then(function (result) {
//             // Update the marker position
//             marker.setLngLat(result);
//
//             // Update the map center
//             map.setCenter(result);
//
//             // Update the new city name
//             reverseGeocode(result, MAPBOX_API)
//                 .then(function (cityName) {
//                     // Fetch weather data and update the weather output
//                     fetchWeather(cityName);
//                 });
//         });
// });

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
            console.log(cityName)
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
    const openWeatherEndpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${openWeatherAPIKey}`;

    // Fetch data from OpenWeather API
    fetch(openWeatherEndpoint)
        .then(response => response.json())
        .then(data => {
            // Update the weather output section with relevant data
            updateWeatherOutput(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            // Handle errors or display a message to the user
        });
}

// Function to update the weather output section
function updateWeatherOutput(weatherData) {
    // Access relevant data from the OpenWeather API response and update the HTML
    const weatherOutputElement = document.getElementById('weatherOutput');

    // Clear previous content
    weatherOutputElement.innerHTML = '';

    // Display relevant information, for example, the temperature
    const temperature = weatherData.list[0].main.temp;
    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = `Temperature: ${temperature} K`; // You can convert to Celsius or Fahrenheit if needed
    weatherOutputElement.appendChild(temperatureElement);

    // Add more information as needed based on the OpenWeather API response
    // ...

    // You can customize the displayed information based on your application's requirements
}