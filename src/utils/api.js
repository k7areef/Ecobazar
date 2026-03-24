import { supabase } from "./supabaseClient";

// Testimonials
export const GET_TESTIMONIALS = async () => {
    try {
        const response = await supabase.from("testimonials").select("*");
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