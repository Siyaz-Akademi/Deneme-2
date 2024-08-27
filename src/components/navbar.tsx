import React from 'react';
import '../components/navbar.css';
import { useState } from 'react';
import faviconSiyaz from '../images/faviconSiyaz.svg';
import favicon from '../images/favicon.svg';
import Search from '../images/Search.svg';
import Vector from '../images/Vector.svg';


const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };


    return (
      <nav className="navbar">
        <div className="navbar-left">
          <img src={favicon} alt="favicon" className="navbar-left" />
          <span className="navbar-brand">Siyaz</span>
        </div>
        <div className="navbar-links">
          <ul>
            <li>Home</li>
            <li onClick={toggleDropdown} className="dropdown-toggle">
            Explore <span className="dropdown-icon"><img src={Vector} alt="Vector" className="Vector" /></span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">Activity 1</li>
                <li className="dropdown-item">Activity 2</li>
              </ul>
            )}
            </li> 
            <li onClick={toggleDropdown} className="dropdown-toggle">
            Activity <span className="dropdown-icon"><img src={Vector} alt="Vector" className="Vector" /></span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">Activity 1</li>
                <li className="dropdown-item">Activity 2</li>
              </ul>
            )}
            </li>
            <li onClick={toggleDropdown} className="dropdown-toggle">
            Community <span className="dropdown-icon"><img src={Vector} alt="Vector" className="Vector" /></span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">Activity 1</li>
                <li className="dropdown-item">Activity 2</li>
              </ul>
            )}
            </li>
            <li onClick={toggleDropdown} className="dropdown-toggle">
            Pages <span className="dropdown-icon"><img src={Vector} alt="Vector" className="Vector" /></span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">Activity 1</li>
                <li className="dropdown-item">Activity 2</li>
              </ul>
            )}
            </li>
            <li onClick={toggleDropdown} className="dropdown-toggle">
            Contact <span className="dropdown-icon"><img src={Vector} alt="Vector" className="Vector" /></span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">Activity 1</li>
                <li className="dropdown-item">Activity 2</li>
              </ul>
            )}
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="search-icon">
            <img src={Search} alt="Search" className="Search" />
          </div>
          <button className="wallet-connect-btn">
            Wallet connect
          </button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  