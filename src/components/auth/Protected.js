import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Auth";

const Protected = ({ children }) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default Protected;
