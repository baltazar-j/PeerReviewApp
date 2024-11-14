import homeIcon from '../assets/icons/home.svg';
import discoverIcon from '../assets/icons/search.svg';
import createIcon from '../assets/icons/create.svg';
import profileIcon from '../assets/icons/profile-circle.svg';

const Icon = ({ name, size = '5rem', color = '#d8d8d8' }) => {
  const icons = {
    home: homeIcon,
    discover: discoverIcon,
    create: createIcon,
    profile: profileIcon,
  };

  return (
    <img
      src={icons[name]}
      alt={name}
      style={{
        width: size,
        height: size,
        filter: color === '#d8d8d8' ? 'brightness(0) invert(1)' : `hue-rotate(${color})`,
      }}
    />
  );
};

export default Icon;

