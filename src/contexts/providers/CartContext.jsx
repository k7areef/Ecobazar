import React from 'react'

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {

    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = React.useCallback(() => setIsOpen(!isOpen), [isOpen]);
    const closeDrawer = React.useCallback(() => setIsOpen(false), []);

    return (
        <CartContext.Provider value={{
            isOpen,
            toggleDrawer,
            closeDrawer
        }}>
            {children}
        </CartContext.Provider>
    )
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => React.useContext(CartContext);