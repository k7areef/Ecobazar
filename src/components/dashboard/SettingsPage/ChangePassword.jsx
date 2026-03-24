/**
 * @typedef {Object} RecentOrderHistoryProps
 * @prop {string} [className]
 */

import React from 'react';

/**
 * @param {RecentOrderHistoryProps} props
 */

function ChangePassword({ className }) {
    return (
        <div className={`change-password border border-grey-100 rounded-lg${className ? ` ${className}` : ''}`}>
            Change Password
        </div>
    )
}

export default ChangePassword;