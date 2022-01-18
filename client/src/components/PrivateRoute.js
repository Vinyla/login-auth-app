import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WelcomePage from './WelcomePage';

const PrivateRoute = () => {
  const auth = useSelector((state) => state.auth);
  return auth.isAuthenticated ? <WelcomePage /> : <Navigate to='/login' />;
};

export default PrivateRoute;
