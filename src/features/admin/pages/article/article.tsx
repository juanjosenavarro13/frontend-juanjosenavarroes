import { Loading } from "@/features/loading/loading";
import { useState } from "react";
import { useBlogPaginate } from "../hooks/use-blog-paginate";
import { formatDate } from "@/core/utils";
import { Link } from "react-router-dom";
import { Paginate } from "../../components";

export function ArticleAdmin() {
  const [page, setPage] = useState<number>(1);
  const { articles, isError, isLoading, totalPages } = useBlogPaginate(page);
  const loading = isLoading || isError;
  if (loading)
    return (
      <div className="flex h-full items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            <th scope="col" align="center" className="px-auto py-3">
              #
            </th>
            <th scope="col" align="center" className="px-auto py-3">
              Titulo
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
          {articles?.map((article) => {
            return (
              <tr key={article.id} className="border-b bg-white">
                <th
                  scope="row"
                  align="center"
                  className="px-auto whitespace-nowrap py-4 font-medium text-gray-900"
                >
                  {article.id}
                </th>
                <td align="center" className="px-auto py-4">
                  {article.title}
                </td>
                <td align="center" className="px-auto py-4">
                  {formatDate(new Date(article.createdAt))}
                </td>
                <td align="center" className="px-auto py-4">
                  {formatDate(new Date(article.updatedAt))}
                </td>
                <td align="center" className="px-auto flex justify-evenly py-4">
                  <Link
                    className="hover:text-gray-900"
                    to={`/admin/articles/edit/${article.id}`}
                  >
                    EDITAR
                  </Link>
                  <Link
                    className="hover:text-gray-900"
                    to={`/admin/articles/delete/${article.id}`}
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
