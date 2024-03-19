import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = ({cartItems}) => {
    
    return (
        <header className='header'>
            <div className='header-left'>
                <ul>
                    <li>
                        <Link to='/' className='icon'>Home</Link>
                    </li>
                </ul>
                <ul>
                    <li className="dropdown">
                        <Link to='/' className='icon'>Shop</Link>
                        <div className="dropdown-content">
                            <Link to='/' onClick={() => window.location.reload()}>All Products</Link>
                            <Link to='/' onClick={() => window.location.reload()}>Popular Items</Link>
                            <Link to='/' onClick={() => window.location.reload()}>New Arrivals</Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='header-right'>
                <ul>
                    <li>
                        <Link to="/Cart" className="cart">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className='cart-length'>
                                {cartItems.length ===0 ? "": cartItems.length }
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='logo-container'>
                <h1 className='logo'>Shop In Style</h1>
                <div className='logo1'>Simple & Elegant</div>
            </div>
        </header>
    )   
}

export default Header;
