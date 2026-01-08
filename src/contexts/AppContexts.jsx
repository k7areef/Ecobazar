import { AuthContextProvider } from "./AuthContext";
import { CartContextProvider } from "./CartContext";
import { ModalsContextProvider } from "./ModalsContext";

function AppContexts({ children }) {
    return (
        <>
            <AuthContextProvider>
                <ModalsContextProvider>
                    <CartContextProvider>
                        {children}
                    </CartContextProvider>
                </ModalsContextProvider>
            </AuthContextProvider>
        </>
    )
}

export default AppContexts;