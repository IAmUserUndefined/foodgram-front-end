import React from 'react';
import { Routes, Route } from "react-router-dom";

import PublicRoute from "./components/PublicRoute/index";
import PrivateRoute from "./components/PrivateRoute/index";

import Modal from './pages/Modal';

export const AppRoutes = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<PublicRoute />}>
                    <Route path="/" element={false} />
                </Route>
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