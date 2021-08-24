import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth/';

class LoginPage extends Component {
    state = {
        email: '',
        password: '',
    };
    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onLogin(this.state);
        this.reset();
    };
    reset() {
        this.setState({ email: '', password: '' });
    }
    render() {
        const { email, password } = this.state;
        return (
            <>
                <div>
                    <h1 className="form-title">Log In</h1>

                    <form
                        onSubmit={this.handleSubmit}
                        autoComplete="off"
                        className="form-container"
                    >
                        <label className="form-label">
                            E-Mail
                            <input
                                className="form-input"
                                type="email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                            />
                        </label>

                        <label className="form-label">
                            Password
                            <input
                                className="form-input"
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                            />
                        </label>

                        <button type="submit" className="form-button">
                            Enter
                        </button>
                    </form>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = {
    onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
