export const getLastSearchedCity = () => {
  return localStorage.getItem('lastCity');
};

export const saveLastSearchedCity = (city) => {
  localStorage.setItem('lastCity', city);
};
