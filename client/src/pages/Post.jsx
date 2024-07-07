import { useState } from 'react'
import { useMutation } from '@apollo/client'

import './Post.css'
import { ADD_POST } from '../utils/mutations'

function NewPost() {
  const [NewPostTitle, SetNewPostTitle] = useState('');
  const [NewPostContent, SetNewPostContent] = useState('');
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
    Event.currentTarget.classList.toggle('enlargedPost');
  };

  return (
    <div className='Post-Container'>
      <div className='Post-Header'>
        <h1 className='Post-Page-Heading'>My Posts</h1>
        <p className='Post-Paragraph'>Checkout my posts below</p>
      </div>

      <div className='New-Post-Container'>
        <h2>Create a New Post</h2>
        <form onSubmit={HandleSubmit}>
          <input
            className='Title-Container'
            type='text'
            placeholder='Enter Title'
            value={NewPostTitle}
            onChange={HandleTitleChange}
          />

          <textarea
            className='Content-Container'
            placeholder='Enter Content'
            value={NewPostContent}
            onChange={HandleContentChange}
          ></textarea>

          <button className='Submit-Post-Button' type='submit'>
            Submit
          </button>
        </form>
      </div>

      {data?.addPost && (
        <div className='New-Post' onClick={HandlePostClick}>
          <h2 className='Post-Title-Heading'>Post Title:</h2>
          <div className='Post-Title'>
            <h3 className='New-Post-Title'>{NewPostTitle}</h3>
          </div>

          <h2>Post Content:</h2>
          <div className='Post-Content'>
            <p className='Post-Paragraph New-Post-Paragraph'>{NewPostContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewPost;