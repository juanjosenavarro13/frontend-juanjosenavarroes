import { Editor } from "@/core/components/";
import { Loading } from "@/features/loading/loading";
import { useParams } from "react-router-dom";
import { useFindArticleById } from "../hooks/use-find-article-by-id";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

export function ArticleEdit() {
  const { id } = useParams();
  const { article, isError, isLoading } = useFindArticleById(Number(id));
  const [editorData, setEditorData] = useState(article?.body);

  type Inputs = {
    title: string;
    body: string;
  };

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const loading = isLoading || isError || !id;
  if (loading)
    return (
      <div className="flex h-full items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <div>
      <form className="mb-6 grid gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            titulo:
          </label>
          <input
            {...register("title")}
            type="text"
            name="title"
            id="title"
            defaultValue={article?.title}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-500 focus:ring-gray-500"
          />
        </div>
        <div className="overflow-hidden">
          <label
            htmlFor="body"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Contenido:
          </label>
          <Editor value={editorData} onChange={setEditorData} />
        </div>
        <button
          className="rounded bg-gray-800 p-2 text-white hover:bg-gray-900"
          type="submit"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}
