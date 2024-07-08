import { HTTP_ENDPOINTS } from "@/core/constants/http-endpoints";
import { article } from "@/core/models/article";
import { useStoreUser } from "@/features/auth/store/user/store-user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type responseArticles = {
  totalPages: number;
  articles: article[];
};

export function useArticlePaginate(page = 1) {
  const take = 10;
  const skip = (page - 1) * 10;
  const { user } = useStoreUser();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["articlePaginate", page],
    queryFn: () =>
      axios.get<responseArticles>(HTTP_ENDPOINTS.article, {
        headers: { Authorization: "Bearer " + user?.token },
        params: {
          take,
          skip,
        },
      }),
  });

  return {
    articles: data?.data.articles,
    totalPages: data?.data.totalPages ?? 0,
    isError,
    isLoading,
  };
}
