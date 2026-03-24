/**
 * @typedef {Object} RecentOrderHistoryProps
 * @prop {string} [className]
 */

import React from 'react';

/**
 * @param {RecentOrderHistoryProps} props
 */

function OrderHistory({ className }) {
    return (
        <div className={`order-history border border-grey-100 rounded-lg${className ? ` ${className}` : ""}`}>
            Order History
        </div>
    )
}

export default OrderHistory;