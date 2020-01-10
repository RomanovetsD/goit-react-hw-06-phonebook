/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const ContactFilter = ({ value, onChange }) => (
  <>
    <label className="Label_filter">Find contacts by name</label>
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
