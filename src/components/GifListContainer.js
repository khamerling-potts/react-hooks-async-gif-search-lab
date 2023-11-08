import React, { useState } from "react";
import GifList from "./GifList";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  console.log(gifs);

  function handleSearch(word) {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${word}&api_key=${"8zzVOhc5TdwhPqtoWoaGDQ0afKW0UeUC"}&rating=g&limit=3`
    )
      .then((r) => r.json())
      .then((data) => setGifs(data.data));
  }

  return (
    <div>
      <GifList gifs={gifs} onSearch={handleSearch} />
    </div>
  );
}

export default GifListContainer;
