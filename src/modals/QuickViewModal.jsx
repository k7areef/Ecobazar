import React from "react";
import { useModals } from "@contexts/ModalsContext";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function QuickViewModal() {

    const { openQuickViewModal, setOpenQuickViewModal } = useModals();

    const closeCartModalHandler = React.useCallback(() => {
        setOpenQuickViewModal(false);
    }, [setOpenQuickViewModal]);

    return (
        <div
            onClick={closeCartModalHandler}
            className={`quick-view-modal w-full h-screen flex items-center fixed top-0 left-0 z-100 bg-black/60 transition duration-300 ease-out ${openQuickViewModal ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <div className="container flex flex-col gap-3">
                <button
                    type="button"
                    onClick={e => {
                        e.stopPropagation();
                        closeCartModalHandler();
                    }}
                    className="transition text-white sm:hover:text-danger ms-auto"
                >
                    <span className="sr-only">Close Quick View Modal</span>
                    <FontAwesomeIcon icon={faXmark} className="text-2xl" />
                </button>
                <div
                    onClick={e => e.stopPropagation()}
                    className="quick-view-content bg-white rounded-md shadow p-5"
                >
                    Quick View Modal Content
                </div>
            </div>
        </div>
    )
}

export default QuickViewModal;