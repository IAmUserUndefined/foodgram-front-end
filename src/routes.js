import React from 'react';
import { Routes, Route } from "react-router-dom"

import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import Main from './pages/Main';

export const AppRoutes = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/forget-password" exact element={<ForgetPassword />} />
                <Route path="/main" exact element={<Main />} />
            </Routes>
        </>
     );
}