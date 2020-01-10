/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export default function ContactForm({ onSave }) {
  const [name, setName] = useState('');
  const nameId = useRef(shortid.generate());

  const onChangeName = evt => {
    setName(evt.target.value);
  };

  const [number, setNumber] = useState('');
  const numberId = useRef(shortid.generate());
  const onChangeNumber = evt => {
    setNumber(evt.target.value);
  };

  const onSubmit = evt => {
    onSave({ name, number });
    evt.preventDefault();

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit} className="Form">
      <label> Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChangeName}
        id={nameId.current}
      />
      <label>Phone number: </label>

      <input
        type="text"
        name="number"
        value={number}
        onChange={onChangeNumber}
        id={numberId.current}
      />
      <button type="submit" className="Form_button">
        Save contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
