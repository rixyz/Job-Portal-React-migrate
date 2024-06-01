import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps<T> = {
  component: (props: T) => React.ReactNode;
  type: "employee" | "company";
} & T;

function PrivateRoute<T>({ component, type, ...rest }: PrivateRouteProps<T>) {
  const isLogin = localStorage.getItem("isLogin");
  const [isAuthenticated, setIsAuthenticated] = useState(isLogin === type);
  const Component = component;
  return isAuthenticated ? (
    <Component {...(rest as any)} />
  ) : (
    <Navigate to="/home" replace />
  );
}
export default PrivateRoute;
