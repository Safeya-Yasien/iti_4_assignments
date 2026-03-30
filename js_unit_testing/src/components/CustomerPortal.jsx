import { RouterProvider, createBrowserRouter } from "react-router";
import { myAppRoutes } from "../routes";

const router = createBrowserRouter(myAppRoutes);

const CustomerPortal = () => {
  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
};

export default CustomerPortal;
