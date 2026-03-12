const API = import.meta.env.VITE_API;

const FETCH_DATA = async (endpoint, options = {}) => {
    try {
        const response = await fetch(`${API}${endpoint}`, options);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const GET = (endpoint, options = {}) => {
    return FETCH_DATA(endpoint, options);
};
export const POST = (endpoint, options = {}) => {
    return FETCH_DATA(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    });
};
export const PUT = (endpoint, options = {}) => {
    return FETCH_DATA(endpoint, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    });
};
export const DELETE = (endpoint, options = {}) => {
    return FETCH_DATA(endpoint, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    });
};