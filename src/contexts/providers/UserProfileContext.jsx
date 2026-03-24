import React from "react";
import { useAuth } from "./AuthContext";
import { GET_USER_PROFILE } from "@utils/api";

const UserProfileContext = React.createContext();

export const UserProfileContextProvider = ({ children }) => {

    const { isAuth } = useAuth();

    const [profile, setProfile] = React.useState(null);

    React.useEffect(() => {
        if (!isAuth) return;
        GET_USER_PROFILE().then(res => {
            setProfile(res.data);
        })
    }, [isAuth]);

    return (
        <UserProfileContext.Provider value={{
            profile
        }}>
            {children}
        </UserProfileContext.Provider>
    )
}