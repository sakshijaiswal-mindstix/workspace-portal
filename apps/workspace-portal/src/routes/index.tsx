import { createBrowserRouter } from "react-router-dom";
import Homepage from "src/screens/Dashboard/Dashboard";
import Settings from "src/screens/Settings/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);
