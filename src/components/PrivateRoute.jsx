import axios from "axios";
import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("calculatorToken");
console.log(token)
  // Add your authentication logic here
  const isAuthenticated = token ? true : false; // Replace this with your actual authentication check

  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
