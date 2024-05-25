import { Dispatch, SetStateAction } from "react";

interface ButtonsProps {
  edit: boolean;
  setEdit: Dispatch<SetStateAction<boolean>>;
}
export function Buttons(props: Readonly<ButtonsProps>) {
  const { edit, setEdit } = props;
  if (!edit) {
    return (
      <div className="flex gap-3">
        <button
          onClick={() => {
            setEdit(true);
          }}
          type="button"
          className="focus:ring-grey-300 w-auto rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4"
        >
          Editar
        </button>
        <button
          onClick={() => {
            alert("por desarrollar");
          }}
          type="button"
          className="focus:ring-grey-300 w-auto rounded-lg bg-red-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-900 focus:outline-none focus:ring-4"
        >
          Reiniciar contraseña
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex gap-3">
        <button
          type="submit"
          onClick={() => {
            setEdit(false);
          }}
          className="focus:ring-grey-300 w-auto rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4"
        >
          Guardar
        </button>
        <button
          onClick={() => {
            setEdit(false);
          }}
          type="button"
          className="focus:ring-grey-300 w-auto rounded-lg bg-red-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-900 focus:outline-none focus:ring-4"
        >
          Cancelar
        </button>
      </div>
    );
  }
}
