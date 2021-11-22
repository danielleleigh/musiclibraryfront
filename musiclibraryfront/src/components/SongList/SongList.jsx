import React from "react";

export default function SongList({ songs }) {
  return (
    <div>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            Title:
            <span>{song.title}</span>
            Artist:
            <span>{song.artist}</span>
            Album:
            <span>{song.album}</span>
            Genre:
            <span>{song.genre}</span>
            Release Date:
            <span>{song.release_date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
