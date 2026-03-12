import useChangeTitle from "@hooks/useChangeTitle";

function SettingsPage() {
    useChangeTitle({ title: 'Settings' });
    return (
        <div className="settings-page">
            SettingsPage
        </div>
    )
}

export default SettingsPage;