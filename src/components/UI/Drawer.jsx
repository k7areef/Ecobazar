/**
 * @typedef {Object} DrawerProps
 * @prop {boolean} isOpen
 * @prop {string} [dir]
 */

import React from "react";
import { createPortal } from "react-dom";

/**
 * @param {DrawerProps} props
 */

function Drawer({ isOpen, children }) {

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        createPortal(
            <div className="drawer h-screen w-full bg-modal-bg backdrop-blur-xs absolute z-1 top-0 left-0">
                {children}
            </div>,
            document.getElementById('modal-root')
        )
    )
}

export default Drawer;