const WeatherCard = ({ weatherData, unit, handleUnitToggle }) => {
    const convertTemperature = (tempC) => {
      return unit === 'F' ? (tempC * 9) / 5 + 32 : tempC;
    };
  
    return (
      <div className="weather-card">
        <h2>{weatherData.location.name}</h2>
        <p>Temperature: {convertTemperature(weatherData.current.temp_c).toFixed(1)}°{unit}</p>
        <p>Humidity: {weatherData.current.humidity}%</p>
        <p>Wind Speed: {weatherData.current.wind_kph} km/h</p>
        <p>Condition: {weatherData.current.condition.text}</p>
        <img
          src={weatherData.current.condition.icon}
          alt={weatherData.current.condition.text}
        />
        <button onClick={handleUnitToggle}>
          Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
        </button>
      </div>
    );
  };
  
  export default WeatherCard;
  