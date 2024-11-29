import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import BlogPost from './BlogPost';

const MyPosts = () => {
  const { user, isAuthenticated } = useAuth0();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchPosts = async () => {
      try {
        if (user && user.sub) {
          const response = await fetch(`http://localhost:5050/api/posts/user/${user.sub}`);
          const data = await response.json();
          
          const sortedPosts = data
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 30);
          
          setPosts(sortedPosts);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [isAuthenticated, user]);

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

export default MyPosts;
