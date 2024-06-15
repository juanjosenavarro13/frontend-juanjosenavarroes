import { HTTP_ENDPOINTS } from "@/core/constants/http-endpoints";
import { useStoreUser } from "@/features/auth/store/user/store-user";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export function UsersDelete() {
  const { id } = useParams();
  const { user } = useStoreUser();
  const navigate = useNavigate();
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
      navigate("/admin/users");
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
