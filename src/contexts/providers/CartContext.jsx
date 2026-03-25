import React from 'react'
import { useAuth } from './AuthContext';
import { supabase } from '@utils/supabaseClient';

const CartContext = React.createContext()

const GET_USER_CART = async () => {
    try {
        return await supabase.from("carts").select("*");
    } catch (err) {
        console.log(err.message);
    }

};

export const CartProvider = ({ children }) => {

    const { isAuth } = useAuth();

    const [isOpen, setIsOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(isAuth);
    const [cart, setCart] = React.useState();

    React.useEffect(() => {
        if (!isAuth) return;
        setLoading(true);
        GET_USER_CART().then(res => {
            setCart(res.data);
        }).finally(() => setLoading(false));
    }, [isAuth]);

    const toggleDrawer = React.useCallback(() => setIsOpen(!isOpen), [isOpen]);
    const closeDrawer = React.useCallback(() => setIsOpen(false), []);

    return (
        <CartContext.Provider value={{
            isOpen,
            loading,
            cart,
            toggleDrawer,
            closeDrawer
        }}>
            {children}
        </CartContext.Provider>
    )
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => React.useContext(CartContext);