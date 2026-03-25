/**
 * @typedef {Object} RecentOrderHistoryProps
 * @prop {string} [className]
 */

import { faCheck, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery} from '@tanstack/react-query';
import { supabase } from '@utils/supabaseClient';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

/**
 * @param {RecentOrderHistoryProps} props
 */

function OrderHistoryDetails({ className }) {

    const { id } = useParams();

    const { data, isLoading } = useQuery({
        queryKey: [`order_details_${id}`],
        queryFn: async () => await supabase
            .from("orders")
            .select(`*, items:order_items(*, product:products(title, image_url))`)
            .eq("id", id)
            .single()
            .then(res => res.data)
        ,
        refetchOnWindowFocus: false
    });

    const statusSteps = ["received", "processing", "shipped", "delivered"];
    const currentStatus = data?.status.toLowerCase();
    const currentStepIndex = currentStatus === 'pending' ? -1 : statusSteps.indexOf(currentStatus);
    const progressWidth = currentStepIndex === -1 ? 0 : (currentStepIndex / (statusSteps.length - 1)) * 100;

    console.log(isLoading ? "Loading" : data ? data : "No Data");

    return (
        <div className={`order-history-details border border-grey-100 rounded-lg${className ? ` ${className}` : ""}`}>
            {/* Heading */}
            <div className="heading p-3 md:p-5 flex items-center gap-3 border-b border-grey-100">
                <h2 className='font-semibold sm:text-lg'>Order Details</h2>
                <div className="flex items-center gap-2 text-grey-500">
                    <FontAwesomeIcon icon={faCircle} className='text-[5px]' />
                    <p className='font-medium'>{new Date(data?.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</p>
                    <FontAwesomeIcon icon={faCircle} className='text-[5px]' />
                    <p className='font-medium'>{data?.items?.length} Products</p>
                </div>
                {/* Back to List */}
                <Link to="/dashboard/orders-history" className='ml-auto text-primary hover:text-primary-dark font-semibold transition-colors'>
                    Back to List
                </Link>
            </div>
            {/* Order Info */}
            <div className="order-info p-5">
                {/* Info Content */}
                <div className="info-content flex gap-5 max-md:flex-col">
                    {/* Order Address */}
                    <div className="order-address rounded-lg border border-grey-100 overflow-hidden flex max-md:flex-col *:w-full w-full md:w-[55%]">
                        <div className="billing-address">
                            <div className="heading p-3 md:p-5 font-medium text-lg border-b border-grey-100 text-grey-400">
                                Billing Address
                            </div>
                            <div className="billing-address-info p-3 md:p-5 space-y-3">
                                <div className="billing-address-details">
                                    {/* Name */}
                                    <h4 className='billing-address-name font-semibold text-lg mb-1'>John Doe</h4>
                                    {/* Address */}
                                    <p className='billing-address-location'>Address Location</p>
                                </div>
                                {/* Email */}
                                <div className='billing-address-email'>
                                    <span>Email:</span>
                                    <p>john.doe@example.com</p>
                                </div>
                                {/* Phone */}
                                <div className='billing-address-phone'>
                                    <span>Phone:</span>
                                    <p>+1 234 567 890</p>
                                </div>
                            </div>
                        </div>
                        <div className="shipping-address border-s border-s-grey-100 max-md:border-s-0 max-md:border-t max-md:border-t-grey-100">
                            <div className="heading p-3 md:p-5 font-medium text-lg border-b border-grey-100 text-grey-400">
                                Shipping Address
                            </div>
                            <div className="shipping-address-info p-3 md:p-5 space-y-3">
                                <div className="address-details">
                                    {/* Name */}
                                    <h4 className='address-name font-semibold text-lg mb-1'>John Doe</h4>
                                    {/* Address */}
                                    <p className='address-location'>Address Location</p>
                                </div>
                                {/* Email */}
                                <div className='address-email'>
                                    <span>Email:</span>
                                    <p className='mt-1 font-medium'>john.doe@example.com</p>
                                </div>
                                {/* Phone */}
                                <div className='address-phone'>
                                    <span>Phone:</span>
                                    <p className='mt-1 font-medium'>+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Order Summary */}
                    <div className="order-summary border border-grey-100 rounded-lg overflow-hidden w-full md:w-[45%]">
                        {/* Heading */}
                        <div className="header border-b border-grey-100 flex *:w-full">
                            {/* Order Id */}
                            <div className="order-id p-3">
                                <span className='text-grey-400 font-medium uppercase'>Order ID:</span>
                                <div className='mt-1 font-semibold'>#{data?.order_id}</div>
                            </div>
                            {/* Payment Method */}
                            <div className="payment-method p-3 border-s border-grey-100">
                                <span className='text-grey-400 font-medium uppercase'>Payment Method:</span>
                                <div className='mt-1 font-semibold capitalize'>{data?.payment_method.toString().replaceAll("_", " ")}</div>
                            </div>
                        </div>
                        {/* Summary Content */}
                        <div className="summary-content p-3 md:p-5 *:py-3 *:not-last-of-type:border-b *:not-last-of-type:border-grey-100">
                            <div className="subtotal flex items-center justify-between [&>span]:font-medium [&>span]:first-of-type:text-grey-600">
                                <span>Subtotal:</span>
                                <span>${data?.total_price}</span>
                            </div>
                            <div className="discount flex items-center justify-between [&>span]:font-medium [&>span]:first-of-type:text-grey-600">
                                <span>Discount:</span>
                                <span>10%</span>
                            </div>
                            <div className="shipping flex items-center justify-between [&>span]:font-medium [&>span]:first-of-type:text-grey-600">
                                <span>Shipping:</span>
                                <span>Free</span>
                            </div>
                            <div className="total flex items-center justify-between [&>span]:font-bold [&>span]:text-grey-900">
                                <span>Total:</span>
                                <span className='font-semibold text-hard-primary'>${data?.total_price}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Order Status */}
                <div className="order-status my-10 p-5 md:p-10 lg:px-20">
                    <div className="bar h-2 bg-grey-200 rounded-full relative">

                        <div
                            className="bar-fill bg-primary h-full rounded-full transition-all duration-500"
                            style={{ width: `${progressWidth}%` }}
                        ></div>

                        {statusSteps.map((step, index) => {
                            const isCompleted = index <= currentStepIndex;
                            const isActive = index === currentStepIndex;

                            return (
                                <div
                                    key={step}
                                    style={{ left: `${(index / (statusSteps.length - 1)) * 100}%` }}
                                    className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors duration-300 ${isCompleted ? 'bg-primary border-primary text-white' : 'bg-white border-dashed border-grey-200 text-grey-400'} ${isActive ? 'ring-4 ring-green-100' : ''}`}
                                >
                                    {isCompleted && index < currentStepIndex ? (
                                        <FontAwesomeIcon icon={faCheck} className="text-xs" />
                                    ) : (
                                        <span className="text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
                                    )}

                                    <span className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 text-xs md:text-sm whitespace-nowrap font-medium uppercase ${isCompleted ? 'text-primary' : 'text-grey-400'}`}>
                                        {step}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* Order Items */}
            <div className="order-items w-full overflow-x-auto">
                <table className='orders-table w-full min-w-200 table-auto text-left'>
                    <thead className='uppercase bg-grey-100/75'>
                        <tr className='*:p-3 *:md:px-5 *:font-medium *:text-grey-700'>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.items?.map((item) => (
                            <tr key={item.id} className='*:p-3 *:md:px-5 not-last-of-type:border-b not-last-of-type:border-grey-100 sm:hover:bg-grey-100/50 transition-colors'>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={item.product?.image_url || ""}
                                            alt={item.product?.title || "Product"}
                                            className='w-16 h-16 object-cover rounded'
                                        />
                                        <h3 className='font-medium'>{item.product?.title || "Product"}</h3>
                                    </div>
                                </td>
                                <td className='font-medium'>${item.price_unit}</td>
                                <td>x{item.quantity}</td>
                                <td className='font-medium'>${item.price_unit * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderHistoryDetails;