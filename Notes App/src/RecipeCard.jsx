import React from 'react';

const RecipeCard = ({ meal }) => {
  return (
    <div className="recipe-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h2>{meal.strMeal}</h2>
      <p>Category: {meal.strCategory}</p>
    </div>
  );
};

export default RecipeCard;
