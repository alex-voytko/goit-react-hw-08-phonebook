import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

export const getVisibleContacts = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    },
);
