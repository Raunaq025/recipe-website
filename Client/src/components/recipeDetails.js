import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './recipeDetails.css';

function RecipeDetail() {
  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
        const recipe = response.data.meals[0];
        setRecipeDetails(recipe); // Assuming the first element is the recipe
        console.log(recipe);
        
        //fetching the Ingredients
        const fetchedIngredients = [];
        Object.keys(recipe).forEach(key => {
          if (key.startsWith('strIngredient') && recipe[key]) {
            const index = key.replace('strIngredient', '');
            fetchedIngredients.push({
              ingredient: recipe[key],
              measure: recipe[`strMeasure${index}`]
            });
          }
        });
        setIngredients(fetchedIngredients);

      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchRecipeDetails();
  }, [recipeId]);

  return (
    <div className='recipeDetail'>
      
      {recipeDetails ? (
        <>
          
          <img src={recipeDetails.strMealThumb} alt={recipeDetails.strMeal} />
          
          <p className='recipeTitle'>{recipeDetails.strMeal}</p>
          <h2 id='ingredient-title'>Ingredients</h2>
          <ul id='ingredients'>
            {ingredients.map((item, index) => (
              <li key={index}>
                {item.ingredient} - {item.measure}
              </li>
            ))}
          </ul>
          <p id='instructionTag'>Procedure<span> :-</span></p>
          <p id='instruction'>{recipeDetails.strInstructions}</p>
          <p id='youtube-tag'>Watch the Recipe on Youtube :</p>
          <a id="youtube-link" href={recipeDetails.strYoutube}>Click Here</a>
          </>
      ) : (
        <p className='loading-recipe'>Loading recipe details...</p>
      )}
      {recipeDetails && !recipeDetails.strInstructions && (
        <p>No instructions available for this recipe.</p>
      )}
      
    </div>
  );
}

export default RecipeDetail;
