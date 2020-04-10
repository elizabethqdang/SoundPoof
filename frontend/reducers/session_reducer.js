// import merge from "lodash/merge";
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const _nullUser = {
	// isAuthenticated: false,
	// user: {},
  id: null
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(_nullUser);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { 
				// ...state,
				id: action.currentUser.id,
				// user: action.currentUser,
				// isAuthenticated: !!action.currentUser
			};
      // const currentUser = action.currentUser;
      // return merge({}, { currentUser });
    case LOGOUT_CURRENT_USER:
      return {
				// isAuthenticated: false,
				// user: undefined,
				// id: null,
				_nullUser
			}
    default:
      return state;
  }
};

export default sessionReducer;
