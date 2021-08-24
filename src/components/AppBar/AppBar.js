import React from 'react';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import NavigationAuth from '../NavigationAuth/NavigationAuth';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const AppBar = ({ isAuthenticated }) => (
    <header>
        <Navigation />
        <h2 className="logo-title">Phonebook</h2>
        <div>{isAuthenticated ? <UserMenu /> : <NavigationAuth />}</div>
    </header>
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
