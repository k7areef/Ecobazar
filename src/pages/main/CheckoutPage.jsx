import Button from "@components/UI/Button";
import FormikField from "@components/UI/FormikField";
import { useBillingAddress } from "@contexts/providers/UserBillingAddressContext";
import { useCart } from "@contexts/providers/CartContext";
import { useAuth } from "@contexts/providers/AuthContext";
import useChangeTitle from "@hooks/useChangeTitle";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { supabase } from "@utils/supabaseClient";

function CheckoutPage() {
    useChangeTitle({ title: 'Checkout' });

    const navigate = useNavigate();
    const { isAuth, user } = useAuth();
    const { isInitialLoading, cart, cartTotal, shipping, clearCart } = useCart();
    const { loading: billingLoading, billingAddress } = useBillingAddress();

    const initialValues = React.useMemo(() => {
        return {
            first_name: billingLoading ? "Loading..." : billingAddress?.first_name || "",
            last_name: billingLoading ? "Loading..." : billingAddress?.last_name || "",
            company_name: billingLoading ? "Loading..." : billingAddress?.company_name || "",
            street_address: billingLoading ? "Loading..." : billingAddress?.street_address || "",
            country_region: billingLoading ? "Loading..." : billingAddress?.country_region || "",
            states: billingLoading ? "Loading..." : billingAddress?.states || "",
            zip_code: billingLoading ? "Loading..." : billingAddress?.zip_code || "",
            email: billingLoading ? "Loading..." : billingAddress?.email || "",
            phone: billingLoading ? "Loading..." : billingAddress?.phone || "",
            payment_method: "credit_card",
        };
    }, [billingAddress, billingLoading]);

    const validationSchema = React.useMemo(() => {
        return Yup.object({
            first_name: Yup.string().required("First name is required"),
            last_name: Yup.string().required("Last name is required"),
            company_name: Yup.string().optional(),
            street_address: Yup.string().required("Street address is required"),
            country_region: Yup.string().required("Country/Region is required"),
            states: Yup.string().required("States is required"),
            zip_code: Yup.string()
                .required("Zip code is required")
                .matches(/^[0-9]{5}$/, "Zip code must be 5 digits"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            phone: Yup.string().required("Phone is required"),
            payment_method: Yup.string().required("Payment method is required"),
        });
    }, []);

    const items = React.useMemo(() => {
        return (cart || []).map((cartItem) => ({
            product_id: cartItem?.product_id ?? cartItem?.product?.id,
            quantity: cartItem?.quantity ?? 0,
        })).filter(i => i.product_id && i.quantity > 0);
    }, [cart]);

    const handlePlaceOrder = React.useCallback(async (values, actions) => {
        const { setSubmitting } = actions;
        setSubmitting(true);

        try {
            if (!isAuth || !user?.id) {
                toast.error("Please login to checkout");
                return;
            }
            if (!items.length) {
                toast.error("Your cart is empty");
                return;
            }

            // Backend contract: RPC `place_order` expects { user_id, items }
            // where items includes { product_id, quantity }.
            const { error } = await supabase.rpc("place_order", {
                items,
                payment_method: values.payment_method
            });
            if (error) throw error;

            toast.success("Order placed successfully");
            await clearCart();
            navigate("/dashboard/orders-history");
        } catch (err) {
            toast.error(err?.message || "Something went wrong");
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    }, [clearCart, isAuth, items, navigate, user?.id]);

    const fields = React.useMemo(() => ([
        {
            id: "first_name",
            name: "first_name",
            type: "text",
            label: "First Name",
            autoComplete: "on",
            placeholder: "Enter your first name"
        },
        {
            id: "last_name",
            name: "last_name",
            type: "text",
            label: "Last Name",
            autoComplete: "on",
            placeholder: "Enter your last name"
        },
        {
            id: "company_name",
            name: "company_name",
            type: "text",
            label: "Company Name",
            autoComplete: "on",
            placeholder: "Enter your company name"
        },
        {
            id: "street_address",
            name: "street_address",
            type: "text",
            label: "Street Address",
            autoComplete: "on",
            placeholder: "Enter your street address",
            mainClassName: "lg:col-span-3"
        },
        {
            id: "country_region",
            name: "country_region",
            type: "text",
            label: "Country / Region",
            autoComplete: "on",
            placeholder: "Enter your country / region"
        },
        {
            id: "states",
            name: "states",
            type: "text",
            label: "States",
            autoComplete: "on",
            placeholder: "Enter your states"
        },
        {
            id: "zip_code",
            name: "zip_code",
            type: "text",
            label: "Zip Code",
            autoComplete: "on",
            placeholder: "Enter your zip code",
            mainClassName: "lg:col-span-2"
        },
        {
            id: "email",
            name: "email",
            type: "email",
            label: "Email",
            autoComplete: "on",
            placeholder: "Enter your email address",
            mainClassName: "lg:col-span-2"
        },
        {
            id: "phone",
            name: "phone",
            type: "text",
            label: "Phone",
            autoComplete: "on",
            placeholder: "Enter your phone number"
        }
    ]), []);

    return (
        <div className="checkout-page py-5 md:py-10">
            <div className="container">
                <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
                    Checkout
                </h2>

                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handlePlaceOrder}
                >
                    {({ values, handleChange, handleBlur, isSubmitting, setFieldValue, handleSubmit }) => (
                        <form onSubmit={handleSubmit} id="checkout-form">
                            <div className="mt-5 md:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-10 items-start">
                                {/* Left: Billing + Payment */}
                                <div className="lg:col-span-2">
                                    <div className="flex items-center justify-between mb-5">
                                        <h3 className="font-semibold text-lg">Billing Information</h3>
                                    </div>

                                    <div className="fields mb-6 grid grid-cols-1 lg:grid-cols-3 gap-3">
                                        {fields.map((field, index) => (
                                            <FormikField
                                                key={index}
                                                label={field.label}
                                                {...field}
                                                {...{
                                                    name: field.name,
                                                    id: field.id,
                                                    value: values[field.name],
                                                    onChange: handleChange,
                                                    onBlur: handleBlur,
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* Payment Method */}
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-base mb-3">Payment Method</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {[
                                                { id: "cash", label: "Cash on Delivery" },
                                                { id: "credit_card", label: "Credit Card" },
                                                { id: "paypal", label: "PayPal" }
                                            ].map((opt) => {
                                                const selected = values.payment_method === opt.id;
                                                return (
                                                    <button
                                                        key={opt.id}
                                                        type="button"
                                                        onClick={() => setFieldValue("payment_method", opt.id)}
                                                        className={`text-left rounded-lg border p-3 transition duration-200 ease-in-out ${selected ? "border-primary bg-primary/10" : "border-grey-100 bg-white"
                                                            }`}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <input
                                                                type="radio"
                                                                name="payment_method"
                                                                checked={selected}
                                                                onChange={() => setFieldValue("payment_method", opt.id)}
                                                                className="accent-primary"
                                                            />
                                                            <span className="font-medium">{opt.label}</span>
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Order Summary */}
                                <div className="lg:col-span-1">
                                    <div className="border border-grey-100 rounded-lg p-5 md:p-7 sticky top-5">
                                        <h3 className="font-semibold text-lg mb-4">Order Summary</h3>

                                        {/* Order Items */}
                                        <div className="order-items divide-y divide-grey-100">
                                            {(cart || []).map((cartItem, index) => {
                                                const unitPrice = cartItem?.product?.price ?? 0;
                                                const lineTotal = unitPrice * (cartItem?.quantity ?? 0);
                                                return (
                                                    <div key={cartItem?.product_id ?? index} className="py-3 flex items-start justify-between gap-3">
                                                        <div className="min-w-0">
                                                            <p className="font-medium text-sm truncate">{cartItem?.product?.title}</p>
                                                            <p className="text-grey-700 text-xs mt-1">
                                                                {cartItem?.quantity} x ${unitPrice}
                                                            </p>
                                                        </div>
                                                        <div className="font-semibold whitespace-nowrap">
                                                            ${lineTotal}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Items Group */}
                                        <div className="items-group *:not-last-of-type:border-b *:not-last-of-type:border-b-grey-100 *:py-2 *:flex *:items-center *:justify-between *:[&>span]:first-of-type:text-grey-700 *:[&>span]:last-of-type:font-semibold">
                                            {/* Subtotal */}
                                            <div className="subtotal">
                                                <span>Subtotal:</span>
                                                <span>
                                                    {
                                                        isInitialLoading ? (
                                                            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                                        ) : (
                                                            <React.Fragment>
                                                                ${cartTotal}
                                                            </React.Fragment>
                                                        )
                                                    }
                                                </span>
                                            </div>
                                            {/* Shipping */}
                                            <div className="shipping">
                                                <span>Shipping:</span>
                                                <span>
                                                    {
                                                        isInitialLoading ? (
                                                            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                                        ) : (
                                                            <React.Fragment>
                                                                {shipping === 0 ? "Free" : "$" + shipping}
                                                            </React.Fragment>
                                                        )
                                                    }
                                                </span>
                                            </div>
                                            {/* Total */}
                                            <div className="total">
                                                <span>Total:</span>
                                                <span>
                                                    {
                                                        isInitialLoading ? (
                                                            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                                        ) : (
                                                            <React.Fragment>
                                                                ${cartTotal + shipping}
                                                            </React.Fragment>
                                                        )
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        {/* Place Order */}
                                        <div className="mt-5">
                                            <Button
                                                type="submit"
                                                disabled={isSubmitting || isInitialLoading || !items.length}
                                                className="w-full rounded-full"
                                            >
                                                {isSubmitting ? (
                                                    <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                                ) : (
                                                    <>Place Order</>
                                                )}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default CheckoutPage;