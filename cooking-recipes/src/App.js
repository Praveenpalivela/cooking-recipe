import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/recipes/')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []); // Note the empty dependency array to run useEffect only once

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe List</h1>
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <h2>{recipe.title}</h2>
              <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p><strong>Instructions:</strong> {recipe.instructions}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
