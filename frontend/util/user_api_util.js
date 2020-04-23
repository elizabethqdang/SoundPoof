export const fetchAllUsers = () => (
    $.ajax({
        url: '/api/users',
        method: 'GET'
    })
);

export const fetchUser = id => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${id}`
    })
);

export const createLike = (trackId) => {
	return $.ajax({
		url: `api/users/likes/${trackId}`,
		method: 'post',
	});
};

export const deleteLike = (trackId) => {
	return $.ajax({
		url: `api/users/likes/${trackId}`,
		method: 'delete',
	});
};