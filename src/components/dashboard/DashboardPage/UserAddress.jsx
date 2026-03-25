/**
 * @typedef {Object} RecentOrderHistoryProps
 * @prop {string} [className]
 */

import { useBillingAddress } from '@contexts/providers/UserBillingAddressContext';
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @param {RecentOrderHistoryProps} props
 */

function UserAddress({ className }) {

    const { loading, billingAddress } = useBillingAddress();

    return (
        <div className={`user-address border border-grey-100 rounded-lg p-3 md:p-5 flex flex-col gap-2${className ? ` ${className}` : ''}`}>
            <h3 className='font-medium uppercase mb-3 text-xl text-grey-400'>Billing Address</h3>
            <div>
                <h4 className='font-semibold text-lg mb-1'>
                    {
                        loading ? (
                            <span className='animate-pulse'>Loading...</span>
                        ) : (
                            <>
                                {billingAddress?.first_name}
                                {" "}
                                {billingAddress?.last_name}
                            </>
                        )
                    }
                </h4>
                <p className='font-medium'>
                    {
                        loading ? (
                            <span className='animate-pulse'>Loading...</span>
                        ) : (
                            billingAddress?.street_address
                        )
                    }
                </p>
            </div>
            <h4>
                {
                    loading ? (
                        <span className='animate-pulse'>Loading...</span>
                    ) : (
                        billingAddress?.email
                    )
                }
            </h4>
            <h4>
                {
                    loading ? (
                        <span className='animate-pulse'>Loading...</span>
                    ) : (
                        billingAddress?.phone
                    )
                }
            </h4>

            <Link
                to="/dashboard/settings"
                className="text-primary sm:hover:underline block w-fit font-medium mt-auto"
            >
                Edit Address
            </Link>
        </div>
    )
}

export default UserAddress;