import React, { useState } from 'react';

const CreatePost = ({ onPostSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const post = {
      title,
      description,
      author,
      date,
      tags: tags.split(',').map(tag => tag.trim()), // Convert comma-separated tags to array
    };
    
    if (onPostSubmit) {
      onPostSubmit(post); // Callback function for submitting post data
    }
    
    // Clear form fields
    setTitle('');
    setDescription('');
    setAuthor('');
    setDate('');
    setTags('');

    //Eventually add a "Post created *thumbs up* animation"
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required/>
      </label>
      
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required>
        </textarea>
      </label>
      
      <label>
        Author:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
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
      
      <label>
        Tags:
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="e.g. react, development, c++"
        />
      </label>
      
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
