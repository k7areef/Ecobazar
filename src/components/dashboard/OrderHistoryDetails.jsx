/**
 * @typedef {Object} RecentOrderHistoryProps
 * @prop {string} [className]
 */

import React from 'react';

/**
 * @param {RecentOrderHistoryProps} props
 */

function OrderHistoryDetails({ className }) {
    return (
        <div className={`order-history-details border border-grey-100 rounded-lg${className ? ` ${className}` : ""}`}>
            Order History Details
        </div>
    )
}

export default OrderHistoryDetails;