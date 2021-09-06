import React, { Component } from 'react';
import Container from './components/Container';
import AppBar from './components/AppBar';
import HomePage from './views/HomePage';
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';
import ContactsPage from './views/ContactsPage';
import { Switch, Route } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import './styles/main.scss';

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
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/register" component={RegisterPage} />
                            <Route path="/login" component={LoginPage} />
                            <PrivateRoute
                                path="/contacts"
                                component={ContactsPage}
                                redirectTo="/login"
                                text="You should to log In to view your contacts"
                            />
                        </Switch>
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
