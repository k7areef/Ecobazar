import CartModal from "./CartModal";
function AppModals({ children }) {
    return (
        <>
            {children}
            <CartModal />
            {/* Other Modalas */}
        </>
    )
}
export default AppModals;