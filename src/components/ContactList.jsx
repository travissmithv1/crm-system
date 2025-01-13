import React from 'react';
import './ContactList.css';

const ContactList = ({ contacts }) => {
    return (
        <div>
            <h2>CRM Contacts</h2>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <strong>{contact.name}</strong> - {contact.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
