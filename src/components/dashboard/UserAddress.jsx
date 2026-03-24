/**
 * @typedef {Object} RecentOrderHistoryProps
 * @prop {string} [className]
 */

import React from 'react';

/**
 * @param {RecentOrderHistoryProps} props
 */

function UserAddress({ className }) {
    return (
        <div className={`user-address border border-grey-100 rounded-lg${className ? ` ${className}` : ''}`}>
            User Address
        </div>
    )
}

export default UserAddress;