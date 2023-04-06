import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loadig from "../../Shared/Loading/Loadig";
import auth from "../../Firebase/Firebase.config";

const RequireAuth = ({ children }) => {
    const location =useLocation()
    const [user, loading, error] = useAuthState(auth);
    if(loading){
        return <Loadig></Loadig>
    }
    if (!user) {
        return <Navigate to='/login'  state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;