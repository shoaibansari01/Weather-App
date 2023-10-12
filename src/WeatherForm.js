// WeatherForm.js
import React, { useState } from "react";
import "./WeatherForm.css";

const WeatherForm = ({ onSearch, currentCity }) => {
  const [city, setCity] = useState(currentCity);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity(""); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit} className="weather-form">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Enter a city..."
          value={city}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};

export default WeatherForm;
