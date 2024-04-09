import { HTTP_ENDPOINTS } from "@/core/constants/http-endpoints";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginFormSchema } from "./schema/login.schema";
import { useStoreUser } from "./store/user/store-user";
import { Inputs, ResponseLogin } from "./types/login";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useStoreUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<Inputs>({ resolver: zodResolver(LoginFormSchema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutation.mutate(data);
  };

  const mutation = useMutation({
    mutationFn: (login: Inputs) => {
      return axios.post<ResponseLogin>(HTTP_ENDPOINTS.login, login);
    },
    onSuccess: (response) => {
      setUser(response.data.user);
      navigate("/admin");
    },
    onError: () => reset(),
  });

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="w-96 rounded bg-white p-8 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-bold">Iniciar sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Correo electrónico
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              data-testid="email"
              name="email"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Contraseña
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              data-testid="password"
              name="password"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              disabled={!isValid}
              type="submit"
              data-testid="btnSubmitLogin"
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none disabled:bg-blue-200"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
