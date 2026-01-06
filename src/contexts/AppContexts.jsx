import { ModalsContextProvider } from "./ModalsContext";

function AppContexts({ children }) {
    return (
        <>
            <ModalsContextProvider>
                {children}
            </ModalsContextProvider>
        </>
    )
}

export default AppContexts;