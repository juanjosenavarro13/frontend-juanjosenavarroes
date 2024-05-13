import { Loading } from "@/features/loading/loading";
import { useGetUsers } from "./hooks/use-get-user";
import styles from "./admin-users.module.css";

export function AdminUsers() {
  const { users, isError, isLoading } = useGetUsers();

  if (isLoading || isError)
    return (
      <div className={styles.container_loading}>
        <Loading />
      </div>
    );

  return (
    <h1>
      {users?.map((user) => {
        return <p key={user.id}>{user.email}</p>;
      })}
    </h1>
  );
}
