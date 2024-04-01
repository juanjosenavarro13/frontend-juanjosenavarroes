import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useStoreUser } from "./store/useUser";

export default function AuthGuard() {
  const navigate = useNavigate();
  const { user } = useStoreUser();
  useEffect(() => {
    if (!user) navigate("/");
  }, [navigate, user]);

  return <Outlet />;
}
