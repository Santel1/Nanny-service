import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthIsSignedIn } from "../redux/auth/auth.selectors";

const PrivatRoute = ({ children, redirectedTo = "/" }) => {
  const isLoggined = useSelector(selectAuthIsSignedIn);

  return isLoggined ? children : <Navigate to={redirectedTo} replace />;
};

export default PrivatRoute;
