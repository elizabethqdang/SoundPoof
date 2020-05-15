export const createComment = (comment, track_id) => (
	$.ajax({
		method: 'POST',
		url: `api/tracks/${track_id}/comments`,
		processData: false,
		contentType: false,
		dataType: 'json',
		data: comment
	})
);

export const updateComment = (comment, track_id) => (
	$.ajax({
		method: 'PATCH',
		url: `api/comments/${track_id}`,
		processData: false,
		contentType: false,
		dataType: 'json',
		data: { comment: { comment } }
	})
);

export const deleteComment = track_id => (
	$.ajax({
		method: 'DELETE',
		url: `api/comments/${track_id}`
	})
);