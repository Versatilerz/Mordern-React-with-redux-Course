import { User } from "../store/slices/usersSlice";

type Props = {
  user: User;
};

const AlbumsList: React.FC<Props> = ({ user }) => {
  return <div>Albums for {user.name}</div>;
};
export default AlbumsList;
