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