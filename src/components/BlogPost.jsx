import React from 'react';

const BlogPost = ({ title, author, content, date }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>by {author} on {date}</p>
      <div>{content}</div>
    </div>
  );
};

export default BlogPost;