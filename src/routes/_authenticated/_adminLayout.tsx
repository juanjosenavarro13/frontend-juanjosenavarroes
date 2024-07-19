import { Header, Sidebar } from "@/features/admin/components";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_adminLayout")({
  component: Admin,
});

function Admin() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <div className="h-full p-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
