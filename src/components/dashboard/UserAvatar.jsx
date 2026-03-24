/**
 * @typedef {Object} RecentOrderHistoryProps
 * @prop {string} [className]
 */

import React from 'react';

/**
 * @param {RecentOrderHistoryProps} props
 */

function UserAvatar({ className }) {
    return (
        <div className={`user-avatar border border-grey-100 rounded-lg${className ? ` ${className}` : ''}`}>
            User Avatar
        </div>
    )
}

export default UserAvatar;