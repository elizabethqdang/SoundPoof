export const createLike = (trackId) => (
	$.ajax({
		url: `api/tracks/${trackId}/like`,
		method: 'POST',
	})
);

export const deleteLike = (trackId) => (
	$.ajax({
		url: `api/tracks/${trackId}/like`,
		method: 'DELETE'
	})
);