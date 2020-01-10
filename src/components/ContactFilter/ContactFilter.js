/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const loginInputId = shortid.generate();

const ContactFilter = ({ value, onChange }) => (
  <>
    <label className="Label_filter" htmlFor={loginInputId}>
      Find contacts by name
    </label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="Input_filter"
    />
  </>
);

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default ContactFilter;
