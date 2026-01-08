import React from "react";
import { useAuth } from "./AuthContext";

const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {

    const { jwt } = useAuth();
    const [cart, setCart] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(jwt ? true : false);

    React.useEffect(() => {
        if (jwt) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [jwt]);

    return (
        <CartContext.Provider
            value={{
                cart, setCart,
                isLoading, setIsLoading
            }}
        >
            {children}
        </CartContext.Provider>
    )
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => React.useContext(CartContext);