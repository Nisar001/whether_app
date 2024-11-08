import axios from 'axios';

const API_URL = 'http://localhost:5000/favorites';

// Get all favorite cities
export const getFavorites = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return [];
  }
};

// Add a city to favorites
export const addFavorite = async (city) => {
  try {
    const response = await axios.post(API_URL, { name: city });
    return response.data;
  } catch (error) {
    console.error("Error adding favorite:", error);
  }
};

// Remove a city from favorites
export const removeFavorite = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error removing favorite:", error);
  }
};
