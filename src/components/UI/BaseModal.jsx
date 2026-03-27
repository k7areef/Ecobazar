import React from "react";
import { createPortal } from "react-dom";

/**
 * @typedef {Object} BaseModalProps
 * @prop {boolean} isOpen
 */

/**
 * @param {BaseModalProps} props
 */

function BaseModal({ isOpen, children }) {

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className="base-modal h-screen w-full bg-modal-bg fixed left-0 top-0 z-999">
            {children}
        </div>,
        document.getElementById('modal-root')
    )
}

export default BaseModal;