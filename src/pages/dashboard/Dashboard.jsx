import { Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="container">
                {/* Dashboard Sidebar */}
                <aside>Sidebar</aside>
                {/* Page */}
                <div className="dashboard-page">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;