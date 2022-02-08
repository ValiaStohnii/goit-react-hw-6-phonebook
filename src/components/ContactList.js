import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsAction from '../redux/contacts/contacts-actions';

const ContactList = onDeleteContact => {
  const contacts = useSelector(state => state.contacts.items);
  return (
    <ul>
      {contacts.map(contacts => (
        <li key={contacts.id} name={contacts.name}>
          <p>{contacts.name}</p>
          <p>{contacts.number}</p>
          <button type="button" onClick={() => onDeleteContact(contacts.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
