import { HTTP_ENDPOINTS } from "@/core/constants/http-endpoints";
import { article } from "@/core/models/article";
import { useStoreUser } from "@/features/auth/store/user/store-user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useFindArticleById(id: number) {
  const { user } = useStoreUser();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: () =>
      axios.get<article>(
        HTTP_ENDPOINTS.findArticleById.replace("{{id}}", id.toString()),
        {
          headers: { Authorization: "Bearer " + user?.token },
        },
      ),
  });

  return {
    article: data?.data,
    isError,
    isLoading,
  };
}
