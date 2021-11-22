import React from "react";

const SongList = ({ songList = [music] }) => {
  return (
    <>
      {songList.map((data, index) => {
        if (data) {
          return (
            <div key={data.music}>
              <h1>{data.music.song}</h1>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default SongList;
