import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsOperations, getVisibleContacts } from '../../redux/contacts';

class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object),
        onRemove: PropTypes.func.isRequired,
    };
    componentDidMount() {
        this.props.fetchContacts();
    }
    render() {
        const { onRemove, contacts } = this.props;
        return (
            <>
                <ul className="contact-list">
                    {contacts.map(({ id, name, number }) => (
                        <li key={id} id={id}>
                            <p className="text-name">{name}</p>
                            <p className="text-number">{number}</p>
                            <button
                                className="btn-delete"
                                onClick={() => onRemove(id)}
                            ></button>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: getVisibleContacts(state),
    };
};
const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
    onRemove: id => dispatch(contactsOperations.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
