import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

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
                <div className="form-container">
                    <h1 className="form-title">Sign Up Now!</h1>

                    <form
                        onSubmit={this.handleSubmit}
                        autoComplete="off"
                        className="form-auth"
                    >
                        <label className="form-label">
                            Name
                            <input
                                className="form-input"
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                            />
                        </label>

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
                            Sign Up
                        </button>
                    </form>
                </div>
            </>
        );
    }
}
const mapDispatchToProps = {
    onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
