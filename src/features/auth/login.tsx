export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="w-96 rounded bg-white p-8 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-bold">Iniciar sesión</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
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
              type="password"
              id="password"
              name="password"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            >
              Iniciar sesión
            </button>
            <a
              href="#"
              className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
