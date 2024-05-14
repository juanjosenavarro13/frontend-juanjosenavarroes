import { HTTP_ENDPOINTS } from "@/core/constants/http-endpoints";
import { useStoreUser } from "@/features/auth/store/user/store-user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type responseUsers = {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export function useFindUserById(id: number) {
  const { user } = useStoreUser();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: () =>
      axios.get<responseUsers>(
        HTTP_ENDPOINTS.fingUserById.replace("{{id}}", id.toString()),
        {
          headers: { Authorization: "Bearer " + user?.token },
        },
      ),
  });

  return {
    user: data?.data,
    isError,
    isLoading,
  };
}
