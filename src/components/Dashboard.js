import React, { useState, useEffect } from 'react';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';
import Favorites from './Favorites';
import Toggle from './Toggle';
import { getLastSearchedCity, saveLastSearchedCity } from '../services/apiService';
import { getFavorites, addFavorite, removeFavorite } from '../services/favoritesService';
import axios from 'axios';

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favoriteCities = await getFavorites();
      setFavorites(favoriteCities);
    };

    const lastCity = getLastSearchedCity();
    if (lastCity) {
      handleSearch(lastCity);
    }

    fetchFavorites();
  }, []);

  const handleSearch = async (city) => {
    saveLastSearchedCity(city);
    try {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

      const currentWeatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );

      setWeatherData(currentWeatherResponse.data);
      setForecastData(forecastResponse.data.list);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleAddFavorite = async (city) => {
    const newFavorite = await addFavorite(city);
    setFavorites([...favorites, newFavorite]);
  };

  const handleRemoveFavorite = async (id) => {
    await removeFavorite(id);
    setFavorites(favorites.filter((favorite) => favorite.id !== id));
  };

  return (
    <>
    <h1>Weather Dashboard</h1>
    <div className="dashboard">
      <Toggle isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
      <Search onSearch={handleSearch} />
      {weatherData && <WeatherDisplay data={weatherData} forecast={forecastData} isCelsius={isCelsius} />}
      <Favorites
        favorites={favorites}
        onAddFavorite={handleAddFavorite}
        onRemoveFavorite={handleRemoveFavorite}
        onSearch={handleSearch} // Pass handleSearch as onSearch
      />
    </div>
    </>
  );
};

export default Dashboard;
