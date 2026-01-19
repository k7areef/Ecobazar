import { useCart } from "@contexts/CartContext";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartSummary({ ...props }) {
    const { cart, isLoading } = useCart();
    return (
        <div className={`cart-summary ${props.className}`}>
            <div className="subtotal flex items-center justify-between text-lg py-2 border-b border-b-gray-100">
                <span className="text-gray-700">Subtotal:</span>
                {
                    isLoading ? (
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                    ) : (
                        <span className="font-medium">${cart?.cart_total}</span>
                    )
                }
            </div>
            <div className="shipping flex items-center justify-between text-lg py-2 border-b border-b-gray-100">
                <span className="text-gray-700">Shipping:</span>
                {
                    isLoading ? (
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                    ) : (
                        <span className="font-medium">Free</span>
                    )
                }
            </div>
            <div className="total flex items-center justify-between text-lg py-2 border-b border-b-gray-100">
                <span className="text-gray-700">Total:</span>
                {
                    isLoading ? (
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                    ) : (
                        <span className="font-medium">${cart?.cart_total}</span>
                    )
                }
            </div>
        </div>
    )
}

export default CartSummary;