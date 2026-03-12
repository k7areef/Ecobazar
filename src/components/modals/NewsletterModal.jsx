import React from "react";
import BaseModal from "../UI/BaseModal";

function NewsLetterModal() {

    const [isOpen, setIsOpen] = React.useState(false);
    const closeModal = React.useCallback(() => setIsOpen(false), []);

    return (
        <BaseModal isOpen={isOpen}>
            <div className="newsletter-modal">
                <button onClick={closeModal}>Close</button>
                <div>NewsLetter Modal</div>
            </div>
        </BaseModal>
    )
}

export default NewsLetterModal;