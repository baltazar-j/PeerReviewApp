import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post" style={{ borderBottomStyle: 'solid', borderColor: '#393939', padding: '1.5rem', paddingBottom:'2rem'}}>
      <div className="post-content">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-excerpt">{post.description}</p>
        <div className="post-meta">
          <span className="post-author">By {post.author}  </span>
          <span className="post-date">{post.date}</span><br/>
          {/* <span className="post-tags">{post.tags}</span> */}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
