import { useState, useEffect } from 'react';
import axios from 'axios';
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
        console.log('Username:', username);
        // Query the backend to find the user by username using axios
        const userResponse = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/users/username/${username}`);
        const userData = userResponse.data;

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

  // Fetch posts once the userId is set
  useEffect(() => {
    if (!userId) return;
    console.log('User ID:', userId);

    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/posts/author/${userId}/posts`);
        const data = response.data;

        // Sort posts by creation date (newest first)
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