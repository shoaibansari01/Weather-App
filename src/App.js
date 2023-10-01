import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "20991b22ea688cef3fbff5888711537a";

  const getWeatherData = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError("City not found");
      setWeatherData(null);
    }
  };

  useEffect(() => {
    getWeatherData("New York");
  }, []);

  return (
    <div className="App">
      <div className="container weather-container">
        <h1>Today's Weather</h1>
        <WeatherForm onSearch={getWeatherData} />
        <WeatherInfo weatherData={weatherData} error={error} />
      </div>
    </div>
  );
}

export default App;
