import AccountSettings from "@components/dashboard/SettingsPage/AccountSettings";
import BillingAddress from "@components/dashboard/SettingsPage/BillingAddress";
import ChangePassword from "@components/dashboard/SettingsPage/ChangePassword";
import useChangeTitle from "@hooks/useChangeTitle";

function SettingsPage() {
    useChangeTitle({ title: 'Settings' });
    return (
        <div className="settings-page">
            <div className="content-wrapper space-y-5">
                <AccountSettings />
                <BillingAddress />
                <ChangePassword />
            </div>
        </div>
    )
}

export default SettingsPage;