import AccountSettings from "@components/dashboard/AccountSettings";
import BillingAddress from "@components/dashboard/BillingAddress";
import ChangePassword from "@components/dashboard/ChangePassword";
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