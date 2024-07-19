import { HTTP_ENDPOINTS } from "@/core/constants/http-endpoints";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormSchema } from "../../schema/login.schema";
import { useStoreUser } from "../../store/user/store-user";
import { Inputs, ResponseLogin } from "../../types/login";

export function useLogin() {
  const { setUser, user } = useStoreUser();
  const navigate = useNavigate();
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
      setUser({
        id: response.data.user.id,
        email: response.data.user.email,
        token: response.data.access_token,
      });
    },
    onError: () => reset(),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    if (user?.email) {
      navigate({ to: "/admin" });
    }
  }, [user, navigate]);

  return { onSubmit, register, handleSubmit, isValid, mutation };
}
