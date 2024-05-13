import { Loading } from "@/features/loading/loading";
import { useGetUsers } from "./hooks/use-get-user";
import styles from "./admin-users.module.css";
import { formatDate } from "@/core/utils";

export function AdminUsers() {
  const { users, isError, isLoading } = useGetUsers();

  if (isLoading || isError)
    return (
      <div className={styles.container_loading}>
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
                <td className="px-6 py-4">EDITAR</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
