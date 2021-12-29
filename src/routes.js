import React from 'react';
import { Routes, Route } from "react-router-dom"

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

export const AppRoutes = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/forget-password" exact element={<ForgetPassword />} />
                <Route path="/feed" exact element={<Feed />} />
                <Route path="/photos" exact element={<Photos />} />
                <Route path="/config-user" exact element={<ConfigUser />} />
                <Route path="/recover-password" exact element={<RecoverPassword />} />
                <Route path="/verify-email" exact element={<VerifyEmail />} />
                <Route path="/update-email" exact element={<VerifyEmailUpdate />} />
            </Routes>
        </>
     );
}

export const ModalRoute = () => {
    return ( 
        <>
            <Routes>
                <Route path="/*" exact element={<Modal />} />
            </Routes>
        </>
     );
}