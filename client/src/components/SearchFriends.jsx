import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { QUERY_USERS } from "../utils/queries";

const SearchFriends = ({ setFriends }) => {
  const [searchUsers, { data }] = useLazyQuery(QUERY_USERS);

  const handleSearch = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    try {
      await searchUsers({
        variables: { username },
      });
    } catch (error) {
      console.error("Error searching for friends:", error);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
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
        name="username"
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
    </form>
  );
};

export default SearchFriends;
