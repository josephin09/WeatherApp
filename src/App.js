import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay";
import './App.css';

const App = () => {
  const [city, setCity] = useState("");

  const handleSearch = (searchedVal) => {
    setCity(searchedVal);
  };

  return (
    <div className="App">
      {/* Render the SearchBar component */}
      <SearchBar onSearch={handleSearch} />

      {/* Render the WeatherDisplay component */}
      <WeatherDisplay city={city} />
    </div>
  );
};

export default App;

