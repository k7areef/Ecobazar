import React from 'react'
import { useAuth } from './AuthContext';
import { supabase } from '@utils/supabaseClient';
import toast from 'react-hot-toast';

const CartContext = React.createContext()

const GET_USER_CART = async () => {
    try {
        return await supabase.from("carts").select(`*, product:products(*)`);
    } catch (err) {
        console.log(err.message);
    }

};

export const CartProvider = ({ children }) => {

    const { isAuth } = useAuth();

    const [isOpen, setIsOpen] = React.useState(false);
    const [isInitialLoading, setIsInitialLoading] = React.useState(isAuth);
    const [cart, setCart] = React.useState();

    React.useEffect(() => {
        if (!isAuth) return;
        setIsInitialLoading(true);
        GET_USER_CART().then(res => {
            setCart(res.data);
        }).finally(() => setIsInitialLoading(false));
    }, [isAuth]);

    const toggleDrawer = React.useCallback(() => setIsOpen(!isOpen), [isOpen]);
    const closeDrawer = React.useCallback(() => setIsOpen(false), []);
    // Add to cart
    const addToCart = React.useCallback(async ({ productId }) => {
        try {
            const { data, error } = await supabase.from("carts").upsert({
                product_id: productId
            }, {
                onConflict: "user_id, product_id"
            }).select(`*, product:products(*)`).single();
            if (error) throw error;
            toast.success("Product added to cart");
            setCart(prev => ([...prev, data]));
        } catch (err) {
            toast.error(err.message);
            console.log(err);
        }
    }, []);
    // Remvoe from cart
    const removeFromCart = React.useCallback(async ({ productId }) => {
        try {
            const { error } = await supabase.from("carts").delete().eq("product_id", productId);
            if (error) throw error;
            toast.success("Product removed from cart");
            setCart(prev => prev.filter(c => c.product_id !== productId));
        } catch (err) {
            toast.error(err.message);
            throw err;
        }
    }, []);

    return (
        <CartContext.Provider value={{
            isOpen,
            isInitialLoading,
            cart,
            addToCart,
            removeFromCart,
            toggleDrawer,
            closeDrawer
        }}>
            {children}
        </CartContext.Provider>
    )
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => React.useContext(CartContext);