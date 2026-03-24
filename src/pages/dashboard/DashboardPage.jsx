import RecentOrderHistory from "@components/dashboard/DashboardPage/RecentOrderHistory";
import UserAddress from "@components/dashboard/DashboardPage/UserAddress";
import UserAvatar from "@components/dashboard/DashboardPage/UserAvatar";
import useChangeTitle from "@hooks/useChangeTitle";

function DashboardPage() {
    useChangeTitle({ title: 'Dashboard' });
    return (
        <div className="dashboard-page">
            <div className="content-wrapper grid grid-cols-1 md:grid-cols-3 gap-5">
                <UserAvatar />
                <UserAddress />
                <RecentOrderHistory className="md:col-span-3" />
            </div>
        </div>
    )
}

export default DashboardPage;