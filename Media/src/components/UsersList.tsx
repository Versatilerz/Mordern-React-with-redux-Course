import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

const UsersList = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.users);

  useEffect(() => {
    setIsLoadingUsers(true);
    // unwrap is to make sure .then.catch works in the regular promise way.. if you dont use unwrap it always call .then on fulfilled or rejected.
    dispatch(fetchUsers())
      .unwrap()
      .then(() => {})
      .catch((error) => setLoadingUsersError(error))
      .finally(() => setIsLoadingUsers(false));
  }, []);

  const handleUserAdd = () => {
    dispatch(addUser());
  };

  if (isLoadingUsers) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }

  if (loadingUsersError) {
    return <div>Error fetching data...</div>;
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleUserAdd}>+ Add User</Button>
      </div>
      {renderedUsers}
    </div>
  );
};
export default UsersList;
