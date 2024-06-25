import React, { useState } from "react";

const SearchFriends = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `/api/search-friends?username=${searchQuery}`
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error("Error searching for friends:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for Friends"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((friend) => (
          <li key={friend.id}>{friend.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFriends;
