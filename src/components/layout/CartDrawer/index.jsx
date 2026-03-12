import Drawer from "@components/UI/Drawer";
import React from "react";

function CartDrawer() {

    const [isOpen, setIsOpen] = React.useState(false);
    const closeDrawer = React.useCallback(() => setIsOpen(false), []);

    return (
        <Drawer isOpen={isOpen}>
            <div className="cart-drawer h-screen bg-white w-100 ms-auto">
                <button onClick={closeDrawer}>Close</button>
                <div>Cart Drawer</div>
            </div>
        </Drawer>
    )
}

export default CartDrawer;