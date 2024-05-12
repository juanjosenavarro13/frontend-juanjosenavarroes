import { useMutation } from "@tanstack/react-query";
import { Inputs, ResponseLogin } from "../../types/login";
import axios from "axios";
import { HTTP_ENDPOINTS } from "@/core/constants/http-endpoints";
import { useStoreUser } from "../../store/user/store-user";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "../../schema/login.schema";

export function useLogin() {
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

  return { onSubmit, register, handleSubmit, isValid, mutation };
}
