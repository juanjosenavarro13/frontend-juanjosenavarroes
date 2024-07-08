import { formatDate } from "@/core/utils";

interface ArticleProps {
  tittle: string;
  body: string;
  created_at: string;
}
export function Article({ tittle, body, created_at }: Readonly<ArticleProps>) {
  return (
    <article className="mx-auto rounded-lg bg-transparent p-6 text-black/80 shadow-md dark:text-white">
      <header className="mb-4">
        <h1 className="text-balance text-center text-3xl font-bold">
          {tittle}
        </h1>
      </header>
      <div className="text-pretty" dangerouslySetInnerHTML={{ __html: body }} />
      <footer className="mt-6 border-b pt-4 text-center text-gray-600">
        <p className="text-gray-500">
          Publicado: {formatDate(new Date(created_at))}
        </p>
      </footer>
    </article>
  );
}
