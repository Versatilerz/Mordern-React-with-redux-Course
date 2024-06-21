import useThunk from "../hooks/use-thunk";
import { deleteUser } from "../store";
import { User } from "../store/slices/usersSlice";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";

type Props = {
  user: User;
};

const UsersListItem: React.FC<Props> = ({ user }) => {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const handleClick = () => {
    doDeleteUser(user);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <Button onClick={handleClick} loading={isLoading}>
          <GoTrashcan />
        </Button>
        {error && <div>Error deleting user.</div>}
        {user.name}
      </div>
    </div>
  );
};

export default UsersListItem;
