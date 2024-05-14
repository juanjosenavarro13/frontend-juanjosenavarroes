import { useParams } from "react-router-dom";
import { useFindUserById } from "../hooks/use-find-user-by-id";

export function UsersEdit() {
  const { id } = useParams();
  const { user } = useFindUserById(Number(id));
  console.log(user);

  return <p>users edit {id}</p>;
}
