import React from "react";
import { useAuth } from "./AuthContext";
import { GET_USER_PROFILE } from "@utils/api";

const UserProfileContext = React.createContext();

export const UserProfileContextProvider = ({ children }) => {

    const { isAuth, authLoading } = useAuth();

    const [profile, setProfile] = React.useState(null);
    const [loading, setLoading] = React.useState(authLoading || !profile);

    React.useEffect(() => {
        if (!isAuth) return;
        setLoading(true);
        GET_USER_PROFILE().then(res => { // Get User Profile
            setProfile(res.data);
        }).finally(() => setLoading(false));
    }, [isAuth]);

    return (
        <UserProfileContext.Provider value={{
            profile,
            loading
        }}>
            {children}
        </UserProfileContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useProfile = () => React.useContext(UserProfileContext);