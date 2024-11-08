import React, { useState } from 'react';

const Favorites = ({ favorites, onAddFavorite, onRemoveFavorite, onSearch }) => {
  const [city, setCity] = useState('');

  const handleAdd = () => {
    if (city) {
      onAddFavorite(city);
      setCity('');
    }
  };

  return (
    <div className="favorites">
      <h3>Favorite Cities</h3>
      <input
        type="text"
        placeholder="Add city to favorites"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            <span onClick={() => onSearch(favorite.name)}>{favorite.name}</span>
            <button onClick={() => onRemoveFavorite(favorite.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
