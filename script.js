async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'your_api_key'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherResult = document.getElementById('weather-result');
            weatherResult.innerHTML = `
                <p><strong>City:</strong> ${data.name}</p>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            `;
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}