/**
 * @typedef {Object} RecentOrderHistoryProps
 * @prop {string} [className]
 */

import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@utils/supabaseClient';
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @param {RecentOrderHistoryProps} props
 */

function OrderHistory({ className }) {

    const [currentPage, setCurrentPage] = React.useState(1);
    const LIMIT = 12;

    const from = (currentPage - 1) * LIMIT;
    const to = from + LIMIT - 1;

    const { data, isLoading } = useQuery({
        queryKey: [`orders`, currentPage],
        queryFn: async () => {
            const { data, error, count } = await supabase
                .from("orders")
                .select("*", { count: 'exact' })
                .order('created_at', { ascending: false })
                .range(from, to);

            if (error) throw error;
            console.log(data);
            return { orders: data, totalCount: count };
        },
        refetchOnWindowFocus: false,
    });

    const totalPages = Math.ceil((data?.totalCount || 0) / LIMIT);

    const handleNext = React.useCallback(() => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    }, [currentPage, totalPages]);

    const handlePrev = React.useCallback(() => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    }, [currentPage]);

    const btnStyles = 'text-xl bg-white border border-grey-100 disabled:bg-grey-50 disabled:border-transparent disabled:text-grey-300 disabled:cursor-not-allowed! not-disabled:sm:hover:bg-grey-100 not-disabled:transition-colors';

    return (
        <div className={`order-history border border-grey-100 rounded-lg${className ? ` ${className}` : ""}`}>
            {/* Heading */}
            <div className="heading p-3 md:p-5">
                <h2 className='font-semibold sm:text-lg'>Order History</h2>
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
                    {/* Table Foot */}
                    <tfoot>
                        <tr>
                            <td colSpan={5}>
                                <div className='orders-pagination p-3 flex items-center justify-center gap-3 w-full *:w-10 *:h-10 *:rounded-full *:flex *:items-center *:justify-center'>
                                    <button
                                        type='button'
                                        onClick={handlePrev}
                                        disabled={currentPage === 1 || isLoading}
                                        className={`${btnStyles}`}
                                    >
                                        <FontAwesomeIcon icon={faAngleLeft} />
                                    </button>
                                    <div className='flex items-center justify-center bg-primary text-white font-medium'>
                                        {currentPage}
                                    </div>
                                    <button
                                        type='button'
                                        onClick={handleNext}
                                        disabled={currentPage >= totalPages || isLoading}
                                        className={`${btnStyles}`}
                                    >
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default OrderHistory;