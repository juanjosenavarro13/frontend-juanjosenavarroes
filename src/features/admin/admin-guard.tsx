import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { checkAdmin } from "./utils/checkAdmin";

export function AdminGuard() {
  const navigate = useNavigate();
  const isAdmin = checkAdmin();

  useEffect(() => {
    if (!isAdmin) navigate("/");
  }, [navigate, isAdmin]);

  if (!isAdmin) return null;
  return <Outlet />;
}
