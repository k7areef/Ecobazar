import React from "react";

const ModalsContext = React.createContext();

export const ModalsContextProvider = ({ children }) => {

    const [openCartModal, setOpenCartModal] = React.useState(false);

    return (
        <ModalsContext.Provider
            value={{
                openCartModal, setOpenCartModal
            }}
        >
            {children}
        </ModalsContext.Provider>
    )
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModals = () => React.useContext(ModalsContext);