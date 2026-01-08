const api = import.meta.env.VITE_API;

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

export const GET_AUTH_USER = async (jwt) => {
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