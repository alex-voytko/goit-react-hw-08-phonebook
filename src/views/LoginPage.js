import React, { Component } from 'react';

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
                    <h1>Log In</h1>

                    <form
                        onSubmit={this.handleSubmit}
                        style="login-form"
                        autoComplete="off"
                    >
                        <label style="login-label">
                            E-Mail
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                            />
                        </label>

                        <label style="login-label">
                            Password
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                            />
                        </label>

                        <button type="submit">Enter</button>
                    </form>
                </div>
            </>
        );
    }
}

export default LoginPage;
