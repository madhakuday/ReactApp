import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import Header from "../components/App/Header/Header";
import store from "../Redux/store";

const PrivetRoutes = ({ component: Component, ...restOfProps }) => {
  const location = useLocation();

  const getCurrentStateFromStore = () => {
    return {
      User: store.getState().user.user,
    };
  };
  let data = getCurrentStateFromStore();

  useEffect(() => {
    data = getCurrentStateFromStore();
  }, [data]);
  return (
    <div>
      {data.User.isAuth ? (
        <>
          <Header />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" state={{ from: location }} replace={true} />
      )}
    </div>
  );
};

export default PrivetRoutes;
