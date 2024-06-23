import { useFetchAlbumsQuery } from "../store";
import { User } from "../store/slices/usersSlice";

type Props = {
  user: User;
};

const AlbumsList: React.FC<Props> = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  console.log(data, error, isLoading);
  return <div>Albums for {user.name}</div>;
};
export default AlbumsList;
