import { useState } from "react";
import { useArticlePaginate } from "../../hooks/use-articles-paginate";
import { Article } from "./article";
import { Paginate } from "@/core/components";
import { NoArticles } from "../no-articles/no-articles";

export function GroupArticle() {
  const [page, setPage] = useState<number>(1);
  const { articles, isError, isLoading, totalPages } = useArticlePaginate(page);
  const showArticles = !isLoading && !isError && totalPages && totalPages > 0;

  if (!showArticles) return <NoArticles />;

  return (
    <div className="flex flex-col gap-7">
      <Paginate page={page} setPage={setPage} totalPages={totalPages ?? 1} />
      {articles?.map((article) => (
        <Article
          key={article.id}
          tittle={article.title}
          body={article.body}
          created_at={article.createdAt}
        />
      ))}
      <Paginate page={page} setPage={setPage} totalPages={totalPages ?? 1} />
    </div>
  );
}
