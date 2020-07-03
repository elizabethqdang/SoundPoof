export const fetchAllUsers = () => (
  $.ajax({
		method: 'GET',
    url: '/api/users',
		dataType: 'json'
  })
);

export const fetchUser = (userId) => (
  $.ajax({
    method: 'GET',
		url: `/api/users/${userId}`
  })
);

export const fetchUsers = (query) => (
	$.ajax({
		method: 'GET',
		url: `/api/users`,
		data: {
			query: query.query,
			search: query.search,
			user: query.user,
			username: query.username
		}
	})
)

export const updateUser = (userId, formData) => (
	$.ajax({
		method: 'PATCH',
		url: `/api/users/${userId}`,
		contentType: false,
		processData: false,
		data: formData,
	})
);

export const createLike = (trackId) => {
	return $.ajax({
		method: 'POST',
		url: `/api/users/likes/${trackId}`
	});
};

export const deleteLike = (trackId) => {
	return $.ajax({
		method: 'DELETE',
		url: `/api/users/likes/${trackId}`
	});
};

export const createRepost = (trackId) => {
	return $.ajax({
		method: 'POST',
		url: `/api/users/reposts/${trackId}`,
	});
};

export const deleteRepost = (trackId) => {
	return $.ajax({
		method: 'DELETE',
		url: `/api/users/reposts/${trackId}`
	});
};