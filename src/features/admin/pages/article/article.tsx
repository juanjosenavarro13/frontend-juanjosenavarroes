import { Loading } from "@/features/loading/loading";
import { useState } from "react";
import { useArticlePaginate } from "../hooks/use-article-paginate";
import { formatDate } from "@/core/utils";
import { Paginate } from "@/core/components";
import { Link } from "@tanstack/react-router";

export function ArticleAdmin() {
  const [page, setPage] = useState<number>(1);
  const { articles, isError, isLoading, totalPages } = useArticlePaginate(page);
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
          to="/admin/articles/create"
          className="rounded bg-gray-800 p-2 text-white hover:bg-gray-900"
        >
          Crear Articulo
        </Link>
      </div>
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
