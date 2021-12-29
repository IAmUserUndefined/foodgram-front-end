import React from 'react';
import { Routes, Route } from "react-router-dom"

import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import Feed from './pages/Feed';
import Photos from './pages/Photos';

export const AppRoutes = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/forget-password" exact element={<ForgetPassword />} />
                <Route path="/feed" exact element={<Feed />} />
                <Route path="/photos" exact element={<Photos />} />
            </Routes>
        </>
     );
}