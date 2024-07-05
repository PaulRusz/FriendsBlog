import "../styles/Profile.css";

import { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../utils/queries"

function Profile() {
  
  const { loading, data } = useQuery(QUERY_ME)
 const [user, setUser ] = useState()

//   useEffect(() => {

//     if(!loading) {

//       setUser (data.me) 
//   }

// }, []
// );
  
  return (
    <div className="profileContainer">
      <div className="myProfile">
        <h1>Profile</h1>
        <p>Welcome, {user.username}!</p>
        <p>Email: {user.email}</p>
        <p>Joined: {user.createdAt}</p>
      </div>

      <div className="postContainer">
        <h2>My Posts</h2>
        <ul>{/* posts will go here */}</ul>
      </div>

      <div>
        <h2 className="commentContainer">My Comments</h2>
        <ul>{/* comments will go here */}</ul>
      </div>
    </div>

  );
}

export default Profile;
