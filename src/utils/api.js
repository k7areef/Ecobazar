import { supabase } from "./supabaseClient";

// Testimonials
export const GET_TESTIMONIALS = async ({ limit }) => {
    try {
        let query = supabase.from("testimonials").select("*");
        if (limit) {
            query = query.limit(limit);
        }
        const response = await query;
        if (response.error) throw new Error(response.error.message);
        return response;
    } catch (err) {
        console.log(err);
    }
};

// Products
export const GET_PRODUCTS = async ({ limit }) => {
    try {
        let query = supabase.from("products").select("*").limit(limit);
        if (limit) {
            query = query.limit(limit);
        }
        const response = await query;
        if (response.error) throw new Error(response.error.message);
        return response;
    } catch (err) {
        console.log(err);
    }
};

// Categories
export const GET_CATEGORIES = async ({ limit, byImage = false }) => {
    try {
        let query = supabase.from("categories").select("*").limit(limit);
        if (limit) {
            query = query.limit(limit);
        }
        if (byImage) {
            query = query.not("image_url", "is", null);
        }
        const response = await query;
        if (response.error) throw new Error(response.error.message);
        return response;
    } catch (err) {
        console.log(err);
    }
};

// User Profile
export const GET_USER_PROFILE = async () => {
    try {
        const response = await supabase.from("profiles").select("*").single();
        if (response.error) throw new Error(response.error.message);
        return response;
    } catch (err) {
        console.log(err);
    }
};

// User
export const UPDATE_USER = async (values) => {
    try {
        return await supabase.auth.updateUser(values)
    } catch (err) {
        console.log(err);
    }
};