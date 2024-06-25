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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new post object
    const newPost = {
      id: posts.length + 1,
      title: newPostTitle,
      content: newPostContent,
      image: selectedImage,
    };

    // Update the posts state with the new post
    setPosts([...posts, newPost]);

    // Clear the input fields after submission
    setNewPostTitle("");
    setNewPostContent("");
    setSelectedImage(null);
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

          <input
            className="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          <div></div>

          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>

      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {post.image && (
            <img src={URL.createObjectURL(post.image)} alt="Uploaded" />
          )}
        </div>
      ))}
    </div>
  );
}

export default NewPost;
