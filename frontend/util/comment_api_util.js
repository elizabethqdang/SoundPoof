export const createComment = (comment, trackId) => (
	$.ajax({
		method: 'POST',
		url: `api/tracks/${trackId}/comments`,
		processData: false,
		contentType: false,
		dataType: 'json',
		data: comment
	})
);

export const updateComment = (trackId, commentId) => (
	$.ajax({
		method: 'PATCH',
		url: `api/comments/${trackId}`,
		processData: false,
		contentType: false,
		dataType: 'json',
		data: { comment: { comment } }
	})
);

export const deleteComment = (trackId, commentId) => (
	$.ajax({
		method: 'DELETE',
		url: `/api/comments/${commentId}`
		// url: `api/tracks/${trackId}/comments/${commentId}`
	})
);