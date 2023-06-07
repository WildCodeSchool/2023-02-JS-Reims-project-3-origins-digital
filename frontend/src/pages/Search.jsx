import React from "react";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      <p>Videos Soon...stay Connected</p>
    </div>
  );
}

export default Search;
