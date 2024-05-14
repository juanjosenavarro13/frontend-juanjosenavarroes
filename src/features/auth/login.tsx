import { useLogin } from "./hooks";

export default function Login() {
  const { register, handleSubmit, onSubmit, isValid, mutation } = useLogin();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="text-3xl xl:hidden">Resolución inadecuada</div>
      <div className="relative hidden w-96 rounded bg-white p-8 shadow-md xl:block">
        <h2 className="mb-4 text-center text-2xl font-bold">Iniciar Sesión</h2>
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
              disabled={!isValid || mutation.isPending}
              type="submit"
              data-testid="btnSubmitLogin"
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none disabled:bg-blue-200"
            >
              {mutation.isPending ? "Cargando..." : "Iniciar sesión"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
