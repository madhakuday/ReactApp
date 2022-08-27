import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import Header from "../components/App/Header/Header";

const PrivetRoutes = ({ component: Component, ...restOfProps }) => {
  const location = useLocation();
  const isAuthenticated = true;
  return (
    <div>
      {isAuthenticated ? (
        <>
          <Header />

          <Outlet data={{ data: "hello world" }} />
        </>
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </div>
  );
};

export default PrivetRoutes;
