import CartModal from "./CartModal";
import QuickViewModal from "./QuickViewModal";
import SubscribeModal from "./SubscribeModal";
function AppModals({ children }) {
    return (
        <>
            {children}
            <CartModal />
            <QuickViewModal />
            <SubscribeModal />
            {/* Other Modalas */}
        </>
    )
}
export default AppModals;