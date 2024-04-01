import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { checkAdmin } from "./utils/checkAdmin";

export function AdminGuard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = checkAdmin();
    if (!isAdmin) navigate("/");
  }, [navigate]);

  return <Outlet />;
}
