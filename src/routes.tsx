import React from 'react';
import { Routes, Route } from "react-router-dom";

import PublicRoute from "./components/PublicRoute/index";
import PrivateRoute from "./components/PrivateRoute/index";

import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import Feed from './pages/Feed';
import Photos from './pages/Photos';
import ConfigUser from './pages/ConfigUser';
import RecoverPassword from './pages/RecoverPassword';
import VerifyEmail from './pages/VerifyEmail';
import VerifyEmailUpdate from './pages/VerifyEmailUpdate';
import Modal from './pages/Modal';
import PageNotFound from './pages/PageNotFound/index';

export const AppRoutes = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<PublicRoute />} >
                    <Route path="/" element={<Login />}  />
                </Route>

                <Route path="/register" element={<PublicRoute />} >
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route path="/verify-email" element={<PublicRoute />} >
                    <Route path="/verify-email" element={<VerifyEmail />} />
                </Route>

                <Route path="/forget-password" element={<PublicRoute />} >
                    <Route path="/forget-password" element={<ForgetPassword />} />
                </Route>

                <Route path="/password-recover" element={<PublicRoute />} >
                    <Route path="/password-recover" element={<RecoverPassword />} />
                </Route>

                <Route path="/feed" element={<PrivateRoute />} >
                    <Route path="/feed" element={<Feed />}  />
                </Route>

                <Route path="/photos" element={<PrivateRoute />} >
                    <Route path="/photos" element={<Photos />} />
                </Route>

                <Route path="/config-user" element={<PrivateRoute />} >
                    <Route path="/config-user" element={<ConfigUser />} />
                </Route>

                <Route path="/update-email" element={<PrivateRoute />} >
                    <Route path="/update-email" element={<VerifyEmailUpdate/>} />
                </Route>

                <Route path="/*" element={<PageNotFound/>} />
            </Routes>
        </>
     );
}

export const ModalRoute = () => {
    return ( 
        <>
            <Routes>
                <Route path="/*" element={<Modal />} />
            </Routes>
        </>
     );
}