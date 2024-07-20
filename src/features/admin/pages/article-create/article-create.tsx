import { HTTP_ENDPOINTS } from "@/core/constants/http-endpoints";
import { useStoreUser } from "@/features/auth/store/user/store-user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Navigate } from "@tanstack/react-router";
import axios from "axios";
import { lazy, Suspense } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const QuillEditor = lazy(() => import("@/core/components/editor/editor"));
const inputsSchema = z.object({
  title: z.string().min(1, { message: "titulo vacio" }),
  body: z.string().min(1, { message: "Body vacio" }),
});

type Inputs = z.infer<typeof inputsSchema>;

export function ArticleCreate() {
  const { user } = useStoreUser();
  const { register, handleSubmit, setValue } = useForm<Inputs>({
    resolver: zodResolver(inputsSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => mutation.mutate(data);

  const mutation = useMutation({
    mutationFn: (inputs: Inputs) => {
      return axios.post(
        HTTP_ENDPOINTS.article,
        { ...inputs, userId: user?.id },
        {
          headers: { Authorization: "Bearer " + user?.token },
        },
      );
    },
    onSuccess: () => {
      Navigate({ to: "/admin/articles" });
    },
  });

  return (
    <div>
      <form className="mb-6 grid gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Título:
          </label>
          <input
            {...register("title")}
            type="text"
            name="title"
            id="title"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-500 focus:ring-gray-500"
          />
        </div>
        <div className="overflow-hidden">
          <label
            htmlFor="body"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Contenido:
          </label>
          <Suspense fallback={<div>Loading...</div>}>
            <QuillEditor
              value=""
              onChange={(data) => {
                setValue("body", data);
              }}
            />
          </Suspense>
        </div>
        <button
          className="rounded bg-gray-800 p-2 text-white hover:bg-gray-900"
          type="submit"
        >
          Crear
        </button>
      </form>
    </div>
  );
}
