export const fetchAllUsers = () => (
    $.ajax({
        url: '/api/users',
				method: 'GET',
				dataType: 'json'
    })
);

export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
				url: `/api/users/${userId}`
    })
);

export const createLike = (trackId) => {
	return $.ajax({
		url: `/api/users/likes/${trackId}`,
		method: 'post',
	});
};

export const deleteLike = (trackId) => {
	return $.ajax({
		url: `/api/users/likes/${trackId}`,
		method: 'delete',
	});
};

export const updateUser = (userId, formData) => {
	return $.ajax({
		url: `/api/users/${userId}`,
		method: 'patch',
		contentType: false,
		processData: false,
		data: formData,
	});
};