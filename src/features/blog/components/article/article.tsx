interface ArticleProps {
  tittle: string;
  body: string;
  created_at: string;
}
export function Article({ tittle, body, created_at }: Readonly<ArticleProps>) {
  return (
    <article className="mx-auto mb-6 max-w-3xl rounded-lg bg-transparent p-6 text-black/80 shadow-md dark:text-white">
      <header className="mb-4">
        <h1 className="text-3xl font-bold">{tittle}</h1>
      </header>
      <div className="prose prose-lg">{body}</div>
      <footer className="mt-6 border-t pt-4 text-center text-gray-600">
        <p className="text-gray-500">Publicado: {created_at}</p>
      </footer>
    </article>
  );
}
