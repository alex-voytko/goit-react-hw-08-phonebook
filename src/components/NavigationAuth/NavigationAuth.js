import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationAuth = () => (
    <>
        <div className="nav-container-2">
            <NavLink
                to="/login"
                exact
                className="link"
                activeClassName="active-link"
            >
                Log In
            </NavLink>
            <NavLink
                to="/register"
                exact
                className="link"
                activeClassName="active-link"
            >
                Sign Up
            </NavLink>
        </div>
    </>
);
export default NavigationAuth;
