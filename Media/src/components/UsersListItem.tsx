import useThunk from "../hooks/use-thunk";
import { deleteUser } from "../store";
import { User } from "../store/slices/usersSlice";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpendablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

type Props = {
  user: User;
};

const UsersListItem: React.FC<Props> = ({ user }) => {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const handleClick = () => {
    doDeleteUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" onClick={handleClick} loading={isLoading}>
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting user.</div>}
      {user.name}
    </>
  );

  return (
    <ExpendablePanel header={header}>
      <AlbumsList user={user} />
    </ExpendablePanel>
  );
};

export default UsersListItem;
