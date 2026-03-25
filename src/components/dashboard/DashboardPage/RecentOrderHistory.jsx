/**
 * @typedef {Object} RecentOrderHistoryProps
 * @prop {string} [className]
 */

import { useQuery } from '@tanstack/react-query';
import { supabase } from '@utils/supabaseClient';
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @param {RecentOrderHistoryProps} props
 */

function RecentOrderHistory({ className }) {

    const LIMIT = 6;

    const { data, isLoading } = useQuery({
        queryKey: [`orders`],
        queryFn: async () => {
            const { data, error, count } = await supabase
                .from("orders")
                .select("*")
                .order('created_at', { ascending: false })
                .limit(LIMIT);

            if (error) throw error;
            console.log(data);
            return { orders: data, totalCount: count };
        },
        refetchOnWindowFocus: false,
    });

    return (
        <div className={`recent-order-history border border-grey-100 rounded-lg${className ? ` ${className}` : ''}`}>
            {/* Heading */}
            <div className="heading p-3 md:p-5 flex items-center justify-between">
                <h2 className='font-semibold sm:text-lg'>Recet Order History</h2>
                <Link
                    to="/dashboard/orders-history"
                    className="text-primary sm:hover:underline block w-fit font-medium"
                >
                    View All
                </Link>
            </div>
            {/* Orders Table */}
            <div className="orders-table-wrapper w-full overflow-x-auto">
                <table className='orders-table w-full min-w-200 table-auto'>
                    {/* Table Head */}
                    <thead className='uppercase bg-grey-100/75'>
                        <tr className='*:p-3 *:md:px-5 *:font-medium *:text-grey-700'>
                            <td className='order-id'>Order Id</td>
                            <td className='date'>Date</td>
                            <td className='total'>Total</td>
                            <td className='status'>Status</td>
                            <td className='actions'></td>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody className='[&>tr]:order-row [&>tr]:*:p-3 [&>tr]:*:md:px-5'>
                        {
                            isLoading ? (
                                Array.from({ length: LIMIT }).map((_, index) => (<tr key={index}>
                                    {
                                        Array.from({ length: 5 }).map((_, index) => (<td className='loading' key={index}>Loading...</td>))
                                    }
                                </tr>))
                            ) : (
                                (data?.orders || []).slice(0, LIMIT).map((order, index) => {
                                    const dateDisplay = new Date(order.created_at).toLocaleDateString("en", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric"
                                    })
                                    const detailsPath = `/dashboard/orders-history/${order.id}`
                                    return (
                                        <tr key={index}>
                                            <td className='order-id'>#{order.order_id}</td>
                                            <td className='date'>{dateDisplay}</td>
                                            <td className='total font-medium'>${order.total_price}</td>
                                            <td className='status capitalize'>{order.status}</td>
                                            <td className='status'>
                                                <Link
                                                    to={detailsPath}
                                                    className='sm:hover:underline text-primary font-medium'
                                                >
                                                    View Details
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecentOrderHistory;