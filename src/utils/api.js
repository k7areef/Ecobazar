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