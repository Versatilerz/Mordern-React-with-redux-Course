import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchUsers } from "../store";
import Skeleton from "./Skeleton";

type Data = {
  id: number;
  name: string;
};

const UsersList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, data, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }

  if (error) {
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

  return <div>{renderedUsers}</div>;
};
export default UsersList;
