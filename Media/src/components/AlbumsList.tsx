import { useFetchAlbumsQuery } from "../store";
import { User } from "../store/slices/usersSlice";
import Skeleton from "./Skeleton";
import ExpendablePanel from "./ExpandablePanel";
import Button from "./Button";

type Props = {
  user: User;
};

type Album = {
  id?: string;
  title: string;
  userId: string;
};

const AlbumsList: React.FC<Props> = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map((album: Album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpendablePanel key={album.id} header={header}>
          List of photos in the album
        </ExpendablePanel>
      );
    });
  }

  return (
    <div>
      <div>Albums for {user.name}</div>
      <div>{content}</div>
    </div>
  );
};
export default AlbumsList;
