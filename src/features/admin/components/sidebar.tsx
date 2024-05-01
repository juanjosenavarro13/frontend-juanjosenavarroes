export function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <nav>
        <ul className="mt-6">
          <li className="cursor-pointer px-4 py-2 hover:bg-gray-700">Inicio</li>
          <li className="cursor-pointer px-4 py-2 hover:bg-gray-700">
            Usuarios
          </li>
          <li className="cursor-pointer px-4 py-2 hover:bg-gray-700">
            Portfolio
          </li>
          <li className="cursor-pointer px-4 py-2 hover:bg-gray-700">
            Ajustes
          </li>
        </ul>
      </nav>
    </div>
  );
}
