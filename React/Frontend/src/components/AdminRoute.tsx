import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type AdminRouteProps = {
  allowedRoles?: Array<string>;
  redirectTo?: string;
};

const AdminRoute = ({
  allowedRoles = ["ADMIN"],
  redirectTo = "/",
}: AdminRouteProps) => {
  const { user } = useAuth();
  const role = (user as { role?: string } | null)?.role;

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
