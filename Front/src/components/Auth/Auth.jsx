import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const Auth = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token; // Verifica si hay un token válido

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="/login"   />}
    />
  );
};

export default Auth;

