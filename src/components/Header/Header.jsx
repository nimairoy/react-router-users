import React from 'react';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='container header-container'>
            <ActiveLink className='nav-link' to="/">Home</ActiveLink>
            <ActiveLink className='nav-link' to="/about">About</ActiveLink>
            <ActiveLink className='nav-link' to="/users">Users</ActiveLink>
            <ActiveLink className='nav-link' to="/posts">Posts</ActiveLink>
            <ActiveLink className='nav-link' to="/contact">Contact</ActiveLink>
        </div>
    );
};

export default Header;