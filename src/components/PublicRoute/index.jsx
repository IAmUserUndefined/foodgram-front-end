import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from '../../providers/AuthProvider';

import LoadingBigGif from "../LoadingBigGif/index";

const PublicRoute = () => {

  const { loading, authenticated } = useAuth();

  if (loading) {
    return <LoadingBigGif />;
  }

  if (authenticated) {
    return <Navigate to="/photos" />
  }

  return <Outlet />
};

export default PublicRoute;