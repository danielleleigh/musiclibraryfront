import SongList from "../SongList/SongList";

export default function Search() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h3 className="title">SONG LIST</h3>
      <input
        type="text"
        placeholder="Search Songs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <SongList songs={songs} />
    </div>
  );
}
