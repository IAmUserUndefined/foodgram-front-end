import React from 'react';
import { Routes, Route } from "react-router-dom"

export const AppRoutes = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" exact element={<h1>Olá mundo</h1>} />
            </Routes>
        </>
     );
}