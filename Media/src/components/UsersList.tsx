import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { fetchUsers } from "../store";

const UsersList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return "users list";
};
export default UsersList;
