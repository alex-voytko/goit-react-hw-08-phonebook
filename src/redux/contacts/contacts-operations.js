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

axios.defaults.baseURL = 'http://localhost:3050';

const fetchContacts = () => dispatch => {
    dispatch(fetchContactsRequest());

    axios
        .get('/contacts')
        .then(({ data }) => dispatch(fetchContactsSuccess(data)))
        .catch(error => dispatch(fetchContactsError(error)));
};

const addContact = contact => dispatch => {
    dispatch(addContactRequest());
    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
};

const removeContact = contactId => dispatch => {
    dispatch(removeContactRequest());
    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(removeContactSuccess(contactId)))
        .catch(error => dispatch(removeContactError(error)));
};

export default { fetchContacts, addContact, removeContact };
