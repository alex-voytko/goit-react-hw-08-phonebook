import React, { Component } from 'react';
import Container from './components/Container';
import AppBar from './components/AppBar';
import HomePage from './views/HomePage';
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';
import ContactsPage from './views/ContactsPage';
import { Switch, Route } from 'react-router-dom';
import './styles/main.scss';

class App extends Component {
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
                            <Route path="/contacts" component={ContactsPage} />
                        </Switch>
                    </Container>
                </Container>
            </>
        );
    }
}

export default App;
