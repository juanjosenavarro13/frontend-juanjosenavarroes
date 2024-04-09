import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useStoreUser } from "../auth/store/user/store-user";

export default function AdminGuard() {
  const navigate = useNavigate();
  const { user } = useStoreUser();

  useEffect(() => {
    if (!user) navigate("/auth");
  }, [navigate, user]);

  if (!user) return null;
  return <Outlet />;
}
