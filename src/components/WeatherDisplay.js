import React from 'react';

const WeatherDisplay = ({ data, forecast, isCelsius }) => {
  const temperature = isCelsius ? data.main.temp : (data.main.temp * 9/5) + 32;

  const filteredForecast = forecast
    ? forecast.filter((entry) => entry.dt_txt.includes("12:00:00"))
    : [];

  return (
    <div className="weather-display">
      <h2>{data.name}</h2>
      <p>Temperature: {temperature.toFixed(2)}°{isCelsius ? 'C' : 'F'}</p>
      <p>Condition: {data.weather[0].description}</p>

      <h3>5-Day Forecast</h3>
      <div className="forecast">
        {filteredForecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p>{day.weather[0].description}</p>
            <p>{isCelsius ? day.main.temp.toFixed(2) : ((day.main.temp * 9/5) + 32).toFixed(2)}°{isCelsius ? 'C' : 'F'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
