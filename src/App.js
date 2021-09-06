import React, { Component, Suspense, lazy } from 'react';
import Container from './components/Container';
import AppBar from './components/AppBar';
import Spinner from './components/Spinner/Spinner';
import { Switch } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import './styles/main.scss';

const HomePage = lazy(() => import('./views/HomePage'));
const RegisterPage = lazy(() => import('./views/RegisterPage'));
const LoginPage = lazy(() => import('./views/LoginPage'));
const ContactsPage = lazy(() => import('./views/ContactsPage'));

class App extends Component {
    componentDidMount() {
        this.props.onGetCurrentUser();
    }
    render() {
        return (
            <>
                <Container className="container-general">
                    <AppBar />
                    <Container className="container">
                        <Suspense fallback={<Spinner />}>
                            <Switch>
                                <PublicRoute
                                    exact
                                    path="/"
                                    component={HomePage}
                                />
                                <PublicRoute
                                    path="/register"
                                    restricted
                                    component={RegisterPage}
                                    redirectTo="/contacts"
                                />
                                <PublicRoute
                                    path="/login"
                                    restricted
                                    component={LoginPage}
                                    redirectTo="/contacts"
                                />
                                <PrivateRoute
                                    path="/contacts"
                                    component={ContactsPage}
                                    redirectTo="/login"
                                    text="You should to log In to view your contacts"
                                />
                            </Switch>
                        </Suspense>
                    </Container>
                </Container>
            </>
        );
    }
}

const mapDispatchToProps = {
    onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
