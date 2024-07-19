import { HTTP_ENDPOINTS } from "@/core/constants/http-endpoints";
import { useStoreUser } from "@/features/auth/store/user/store-user";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "@tanstack/react-router";
import axios from "axios";

export function UsersDelete() {
  const { id } = useParams({
    from: "/_authenticated/_adminLayout/admin/users/delete/$id",
  });
  const navigate = useNavigate();
  const { user } = useStoreUser();
  const mutation = useMutation({
    mutationFn: () => {
      return axios.delete(
        HTTP_ENDPOINTS.deleteUserById.replace("{{id}}", id ?? "0"),
        {
          headers: { Authorization: "Bearer " + user?.token },
        },
      );
    },
    onSuccess: () => {
      navigate({ to: "/admin/users" });
    },
  });

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-2xl">¿seguro que quieres eliminar el usuario {id}?</p>
      <button
        onClick={() => {
          mutation.mutate();
        }}
        className="rounded bg-gray-800 p-2 text-white hover:bg-gray-900"
        disabled={mutation.isPending}
      >
        Eliminar
      </button>

      {mutation.isError && (
        <p>Error al eliminar el usuario "{mutation.error.message}"</p>
      )}
    </div>
  );
}
