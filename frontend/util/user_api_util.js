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