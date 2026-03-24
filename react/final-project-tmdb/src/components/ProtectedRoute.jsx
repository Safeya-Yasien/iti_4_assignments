import { useUser } from "@/hooks/useUser";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { data: user, isLoading } = useUser();

  if (isLoading) return null;

  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
