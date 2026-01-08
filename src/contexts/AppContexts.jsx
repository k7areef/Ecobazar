import { AuthContextProvider } from "./AuthContext";
import { CartContextProvider } from "./CartContext";
import { ModalsContextProvider } from "./ModalsContext";

function AppContexts({ children }) {
    return (
        <>
            <AuthContextProvider>
                <CartContextProvider>
                    <ModalsContextProvider>
                        {children}
                    </ModalsContextProvider>
                </CartContextProvider>
            </AuthContextProvider>
        </>
    )
}

export default AppContexts;