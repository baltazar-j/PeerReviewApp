// import React from 'react';
// import BlogPost from './BlogPost.jsx';

// const BlogList = () => {
//   // Temp data
//   const blogList = [
//     {
//       id: 1,
//       title: 'How to Learn React Efficiently',
//       author: 'John Doe',
//       date: 'October 12, 2024',
//       tags: ['React', 'Coding'],
//       description: 'Learning React can be overwhelming, but with the right approach, it can become enjoyable...',
//     },
//     {
//       id: 2,
//       title: 'JavaScript Best Practices for 2024',
//       author: 'Jane Smith',
//       date: 'October 10, 2024',
//       tags: ['Javascript', 'Frontend'],
//       description: 'In 2024, it’s essential to write clean, maintainable JavaScript code. Here are some best practices...',
//     },
//     {
//         id: 3,
//         title: 'JavaScript Best Practices for 2024',
//         author: 'Jane Smith',
//         date: 'October 10, 2024',
//         description: 'In 2024, it’s essential to write clean, maintainable JavaScript code. Here are some best practices...',
//       },
//       {
//         id: 4,
//         title: 'JavaScript Best Practices for 2024',
//         author: 'Jane Smith',
//         date: 'October 10, 2024',
//         description: 'In 2024, it’s essential to write clean, maintainable JavaScript code. Here are some best practices...',
//       },
//       {
//         id: 5,
//         title: 'JavaScript Best Practices for 2024',
//         author: 'Jane Smith',
//         date: 'October 10, 2024',
//         description: 'In 2024, it’s essential to write clean, maintainable JavaScript code. Here are some best practices...',
//       },
//       {
//         id: 6,
//         title: 'JavaScript Best Practices for 2024',
//         author: 'Jane Smith',
//         date: 'October 10, 2024',
//         description: 'In 2024, it’s essential to write clean, maintainable JavaScript code. Here are some best practices...',
//       }
//   ];

//   return (
//     <div className="blog-list">
//       {blogList.map((post) => (
//         <BlogPost key={post.id} post={post} />
//       ))}
//     </div >
//   );
// };

// export default BlogList;
import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5050/api/posts');
        const data = await response.json();
        // Sort by createdAt and take the last 30 posts
        const sortedPosts = data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 30); // Take the latest 30
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

