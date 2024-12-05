import { paths } from "@/constants";
import { createBrowserRouter } from "react-router-dom";
import Root from "@/layout/Root";
import NonAuth from "@/layout/NonAuth";
import SigninPage from "@/pages/auth/signin/SigninPage";
import Dashboard from "@/layout/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: paths.ROOT,
    element: <Root />,
    children: [
      {
        path: paths.DASHBOARD,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: paths.AUTH,
        element: <NonAuth />,
        children: [
          {
            path: paths.SIGNIN,
            element: <SigninPage />,
          },
        ],
      },
    ],
  },
]);
