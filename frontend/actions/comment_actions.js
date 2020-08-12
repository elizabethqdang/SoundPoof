import * as CommentAPIUtil from '../util/comment_api_util';
import { receiveTrack, receiveCurrentTrack } from './track_actions';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const receiveCommentErrors = errors => ({
	type: RECEIVE_COMMENT_ERRORS,
	errors
});

export const receiveComment = comment => ({
	type: RECEIVE_COMMENT,
	comment
})

export const removeComment = commentId => ({
	type: REMOVE_COMMENT,
	commentId
});

export const createComment = (comment, trackId) => dispatch => (
	CommentAPIUtil.createComment(comment, trackId).then(comment => (
		dispatch(receiveComment(comment))
	))
);

export const deleteComment = (commentId) => dispatch => (
	CommentAPIUtil.deleteComment(commentId).then(
			commentId => (dispatch(removeComment(commentId)),
			errors => (dispatch(receiveCommentErrors(errors.responseJSON)))
			// errors => (console.log(errors.responseJSON))
	))
);