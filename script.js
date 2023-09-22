const apiKey = 'b1cf7d2d2697b78e1e291c65c00e0534';
const baseUrl = "http://api.openweathermap.org/data/2.5/weather";

document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const locationInput = document.getElementById('locationInput').value;

    if (locationInput) {
        fetchWeatherData(locationInput);
    } else {
        alert('Please enter a location.');
    }
});

function fetchWeatherData(location) {

    const apiUrl = `${baseUrl}?q=${location}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod === 200) {
                displayWeatherData(data);
            } else {
                document.getElementById('weatherInfo').innerText = 'Invalid City or Weather Information not available';
            }
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeatherData(data) {
    const locationName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const humidity = data.main.humidity

    document.getElementById('locationName').textContent = locationName;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
    document.getElementById('weatherDescription').textContent = `Weather: ${weatherDescription}`;

}
