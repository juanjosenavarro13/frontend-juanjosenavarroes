import { Loading } from "@/features/loading/loading";
import { useUsersPaginate } from "../hooks/use-users-paginate";
import { formatDate } from "@/core/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Paginate } from "@/core/components";

export function AdminUsers() {
  const [page, setPage] = useState<number>(1);
  const { users, isError, isLoading, totalPages } = useUsersPaginate(page);
  const loading = isLoading || isError;
  if (loading)
    return (
      <div className="flex h-full items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <div className="relative">
      <div className="flex justify-end py-3">
        <Link
          to="/admin/users/create"
          className="rounded bg-gray-800 p-2 text-white hover:bg-gray-900"
        >
          Crear Usuario
        </Link>
      </div>
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            <th scope="col" align="center" className="px-auto py-3">
              #
            </th>
            <th scope="col" align="center" className="px-auto py-3">
              Email
            </th>
            <th scope="col" align="center" className="px-auto py-3">
              Fecha Creación
            </th>
            <th scope="col" align="center" className="px-auto py-3">
              Ultima edición
            </th>
            <th scope="col" align="center" className="px-auto py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr key={user.id} className="border-b bg-white">
                <th
                  scope="row"
                  align="center"
                  className="px-auto whitespace-nowrap py-4 font-medium text-gray-900"
                >
                  {user.id}
                </th>
                <td align="center" className="px-auto py-4">
                  {user.email}
                </td>
                <td align="center" className="px-auto py-4">
                  {formatDate(new Date(user.createdAt))}
                </td>
                <td align="center" className="px-auto py-4">
                  {formatDate(new Date(user.updatedAt))}
                </td>
                <td align="center" className="px-auto flex justify-evenly py-4">
                  <Link
                    className="hover:text-gray-900"
                    to={`/admin/users/edit/${user.id}`}
                  >
                    EDITAR
                  </Link>
                  <Link
                    className="hover:text-gray-900"
                    to={`/admin/users/delete/${user.id}`}
                  >
                    ELIMINAR
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {totalPages > 1 && (
        <Paginate page={page} setPage={setPage} totalPages={totalPages} />
      )}
    </div>
  );
}
