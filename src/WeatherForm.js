import React, { useState } from "react";
import "./WeatherForm.css";

const WeatherForm = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
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
        <button type="submit" className="btn btn-primary">
          <i className="fas fa-search"></i> {}
        </button>
      </div>
    </form>
  );
};

export default WeatherForm;
