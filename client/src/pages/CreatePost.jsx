import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/CreatePost.css';

const CreatePost = ({ onPostSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  // const [tags, setTags] = useState('');

  useEffect(() => {
    // Get user from localStorage
    const savedUser = localStorage.getItem('saved_current_user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setAuthor(user.username);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!author) {
      console.error('Author is required!');
      return;
    }

    const post = {
      title,
      description,
      author,
      date: date || new Date(),
      // tags: tags.split(',').map(tag => tag.trim()),
    };

    console.log('Post Data:', post);

    try {
      // Send the post data to the backend
      await axios.post('http://localhost:5050/api/posts', post);
      console.log('Post created successfully');

      setTitle('');
      setDescription('');
      setDate('');
      // setTags('');

      if (onPostSubmit) {
        onPostSubmit(post);
      }

    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-post-form">
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>

      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>

      {/* <label>
        Tags:
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="e.g. react, development, c++"
        />
      </label> */}

      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
