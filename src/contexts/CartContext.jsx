import React from "react";

const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {

    const jwtStored = localStorage.getItem("jwt");
    const [cart, setCart] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(jwtStored ? true : false);

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