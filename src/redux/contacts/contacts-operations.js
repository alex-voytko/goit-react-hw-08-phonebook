import axios from 'axios';
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    removeContactRequest,
    removeContactSuccess,
    removeContactError,
} from './contacts-actions';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = () => dispatch => {
    dispatch(fetchContactsRequest());

    axios
        .get('/contacts')
        .then(({ data }) => dispatch(fetchContactsSuccess(data)))
        .catch(error => dispatch(fetchContactsError(error.message)));
};

const addContact = contact => dispatch => {
    dispatch(addContactRequest());
    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error.message)));
};

const removeContact = contactId => dispatch => {
    dispatch(removeContactRequest());
    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(removeContactSuccess(contactId)))
        .catch(error => dispatch(removeContactError(error.message)));
};

export default { fetchContacts, addContact, removeContact };
