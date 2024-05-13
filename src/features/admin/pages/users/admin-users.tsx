import { Loading } from "@/features/loading/loading";
import { useGetUsers } from "./hooks/use-get-user";
import { formatDate } from "@/core/utils";
import { useState } from "react";
import { Paginate } from "./components/paginate/paginate";
import { Link } from "react-router-dom";

export function AdminUsers() {
  const [page, setPage] = useState<number>(1);
  const { users, isError, isLoading, totalPages } = useGetUsers(page);
  const loading = isLoading || isError || !totalPages;
  if (loading)
    return (
      <div className="flex h-full items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-center text-xs uppercase text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha Creación
            </th>
            <th scope="col" className="px-6 py-3">
              Ultima edición
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr key={user.id} className="border-b bg-white text-center">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  {user.id}
                </th>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  {formatDate(new Date(user.createdAt))}
                </td>
                <td className="px-6 py-4">
                  {formatDate(new Date(user.updatedAt))}
                </td>
                <td className="px-6 py-4 text-gray-800">
                  <Link
                    className="hover:font-bold"
                    to={`/admin/users/${user.id}`}
                  >
                    EDITAR
                  </Link>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Paginate page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
}
