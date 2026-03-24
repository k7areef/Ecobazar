/**
 * @typedef {Object} RecentOrderHistoryProps
 * @prop {string} [className]
 */

import React from 'react';

/**
 * @param {RecentOrderHistoryProps} props
 */

function AccountSettings({ className }) {
    return (
        <div className={`account-settings border border-grey-100 rounded-lg${className ? ` ${className}` : ''}`}>
            Account Settings
        </div>
    )
}

export default AccountSettings;