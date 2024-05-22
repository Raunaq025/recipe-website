import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './homepage.css';
import Banner1 from '../assest/banner1.jpg';
import Banner2 from '../assest/banner2.jpg';
import Banner3 from '../assest/banner3.jpg';
import Banner4 from '../assest/banner4.png';
import Categories from './categories';

function Homepage() {
    const { category } = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [meals, setMeals] = useState([]);

    const isMealsEmpty = meals.length === 0;

    useEffect(() => {
        if (searchTerm.trim() === '') {
            fetchAllMeals();
        } else {
            fetchMealsBySearchTerm();
        }
    }, [searchTerm]);

    useEffect(() => {
        if (category) {
            fetchMealsByCategory();
        }
    }, [category]);

    const fetchAllMeals = async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            setMeals(response.data.meals || []);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    const fetchMealsBySearchTerm = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            setMeals(response.data.meals || []);

            if(meals.length === 0) {
                console.log('Error fetching data');
            }
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    const fetchMealsByCategory = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            setMeals(response.data.meals || []);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    return (
        <div className='homepage'>
            <img src={Banner4} className='banner4' alt='banner'/>
            <span className='banner4-text'>
                <p id='banner4-text-1'>Food Recipes and More!</p>
                <p id='banner4-text-2'>Find your desired recipes..</p>
            </span>
            <div className="search-box">
                <input type='text' placeholder="Search the recipe.." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <Categories/>
            {isMealsEmpty ? <p className='not-found-tag'>No Result Found..</p> : <p className='b-1'>Tranding Recipes</p>}
            <div className='meals'>
                {meals.map((meal) => (
                    <Link key={meal.idMeal} to={`/recipes/${meal.idMeal}`}>
                        <div className="meal">
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                            <p>{meal.strMeal}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="card1">
                <img src={Banner1} alt="Banner Image" className="card1-img" />
                <div className="card1-content">
                    <h2 className="card1-title">Enjoy Food<br />Live Great <text>LIFE..</text></h2>
                    <p className="card1-text">
                        Explore a world of flavors, techniques, and culinary creativity right at your fingertips.
                        Whether you're a seasoned chef or a kitchen novice, our collection of recipes caters to all skill levels and tastes.
                        Get ready to embark on a culinary adventure with us!
                    </p>
                </div>
            </div>

            <div className='card2'>
                <div className="card2-box1 max-w-sm mx-auto bg-white p-6 shadow-lg pt-20">
                    <h1 className="text-gray-800 font-semibold text-2xl">Hi! I'm Lindsay.</h1>
                    <p className="text-gray-800 italic text-xl mt-2">Nice to meet you!</p>
                    <p className="text-gray-600 mt-4 leading-loose">I’m a former 4th grade teacher, now full-time blogger. My husband Bjork and I live in Minnesota. Favorite things include my camera, lake days, and dark chocolate.</p>
                    <button className="mt-6 bg-gray-800 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700 transition-colors">Learn More</button>
                </div>
                <img src={Banner2} alt="Banner Image" className="card2-img" />
                <img src={Banner3} alt="Banner Image" className="card2-img" />
            </div>
        </div>
    );
}

export default Homepage;
