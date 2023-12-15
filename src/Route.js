import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/login.jsx"
import SignUp from "./Pages/SignUp.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>hello</div>,
      },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Signup",
      element: <SignUp />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);