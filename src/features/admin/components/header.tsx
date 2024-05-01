import { useStoreUser } from "@/features/auth/store/user/store-user";

export function Header() {
  const { user } = useStoreUser();
  return (
    <div className="bg-gray-900 p-4 text-white">
      <h1 className="text-xl font-bold">{user?.email}</h1>
    </div>
  );
}
