import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";

/* Components */
// import Home from "../pages/Main";
// import Register from "../Auth/Register";
// import Login from "../Auth/Login";
// import PrivetRoutes from "./PrivetRoutes";
// import MoviesPage from "../pages/MoviesPage";
// import Cryptoomain from "../components/Cryptopage/Cryptoomain";
// import Singelcrypto from "../components/Cryptopage/Singelcrypto";

import Loading from "../components/App/LoadingPage/Loading";
import store from "../Redux/store";

const Home = React.lazy(() => import("../pages/Main"));
const Register = React.lazy(() => import("../Auth/Register"));
const Login = React.lazy(() => import("../Auth/Login"));
const PrivetRoutes = React.lazy(() => import("./PrivetRoutes"));
const MoviesPage = React.lazy(() => import("../pages/MoviesPage"));
const Cryptoomain = React.lazy(() =>
  import("../components/Cryptopage/Cryptoomain")
);
const Singelcrypto = React.lazy(() =>
  import("../components/Cryptopage/Singelcrypto")
);
const Singelcard = React.lazy(() =>
  import("../components/MoviesPageComponents/Singelcard")
);

const RoutesPage = () => {
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
    <>
      <Suspense fallback={<Loading val={true} />}>
        <Routes>
          <Route path="/" element={<PrivetRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/scard/:page/:id" element={<Singelcard />} />
            <Route path="/cripto" element={<Cryptoomain />} />
            <Route path="/cripto/:id" element={<Singelcrypto />} />
          </Route>
          {data.User.isAuth ? (
            "Error"
          ) : (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
        </Routes>
      </Suspense>
    </>
  );
};

export default RoutesPage;

/* <Route path="/dashboard" element={<Dashboard />}>
            <Route path="about" element={<About />} />
            <Route path="test" element={<Test />} />
          </Route> */
