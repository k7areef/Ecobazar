const api = import.meta.env.VITE_API;

// Auth Actions:
export const LOGIN = async (data) => {
    try {
        const res = await fetch(`${api}/auth/local`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};
export const SIGNUP = async (data) => {
    try {
        const res = await fetch(`${api}/auth/local/register`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};
export const CHANGE_MY_PASSWORD = async (jwt, data) => {
    try {
        const res = await fetch(`${api}/auth/change-password`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${jwt}`
            },
            body: JSON.stringify(data)
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// Authenticated User:
export const GET_MY_USER = async (jwt) => {
    try {
        const res = await fetch(`${api}/users/me`, {
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${jwt}`
            }
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};
export const UPDATE_MY_USER = async (jwt, authenticatedUserDocumentId, updatedData) => {
    try {
        const res = await fetch(`${api}/users/${authenticatedUserDocumentId}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${jwt}`
            },
            body: JSON.stringify({ data: updatedData })
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// Cart:
export const GET_MY_CART = async (jwt) => {
    try {
        const res = await fetch(`${api}/carts/me`, {
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${jwt}`
            }
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};
export const UPDATE_MY_CART = async (jwt, updatedData) => {
    try {
        const res = await fetch(`${api}/carts/me`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${jwt}`
            },
            body: JSON.stringify({ data: updatedData })
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};