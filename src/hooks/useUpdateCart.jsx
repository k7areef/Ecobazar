import React from "react";
import { useCart } from "@contexts/CartContext";
import { UPDATE_MY_CART } from "@utils/api";
import { useAuth } from "@contexts/AuthContext";
function useUpdateCart() {
    const { jwt } = useAuth();
    const { cart, setCart } = useCart();
    const [isLoading, setIsLoading] = React.useState(false);
    // Remove From Cart:
    const removeFromCart = React.useCallback(async (id) => {
        setIsLoading(true);
        const data = await UPDATE_MY_CART(jwt, {
            items: cart?.items?.map(item => ({ ...item, product: item.product.documentId }))
                .filter(item => item.id !== id)
                .map(item => {
                    delete item.id;
                    return item;
                })
        });
        setCart(data);
        setIsLoading(false);
    }, [cart?.items, jwt, setCart, setIsLoading])
    // Add To Cart:
    const addToCart = React.useCallback(async (product) => {
        setIsLoading(true);
        await UPDATE_MY_CART(jwt, {
            items: [...(cart?.items || []), { quantity: 1, product: product.documentId }]
        });
        setCart(prev => ({ ...prev, items_total: prev.items_total + 1, cart_total: prev.cart_total + product.price, items: [...prev.items, product] }));
        setIsLoading(false);
    }, [cart?.items, jwt, setCart, setIsLoading])
    // Increase by quantity:
    const updateByQuantity = React.useCallback(async (quantity) => {
        console.log(quantity);
    }, []);
    return {
        removeFromCart,
        addToCart,
        updateByQuantity,
        isLoading
    }
}
export default useUpdateCart;