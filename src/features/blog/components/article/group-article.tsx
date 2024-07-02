import { useArticlePaginate } from "../../hooks/use-articles-paginate";
import { Article } from "./article";

export function GroupArticle() {
  const { articles, isError, isLoading, totalPages } = useArticlePaginate();

  if (isLoading || isError) return null;
  console.log({ articles, totalPages });

  return articles?.map((article) => (
    <Article
      key={article.id}
      tittle={article.title}
      body={article.body}
      created_at={article.createdAt}
    />
  ));
}
