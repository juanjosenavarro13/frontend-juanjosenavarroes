import { HTTP_ENDPOINTS } from "@/core/constants/http-endpoints";
import { useStoreUser } from "@/features/auth/store/user/store-user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type users = {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
};

type responseUsers = {
  totalPages: number;
  users: users[];
};

export function useGetUsers(page = 1) {
  const take = 10;
  const skip = (page - 1) * 10;
  const { user } = useStoreUser();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["users", page],
    queryFn: () =>
      axios.get<responseUsers>(HTTP_ENDPOINTS.user, {
        headers: { Authorization: "Bearer " + user?.token },
        params: {
          take,
          skip,
        },
      }),
  });

  return {
    users: data?.data.users,
    totalPages: data?.data.totalPages,
    isError,
    isLoading,
  };
}
