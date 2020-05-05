import { RECEIVE_CURRENT_TRACK } from '../actions/track_actions';
import { REMOVE_COMMENT, RECEIVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const commentsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	let newState = Object.assign({}, oldState);

	switch (action.type) {
		case RECEIVE_CURRENT_TRACK:
			if (action.payload.comments === undefined) {
				return {};
			} else {
				return Object.assign(newState, action.payload.comments);
			};
		case RECEIVE_COMMENT:
			return Object.assign(newState, {[action.comment.id]: action.comment});
		case REMOVE_COMMENT:
			// newState = merge({}, oldState);
			delete newState[action.commentId.id];
			return newState;
		default:
			return oldState;
	}
};

export default commentsReducer;