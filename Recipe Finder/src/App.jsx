import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchRecipes = async () => {
    if (!query) return;
    setLoading(true);
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await res.json();
    setRecipes(data.meals || []);
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>🍲 रेसिपी खोजने वाला</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="रेसिपी का नाम लिखें..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchRecipes}>खोजें</button>
      </div>

      {loading ? (
        <p className="loading">लोड हो रहा है...</p>
      ) : (
        <div className="recipes">
          {recipes.map((meal) => (
            <div className="recipe-card" key={meal.idMeal}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
              <p>{meal.strArea} | {meal.strCategory}</p>
              <a href={meal.strSource || meal.strYoutube} target="_blank" rel="noopener noreferrer">
                पूरी रेसिपी देखें
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
