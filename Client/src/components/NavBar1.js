import React from 'react'
import Logo from '../assest/logo.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function NavBar1() {
    const [categories, setCategories] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            setCategories(response.data.categories || []);
        } catch (error) {
            console.error('Error fetching categories: ', error);
        }
    };

    fetchCategories();
  }, []);


  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
    <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="/">Home</a></li>
                <li className="dropdown" onClick={handleDropdownToggle}>
                    <a href="#" >Categories</a>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                        {categories.map(category => (
                            <li key={category.idCategory}>
                                <Link to={`/${category.strCategory}`}>{category.strCategory}</Link>
                            </li>
                        ))}
                        </ul>
                    )}
                </li>
                <li><Link to={'/AboutUs'}>About Us</Link></li>
                <li><Link to={'/ContactUs'}>Contact Us</Link></li>
            </ul>
            <a href="/">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
            </a>
        </div>
    </nav>
    </div>
  )
}

export default NavBar1