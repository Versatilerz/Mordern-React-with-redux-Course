import { User } from "../store/slices/usersSlice";

type Props = {
  user: User;
};

const UsersListItem: React.FC<Props> = ({ user }) => {
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
      </div>
    </div>
  );
};

export default UsersListItem;
