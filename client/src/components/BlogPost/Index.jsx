import './Index.css'

const BlogPost = ({ title, author, content, date }) => {
  return (
    <div className='Blog-Post'>
      <h2>{title}</h2>
      <p>by {author} on {date}</p>
      <div>{content}</div>
    </div>
  );
}

export default BlogPost;