import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <>
        <nav className="nav-container-1">
            <NavLink
                to="/"
                exact
                className="link"
                activeClassName="active-link"
            >
                Homepage
            </NavLink>
            <NavLink
                to="/contacts"
                exact
                className="link"
                activeClassName="active-link"
            >
                Contacts
            </NavLink>
        </nav>
    </>
);
export default Navigation;
