import Drawer from "@components/UI/Drawer";
import { useCart } from "@contexts/providers/CartContext";
import React from "react";

function CartDrawer() {

    const { isOpen, closeDrawer } = useCart();

    return (
        <Drawer isOpen={isOpen} closeDrawer={closeDrawer}>
            <div
                onClick={e => e.stopPropagation()}
                className="cart-drawer h-screen bg-white w-75 sm:w-85 md:w-100 ms-auto"
            >
                <button onClick={closeDrawer}>Close</button>
                <div>Cart Drawer</div>
            </div>
        </Drawer>
    )
}

export default CartDrawer;