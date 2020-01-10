import * as constants from '../server/constants';

const phoneBookReducer = (state = [], { type, payload }) => {
  switch (type) {
    case constants.ADD_CONTACT:
      return [...state, payload.contact];

    case constants.REMOVE_CONTACT:
      return state.filter(contact => contact.id !== payload.id);

    case constants.SET_ALL_CONTACTS:
      return payload.contacts;

    default:
      return state;
  }
};

export default phoneBookReducer;
