import React from "react";
import CartSummary from "@components/common/CartSummary";
import Button from "@components/UI/Button";
import Input from "@components/UI/Input";
import { useAuth } from "@contexts/AuthContext";
import { useCart } from "@contexts/CartContext";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CREATE_ORDER, UPDATE_MY_CART } from "@utils/api";
import { ErrorMessage, Formik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const inpustList = [
    {
        id: "firstName",
        name: "firstName",
        type: "Text",
        label: "First Name",
        placeholder: "Your first name",
        autoComplete: "on"
    },
    {
        id: "lastName",
        name: "lastName",
        type: "text",
        label: "Last Name",
        placeholder: "Your last name",
        autoComplete: "on"
    },
    {
        id: "companyName",
        name: "companyName",
        type: "text",
        label: "Company Name",
        placeholder: "Company name",
        autoComplete: "on"
    },
    {
        id: "streetAddress",
        name: "streetAddress",
        type: "text",
        label: "Street Address",
        placeholder: "Street Address",
        autoComplete: "on"
    },
    {
        id: "country",
        name: "country",
        type: "text",
        label: "Country / Region",
        placeholder: "Country / Region",
        autoComplete: "on"
    },
    {
        id: "states",
        name: "states",
        type: "text",
        label: "States",
        placeholder: "States",
        autoComplete: "on"
    },
    {
        id: "zipCode",
        name: "zipCode",
        type: "number",
        label: "Zip Code",
        placeholder: "Zip Code",
        autoComplete: "on"
    },
    {
        id: "email",
        name: "email",
        type: "email",
        label: "Email",
        placeholder: "Email Address",
        autoComplete: "on"
    },
    {
        id: "phone",
        name: "phone",
        type: "tel",
        label: "Phone",
        placeholder: "Phone number",
        autoComplete: "off"
    }
];
const initialValues = {
    firstName: "",
    lastName: "",
    companyName: "",
    streetAddress: "",
    country: "",
    states: "",
    zipCode: "",
    email: "",
    phone: "",
    notes: ""
};
const validationSchema = Yup.object({
    firstName: Yup.string()
        .min(2, "First name is too short")
        .max(50, "First name is too long")
        .required("First name is required"),

    lastName: Yup.string()
        .min(2, "Last name is too short")
        .max(50, "Last name is too long")
        .required("Last name is required"),

    companyName: Yup.string()
        .max(100, "Company name is too long"),

    streetAddress: Yup.string()
        .min(5, "Please enter a full address")
        .required("Street address is required"),

    country: Yup.string()
        .required("Country is required"),

    states: Yup.string()
        .required("State/Province is required"),

    zipCode: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(4, "Invalid zip code")
        .required("Zip code is required"),

    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

    phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must contain only digits")
        .min(10, "Phone number is too short")
        .required("Phone number is required"),

    notes: Yup.string().max(500, "Notes is too long")
});

function CheckoutPage() {

    const { jwt, user } = useAuth();
    const { cart, isLoading, setCart } = useCart();
    const navigate = useNavigate();
    const handleSubmit = React.useCallback(async (values, actions) => {
        const { setSubmitting } = actions;
        delete values.notes;
        try {
            // Get Order Items:
            const orderItems = cart?.items?.map(item => ({ product: item.product.documentId, quantity: item.quantity })) || [];
            // Create Order:
            const orderResponse = await CREATE_ORDER(jwt, {
                user: user?.documentId,
                items: orderItems,
                payment: "fyvqzf80gtf9kaceyeloc9jg",
                billingAddress: values,
                shippingAddress: values,
                notes: values.notes
            });
            // Check Errors:
            if (orderResponse.error) {
                console.log(orderResponse.error);
                return;
            };
            // Update Cart:
            const cartUpdatedResponse = await UPDATE_MY_CART(jwt, { items: [] });
            setCart(cartUpdatedResponse);
            // Log Responses:
            console.log("cartUpdatedResponse: ", cartUpdatedResponse);
            console.log("orderResponse: ", orderResponse);
            // Redirect:
            navigate(`/checkout/success`);
        } catch (err) {
            console.log(err);
        } finally {
            setSubmitting(false);
        }
    }, [cart?.items, jwt, navigate, setCart, user?.documentId]);

    // Redirect if cart is empty:
    if (cart?.items?.length === 0) { return <Navigate to={'/'} replace /> }

    return (
        <div className="checkout-page py-5 md:py-10">
            <div className="container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => handleSubmit(values, actions)}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    }) => (
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
                            {/* Form Inputs */}
                            <div className="form-inputs md:col-span-2">
                                {/* Billing Address */}
                                <div className="billing-address mb-5">
                                    <h3 className="font-medium text-lg sm:text-xl md:text-2xl mb-5">Billing Information</h3>
                                    <div className="inputs-container grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {
                                            inpustList.map((input, index) => (<Input
                                                key={index}
                                                {...{
                                                    ...input,
                                                    onChange: handleChange,
                                                    onBlur: handleBlur
                                                }}
                                                className="last-of-type:col-span-2"
                                            />))
                                        }
                                    </div>
                                </div>
                                {/* Ship to anthor address */}
                                {/* ..Here.. */}
                                {/* Additional Info */}
                                <div className="additional-info">
                                    <h3 className="font-medium text-lg sm:text-xl md:text-2xl mb-5">Additional Info</h3>
                                    <div className='notes-textarea-container'>
                                        <label htmlFor="notes" className="block mb-2 w-fit">
                                            Order Notes (Optional)
                                        </label>
                                        <textarea
                                            id="notes"
                                            name="notes"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Notes about your order, e.g. special notes for delivery"
                                            className="w-full rounded-md border border-gray-100 p-3 transition focus:border-primary min-h-40 max-h-40 resize-none"
                                        ></textarea>
                                        <ErrorMessage name="notes" component={'div'} className="mt-2 text-danger first-letter:capitalize" />
                                    </div>
                                </div>
                            </div>
                            {/* Order Summary */}
                            <div className="order-summary border border-gray-100 rounded-md p-5 lg:row-span-3">
                                <h3 className="font-medium text-lg sm:text-xl md:text-2xl mb-5">Order Summary</h3>
                                {/* Order Items */}
                                <div className="order-items mb-5">
                                    Order Items
                                </div>
                                {/* Cart Summary */}
                                <CartSummary className="mb-5" />
                                {/* Payment Method */}
                                <div className="payment-method mb-5">
                                    <h3 className="font-medium text-lg sm:text-xl md:text-2xl">Payment method</h3>
                                </div>
                                {/* Place Order */}
                                <Button
                                    type="submit"
                                    disabled={isSubmitting || isLoading}
                                    className="w-full flex items-center justify-center"
                                >
                                    {
                                        isSubmitting ? (
                                            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                        ) : ("Place Order")
                                    }
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>

            </div>
        </div>
    )
}

export default CheckoutPage;