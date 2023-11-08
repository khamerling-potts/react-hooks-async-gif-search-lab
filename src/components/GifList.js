import React from "react";
import GifSearch from "./GifSearch";

function GifList({ gifs, onSearch }) {
  const gifList = gifs.map((gif) => (
    <li key={gif.id}>
      <img src={gif.images.original.url} alt="gif" />
    </li>
  ));
  return (
    <div>
      <GifSearch onSearch={onSearch} />
      <ul>{gifList}</ul>
    </div>
  );
}

export default GifList;
