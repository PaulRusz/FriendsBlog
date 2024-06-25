import "../styles/Post.css";
import { useState } from "react";

function NewPost() {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  const handleTitleChange = (e) => {
    setNewPostTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setNewPostContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new post object
    const newPost = {
      id: posts.length + 1,
      title: newPostTitle,
      content: newPostContent,
    };

    // Update the posts state with the new post
    setPosts([...posts, newPost]);

    // Clear the input fields after submission
    setNewPostTitle("");
    setNewPostContent("");
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
            type="text"
            placeholder="Enter Title"
            value={newPostTitle}
            onChange={handleTitleChange}
          />

          <textarea
            placeholder="Enter Content"
            value={newPostContent}
            onChange={handleContentChange}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default NewPost;
