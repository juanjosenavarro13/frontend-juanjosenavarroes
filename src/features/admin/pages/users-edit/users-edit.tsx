import { Loading } from "@/features/loading/loading";
import { useParams } from "react-router-dom";
import { useFindUserById } from "../hooks/use-find-user-by-id";
import { Buttons } from "./components";

export function UsersEdit() {
  const { id } = useParams();
  const { user, isError, isLoading } = useFindUserById(Number(id));

  const loading = isLoading || isError || !id;
  if (loading)
    return (
      <div className="flex h-full items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <div>
      <div className="mb-6 grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={user?.email}
            disabled
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-500 focus:ring-gray-500"
          />
        </div>
      </div>

      <Buttons id={id} />
    </div>
  );
}
