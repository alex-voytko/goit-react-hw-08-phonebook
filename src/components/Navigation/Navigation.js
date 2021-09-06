import React from 'react';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { connect } from 'react-redux';

const Navigation = ({ isAuthenticated }) => (
    <>
        <nav className="nav-container-1 ">
            <NavLink
                to="/"
                exact
                className="link"
                activeClassName="active-link"
            >
                Homepage
            </NavLink>
            {isAuthenticated && (
                <NavLink
                    to="/contacts"
                    exact
                    className="link"
                    activeClassName="active-link"
                >
                    Contacts
                </NavLink>
            )}
        </nav>
    </>
);
const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
