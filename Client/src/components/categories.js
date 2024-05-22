import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './categories.css';
import { Link } from 'react-router-dom';

function RecipeCategories() {
  const [categories, setCategories] = useState([]);
  const requiredRange = 7; // Define the required range (e.g., first 5 categories)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setCategories(response.data.categories || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const displayedCategories = categories.slice(0, requiredRange);

  return (
    <div className='popularCategories'>
      <h1 id='popular-tag'>Popular Categories</h1>
      <div className="category-list">
        {displayedCategories.map((category) => (
          <span key={category.idCategory} className="category-item">
            <Link to={`/${category.strCategory}`}>
                <img src={category.strCategoryThumb} alt={category.strCategory} />
                <p>{category.strCategory}</p>
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
}

export default RecipeCategories;
