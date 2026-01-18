import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// * Pages:
// # Main
import HomePage from "@pages/main/HomePage";
import ShopPage from "@pages/main/ShopPage";
import ProductDetailPage from "@pages/main/ProductDetailPage";
import CartPage from "@pages/main/CartPage";
import CheckoutPage from "@pages/main/CheckoutPage";
import WishlistPage from "@pages/main/WishlistPage";
// # Auth Pages
import LoginPage from "@pages/auth/LoginPage";
import SignupPage from "@pages/auth/SignupPage";
// # Dashboard
import Dashboard from "@pages/dashboard/dashboard";
import DashboardOverviewPage from "@pages/dashboard/pages/OverviewPage";
import DashboardOrderHistoryPage from "@pages/dashboard/pages/OrderHistoryPage";
import DashboardOrderDetailPage from "@pages/dashboard/pages/OrderDetailPage";
import DashboardSettingPage from "@pages/dashboard/pages/SettingPage";
// # Other
import BlogDetailPage from "@pages/other/BlogDetailPage";
import BlogListPage from "@pages/other/BlogListPage";
import AboutPage from "@pages/other/AboutPage";
import ContactPage from "@pages/other/ContactPage";
import FaqsPage from "@pages/other/FaqsPage";
import NotFoundPage from "@pages/other/NotFoundPage";

// * Components:
import Header from "@components/layout/Header";
import Breadcrumb from "@components/layout/Breadcrumb";
import Subscribe from "@components/layout/Subscribe";
import Footer from "@components/layout/Footer";

// ? AuthInitializer:
import AuthInitializer from "@components/auth/AuthInitializer";

function App() {
  return (
    <AuthInitializer>
      <div className='App text-gray-900'>
        {/* Header */}
        <Header />
        {/* Breadcrumb */}
        <Breadcrumb />
        {/* Routes */}
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:productSlug/:productId/detail" element={<ProductDetailPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />

          {/* Auth Pages */}
          <Route path="/auth">
            {/* Index Route to redirect to login page when path is => /auth */}
            <Route index element={<Navigate to={'/auth/login'} replace />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />}>
            {/* Index Route to make a overview page as a first route */}
            <Route index element={<DashboardOverviewPage />} />
            <Route path="order-history" element={<DashboardOrderHistoryPage />} />
            <Route path="order-history/:orderId/detail" element={<DashboardOrderDetailPage />} />
            <Route path="setting" element={<DashboardSettingPage />} />
          </Route>

          {/* Other */}
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:blogId/detail" element={<BlogDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          {/* Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* Subscribe */}
        <Subscribe />
        {/* Footer */}
        <Footer />
      </div>
    </AuthInitializer>
  )
}

export default App;