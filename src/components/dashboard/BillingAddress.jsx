/**
 * @typedef {Object} RecentOrderHistoryProps
 * @prop {string} [className]
 */

import React from 'react';

/**
 * @param {RecentOrderHistoryProps} props
 */

function BillingAddress({ className }) {
    return (
        <div className={`billing-address border border-grey-100 rounded-lg${className ? ` ${className}` : ''}`}>
            Billing Address
        </div>
    )
}

export default BillingAddress;