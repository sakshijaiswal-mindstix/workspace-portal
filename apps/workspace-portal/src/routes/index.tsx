import { createBrowserRouter } from "react-router-dom";
import Homepage from "src/screens/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);
