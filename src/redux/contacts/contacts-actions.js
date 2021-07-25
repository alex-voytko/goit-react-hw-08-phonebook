import { createAction } from '@reduxjs/toolkit';

//fetch Contacts
export const fetchContactsRequest = createAction(
    'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
    'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction(
    'contacts/fetchContactsError',
);

//add Contacts
export const addContactRequest = createAction(
    'contacts/addContactRequest',
);
export const addContactSuccess = createAction(
    'contacts/addContactSuccess',
);
export const addContactError = createAction(
    'contacts/addContactError',
);

//remove Contacts
export const removeContactRequest = createAction(
    'contacts/removeContactRequest',
);
export const removeContactSuccess = createAction(
    'contacts/removeContactSuccess',
);
export const removeContactError = createAction(
    'contacts/removeContactError',
);

//change Filter
export const changeFilter = createAction('contacts/changeFilter');

// const addContact = ({ name, number, id }) => ({
//     type: types.ADD,
//     payload: { name, number, id },
// });
// const removeContact = contactId => ({
//     type: types.REMOVE,
//     payload: contactId,
// });
// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// });
