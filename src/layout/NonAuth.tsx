import { paths } from "@/constants";
import tokenStore from "@/store/tokenStore";
import { Navigate, Outlet } from "react-router-dom";

const NonAuth = () => {
  const { token } = tokenStore();

  if (token !== null) {
    return <Navigate to={`/${paths.DASHBOARD}`} replace={true} />;
  }

  return <Outlet />;
};

export default NonAuth;
