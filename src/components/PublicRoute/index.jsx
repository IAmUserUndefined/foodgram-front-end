import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from '../../providers/AuthProvider';

import LoagindBigGif from "../LoadingBigGif/index";

const PublicRoute = () => {

  const { loading, authenticated } = useAuth();

  if (loading) {
    return <LoagindBigGif />;
  }

  if (authenticated) {
    return <Navigate to="/feed" />
  }

  return <Outlet />
};

export default PublicRoute;