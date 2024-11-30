import { useState, useEffect } from 'react';
import BlogPost from './BlogPost';

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(null);

  // Fetch the userId when the component mounts
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const savedUser = JSON.parse(localStorage.getItem('saved_current_user'));
        if (!savedUser || !savedUser.username) {
          console.log('No username found in localStorage');
          return;
        }

        const username = savedUser.username;

        // Query to find the user by username
        const userResponse = await fetch(`http://localhost:5050/api/users/username/${username}`);
        const userData = await userResponse.json();

        if (userData && userData._id) {
          setUserId(userData._id);
        } else {
          console.log('User not found');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    if (!userId) return;

    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://localhost:5050/api/posts/author/${userId}/posts`);
        const data = await response.json();

        const sortedPosts = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPosts(sortedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [userId]);

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