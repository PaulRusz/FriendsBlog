import "../styles/Profile.css";

import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({});

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
