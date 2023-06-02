import React from "react";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      <p>Videos Soon...stay Connected</p>
      <img
        src="https://as2.ftcdn.net/v2/jpg/04/75/50/13/1000_F_475501309_7E1uysMf46oZA5FOPwzuqIxgIKjxGsMN.jpg"
        alt="Work in progress"
        style={{ width: "500px", height: "auto", margin: "0 auto" }}
      />
    </div>
  );
}

export default Search;
