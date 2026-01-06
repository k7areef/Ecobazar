import React from "react";
import { useModals } from "@contexts/ModalsContext";

function SubscribeModal() {

    const { openSubscribe, setOpenSubscribeModal } = useModals();

    const closeCartModalHandler = React.useCallback(() => {
        setOpenSubscribeModal(false);
        localStorage.setItem('subscribe-modal-dismissed', true);
    }, [setOpenSubscribeModal]);

    React.useEffect(() => { // Show subscirbe modal after one second:
        const isDismissed = localStorage.getItem('subscribe-modal-dismissed');
        if (isDismissed === 'true') return;

        const timeout = setTimeout(() => {
            setOpenSubscribeModal(true);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [setOpenSubscribeModal]);

    return (
        <div
            onClick={closeCartModalHandler}
            className={`subscribe-modal w-full h-screen flex items-center fixed top-0 left-0 z-100 bg-black/60 transition duration-300 ease-out ${openSubscribe ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <div className="container flex flex-col gap-3">
                <div
                    onClick={e => e.stopPropagation()}
                    className="subscirbe-content bg-white rounded-md shadow p-5"
                >
                    Subscribe Modal Content
                </div>
            </div>
        </div>
    )
}

export default SubscribeModal;