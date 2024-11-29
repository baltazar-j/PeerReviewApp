import { useState, useEffect } from 'react';
import BlogPost from './BlogPost';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  
  
  useEffect(() => {
    
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5050/api/posts');
        const data = await response.json();
        const sortedPosts = data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 30);
        setPosts(sortedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="blog-list">
      {posts.length > 0 ? (
        posts.map((post) => <BlogPost key={post._id} post={post} />)
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default BlogList;

