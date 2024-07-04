import React, { useState } from "react";
import "../styles/Post.css";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";

function NewPost() {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [createPost, { data }] = useMutation(ADD_POST);

  const handleTitleChange = (e) => {
    setNewPostTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setNewPostContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost({
        variables: {
          title: newPostTitle,
          text: newPostContent,
        },
      });
    } catch (error) {
      console.log(error);
    }
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

      {data?.addPost && (
        <div className="newPost">
          <h2>Post Title:</h2>
          <div className="postTitle">
            <h3>{data.addPost.postTitle}</h3>
          </div>

          <h2>Post Content:</h2>
          <div className="postContent">
            <p>{data.addPost.postText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewPost;
