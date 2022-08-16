import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    console.log("⚠️ Hey, You should be logged in.");
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
export default ProtectedRoute;
