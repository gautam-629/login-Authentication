import { RouterProvider } from "react-router-dom";
import { router } from "@/router/router";
import Providers from "@/providers/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <Providers>
        <RouterProvider router={router} />
        <ToastContainer />
      </Providers>
    </>
  );
};

export default App;
