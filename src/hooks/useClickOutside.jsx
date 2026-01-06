import React from "react";
function useClickOutside() {
    const ref = React.useRef(null);
    const [isOpen, setIsOpen] = React.useState(false);
    React.useEffect(() => {
        const handleClickOutSide = (e) => { if (ref.current && !ref.current.contains(e.target)) setIsOpen(false); };
        document.addEventListener("mousedown", handleClickOutSide);
        return () => document.removeEventListener("mousedown", handleClickOutSide);
    }, []);
    return { ref, isOpen, setIsOpen }
}
export default useClickOutside;