import React from "react";
import { CartProvider } from "./providers/CartContext";

function AppProviders({ children }) {
    return (
        <React.Fragment>
            <CartProvider>
                {children}
            </CartProvider>
        </React.Fragment>
    )
}

export default AppProviders;