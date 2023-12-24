import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherCard = ({ title, data }) => {
  return (
    <div className="weather-card">
      <h3>{title}</h3>
      <p>{data}</p>
    </div>
  );
};

const WeatherDisplay = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeatherData = async () => {
    try {
      const res = await axios.get(
        "https://api.weatherapi.com/v1/current.json",
        {
          params: {
            key: "7a75e1a8425648ad9b3132631232509",
            q: city,
          },
        }
      );
      setWeatherData(res.data);
    } catch (err) {
      console.error("Error fetching data", err);
      alert("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      setLoading(true);
      getWeatherData();
    }
  }, [city]);

  return (
    <div className="weather-display">
      {loading && <p>Loading data...</p>}
      {!loading && weatherData && (
        <div className="weather-cards">
          <WeatherCard
            title="Temperature"
            data={`${weatherData.current.temp_c}°C`}
          />
          <WeatherCard
            title="Humidity"
            data={`${weatherData.current.humidity}%`}
          />
          <WeatherCard
            title="Condition"
            data={`${weatherData.current.condition.text}`}
          />
          <WeatherCard
            title="Wind Speed"
            data={`${weatherData.current.wind_kph} kph`}
          />
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
