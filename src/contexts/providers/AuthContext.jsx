import { supabase } from "@utils/supabaseClient";
import React from "react";

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {

    const [isAuth, setIsAuth] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            setIsAuth(!!session?.user);
            setLoading(false);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => React.useContext(AuthContext);