import React, { useContext } from "react";

const QuickViewModalContext = React.createContext();

export const QuickViewModalContextProvider = ({ children }) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [productId, setProductId] = React.useState(null);

    const openModal = React.useCallback((productId) => {
        setProductId(productId);
        setIsOpen(true);
    }, []);

    const closeModal = React.useCallback(() => {
        setIsOpen(false);
        setProductId(null);
    }, []);

    return (
        <QuickViewModalContext.Provider value={{ isOpen, productId, openModal, closeModal }}>
            {children}
        </QuickViewModalContext.Provider>
    )
};

// eslint-disable-next-line react-refresh/only-export-components
export const useQuickViewModal = () => useContext(QuickViewModalContext);