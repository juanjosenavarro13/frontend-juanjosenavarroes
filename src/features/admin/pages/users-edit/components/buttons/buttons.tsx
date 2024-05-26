import { HTTP_ENDPOINTS } from "@/core/constants/http-endpoints";
import { useStoreUser } from "@/features/auth/store/user/store-user";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Buttons({ id }: Readonly<{ id: string }>) {
  const { user } = useStoreUser();
  const navigate = useNavigate();
  const mutationResetPassword = useMutation({
    mutationFn: () => {
      return axios.put(
        HTTP_ENDPOINTS.resetPasswordById.replace("{{id}}", id),
        null,
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
    <div className="flex gap-3">
      <button
        onClick={() => {
          mutationResetPassword.mutate();
        }}
        disabled={mutationResetPassword.isPending}
        type="button"
        className="focus:ring-grey-300 w-auto rounded-lg bg-red-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-900 focus:outline-none focus:ring-4"
      >
        Reiniciar contraseña
      </button>
    </div>
  );
}
