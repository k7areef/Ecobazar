import { useCart } from '@contexts/providers/CartContext';

function useInCart(productId) {
    const { cart } = useCart();
    if (!cart || cart.length === 0) return { inCart: false };
    return { inCart: cart.find(cItem => cItem.product_id === productId) };
}

export default useInCart;