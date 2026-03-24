import React from "react";
import { CartProvider } from "./providers/CartContext";
import { AuthContextProvider } from "./providers/AuthContext";

function AppProviders({ children }) {
    return (
        <React.Fragment>
            <AuthContextProvider>
                <CartProvider>
                    {children}
                </CartProvider>
            </AuthContextProvider>
        </React.Fragment>
    )
}

export default AppProviders;