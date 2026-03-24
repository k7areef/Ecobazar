import { supabase } from "@utils/supabaseClient";
import React from "react";

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {

    const [isAuth, setIsAuth] = React.useState(false);

    React.useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            const isLoggedIn = !!session?.user
            setIsAuth(isLoggedIn);
        })
        subscription.unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => React.useContext(AuthContext);