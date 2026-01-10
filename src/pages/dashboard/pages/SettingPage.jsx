import AccountSetting from "@components/dashboard/setting/AccountSetting";
import BillingAddress from "@components/dashboard/setting/BillingAddress";
import ChangePassword from "@components/dashboard/setting/ChangePassword";

function DashboardSettingPage() {
    return (
        <div className="dashboard-setting-page space-y-5">
            <AccountSetting />
            <BillingAddress />
            <ChangePassword />
        </div>
    )
}

export default DashboardSettingPage;