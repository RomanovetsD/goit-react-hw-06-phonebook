import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, removeContact }) => (
  <ul className="List">
    {contacts.map(contact => (
      <li key={contact.id} className="List_item">
        <p>
          <span>Name :</span> {contact.name}
        </p>
        <p className="List_number">
          <span>Number :</span> {contact.number}
        </p>
        <button
          type="button"
          onClick={() => removeContact(contact.id)}
          className="Button_contact"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,

  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
