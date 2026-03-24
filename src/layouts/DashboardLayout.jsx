import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faDashboard, faGear, faRotate, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from "react-router-dom";

const links = [
    { to: "/dashboard", label: "Dashboard", icon: faDashboard },
    { to: "/dashboard/orders-history", label: "Order History", icon: faRotate },
    { to: "/wishlist", label: "Wishlist", icon: faHeart },
    { to: "/cart", label: "Shopping Cart", icon: faShoppingBag },
    { to: "/dashboard/settings", label: "Settings", icon: faGear },
]

function DashboardLayout() {
    return (
        <div className="dashboard-layout">
            <div className="container flex items-start gap-5 py-5 md:py-10">
                {/* Sidebar */}
                <aside className="bg-white border border-grey-100 rounded-lg py-3 w-70">
                    {/* Heading */}
                    <div className="heading py-3 px-4.75">
                        <h3 className="font-medium sm:font-semibold text-lg sm:text-xl">Navigation</h3>
                    </div>
                    {/* Links */}
                    <ul>
                        {
                            links.map((link, index) => (<li key={index}>
                                <NavLink
                                    to={link.to}
                                    aria-label={link.label}
                                    end={link.to === "/dashboard"}
                                    className={({ isActive }) => `transition duration-200 flex items-center gap-2 font-medium py-3 px-4 border-s-[3px] ${isActive ? "bg-green-50 border-s-primary" : "opacity-80 border-s-transparent sm:hover:bg-green-50"}`}
                                >
                                    <FontAwesomeIcon icon={link.icon} />
                                    <span>{link.label}</span>
                                </NavLink>
                            </li>))
                        }
                    </ul>
                </aside>
                {/* Main */}
                <main className="flex-1">
                    {/* Outlet */}
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout;