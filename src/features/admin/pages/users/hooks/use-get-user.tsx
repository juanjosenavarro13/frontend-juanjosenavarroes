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

export function useGetUsers() {
  const { user } = useStoreUser();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      axios.get<responseUsers[]>(HTTP_ENDPOINTS.user, {
        headers: { Authorization: "Bearer " + user?.token },
      }),
  });

  return { users: data?.data, isError, isLoading };
}
