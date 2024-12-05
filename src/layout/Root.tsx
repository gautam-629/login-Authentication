import { paths } from "@/constants";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();

  if (location.pathname == paths.ROOT) {
    return <Navigate to={`/${paths.AUTH}/${paths.SIGNIN}`} replace={true} />;
  }

  return <Outlet />;
};

export default Root;
