import React from 'react';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import NavigationAuth from '../NavigationAuth/NavigationAuth';

const AppBar = ({ isAuthenticated }) => (
    <header>
        <Navigation />
        <h2 className="logo-title">Phonebook</h2>
        {isAuthenticated ? <UserMenu /> : <NavigationAuth />}
    </header>
);

export default AppBar;
