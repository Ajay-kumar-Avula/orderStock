import { useState } from 'react';
import './styles.css'

const SearchBar = ({ fetchWeather, savedCities, setSavedCities }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    if (searchInput) fetchWeather(searchInput);
  };

  const handleSaveCity = () => {
    if (searchInput && !savedCities.includes(searchInput)) {
      const updatedCities = [...savedCities, searchInput];
      setSavedCities(updatedCities);
      localStorage.setItem('savedCities', JSON.stringify(updatedCities));
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleSaveCity}>Save</button>

      <div className="saved-cities">
        <h3>Saved Cities</h3>
        <ul>
          {savedCities.map((city, index) => (
            <li key={index} onClick={() => fetchWeather(city)}>
              {city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
