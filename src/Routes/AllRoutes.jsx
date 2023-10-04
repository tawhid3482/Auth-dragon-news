import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsPages from "../Pages/NewsPages/NewsPages";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('/news.json')
      },
      {
        path:'/news/:id',
        element:<PrivateRoute><NewsPages></NewsPages></PrivateRoute>
      
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>
      },
    ],
  },
]);

export default AllRoutes;
