import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortId from 'shortid';
import PropTypes from 'prop-types';
import { contactsOperations } from '../../redux/contacts';

class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };
    state = {
        name: '',
        id: '',
        number: '',
    };
    inputName = event => {
        const { value, name } = event.currentTarget;
        this.setState({
            [name]: value,
            id: shortId.generate(),
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        const { contacts, onSubmit } = this.props;
        const nameExistCheck = contacts.find(
            contact => contact.name === this.state.name,
        );
        !nameExistCheck
            ? onSubmit(this.state)
            : alert('This name has already exists, try another one!');
        this.reset();
    };
    reset = () => {
        this.setState({ name: '', id: '', number: '' });
    };
    render() {
        const { handleSubmit, inputName } = this;
        const { id, name, number } = this.state;
        return (
            <>
                <form onSubmit={handleSubmit} className="form-container">
                    <label htmlFor={id} className="form-label add-contact">
                        Name
                    </label>
                    <input
                        className="form-input add-contact"
                        type="text"
                        name="name"
                        id={shortId.generate()}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов."
                        required
                        onChange={inputName}
                        value={name}
                    />
                    <label htmlFor={id} className="form-label add-contact">
                        Number
                    </label>
                    <input
                        className="form-input add-contact"
                        type="tel"
                        name="number"
                        id={shortId.generate()}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        onChange={inputName}
                        value={number}
                    />
                    <button type="submit" className="form-button add-contact">
                        Add contact
                    </button>
                </form>
            </>
        );
    }
}
const mapStayToProps = state => {
    return {
        contacts: state.contacts.items,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onSubmit: data => dispatch(contactsOperations.addContact(data)),
    };
};

export default connect(mapStayToProps, mapDispatchToProps)(ContactForm);
