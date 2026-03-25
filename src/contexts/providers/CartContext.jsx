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

    const { isAuth, user } = useAuth();

    const [isOpen, setIsOpen] = React.useState(false);
    const [isInitialLoading, setIsInitialLoading] = React.useState(isAuth);
    const [cart, setCart] = React.useState();
    const [cartCount, setCartCount] = React.useState();
    const [cartTotal, setCartTotal] = React.useState(0);
    const [shipping] = React.useState(0);

    // Get User Cart
    React.useEffect(() => {
        if (!isAuth) return;
        setIsInitialLoading(true);
        GET_USER_CART().then(res => {
            setCart(res.data);
        }).finally(() => setIsInitialLoading(false));
    }, [isAuth]);
    // Calculate Cart Total
    React.useEffect(() => {
        if (!cart) return;
        setCartCount(cart.length);
        setCartTotal(cart.reduce((total, item) => total + item.product.price * item.quantity, 0));
    }, [cart]);

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
            if (!user) return;
            const { error } = await supabase
                .from("carts")
                .delete()
                .eq("user_id", user.id)
                .eq("product_id", productId);
            if (error) throw error;
            toast.success("Product removed from cart");
            setCart(prev => prev.filter(c => c.product_id !== productId));
        } catch (err) {
            toast.error(err.message);
            throw err;
        }
    }, [user]);

    // Update quantity in cart (used by Cart page +/- controls)
    const updateQuantity = React.useCallback(async ({ productId, quantity }) => {
        try {
            if (!user) return;
            if (quantity <= 0) {
                await removeFromCart({ productId });
                return;
            }

            const { data, error } = await supabase
                .from("carts")
                .update({ quantity })
                .eq("user_id", user.id)
                .eq("product_id", productId)
                .select(`*, product:products(*)`)
                .single();

            if (error) throw error;
            setCart(prev => {
                if (!prev) return prev;
                return prev.map(item => item.product_id === productId ? data : item);
            });
        } catch (err) {
            toast.error(err.message);
            console.log(err);
        }
    }, [removeFromCart, user]);

    // Clear the cart after a successful checkout/order
    const clearCart = React.useCallback(async () => {
        try {
            if (!user) return;
            const { error } = await supabase
                .from("carts")
                .delete()
                .eq("user_id", user.id);
            if (error) throw error;
            setCart([]);
        } catch (err) {
            toast.error(err.message);
            console.log(err);
        }
    }, [user]);

    return (
        <CartContext.Provider value={{
            isOpen,
            isInitialLoading,
            cart,
            cartCount,
            cartTotal,
            shipping,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            toggleDrawer,
            closeDrawer
        }}>
            {children}
        </CartContext.Provider>
    )
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => React.useContext(CartContext);