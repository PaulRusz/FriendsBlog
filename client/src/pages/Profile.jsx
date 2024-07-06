import { useQuery } from "@apollo/client";
import "../styles/Profile.css";

import { useState } from "react";
import { QUERY_ME } from "../utils/queries";

function Profile() {
  const { data } = useQuery(QUERY_ME);
  const user = data?.me;
  if (!user) {
    return <div className="profileContainer">Loading:</div>;
  }
  console.log(user);

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
        <ul>
          {user.posts.map((post) => (
            <li key={post._id}>
              {post.postTitle}
              <p>{post.postText} </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="commentContainer">My Comments</h2>
        <ul>{/* comments will go here */}</ul>
      </div>
    </div>
  );
}

export default Profile;
