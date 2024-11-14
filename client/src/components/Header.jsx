import React from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  let dynamicHeader;
  switch (location.pathname) {
    case "/":
      dynamicHeader = <h1>Velp - Home</h1>;
      break;
    case "/discover":
      dynamicHeader = <h1>Velp - Discover</h1>;
      break;
    case "/create":
      dynamicHeader = <h1>Create a Post</h1>;
      break;
    case "/profile":
      dynamicHeader = <h1>Your Profile</h1>;
      break;
    default:
      dynamicHeader = <h1>Default Header</h1>;
  }

  return (
    <header>
      {dynamicHeader}
    </header>
  );
}

export default Header;
