import { Navigate, useLocation } from "react-router-dom";
import UseHooks from "../Pages/CustomHook/UseHooks";

const PrivateRoute = ({children}) => {
  const { user,loading } = UseHooks();
  const location = useLocation()
  console.log(location)
if(loading){
    return <div className="text-center mt-20">
        <span className="bg-blue-600 loading loading-infinity loading-lg"></span>

    </div>
}
  if(user){
    return children
  }

  return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;
