import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login'
import Customer from "./components/Customer Service/Customer";
import Signup from "./components/SignUp/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import Welcome from "./components/Welcome/Welcome";
import Cleaning from "./components/Cleaning/Cleaning";
import Cooking from "./components/Cooking/Cooking";
import Nurses from "./components/Nurses/Nurses";
import Teachers from "./components/Teachers/Teachers";
import Party from "./components/Party Staff/Party";
import Garden from "./components/Garden/Garden";
import Forgot from "./components/Forgot Password/Forgot";
import Location from "./components/Location/Location";

const CustomRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/customer",
      element: <Customer />,
    },
    {
        path: "/signup",
        element: <Signup />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/menubar",
        element: <Welcome />,
      },
      {
        path: "/cleaning",
        element: <Cleaning />,
      },
      {
        path: "/cooking",
        element: <Cooking />,
      },
      {
        path: "/nurse",
        element: <Nurses />,
      },
      {
        path: "/teachers",
        element: <Teachers />,
      },
      {
        path: "/party",
        element: <Party />,
      },
      {
        path: "/garden",
        element: <Garden />,
      },
      {
        path: "/location",
        element: <Location />,
      },
      {
        path: "/forgot",
        element: <Forgot />,
      },
      
      
      






  ])

  return (
    <RouterProvider router={router} />
  )
}

export default CustomRouter