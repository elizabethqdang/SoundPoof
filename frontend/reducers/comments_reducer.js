import { RECEIVE_SINGLE_TRACK, RECEIVE_TRACK } from '../actions/track_actions';
import { REMOVE_COMMENT, RECEIVE_COMMENT, RECEIVE_COMMENT_ERRORS } from '../actions/comment_actions';
import merge from 'lodash/merge';

const commentsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	let newState = Object.assign({}, oldState);

	switch (action.type) {
		case RECEIVE_COMMENT:
			return Object.assign(newState, {[action.comment.id]: action.comment});
		case REMOVE_COMMENT:
			delete newState[action.commentId.id];
			return newState;
		case RECEIVE_SINGLE_TRACK:
			if (action.comments === undefined) {
				return {};
			} else {
				return Object.assign({}, action.comments);
			};
		default:
			return oldState;
	}
};

export default commentsReducer;