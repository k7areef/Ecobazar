import React from "react";

const ModalsContext = React.createContext();

export const ModalsContextProvider = ({ children }) => {
    const [openCartModal, setOpenCartModal] = React.useState(false);
    const [openQuickViewModal, setOpenQuickViewModal] = React.useState(false);
    const [openSubscribe, setOpenSubscribeModal] = React.useState(false);
    return (
        <ModalsContext.Provider
            value={{
                openCartModal, setOpenCartModal,
                openQuickViewModal, setOpenQuickViewModal,
                openSubscribe, setOpenSubscribeModal
            }}
        >
            {children}
        </ModalsContext.Provider>
    )
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModals = () => React.useContext(ModalsContext);