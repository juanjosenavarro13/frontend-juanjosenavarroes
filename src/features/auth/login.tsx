import { HTTP_ENDPOINTS } from "@/core/constants/http-endpoints";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginFormSchema } from "./schema/login.schema";
import { useStoreUser } from "./store/user/store-user";
import { Inputs, ResponseLogin } from "./types/login";
import { useTranslation } from "react-i18next";
import { SelectLanguage } from "@/components";

export default function Login() {
  const { t } = useTranslation("auth");
  const navigate = useNavigate();
  const { setUser } = useStoreUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<Inputs>({ resolver: zodResolver(LoginFormSchema) });

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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="relative w-96 rounded bg-white p-8 shadow-md">
        <div className="absolute right-2 top-2 text-center font-semibold">
          {t("language", { ns: "translation" })}:
          <SelectLanguage />
        </div>
        <h2 className="mb-4 text-center text-2xl font-bold">{t("login")}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              {t("email")}
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
              {t("password")}
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
              disabled={!isValid || mutation.isPending}
              type="submit"
              data-testid="btnSubmitLogin"
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none disabled:bg-blue-200"
            >
              {mutation.isPending
                ? t("loading", { ns: "translation" })
                : t("login")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
