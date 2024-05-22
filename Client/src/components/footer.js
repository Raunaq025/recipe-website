import React from 'react'
import BetterHomes from '../assest/betterHomes (2).png';
import BuzzFeed from '../assest/buzzFeed (3).png';
import GoodFood from '../assest/goodFood.png';
import FoodNetwork from '../assest/foodNetwork.png';
import './footer.css';

function Footer() {
  return (
    <div>
        <footer className="">
            <h6>AS FEATURED ON</h6>
            <div className="footer-top">
              <div className="logo-container">
                <img src={BetterHomes} alt="goodfood logo" />
                <img src={BuzzFeed} alt="food logo" />
                <img src={GoodFood} alt="Better Homes logo" />
                <img src={FoodNetwork} alt="taste logo" />
              </div>

            </div>

            <div className="footer-newsletter">
              <h2>Never miss a recipe!</h2>
              <span>Subscribe to my newsletter and receive 3 FREE ebooks!</span>
              <button>Subscribe &#10217;</button>
            </div>

            <div className="footer-links">
              <div>
                <h3 className="recipes">RECIPES</h3>
                <ul>
                  <li>All Recipes</li>
                  <li>By Category</li>
                  <li>Collections</li>
                </ul>
              </div>

              <div className='about'>
                <h3>ABOUT</h3>
                <ul>
                  <li>About Nagi</li>
                  <li>About Dozer</li>
                  <li>RecipeTin Meals</li>
                </ul>
              </div>

              <div className='related'>
                <h3>RELATED</h3>
                <ul>
                  <li>RecipeTin Japan</li>
                  <li>Food Bloggers Central</li>
                </ul>
              </div>
              
              <div className='help'>
                <h3>HELP</h3>
                <ul>
                  <li>Contact</li>
                  <li>Image Use Policy</li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              © RecipeTin Eats 2024 | Privacy Policy & Terms | Site Credits | All Rights Reserved
            </div>
        </footer>
    </div>
  )
}

export default Footer