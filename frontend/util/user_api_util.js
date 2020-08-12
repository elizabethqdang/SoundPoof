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
		url: `/api/users/${userId}`,
		dataType: 'json'
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

export const updateUser = (userId, user) => (
	$.ajax({
		method: 'PATCH',
		url: `/api/users/${userId}`,
		contentType: false,
		processData: false,
		dataType: json,
		data: user
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

export const createFollow = (followingId) => {
	return $.ajax({
		method: 'POST',
		url: `/api/users/following/${followingId}`,
	});
};

export const deleteFollow = (followingId) => {
	return $.ajax({
		method: 'DELETE',
		url: `/api/users/following/${followingId}`
	});
};