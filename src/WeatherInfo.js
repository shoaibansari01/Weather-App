import React from "react";
import "./WeatherInfo.css";

const WeatherInfo = ({ weatherData, error }) => {
  return (
    <div className="weather-info">
      {weatherData ? (
        <div className="weather-card card">
          <div className="card-body">
            <h2 className="card-title">
              <i className="fas fa-sun"></i> Weather in {weatherData.name}
            </h2>
            <p className="card-text">
              <i className="fas fa-thermometer-half"></i> Temperature:{" "}
              {weatherData.main.temp}&deg;C
            </p>
            <p className="card-text">
              <i className="fas fa-cloud"></i> Description:{" "}
              {weatherData.weather[0].description}
            </p>
            <p className="card-text">
              <i className="fas fa-tint"></i> Humidity:{" "}
              {weatherData.main.humidity}%
            </p>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger error">
          <i className="fas fa-exclamation-circle"></i> {error}
        </div>
      ) : (
        <p className="text-center font-custom">
          Enter a city to get weather information.
        </p>
      )}
    </div>
  );
};

export default WeatherInfo;
