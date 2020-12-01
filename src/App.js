import React, { useEffect, useState } from "react";
import Recipe from './Recipe';
import './App.css';

const App = () => {
    const APP_ID = "43ef7cbe";
    const APP_KEY = "e49db6291a41542b15dfff3739e935e3";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    useEffect( () => {
      getRecipes();
    }, [query]);

    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    }

    const updateSearch = e => {
      setSearch(e.target.value);
      console.log(search);
    }

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }


  return (
    <div className="App">
      <h1 className="header">Find Recipes:</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={Math.round(recipe.recipe.calories/recipe.recipe.yield)}
          img={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          servings={recipe.recipe.yield}
          url={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
