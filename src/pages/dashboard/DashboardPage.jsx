import useChangeTitle from "@hooks/useChangeTitle";

function DashboardPage() {
    useChangeTitle({ title: 'Dashboard' });
    return (
        <div className="dashboard-page">
            DashboardPage
        </div>
    )
}

export default DashboardPage;