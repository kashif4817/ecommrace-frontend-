import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/navBar/Home';
import Products from '../components/navBar/Products';
import Contact from '../components/navBar/Contact';
import AboutUs from '../components/navBar/AboutUs';
import Profile from '../components/navBar/Profile';
import Notifications from '../components/navBar/Notifications';
import Cart from '../components/navBar/Cart';
import MainHomePage from '../components/MainHomePage';
import Orders from '../components/sideBar/Orders';
import Settings from '../components/sideBar/Settings';
import Logout from '../components/sideBar/Logout';
import NotFound from '../pages/NotFound';
import LikedProducts from '../components/sideBar/LikedProducts';

import Login from '../pages/register/Login';
import Signup from '../pages/register/Signup';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute'; // 🔥 Import the new component
import EditPage from '../components/navBar/EditPage';
import NoConact from '../components/navBar/NoConact';


const NavRoutes = () => {
    return (
        <Routes>
            {/* Default redirect to home */}
            <Route path="/" element={<Navigate to="/home" replace />} />

            {/* 🔒 Public routes */}
            <Route
                path="/login"
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
            />
            <Route
                path="/signup"
                element={
                    <PublicRoute>
                        <Signup />
                    </PublicRoute>
                }
            />

            {/* 🛡️ Protected home route with nested routes */}
            <Route
                path="/home"
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }>
                <Route index element={<MainHomePage />} />
                <Route path="products" element={<Products />} />
                <Route path="contact" element={<Contact />} />
                <Route path='non-contact' element={<NoConact />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="profile" element={<Profile />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="cart" element={<Cart />} />
                <Route path="orders" element={<Orders />} />
                <Route path="likes" element={<LikedProducts />} />
                <Route path="settings" element={<Settings />} />
                <Route path="logout" element={<Logout />} />
                <Route path='edit/:id' element={<EditPage />} />
            </Route>

            {/* 404 page */}
            <Route path="*" element={<NotFound />} />
            {/* <Route path="home/admin/edit" element={<EditPage />} /> */}

        </Routes>
    );
};

export default NavRoutes;