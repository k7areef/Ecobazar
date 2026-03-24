import React from "react";
import { CartProvider } from "./providers/CartContext";
import { AuthContextProvider } from "./providers/AuthContext";
import { UserProfileContextProvider } from "./providers/UserProfileContext";
import { UserBillingAddressContextProvider } from "./providers/UserBillingAddressContext";

function AppProviders({ children }) {
    return (
        <React.Fragment>
            <AuthContextProvider>
                <UserProfileContextProvider>
                    <UserBillingAddressContextProvider>
                        <CartProvider>
                            {children}
                        </CartProvider>
                    </UserBillingAddressContextProvider>
                </UserProfileContextProvider>
            </AuthContextProvider>
        </React.Fragment>
    )
}

export default AppProviders;