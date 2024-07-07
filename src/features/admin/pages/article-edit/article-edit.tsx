import { Loading } from "@/features/loading/loading";
import { useParams } from "react-router-dom";
import { useFindArticleById } from "../hooks/use-find-article-by-id";

export function ArticleEdit() {
  const { id } = useParams();
  const { article, isError, isLoading } = useFindArticleById(Number(id));

  const loading = isLoading || isError || !id;
  if (loading)
    return (
      <div className="flex h-full items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <div>
      <div className="mb-6 grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            titulo:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={article?.title}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-500 focus:ring-gray-500"
          />
        </div>
        <div>
          <label
            htmlFor="body"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Contenido:
          </label>
          <textarea
            rows={5}
            name="body"
            id="body"
            defaultValue={article?.body}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-500 focus:ring-gray-500"
          />
        </div>
      </div>
    </div>
  );
}
