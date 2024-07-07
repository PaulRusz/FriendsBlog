import { useQuery } from "@apollo/client";
import "../styles/Profile.css";

// import { useState } from "react";
import { QUERY_ME, QUERY_USER } from "../utils/queries";
import { useParams } from "react-router-dom";

function LoggedInUserProfile() {
  const { data } = useQuery(QUERY_ME);
  const user = data?.me;
  if (!user) {
    return <div className="profileContainer">Loading:</div>;
  }
  console.log(user);

  const handlePostClick = (e) => {
    e.currentTarget.classList.toggle("enlargedPost");
  };

  return (
    <div className="profileContainer">
      <div className="myProfile">
        <h1 className="profileHeader">Profile</h1>
        <p className="profileInfo">Welcome, {user.username}!</p>
        <p className="profileInfo">Email: {user.email}</p>
        <p className="profileInfo">Joined: {user.createdAt}</p>
      </div>

      <div className="postContainer">
        <h2 className="postTitle">My Posts</h2>
        <ul className="postList">
          {user.posts.map((post) => (
            <li key={post._id} className="postItem" onClick={handlePostClick}>
              <p>Title:</p>
              <span className="postTitle">{post.postTitle}</span>
              <p>Post:</p>
              <p className="postContent">{post.postText}</p>
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
// Promise.All happen at the same time (other promise to - all settled )**
function UserProfile({ id }) {
  const { data } = useQuery(QUERY_USER, { variables: { id } });
  const user = data?.user;
  if (!user) {
    return <div className="profileContainer">Loading:</div>;
  }
  console.log(user);

  return (
    <div className="profileContainer">
      <div className="myProfile">
        <h1>Profile</h1>
        <p>{user.username}</p>
      </div>

      <div className="postContainer">
        <h2>My Posts</h2>
        <ul>
          {user.posts.map((post) => (
            <li key={post._id} className="postTitleBox">
              {post.postTitle}
              <p className="postTextBox">{post.postText} </p>
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

function Profile() {
  const { id } = useParams();
  if (!id) {
    return <UserProfile id={id} />;
  } else {
    return <LoggedInUserProfile />;
  }
}

export default Profile;
