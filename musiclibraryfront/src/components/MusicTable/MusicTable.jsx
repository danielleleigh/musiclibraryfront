import React from "react";

function MusicTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
        {props.music.map((song) => (
          <tr>
            <td>{song.id}</td>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.genre}</td>
            <td>{song.release_date}</td>
            <td>
              <button onClick={() => this.props.deleteSong(this.props.song.id)}>
                {" "}
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// deleteSong = (songID, event) => {
//   console.log(songID);
//   this.handleSubmit(event);
//   axios
//     .delete(`http://localhost:8000/music/${songID}/`)
//     .then((response) => console.log("Deleted", response));

export default MusicTable;
