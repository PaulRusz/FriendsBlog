import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { QUERY_USERS } from "../utils/queries";
import "../styles/Friends.css";

const FriendsPage = () => {
  const [searchUsers, { data }] = useLazyQuery(QUERY_USERS);
  const friends = data?.users; // data.users is an array of users

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
    <div className="container">
      <div className="header2">
        <h1>Friends Page</h1>
      </div>
      <br></br>
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
      {/* Render the SearchFriends component */}
      <div className="container2">
        {friends?.map((friend) => (
          <div key={friend._id}>
            <img src={friend.profilePic} alt={friend.name} />
            <a href={`/profile/${friend.username}`}>{friend.username}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;

// import react from "react";
// import { useState, useEffect } from "react";
// import "../styles/Friends.css";

// const FriendsPage = () => {
//   const [friends, setFriends] = useState([]);

//   // useEffect(() => {
//   //   const retrieveFriends = async () => {
//   //     try {
//   //       // ADD API Endpoint
//   //       const response = await fetch(
//   //         "API_ENDPOINT_HERE hhtps://api/example.com"
//   //       );
//   //       if (!response.ok) {
//   //         throw new Error("Failed to fetch data");
//   //       }
//   //       const data = await response.json();
//   //       setFriends(data);
//   //     } catch (error) {
//   //       console.error("Error fetching friends:", error);
//   //     }
//   //   };

//   //   retrieveFriends();
//   // }, []);

//   console.log("this is friends array ==> ", friends)

//   return (
//     <div>
//       <div className="header2">
//         <h1>Friends Page</h1>
//       </div>

//       <div className="container">
//         {friends.map((friend) => (
//           <div key={friend.id}>
//             <img src={friend.profilePic} alt={friend.name} />
//             <a href={`/profile/${friend.username}`}>{friend.name}</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FriendsPage;
