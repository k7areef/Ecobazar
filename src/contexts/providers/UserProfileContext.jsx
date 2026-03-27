import React from "react";
import { useAuth } from "./AuthContext";
import { supabase } from "@utils/supabaseClient";

const UserProfileContext = React.createContext();

const GET_USER_PROFILE = async () => {
    try {
        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .single()
            .then(res => {
                return res;
            })
        if (error) throw error;
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const UserProfileContextProvider = ({ children }) => {

    const { isAuth, authLoading } = useAuth();

    const [profile, setProfile] = React.useState(null);
    const [loading, setLoading] = React.useState(isAuth || authLoading || !profile);

    React.useEffect(() => {
        if (!isAuth) {
            setLoading(false);
            return;
        };
        setLoading(true);
        // Get user profile
        GET_USER_PROFILE().then(data => {
            setProfile(data);
        }).finally(() => {
            setLoading(false);
        });
    }, [isAuth]);

    return (
        <UserProfileContext.Provider value={{
            profile,
            setProfile,
            loading
        }}>
            {children}
        </UserProfileContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useProfile = () => React.useContext(UserProfileContext);