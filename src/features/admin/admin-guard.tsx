import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useStoreUser } from "../auth/store/user/store-user";
import { Header, Sidebar } from "./components";

export default function AdminGuard() {
  const navigate = useNavigate();
  const { user } = useStoreUser();

  useEffect(() => {
    if (!user) navigate("/auth");
  }, [navigate, user]);

  if (!user) return null;
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <div className="p-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
