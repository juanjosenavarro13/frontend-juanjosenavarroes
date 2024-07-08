import { HTTP_ENDPOINTS } from "@/core/constants/http-endpoints";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Article = {
  id: number;
  userId: number;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
};

type responseArticles = {
  totalPages: number;
  articles: Article[];
};

export function useArticlePaginate(page = 1) {
  const take = 10;
  const skip = (page - 1) * take;
  const { data, isError, isLoading } = useQuery({
    queryKey: ["articlesPaginate", page],
    queryFn: () =>
      axios.get<responseArticles>(HTTP_ENDPOINTS.article, {
        params: {
          take,
          skip,
        },
      }),
    staleTime: Infinity,
  });

  return {
    articles: data?.data.articles,
    totalPages: data?.data.totalPages,
    isError,
    isLoading,
  };
}
