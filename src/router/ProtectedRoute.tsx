import { paths } from "@/constants";
import tokenStore from "@/store/tokenStore";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

// Add a ProtectedRoute component
export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { token } = tokenStore();

  if (!token) {
    // Redirect to signin if no token is present
    return <Navigate to={`/${paths.AUTH}/${paths.SIGNIN}`} replace />;
  }

  return children;
};
