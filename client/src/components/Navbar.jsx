import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';


const Navbar = () => {
  let colour = "#d8d8d8";
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
          <Icon name="home" size="2.5rem" color={colour} />
          </Link>
        </li>
        <li>
          <Link to="/discover">
          <Icon name="discover" size="2.5rem" color={colour} />
          </Link>
        </li>
        <li>
          <Link to="/create">
          <Icon name="create" size="2.5rem" color={colour} />
          </Link>
        </li>
        <li>
          <Link to="/profile">
          <Icon name="profile" size="2.5rem" color={colour} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
