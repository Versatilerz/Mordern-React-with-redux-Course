import { createRandomSong } from "../data";
import { addSong } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const SongPlaylist = () => {
  const dispatch = useAppDispatch();
  // To Do:
  // Get list of songs
  const songPlaylist: string[] = useAppSelector((state) => state.songs);

  const handleSongAdd = (song: string) => {
    dispatch(addSong(song));
  };
  const handleSongRemove = (song: string) => {
    // To Do:
    // Remove song from list of songs
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
};

export default SongPlaylist;
