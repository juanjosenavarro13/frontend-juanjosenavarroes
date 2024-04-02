import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useStoreUser } from "./store/user/store-user";

export default function AuthGuard() {
  const navigate = useNavigate();
  const { user } = useStoreUser();
  useEffect(() => {
    if (user) navigate("/");
  }, [navigate, user]);

  if (user) return null;
  return <Outlet />;
}
