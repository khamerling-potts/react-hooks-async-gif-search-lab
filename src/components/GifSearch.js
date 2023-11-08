import React, { useState } from "react";

function GifSearch({ onSearch }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(input);
  }

  return (
    <form style={{ float: "right" }} onSubmit={handleSubmit}>
      <label htmlFor="gifinput">Enter a search term:</label>
      <input
        type="text"
        id="gifinput"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      ></input>
      <button type="submit">Search gifs</button>
    </form>
  );
}

export default GifSearch;
