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

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Response is not in JSON format");
      }

      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error("Error searching for friends:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <input
        type="text"
        placeholder="Search for Friends"
        value={searchQuery}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          flex: 1,
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchFriends;
