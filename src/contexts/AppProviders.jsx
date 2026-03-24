import React from "react";
import { CartProvider } from "./providers/CartContext";
import { AuthContextProvider } from "./providers/AuthContext";
import { UserProfileContextProvider } from "./providers/UserProfileContext";

function AppProviders({ children }) {
    return (
        <React.Fragment>
            <AuthContextProvider>
                <UserProfileContextProvider>
                    <CartProvider>
                        {children}
                    </CartProvider>
                </UserProfileContextProvider>
            </AuthContextProvider>
        </React.Fragment>
    )
}

export default AppProviders;