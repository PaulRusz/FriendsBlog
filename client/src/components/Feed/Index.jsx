import { useEffect, useState } from 'react'

import './Index.css'
import BlogPost from '../BlogPost/Index'

const Feed = () => {
  const [Posts, SetPosts] = useState([]);

  useEffect(() => {
    // Fetch Data From An API 
    const FetchPosts = async () => {
      const Response = await fetch('https://api.example.com/posts');
      const Data = await Response.json();
      SetPosts(Data);
    };
    FetchPosts();
  }, []);

  return (
    <div className='Feed'>
      {Posts.map(Post => (
        <BlogPost
          key={Post.id}
          title={Post.title}
          author={Post.author}
          content={Post.content}
          date={Post.date}
        />
      ))}
    </div>
  );
}

export default Feed;