export const fetchAllUsers = () => (
    $.ajax({
        url: '/api/users',
        method: 'GET'
    })
);

export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
);