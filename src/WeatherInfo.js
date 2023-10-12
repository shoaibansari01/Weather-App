// WeatherInfo.js
import React, { useState, useEffect } from "react";
import "./WeatherInfo.css";

const WeatherInfo = ({ weatherData, error }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="weather-info container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="weather-card card">
            <div className="card-body">
              <p className="clock">
                <i className="far fa-clock"></i> {time.toLocaleTimeString()}
              </p>
              {weatherData ? (
                <>
                  <div className="text-center">
                    <div className="centered-icon">
                      <i className="fas fa-sun fa-5x"></i>
                    </div>
                    <div className="temperature">
                      <p className="big-temp">{weatherData.name}</p>
                      <p className="big-temp">
                        {weatherData.main.temp}&deg;C
                      </p>
                    </div>
                  </div>
                </>
              ) : error ? (
                <div className="alert alert-danger error">
                  <i className="fas fa-exclamation-circle"></i> {error}
                </div>
              ) : (
                <p className="text-center font-custom">
                  Enter a city to get weather information.
                </p>
              )}

              {weatherData && (
                <div className="text-center description-humidity">
                  <p className="card-text">
                    <i className="fas fa-cloud"></i> Description:{" "}
                    {weatherData.weather[0].description}
                  </p>
                  <p className="card-text">
                    <i className="fas fa-tint"></i> Humidity:{" "}
                    {weatherData.main.humidity}%
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
