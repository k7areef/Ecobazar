import { Route, Routes } from "react-router-dom";
// Pages:
// Main
import HomePage from "@pages/main/HomePage";
import ProductsPage from "@pages/main/ProductsPage";
import ProductDetailsPage from "@pages/main/ProductDetailsPage";
import WishlistPage from "@pages/main/WishlistPage";
import CartPage from "@pages/main/CartPage";
import CheckoutPage from "@pages/main/CheckoutPage";
// Auth
import LoginPage from "@pages/auth/LoginPage";
import SignupPage from "@pages/auth/SignupPage";
import VerifyEmailPage from "@pages/auth/VerifyEmailPage";
import ResetPasswordPage from "@pages/auth/ResetPasswordPage";
// Dashboard
import DashboardPage from "@pages/dashboard/DashboardPage";
import OrdersHistoryPage from "@pages/dashboard/OrdersHistoryPage";
import OrderHistoryDetailsPage from "@pages/dashboard/OrderHistoryDetailsPage";
import SettingsPage from "@pages/dashboard/SettingsPage";
// Other
import BlogPage from "@pages/other/BlogPage";
import BlogDetailsPage from "@pages/other/BlogDetailsPage";
import AboutPage from "@pages/other/AboutPage";
import ContactPage from "@pages/other/ContactPage";
import FaqsPage from "@pages/other/FaqsPage";
import NotFoundPage from "@pages/other/NotFoundPage";
// Common Components:
import Header from "@components/layout/Header";
import Breadcrumbs from "@components/layout/Breadcrumbs";
import Subscribe from "@components/layout/Subscribe";
import Footer from "@components/layout/Footer";
// Modals:
import CartDrawer from "@components/layout/CartDrawer";

function App() {
  return (
    <div className="App text-grey-900 min-h-screen">
      {/* Header */}
      <Header />
      {/* Breadcrumbs */}
      <Breadcrumbs />
      {/* Routes */}
      <Routes>
        {/* Main */}
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ProductsPage />} />
        <Route path="/shop/:slug/:id" element={<ProductDetailsPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/orders-history" element={<OrdersHistoryPage />} />
        <Route path="/dashboard/orders-history/:id" element={<OrderHistoryDetailsPage />} />
        <Route path="/dashboard/settings" element={<SettingsPage />} />
        {/* Other */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<BlogDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* Subscribe */}
      <Subscribe />
      {/* Footer */}
      <Footer />
      {/* Cart Drawer */}
      <CartDrawer />
    </div>
  )
}

export default App;