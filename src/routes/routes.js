import React from "react";
import { Navigate } from "react-router-dom";

// lazy load all the views
const Dashboard = React.lazy(() => import("../pages/dashboard/index"));
const StarterPage = React.lazy(() => import("../pages/StarterPage/index"));

// auth
const Login = React.lazy(() => import("../pages/Auth/Login"));
const Logout = React.lazy(() => import("../pages/Auth/Logout"));
const ForgetPassword = React.lazy(() => import("../pages/Auth/ForgetPassword"));
const Register = React.lazy(() => import("../pages/Auth/Register"));
const LockScreen = React.lazy(() => import("../pages/Auth/LockScreen"));

// declare all routes
const authProtectedRoutes = [
  { path: "/pages-starter", component: <StarterPage /> },
  { path: "*", component: <Navigate to="/" /> },
  { path: "/", component: <Dashboard /> },
  {
    path: "/",
    exact: true,
    component: <Navigate to="/" />,
  }

    // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
 
 
];

const publicRoutes = [
  { path: "/logout", component: <Logout /> },
  // { path: "/login", component: <Login /> },
  { path: "/forget-password", component: <ForgetPassword /> },
  // { path: "/register", component: <Register /> },
  { path: "/lock-screen", component: <LockScreen />}

];

export { authProtectedRoutes, publicRoutes };
