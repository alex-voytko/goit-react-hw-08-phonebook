import React, { Component } from 'react';

class RegisterPage extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };
    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onRegister(this.state);
        this.reset();
    };
    reset() {
        this.setState({ name: '', email: '', password: '' });
    }
    render() {
        const { name, email, password } = this.state;
        return (
            <>
                <div>
                    <h1>Sign Up Now!</h1>

                    <form
                        onSubmit={this.handleSubmit}
                        style="register-form"
                        autoComplete="off"
                    >
                        <label style="register-label">
                            Name
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                            />
                        </label>

                        <label style="register-label">
                            E-Mail
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                            />
                        </label>

                        <label style="register-label">
                            Password
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                            />
                        </label>

                        <button type="submit">Зарегистрироваться</button>
                    </form>
                </div>
            </>
        );
    }
}

export default RegisterPage;
