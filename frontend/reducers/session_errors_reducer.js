import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS } from "../actions/session_actions";
import { CLOSE_MODAL } from "../actions/modal_actions";
import merge from 'lodash/merge';

const _initialSessionErrors = {
	// curinitialErrors: null,
	errors: []
};

const sessionErrorsReducer = (state = [], action) => {
	Object.freeze(state);
	let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
			return [];
		case RECEIVE_SESSION_ERRORS:
			// newState = merge({}, _nullUser);
			newState.errors = action.errors;
			return newState;
		case CLEAR_SESSION_ERRORS:
			newState.errors = [];
			return newState;
    case CLOSE_MODAL:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
