import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, img, ingredients, servings, url}) => {
  return(
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={img} alt=""/>
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <a href={url}>Instructions</a>
      <p>Yields {servings} Servings<br/>{calories} Calories per Serving</p>
      {/* <p>Calories Per Serving: {calories}</p> */}
    </div>
  );
}

export default Recipe;