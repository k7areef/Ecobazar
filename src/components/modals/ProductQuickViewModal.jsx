import React from "react";
import BaseModal from "../UI/BaseModal";

function ProductQuickViewModal() {

    const [isOpen, setIsOpen] = React.useState(false);
    const closeModal = React.useCallback(() => setIsOpen(false), []);

    return (
        <BaseModal isOpen={isOpen}>
            <div className="product-qucik-view-modal">
                <button onClick={closeModal}>Close</button>
                <div>Product Quick View Modal</div>
            </div>
        </BaseModal>
    )
}

export default ProductQuickViewModal;