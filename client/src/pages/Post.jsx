import React, { useState } from "react";
import "../styles/Post.css";

function NewPost() {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [showNewPost, setShowNewPost] = useState(false);

  const handleTitleChange = (e) => {
    setNewPostTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setNewPostContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNewPost(true);
  };

  return (
    <div className="postContainer">
      <div className="postHeader">
        <h1>My Posts</h1>
        <p>Checkout my posts below</p>
      </div>

      <div className="newPostContainer">
        <h2>Create a New Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="titleContainer"
            type="text"
            placeholder="Enter Title"
            value={newPostTitle}
            onChange={handleTitleChange}
          />

          <textarea
            className="contentContainer"
            placeholder="Enter Content"
            value={newPostContent}
            onChange={handleContentChange}
          ></textarea>

          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>

      {showNewPost && (
        <div className="newPost">
          <h2>Post Title:</h2>
          <h3>{newPostTitle}</h3>
          <h2>Post Content:</h2>
          <p>{newPostContent}</p>
        </div>
      )}
    </div>
  );
}

export default NewPost;
