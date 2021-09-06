import React from 'react';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

const ContactsPage = () => (
    <>
        <div className="contacts-page-container">
            <Container className="phonebook-cont" title="Phonebook">
                <ContactForm />
            </Container>
            <Container className="contacts-cont" title="Contacts">
                <Filter />
                <ContactList />
            </Container>
        </div>
    </>
);

export default ContactsPage;
