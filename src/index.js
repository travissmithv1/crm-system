import React from 'react';
import ReactDOM from 'react-dom/client';
import ContactList from './components/ContactList';

const contacts = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
];

const App = () => (
    <div>
        <h1>My CRM</h1>
        <ContactList contacts={contacts} />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
