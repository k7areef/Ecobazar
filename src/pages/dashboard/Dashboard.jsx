import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faGauge, faGear, faRotate, faShoppingBag, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from "react-router-dom";

const links = [
    {
        to: "/dashboard",
        icon: faGauge,
        text: "Dashboard"
    },
    {
        to: "/dashboard/order-history",
        icon: faRotate,
        text: "Order History"
    },
    {
        to: "/wishlist",
        icon: faHeart,
        text: "Wishlist"
    },
    {
        to: "/cart",
        icon: faShoppingBag,
        text: "Shopping Cart"
    },
    {
        to: "/dashboard/setting",
        icon: faGear,
        text: "Settings"
    },
    {
        to: "/",
        icon: faSignOut,
        text: "Log-out"
    }
];

function Dashboard() {
    return (
        <div className="dashboard py-5 md:py-10">
            <div className="container flex items-start gap-5 max-lg:flex-col">
                {/* Dashboard Sidebar */}
                <aside className="w-full lg:w-100 bg-white border border-gray-100 rounded-md py-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium my-3 mx-5">Navigation</h3>
                    <ul className="links">
                        {
                            links.map((link, index) => (<NavLink
                                key={index}
                                to={link.to}
                                end={link.to === "/dashboard"}
                                className={({ isActive }) => `transition flex items-center gap-2 p-3 font-medium border-s-2 ${isActive ? "border-s-primary bg-green-gray-50 text-inherit" : "border-s-transparent text-gray-600 sm:hover:bg-green-gray-50 sm:hover:text-inherit sm:hover:border-s-primary"}`}
                            >
                                <FontAwesomeIcon icon={link.icon} />
                                <span>{link.text}</span>
                            </NavLink>))
                        }
                    </ul>
                </aside>
                {/* Page */}
                <div className="dashboard-page w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;