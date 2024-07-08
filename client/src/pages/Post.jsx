import { useState } from "react";
import { useMutation } from "@apollo/client";

import "./Post.css";
import { ADD_POST } from "../utils/mutations";

function NewPost() {
  const [NewPostTitle, SetNewPostTitle] = useState("");
  const [NewPostContent, SetNewPostContent] = useState("");
  const [CreatePost, { data }] = useMutation(ADD_POST);

  const HandleTitleChange = (Event) => {
    SetNewPostTitle(Event.target.value);
  };

  const HandleContentChange = (Event) => {
    SetNewPostContent(Event.target.value);
  };

  const HandleSubmit = async (Event) => {
    Event.preventDefault();
    try {
      await CreatePost({
        variables: {
          title: NewPostTitle,
          text: NewPostContent,
        },
      });
    } catch (Error) {
      console.log(Error);
    }
  };

  const HandlePostClick = (Event) => {
    Event.currentTarget.classList.toggle("enlargedPost");
  };

  return (
    <div className="Post-Container">
      <div className="Post-Header">
        <h1 className="Post-Page-Heading">Create a New Post</h1>
        <p className="Post-Paragraph"></p>
      </div>

      <div className="New-Post-Container">
        <form onSubmit={HandleSubmit}>
          <input
            className="Post-Title-Container"
            type="text"
            placeholder="Enter Title"
            value={NewPostTitle}
            onChange={HandleTitleChange}
          />

          <textarea
            className="Post-Content-Container"
            placeholder="Enter Content"
            value={NewPostContent}
            onChange={HandleContentChange}
          ></textarea>

          <button className="Submit-Post-Button" type="submit">
            Submit
          </button>
        </form>
      </div>

      {data?.addPost && (
        <div className="New-Post" onClick={HandlePostClick}>
          <div className="New-Post-Border">
            <div className="Post-Title-Heading">Post Title:</div>
            <div className="Post-Title">
              <h3 className="Post-Title">{NewPostTitle}</h3>
            </div>

            <div className="Line-Separator"></div>

            <div className="Post-Content">
              <h2 className="Post-Content-Heading">Post Content:</h2>
              <p className="Post-Paragraph">{NewPostContent}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewPost;
