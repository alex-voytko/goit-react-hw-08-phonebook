import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
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
    changeFilter,
} from './contacts-actions';

const items = createReducer([], {
    [fetchContactsSuccess]: (_, action) => action.payload,
    [addContactSuccess]: (state, action) => [
        ...state,
        action.payload,
    ],
    [removeContactSuccess]: (state, action) =>
        state.filter(contact => contact.id !== action.payload),
});

const loading = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [removeContactRequest]: () => true,
    [removeContactSuccess]: () => false,
    [removeContactError]: () => false,
});

const error = createReducer(null, {});

const filter = createReducer('', {
    [changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
    loading,
});

// const items = (state = [], { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload];

//         case types.REMOVE:
//             return state.filter(contact => contact.id !== payload);

//         default:
//             return state;
//     }
// };
// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.CHANGE_FILTER:
//             return payload;

//         default:
//             return state;
//     }
// };
