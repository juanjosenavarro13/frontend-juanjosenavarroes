import { Dispatch, SetStateAction } from "react";
import { Button } from "./button";

interface PaginateProps {
  page: number;
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
}
export function Paginate(props: Readonly<PaginateProps>) {
  const { page, setPage, totalPages } = props;
  return (
    <div className="flex items-center justify-between pt-4">
      <Button
        text="Anterior"
        onClick={() => {
          setPage((prevPage) => (prevPage !== 1 ? prevPage - 1 : 1));
        }}
      />
      <p className="border-gray-800 text-xl font-bold">{page}</p>
      <Button
        text="Siguiente"
        onClick={() => {
          setPage((prevPage) =>
            prevPage < totalPages ? prevPage + 1 : prevPage,
          );
        }}
      />
    </div>
  );
}
