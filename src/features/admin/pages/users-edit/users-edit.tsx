import { useParams } from "react-router-dom";
import { useFindUserById } from "../hooks/use-find-user-by-id";
import { Buttons } from "./components";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Loading } from "@/features/loading/loading";
import { useState } from "react";

type Inputs = {
  email: string;
};

const editUserSchema = z.object({
  email: z.string().min(1).email(),
});

export function UsersEdit() {
  const { id } = useParams();
  const [edit, setEdit] = useState<boolean>(false);
  const { user, isError, isLoading } = useFindUserById(Number(id));
  const { register, handleSubmit } = useForm<Inputs>({
    resolver: zodResolver(editUserSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("submit", { data });
  };

  const loading = isLoading || isError;
  if (loading)
    return (
      <div className="flex h-full items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6 grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Email:
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            defaultValue={user?.email}
            disabled={!edit}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-500 focus:ring-gray-500"
          />
        </div>
      </div>

      <Buttons edit={edit} setEdit={setEdit} />
    </form>
  );
}
