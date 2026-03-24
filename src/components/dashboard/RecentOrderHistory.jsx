/**
 * @typedef {Object} RecentOrderHistoryProps
 * @prop {string} [className]
 */

import React from 'react';

/**
 * @param {RecentOrderHistoryProps} props
 */

function RecentOrderHistory({ className }) {
    return (
        <div className={`recent-order-history border border-grey-100 rounded-lg${className ? ` ${className}` : ''}`}>
            Recent Order History
        </div>
    )
}

export default RecentOrderHistory;