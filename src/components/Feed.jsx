import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from an API 
    const fetchPosts = async () => {
      const response = await fetch('https://api.example.com/posts'); // Replace with API...
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="feed">
      {posts.map(post => (
        <BlogPost
          key={post.id}
          title={post.title}
          author={post.author}
          content={post.content}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default Feed;