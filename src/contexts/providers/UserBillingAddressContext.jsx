import React from "react";
import { useAuth } from "./AuthContext";
import { supabase } from "@utils/supabaseClient";

const UserBillingAddressContext = React.createContext();

const GET_USER_BILLING_ADDRESS = async () => {
    try {
        return await supabase.from("addresses").select("*").single();
    } catch (err) {
        console.log(err);
    }
};

export const UserBillingAddressContextProvider = ({ children }) => {

    const { isAuth } = useAuth();

    const [billingAddress, setBillingAddress] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (!isAuth) {
            setLoading(false);
            return;
        };
        setLoading(true);
        GET_USER_BILLING_ADDRESS().then(res => { // Get User Profile
            setBillingAddress(res.data);
        }).finally(() => setLoading(false));
    }, [isAuth]);

    return (
        <UserBillingAddressContext.Provider value={{
            billingAddress,
            setBillingAddress,
            loading
        }}>
            {children}
        </UserBillingAddressContext.Provider>
    )
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBillingAddress = () => React.useContext(UserBillingAddressContext);