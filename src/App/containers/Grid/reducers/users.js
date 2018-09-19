/**
 *  users reducer
 */

// Import Action Types
import { ACTION_GET_USER_SUCCESS } from '../constants';

const initialState = {
  users:null
};

function users(state = initialState, action) {
  switch (action.type) {
    case ACTION_GET_USER_SUCCESS:
      return state;
    default:
      return state;
  }
}

export default users;
